import React from "react";
import { 
  Users, 
  Activity, 
  Database, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#e5e5e5]">Dashboard</h1>
        <p className="text-[#737373] mt-2 font-medium">Welcome back. Here is your system overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Users" 
          value="1,284" 
          change="+12.5%" 
          isPositive={true} 
          icon={<Users className="w-5 h-5 text-[#d4af37]" />} 
        />
        <StatCard 
          title="Active Sessions" 
          value="432" 
          change="+3.2%" 
          isPositive={true} 
          icon={<Activity className="w-5 h-5 text-[#a3a3a3]" />} 
        />
        <StatCard 
          title="Data Usage" 
          value="84.2 GB" 
          change="-2.1%" 
          isPositive={false} 
          icon={<Database className="w-5 h-5 text-[#a3a3a3]" />} 
        />
        <StatCard 
          title="Avg. Uptime" 
          value="99.9%" 
          change="+0.01%" 
          isPositive={true} 
          icon={<Clock className="w-5 h-5 text-[#a3a3a3]" />} 
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] overflow-hidden">
        <div className="p-6 border-b border-[#2a2a2a] flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#e5e5e5]">System Logs</h3>
          <button className="text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-[#f1c40f] transition-colors">View All</button>
        </div>
        <div className="divide-y divide-[#2a2a2a]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between p-6 hover:bg-[#1a1a1a]/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#737373]" />
                </div>
                <div>
                  <p className="font-bold text-[#e5e5e5] text-sm">User Registration</p>
                  <p className="text-xs text-[#737373] mt-1">New account created via mobile portal</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20 rounded-md">Verified</span>
                <p className="text-[10px] text-[#525252] mt-2 font-mono">2M AGO</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, isPositive, icon }: { title: string; value: string; change: string; isPositive: boolean; icon: React.ReactNode }) {
  return (
    <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#2a2a2a] hover:border-[#d4af37]/30 transition-all group relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl group-hover:bg-[#d4af37]/5 group-hover:border-[#d4af37]/20 transition-colors">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-bold font-mono ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-[#e5e5e5] tracking-tight">{value}</h4>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}
