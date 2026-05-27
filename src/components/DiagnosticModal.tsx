"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const SIGNALS = [
  "Growth is accelerating — stability is not",
  "The organisation behaves differently depending on who is in the room",
  "AI is increasing output — decision quality is dropping",
  "Cost is rising — I don't know why",
  "The business is stable — the future is not",
  "I have strong people — I don't have a strong system",
];

const ROLES = ["Founder / CEO", "CFO", "CHRO", "Investor / Board", "Other"];
const SIZES = ["1–50", "51–200", "201–500", "501–2000", "2000+"];

type FormData = {
  breaking: string;
  whyNow: string;
  signal: string;
  role: string;
  company: string;
  size: string;
  name: string;
  email: string;
  phone: string;
  callback: string;
};

const empty: FormData = {
  breaking: "", whyNow: "", signal: "",
  role: "", company: "", size: "",
  name: "", email: "", phone: "", callback: "",
};

export default function DiagnosticModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormData, v: string) => setForm(f => ({ ...f, [k]: v }));

  async function submit() {
    setLoading(true);
    await fetch("/api/diagnostic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSubmitted(true);
  }

  const canNext1 = form.breaking.trim().length > 0;
  const canNext2 = form.role && form.company.trim().length > 0;
  const canSubmit = form.name.trim().length > 0 && form.email.includes("@");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background: "rgba(4,5,8,0.85)", backdropFilter: "blur(20px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          className="relative w-full max-w-[560px] rounded-[28px] p-8 md:p-10"
          style={{
            background: "rgba(10,12,18,0.98)",
            border: "1px solid rgba(201,168,76,0.35)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.08)",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[var(--fg-5)] hover:text-[var(--fg)] transition-colors"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <>
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map(n => (
                  <div
                    key={n}
                    className="h-[2px] flex-1 rounded-full transition-all duration-500"
                    style={{ background: n <= step ? "#C9A84C" : "rgba(201,168,76,0.15)" }}
                  />
                ))}
                <span className="font-mono text-[9px] tracking-[0.3em] text-[var(--fg-5)] ml-2 shrink-0">
                  {step} OF 3
                </span>
              </div>

              {/* Step 1 — Your signal */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-[var(--accent)] mb-2">Your Signal</p>
                  <h3 className="font-serif text-[26px] text-[var(--fg)] mb-8 leading-tight">What's breaking?</h3>

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">
                    Describe it in one line
                  </label>
                  <textarea
                    rows={3}
                    value={form.breaking}
                    onChange={e => set("breaking", e.target.value)}
                    placeholder="e.g. We're growing fast but decisions keep stalling at the top…"
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] resize-none mb-5 outline-none focus:border-[var(--accent)]"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    autoFocus
                  />

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">
                    Why now?
                  </label>
                  <input
                    type="text"
                    value={form.whyNow}
                    onChange={e => set("whyNow", e.target.value)}
                    placeholder="What's changed or accelerating?"
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] mb-5 outline-none focus:border-[var(--accent)]"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">
                    Which signal is loudest?
                  </label>
                  <select
                    value={form.signal}
                    onChange={e => set("signal", e.target.value)}
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] mb-8 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <option value="">Select a signal…</option>
                    {SIGNALS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <button
                    onClick={() => setStep(2)}
                    disabled={!canNext1}
                    className="w-full py-4 rounded-full font-mono text-[11px] tracking-[0.28em] uppercase font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-30"
                    style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)", color: "#080A0F" }}
                  >
                    Continue <ArrowRight size={12} />
                  </button>
                </motion.div>
              )}

              {/* Step 2 — Where you sit */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-[var(--accent)] mb-2">Where You Sit</p>
                  <h3 className="font-serif text-[26px] text-[var(--fg)] mb-8 leading-tight">Your context.</h3>

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Your role</label>
                  <select
                    value={form.role}
                    onChange={e => set("role", e.target.value)}
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] mb-5 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <option value="">Select your role…</option>
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => set("company", e.target.value)}
                    placeholder="Company name"
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] mb-5 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Company size</label>
                  <select
                    value={form.size}
                    onChange={e => set("size", e.target.value)}
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] mb-8 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <option value="">Select size…</option>
                    {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 rounded-full font-mono text-[11px] tracking-[0.28em] uppercase transition-colors"
                      style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--fg-4)" }}
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!canNext2}
                      className="flex-[2] py-4 rounded-full font-mono text-[11px] tracking-[0.28em] uppercase font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-30"
                      style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)", color: "#080A0F" }}
                    >
                      Continue <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 — Where we reach you */}
              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-[var(--accent)] mb-2">Where We Reach You</p>
                  <h3 className="font-serif text-[26px] text-[var(--fg)] mb-8 leading-tight">Almost done.</h3>

                  <div className="flex gap-3 mb-5">
                    <div className="flex-1">
                      <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => set("name", e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] outline-none"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => set("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] outline-none"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                      />
                    </div>
                  </div>

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => set("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] mb-5 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />

                  <label className="block mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--fg-4)]">
                    Preferred callback window <span className="opacity-50 normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.callback}
                    onChange={e => set("callback", e.target.value)}
                    placeholder="e.g. Weekday mornings, after 6pm…"
                    className="w-full rounded-[12px] px-4 py-3 text-[14px] text-[var(--fg)] placeholder:text-[var(--fg-5)] mb-8 outline-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-4 rounded-full font-mono text-[11px] tracking-[0.28em] uppercase transition-colors"
                      style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--fg-4)" }}
                    >
                      Back
                    </button>
                    <button
                      onClick={submit}
                      disabled={!canSubmit || loading}
                      className="flex-[2] py-4 rounded-full font-mono text-[11px] tracking-[0.28em] uppercase font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-30"
                      style={{ background: "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)", color: "#080A0F" }}
                    >
                      {loading ? "Sending…" : <>Send Signal <ArrowRight size={12} /></>}
                    </button>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            /* Confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ border: "1px solid rgba(201,168,76,0.5)", background: "rgba(201,168,76,0.08)" }}
              >
                <span className="text-[var(--accent)] text-[22px]">✦</span>
              </div>
              <h3 className="font-serif text-[28px] text-[var(--fg)] mb-4">Signal received.</h3>
              <p className="font-serif italic text-[16px] text-[var(--fg-3)] leading-relaxed max-w-[34ch] mx-auto">
                We'll read the architecture behind it and come back to you within 48 hours.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
