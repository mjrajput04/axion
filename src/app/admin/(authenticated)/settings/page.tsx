import React from "react";
import { 
  Bell, 
  Lock, 
  User, 
  Database, 
  Save,
  Trash2,
  ChevronRight
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#e5e5e5]">Settings</h1>
        <p className="text-[#737373] mt-2 font-medium">Configure terminal preferences and security protocols.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
              <User className="w-5 h-5 text-[#d4af37]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#e5e5e5]">Personnel Profile</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#525252] px-1">Full Designation</label>
              <input type="text" defaultValue="Axion Admin" className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-xs text-[#e5e5e5] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/30 transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#525252] px-1">Identity Email</label>
              <input type="email" defaultValue="admin@axion.com" className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-xs text-[#e5e5e5] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/30 transition-all" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
              <Lock className="w-5 h-5 text-[#a3a3a3]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#e5e5e5]">Security Protocols</h3>
          </div>
          <div className="space-y-4">
            <SettingsAction 
              title="Access Key Rotation" 
              description="Update your account password regularly" 
              icon={<ChevronRight className="w-4 h-4" />}
            />
            <div className="flex items-center justify-between w-full p-5 bg-[#111]/50 border border-[#2a2a2a] rounded-xl">
              <div className="text-left">
                <p className="text-xs font-bold text-[#e5e5e5]">Two-Factor Authentication</p>
                <p className="text-[10px] text-[#525252] mt-1 font-medium">Add an extra layer of encrypted security</p>
              </div>
              <div className="w-10 h-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-2.5 h-2.5 bg-[#404040] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
              <Database className="w-5 h-5 text-[#a3a3a3]" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#e5e5e5]">System Operations</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-[#111]/50 border border-[#2a2a2a] rounded-xl">
              <div>
                <p className="text-xs font-bold text-[#e5e5e5]">Maintenance Mode</p>
                <p className="text-[10px] text-[#525252] mt-1 font-medium">Disable public access during system updates</p>
              </div>
              <div className="w-10 h-5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-2.5 h-2.5 bg-[#404040] rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-red-500/5 border border-red-500/10 rounded-xl group">
              <div>
                <p className="text-xs font-bold text-red-500">Purge System Cache</p>
                <p className="text-[10px] text-red-900/60 mt-1 font-medium">Permanently delete all temporary node data</p>
              </div>
              <button className="text-red-500/50 group-hover:text-red-500 p-2.5 hover:bg-red-500/10 rounded-xl transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-6 pt-4">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] hover:text-[#a3a3a3] transition-colors">
            Reset Changes
          </button>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#d4af37] px-8 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-lg">
            <Save className="w-4 h-4" />
            Commit Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingsAction({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <button className="flex items-center justify-between w-full p-5 bg-[#111]/50 border border-[#2a2a2a] hover:border-[#d4af37]/20 hover:bg-[#d4af37]/5 rounded-xl transition-all group">
      <div className="text-left">
        <p className="text-xs font-bold text-[#e5e5e5] group-hover:text-[#d4af37] transition-colors">{title}</p>
        <p className="text-[10px] text-[#525252] mt-1 font-medium">{description}</p>
      </div>
      <div className="text-[#404040] group-hover:text-[#d4af37] transition-colors">
        {icon}
      </div>
    </button>
  );
}
