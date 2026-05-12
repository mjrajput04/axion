import React from "react";
import { 
  Search, 
  MoreVertical, 
  UserPlus,
  ShieldCheck,
  Calendar
} from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "Admin", email: "admin@axion.com", role: "Super Admin", status: "Active", joined: "2024-01-15" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "Editor", status: "Active", joined: "2024-03-10" },
    { id: 3, name: "Sarah Smith", email: "sarah@example.com", role: "Viewer", status: "Inactive", joined: "2024-04-05" },
    { id: 4, name: "Mike Johnson", email: "mike@example.com", role: "Editor", status: "Active", joined: "2024-05-12" },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#e5e5e5]">Personnel</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#404040] mt-2">Node Access Control</p>
        </div>
        <button className="flex items-center justify-center gap-2.5 bg-[#0d0d0d] border border-[#1a1a1a] hover:border-[#d4af37]/20 text-[#a3a3a3] hover:text-[#e5e5e5] px-5 py-2.5 rounded-lg text-[9px] font-bold uppercase tracking-[0.3em] transition-all active:scale-[0.98]">
          <UserPlus className="w-3.5 h-3.5" />
          Enlist Personnel
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#2a2a2a] group-focus-within:text-[#525252] transition-colors" />
          <input 
            type="text" 
            placeholder="Search identity records..." 
            className="w-full bg-[#080808] border border-[#1a1a1a] rounded-xl pl-11 pr-4 py-3 text-[10px] text-[#e5e5e5] placeholder-[#2a2a2a] focus:outline-none focus:border-[#2a2a2a] transition-all"
          />
        </div>
        <select className="bg-[#080808] border border-[#1a1a1a] rounded-xl px-5 py-3 text-[9px] font-bold uppercase tracking-widest text-[#404040] focus:outline-none focus:border-[#2a2a2a] transition-all cursor-pointer">
          <option>Filter by Designation</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-[#050505] rounded-xl border border-[#1a1a1a] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#080808] border-b border-[#1a1a1a]">
                <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#404040]">Identity</th>
                <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#404040]">Level</th>
                <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#404040]">Status</th>
                <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#404040]">Enrolled</th>
                <th className="px-8 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#404040] text-right">Ops</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#0d0d0d] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-lg bg-[#0d0d0d] border border-[#1a1a1a] flex items-center justify-center text-[#525252] font-bold text-[10px] group-hover:text-[#a3a3a3] transition-colors">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#a3a3a3] text-xs tracking-tight">{user.name}</p>
                        <p className="text-[9px] text-[#404040] mt-0.5 font-mono uppercase">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2a2a2a]" />
                      <span className="text-[10px] font-medium text-[#525252] uppercase tracking-tighter">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest border ${
                      user.status === "Active" 
                        ? "bg-green-900/5 text-green-900/40 border-green-900/10" 
                        : "bg-red-900/5 text-red-900/40 border-red-900/10"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2.5 text-[#404040]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-[9px] font-mono uppercase">{user.joined}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-all text-[#2a2a2a] hover:text-[#525252]">
                      <MoreVertical className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
