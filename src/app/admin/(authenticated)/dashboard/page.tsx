import React from "react";
import { 
  Users, 
  Activity, 
  Database, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock
} from "lucide-center";

export default function AdminDashboard() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#e5e5e5]">Console Overview</h1>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#404040] mt-2">Active Node: 0x84-AXION</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Identity Pool" 
          value="1,284" 
          change="+12.5%" 
          isPositive={true} 
        />
        <StatCard 
          title="Active Links" 
          value="432" 
          change="+3.2%" 
          isPositive={true} 
        />
        <StatCard 
          title="Throughput" 
          value="84.2 GB" 
          change="-2.1%" 
          isPositive={false} 
        />
        <StatCard 
          title="Uptime Ratio" 
          value="99.9%" 
          change="+0.01%" 
          isPositive={true} 
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-[#050505] border border-[#1a1a1a] rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between bg-[#080808]">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3]">Identity Logs</h3>
          <button className="text-[9px] font-bold uppercase tracking-widest text-[#525252] hover:text-[#d4af37] transition-colors">Export .LOG</button>
        </div>
        <div className="divide-y divide-[#1a1a1a]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-5 hover:bg-[#0d0d0d] transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center group-hover:border-[#d4af37]/20 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2a2a2a] group-hover:bg-[#d4af37]/40"></div>
                </div>
                <div>
                  <p className="font-bold text-[#a3a3a3] text-xs tracking-tight">Access Initialized</p>
                  <p className="text-[9px] text-[#404040] uppercase tracking-wider mt-0.5">Terminal ID: 0x2A-{i}F4</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 border border-[#1a1a1a] text-[#525252] rounded">Verified</span>
                <p className="text-[8px] text-[#2a2a2a] mt-1.5 font-mono">1{i}M AGO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, isPositive }: { title: string; value: string; change: string; isPositive: boolean }) {
  return (
    <div className="bg-[#050505] p-6 rounded-xl border border-[#1a1a1a] hover:border-[#2a2a2a] transition-all group relative">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#525252]">{title}</p>
        <div className={`text-[8px] font-bold font-mono ${isPositive ? "text-green-900/50" : "text-red-900/50"}`}>
          {change}
        </div>
      </div>
      <h4 className="text-xl font-bold text-[#e5e5e5] tracking-tighter">{value}</h4>
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 rounded-full bg-[#d4af37]/30"></div>
      </div>
    </div>
  );
}
