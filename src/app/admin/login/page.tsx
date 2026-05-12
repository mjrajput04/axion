"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, Shield } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid identity or access key");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError("System error. Re-initialization required.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] font-sans selection:bg-[#d4af37]/10 selection:text-[#d4af37]">
      <div className="w-full max-w-sm p-10 space-y-10 bg-[#050505] border border-[#1a1a1a] rounded-2xl relative overflow-hidden">
        
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
              <Shield className="w-6 h-6 text-[#e5e5e5]" />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#e5e5e5]">Axion <span className="text-[#525252]">Admin</span></h1>
          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.4em] text-[#404040]">Authorization Required</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-2 px-1">Identity</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="w-3.5 h-3.5 text-[#2a2a2a] group-focus-within:text-[#737373] transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-[#080808] border border-[#1a1a1a] rounded-xl text-[#e5e5e5] text-xs placeholder-[#2a2a2a] focus:outline-none focus:border-[#d4af37]/20 transition-all"
                  placeholder="admin@axion.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#525252] mb-2 px-1">Access Key</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Lock className="w-3.5 h-3.5 text-[#2a2a2a] group-focus-within:text-[#737373] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 bg-[#080808] border border-[#1a1a1a] rounded-xl text-[#e5e5e5] text-xs placeholder-[#2a2a2a] focus:outline-none focus:border-[#d4af37]/20 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="p-3 text-[9px] font-bold uppercase tracking-widest text-red-900/80 bg-red-900/5 border border-red-900/10 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl text-[9px] font-bold uppercase tracking-[0.3em] text-[#a3a3a3] hover:text-[#e5e5e5] hover:border-[#d4af37]/20 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Initialize Access"
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-[#2a2a2a]">
            V.1.0.SECURE
          </p>
        </div>
      </div>
    </div>
  );
}
