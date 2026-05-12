"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/admin/Sidebar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#050505] text-[#e5e5e5] overflow-hidden font-sans">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-[#050505] border-b border-[#1a1a1a] flex items-center justify-between px-8">
          <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#525252]">
            {pathname?.split("/").pop()?.replace("-", " ")}
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] font-bold text-[#a3a3a3] tracking-tight">ADMINISTRATOR</p>
                <p className="text-[9px] text-[#404040] uppercase tracking-[0.2em] mt-0.5">SECURE NODE</p>
              </div>
              <div className="w-8 h-8 rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center text-[10px] font-bold text-[#e5e5e5] hover:border-[#d4af37]/30 transition-colors cursor-default shadow-sm">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#050505]">
          {children}
        </div>
      </main>
    </div>
  );
}
