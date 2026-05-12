import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { User, LogOut, LayoutDashboard, Settings, Bell, CreditCard } from "lucide-react";

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">Dashboard</h1>
            <p className="text-[#737373] font-medium">Welcome back to your personalized command center.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-[#d4af37]/30 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <LayoutDashboard className="w-12 h-12" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Account Status</p>
            <h3 className="text-2xl font-bold text-[#e5e5e5]">Active</h3>
            <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
          </div>

          <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <CreditCard className="w-12 h-12" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Current Plan</p>
            <h3 className="text-2xl font-bold text-[#e5e5e5]">Standard</h3>
            <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
          </div>

          <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bell className="w-12 h-12" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373] mb-4">Notifications</p>
            <h3 className="text-2xl font-bold text-[#e5e5e5]">0 New</h3>
            <div className="mt-4 h-1 w-12 bg-[#d4af37]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight border-b border-[#2a2a2a] pb-4">Recent Activity</h2>
            <div className="bg-[#111] border border-[#2a2a2a] rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
              <p className="text-[#525252] text-sm uppercase tracking-widest font-bold">No recent activity to show</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight border-b border-[#2a2a2a] pb-4">Account Settings</h2>
            <div className="space-y-4">
              {[
                { icon: <User className="w-4 h-4" />, label: "Profile Information" },
                { icon: <Settings className="w-4 h-4" />, label: "Privacy & Security" },
                { icon: <CreditCard className="w-4 h-4" />, label: "Billing & Subscription" },
              ].map((item, idx) => (
                <button key={idx} className="w-full flex items-center justify-between p-6 bg-[#111] border border-[#2a2a2a] rounded-2xl hover:bg-[#161616] hover:border-[#d4af37]/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="text-[#737373] group-hover:text-[#d4af37] transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </div>
                  <span className="text-[#404040] group-hover:text-[#d4af37] transition-all transform group-hover:translate-x-1">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
