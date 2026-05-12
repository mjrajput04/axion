import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { LogOut } from "lucide-react";
import { DashboardContent } from "@/components/DashboardContent";

export default async function UserDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      {/* Top Navigation */}
      <nav className="border-b border-[#2a2a2a] bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold tracking-[0.3em] uppercase">
              Axion <span className="text-[#d4af37]">User</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full">
              <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-[10px] text-black font-bold">
                {session.user?.name?.[0] || 'U'}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
                {session.user?.name}
              </span>
            </div>
            
            <form action={async () => {
              'use server';
              await signOut({ redirectTo: "/" });
            }}>
              <button className="text-[#737373] hover:text-white transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <DashboardContent user={session.user} />
      </main>
    </div>
  );
}
