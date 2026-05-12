import React from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#e5e5e5]">Analytics</h1>
        <p className="text-[#737373] mt-2 font-medium">Real-time system telemetry and user engagement.</p>
      </div>

      {/* Main Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 h-[450px] flex flex-col shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#a3a3a3]">Identity Traffic</h3>
            <div className="flex gap-1.5 p-1 bg-[#111] border border-[#2a2a2a] rounded-lg">
              <span className="text-[9px] font-bold uppercase tracking-tighter bg-[#d4af37]/10 text-[#d4af37] px-3 py-1.5 rounded-md">Daily</span>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-[#525252] px-3 py-1.5 rounded-md hover:text-[#a3a3a3] cursor-pointer transition-colors">Weekly</span>
            </div>
          </div>
          <div className="flex-1 border-b border-l border-[#1a1a1a] relative">
            {/* Visual placeholder for a chart */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] flex items-end gap-3 px-6">
              {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 40, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-[#d4af37]/10 hover:bg-[#d4af37]/30 border-t border-[#d4af37]/40 rounded-t-sm transition-all group relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                  <div className="w-full h-full" style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between text-[9px] text-[#404040] font-mono font-bold tracking-tighter">
            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
            <span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 flex flex-col gap-8 shadow-2xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#a3a3a3]">Terminal Distribution</h3>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-[15px] border-[#d4af37] border-r-[#1a1a1a] border-b-[#1a1a1a] relative flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.05)]">
              <div className="text-center">
                <span className="text-3xl font-bold text-[#e5e5e5] tracking-tighter">64%</span>
                <p className="text-[9px] text-[#737373] font-bold uppercase tracking-[0.2em] mt-1">Mobile</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <AnalyticsLegend color="#d4af37" label="Mobile" value="64%" />
            <AnalyticsLegend color="#2a2a2a" label="Desktop" value="32%" />
            <AnalyticsLegend color="#1a1a1a" label="Tablet" value="4%" />
          </div>
        </div>
      </div>

      {/* Stats Bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsMiniCard 
          title="Bounce Rate" 
          value="24.5%" 
          change="-3.2%" 
          isPositive={true} 
          icon={<TrendingDown className="w-4 h-4 text-green-500" />} 
        />
        <AnalyticsMiniCard 
          title="Session Duration" 
          value="4m 32s" 
          change="+12s" 
          isPositive={true} 
          icon={<TrendingUp className="w-4 h-4 text-[#d4af37]" />} 
        />
        <AnalyticsMiniCard 
          title="Primary Node" 
          value="United States" 
          change="32% Traffic" 
          isNeutral={true}
          icon={<Globe className="w-4 h-4 text-[#a3a3a3]" />} 
        />
      </div>
    </div>
  );
}

function AnalyticsLegend({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }}></div>
        <span className="text-[#737373] font-bold uppercase tracking-widest text-[10px]">{label}</span>
      </div>
      <span className="font-bold text-[#e5e5e5]">{value}</span>
    </div>
  );
}

function AnalyticsMiniCard({ title, value, change, isPositive, isNeutral, icon }: { title: string; value: string; change: string; isPositive?: boolean; isNeutral?: boolean; icon: React.ReactNode }) {
  return (
    <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-6 shadow-xl hover:border-[#d4af37]/20 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#737373] text-[10px] font-bold uppercase tracking-[0.2em]">{title}</span>
        {icon}
      </div>
      <h4 className="text-2xl font-bold text-[#e5e5e5] tracking-tight">{value}</h4>
      <p className={`text-[10px] font-bold uppercase tracking-widest mt-2 ${isNeutral ? "text-[#525252]" : isPositive ? "text-green-500" : "text-red-500"}`}>
        {change}
      </p>
    </div>
  );
}
