"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, AlertTriangle, Loader2 } from "lucide-react";

export default function PosturePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#d4af37]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373]">Reading Posture Data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Posture Dashboard</h1>
        <p className="text-[#737373] font-medium">Real-time compliance visualization. The diagnosis is always unlocked.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Overall Score", value: "84%", color: "text-[#d4af37]", icon: Activity },
          { label: "Critical Risks", value: "0", color: "text-green-500", icon: ShieldCheck },
          { label: "Pending Actions", value: "12", color: "text-amber-500", icon: AlertTriangle },
          { label: "System Health", value: "Optimal", color: "text-blue-500", icon: Activity },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl group hover:border-[#d4af37]/30 transition-all">
            <stat.icon className={`w-6 h-6 ${stat.color} mb-4`} />
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#525252] mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#111] border border-[#2a2a2a] rounded-[40px] p-12 flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Activity className="w-12 h-12 text-[#2a2a2a] mx-auto" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#525252]">
            Visualizing Compliance Architecture...
          </p>
        </div>
      </div>
    </div>
  );
}
