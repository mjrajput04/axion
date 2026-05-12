"use client";

import React, { useState, useEffect } from "react";
import { Bell, ShieldAlert, Clock, Loader2 } from "lucide-react";
import { LockedFeature } from "@/components/LockedFeature";

export default function AlertsPage() {
  const [loading, setLoading] = useState(true);
  const [tier, setTier] = useState("free");

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const res = await fetch("/api/user/subscription");
      const data = await res.json();
      setTier(data.subscriber?.planTier || "free");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const isLocked = tier === "free";

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#d4af37]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373]">Listening for Amendments...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Real-time Amendment Alerts</h1>
        <p className="text-[#737373] font-medium">Instant notifications for statutory law changes and compliance updates. (Ref: Doc 16 §11)</p>
      </div>

      <LockedFeature 
        featureId="realtime_amendments"
        name="Amendment Intel Stream"
        description="Receive priority alerts the moment statutory changes are gazetted. Our agents monitor amendments across all 28 states and 8 union territories."
        isLocked={isLocked}
      >
        <div className="space-y-6">
          {[
            { title: "Minimum Wage Revision - Karnataka", date: "2 hours ago", priority: "High" },
            { title: "PF Contribution Limit Update", date: "1 day ago", priority: "Critical" },
            { title: "New Labor Code Notification", date: "3 days ago", priority: "Medium" },
          ].map((alert, idx) => (
            <div key={idx} className="bg-[#111] border border-[#2a2a2a] p-8 rounded-[32px] flex items-center justify-between group hover:border-[#d4af37]/30 transition-all">
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                  alert.priority === 'Critical' ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-[#1a1a1a] border-[#2a2a2a] text-[#d4af37]'
                }`}>
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e5e5e5]">{alert.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#525252] flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {alert.date}
                    </span>
                    <span className={`text-[9px] font-bold uppercase tracking-widest ${
                      alert.priority === 'Critical' ? 'text-red-500' : 'text-[#737373]'
                    }`}>{alert.priority} Priority</span>
                  </div>
                </div>
              </div>
              <button className="text-[10px] font-bold uppercase tracking-widest text-[#525252] hover:text-[#d4af37] transition-colors">
                Read Full Brief →
              </button>
            </div>
          ))}
        </div>
      </LockedFeature>
    </div>
  );
}
