"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  BarChart3, 
  Shield
} from "lucide-react";
import { signOut } from "next-auth/react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#0a0a0a] border-r border-[#1a1a1a] hidden md:flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
            <Shield className="w-5 h-5 text-[#e5e5e5]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#e5e5e5]">Axion <span className="text-[#737373]">Admin</span></span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <NavItem 
          href="/admin/dashboard" 
          icon={<LayoutDashboard className="w-5 h-5" />} 
          label="Dashboard" 
          active={pathname === "/admin/dashboard"} 
        />
        <NavItem 
          href="/admin/users" 
          icon={<Users className="w-5 h-5" />} 
          label="Users" 
          active={pathname === "/admin/users"} 
        />
        <NavItem 
          href="/admin/analytics" 
          icon={<BarChart3 className="w-5 h-5" />} 
          label="Analytics" 
          active={pathname === "/admin/analytics"} 
        />
        <NavItem 
          href="/admin/settings" 
          icon={<Settings className="w-5 h-5" />} 
          label="Settings" 
          active={pathname === "/admin/settings"} 
        />
      </nav>

      <div className="p-4 border-t border-[#1a1a1a]">
        <button 
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 w-full px-4 py-3 text-[#525252] hover:text-[#e5e5e5] hover:bg-[#111] hover:rounded-xl transition-all group"
        >
          <LogOut className="w-5 h-5 group-hover:text-[#d4af37]" />
          <span className="font-medium group-hover:text-[#e5e5e5]">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

function NavItem({ href, icon, label, active = false }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
        active 
          ? "bg-[#111] text-[#e5e5e5] border border-[#2a2a2a]" 
          : "text-[#525252] hover:text-[#a3a3a3] hover:bg-[#0d0d0d]"
      }`}
    >
      <span className={active ? "text-[#d4af37]" : "text-[#404040] group-hover:text-[#737373]"}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
