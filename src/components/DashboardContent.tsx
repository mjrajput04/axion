"use client";

import React, { useState, useEffect } from "react";
import { User, LogOut, LayoutDashboard, Settings, Bell, CreditCard, Loader2 } from "lucide-react";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { signOut } from "next-auth/react";

export function DashboardContent({ user }: { user: any }) {
  const [subscription, setSubscription] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const res = await fetch("/api/user/subscription");
      const data = await res.json();
      setSubscription(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#d4af37]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373]">Verifying Entitlements...</p>
      </div>
    );
  }

  if (!subscription?.isSubscribed) {
    return (
      <div className="py-12">
        <SubscriptionPlans onComplete={fetchSubscription} />
      </div>
    );
  }

  const { subscriber } = subscription;

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Dashboard</h1>
          <p className="text-[#737373] font-medium">Welcome back, {user?.name}. Your {subscriber?.planTier} tier is active.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-[#d4af37]/30 transition-all">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <LayoutDashboard className="w-12 h-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Account Status</p>
          <h3 className="text-2xl font-bold text-[#e5e5e5] uppercase tracking-wider">{subscriber?.status}</h3>
          <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <CreditCard className="w-12 h-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Current Plan</p>
          <h3 className="text-2xl font-bold text-[#e5e5e5] uppercase tracking-wider">{subscriber?.planTier}</h3>
          <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
        </div>

        <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Bell className="w-12 h-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Renewal Date</p>
          <h3 className="text-2xl font-bold text-[#e5e5e5]">
            {subscriber?.currentPeriodEnd ? new Date(subscriber.currentPeriodEnd).toLocaleDateString() : 'N/A'}
          </h3>
          <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Quotas Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriber?.usage?.map((quota: any, idx: number) => (
          <div key={idx} className="bg-[#111] border border-[#2a2a2a] p-6 rounded-2xl space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#737373]">{quota.metric.replace('_', ' ')}</p>
              <p className="text-[10px] font-bold text-[#e5e5e5]">{quota.current} / {quota.limit}</p>
            </div>
            <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#d4af37] transition-all" 
                style={{ width: `${Math.min((quota.current / quota.limit) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight border-b border-[#2a2a2a] pb-4">Recent Activity</h2>
          <div className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
            <p className="text-[#525252] text-sm uppercase tracking-widest font-bold">No recent activity to show</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight border-b border-[#2a2a2a] pb-4">Account Settings</h2>
          <div className="space-y-4">
            {[
              { icon: <User className="w-4 h-4" />, label: "Profile Information" },
              { icon: <Settings className="w-4 h-4" />, label: "Privacy & Security" },
              { icon: <CreditCard className="w-4 h-4" />, label: "Billing & Subscription" },
            ].map((item, idx) => (
              <button key={idx} className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#2a2a2a] rounded-2xl hover:bg-[#161616] hover:border-[#d4af37]/20 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="text-[#737373] group-hover:text-[#d4af37] transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
                <span className="text-[#404040] group-hover:text-[#d4af37] transition-all transform group-hover:translate-x-1">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
