import React from "react";
import { 
  Users, 
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
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#e5e5e5]">Users</h1>
          <p className="text-[#737373] mt-2 font-medium">Manage personnel access and permission levels.</p>
        </div>
        <button className="flex items-center justify-center gap-3 bg-[#1a1a1a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 text-[#d4af37] px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98]">
          <UserPlus className="w-4 h-4" />
          Add Personnel
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#525252] group-focus-within:text-[#d4af37] transition-colors" />
          <input 
            type="text" 
            placeholder="Search records..." 
            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl pl-12 pr-4 py-3.5 text-xs text-[#e5e5e5] placeholder-[#404040] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/30 focus:border-[#d4af37]/30 transition-all"
          />
        </div>
        <select className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] focus:outline-none focus:ring-1 focus:ring-[#d4af37]/30 transition-all cursor-pointer">
          <option>All Designations</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#111]/50 border-b border-[#2a2a2a]">
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252]">Personnel</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252]">Role</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252]">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252]">Enrolled</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#525252] text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2a2a]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#1a1a1a]/40 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#d4af37] font-bold text-sm group-hover:border-[#d4af37]/30 transition-colors">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#e5e5e5] text-sm">{user.name}</p>
                        <p className="text-[10px] text-[#525252] mt-0.5 font-mono">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#737373]" />
                      <span className="text-xs font-medium text-[#a3a3a3]">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest ${
                      user.status === "Active" 
                        ? "bg-green-500/5 text-green-500 border border-green-500/10" 
                        : "bg-red-500/5 text-red-500 border border-red-500/10"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2.5 text-[#737373]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-mono uppercase">{user.joined}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2.5 hover:bg-[#2a2a2a] rounded-xl transition-all text-[#525252] hover:text-[#e5e5e5] active:scale-95">
                      <MoreVertical className="w-4 h-4" />
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
