"use client";

import React, { useState, useEffect } from "react";
import { ClipboardCheck, Plus, Filter, Loader2 } from "lucide-react";

export default function AssessmentsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-[#d4af37]" />
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#737373]">Syncing Assessment Pipeline...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Assessments</h1>
          <p className="text-[#737373] font-medium">Run six-agent compliance diagnostics on your entities. (Ref: Doc 16 §12)</p>
        </div>
        <button className="flex items-center justify-center gap-3 bg-[#d4af37] text-black px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          New Assessment
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#111] border border-[#2a2a2a] rounded-xl text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3] hover:text-[#e5e5e5] transition-all">
          <Filter className="w-4 h-4" />
          Filter Records
        </button>
      </div>

      <div className="bg-[#111] border border-[#2a2a2a] rounded-[40px] overflow-hidden">
        <div className="p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[32px] flex items-center justify-center mx-auto">
            <ClipboardCheck className="w-10 h-10 text-[#2a2a2a]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#e5e5e5]">No Assessment History</h3>
            <p className="text-xs text-[#525252] mt-3 max-w-[320px] mx-auto uppercase tracking-[0.2em] font-bold leading-relaxed">
              Your diagnostic history will appear here once you run your first system check.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
