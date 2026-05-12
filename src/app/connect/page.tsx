"use client";

import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";

const ConnectThreeScene = dynamic(() => import("@/components/ConnectThreeScene"), { ssr: false });

const practices = [
  "People Architecture",
  "Labour Codes",
  "AI Edge Lab",
  "Family Business",
  "Not sure yet",
];

const readings = [
  "Growth is accelerating. Stability is not.",
  "The organisation behaves differently depending on who is in the room.",
  "AI is increasing output. Decision quality is dropping.",
  "Cost is rising. I don't know why.",
  "The business is stable. The future is not.",
  "I have strong people. I do not have a strong system.",
];

export default function Connect() {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);
  const [selectedReading, setSelectedReading] = useState<string>("");

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <header className="relative min-h-screen flex items-center justify-center bg-transparent pt-20 overflow-hidden">
        <div className="shell text-center relative z-10">
          <Reveal>
            <div className="eyebrow eyebrow--center mb-8 text-[var(--accent)]">AXION&nbsp;&nbsp;·&nbsp;&nbsp;CONNECT</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-glow mb-8 drop-shadow-2xl">
              <span className="block font-serif font-medium text-[clamp(28px,3.5vw,52px)] leading-[1.15] tracking-[-0.01em] text-[var(--fg-2)] mb-2">
                Begin a conversation.
              </span>
              <em className="block font-serif font-medium text-[clamp(28px,3.5vw,52px)] leading-[1.15] tracking-[-0.01em] text-[var(--accent)] italic">
                From ambiguity, to architecture.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead mx-auto mb-12 opacity-90 text-[var(--fg-2)] max-w-[50ch]">
              Axion Index does not run discovery calls. Every engagement begins with a written intent — a short note about where the architecture is under stress and what change is being considered. We respond within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a className="kbd-arrow text-[var(--fg-3)] hover:text-[var(--accent)]" href="#form">
              Write your intent
            </a>
          </Reveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,92,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#06070B] to-transparent pointer-events-none" />
      </header>

      {/* FORM + SIDEBAR */}
      <section className="chapter section-dark relative" id="form">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-10">
                <span className="eyebrow mb-4 text-[var(--accent)]">Written intent</span>
                <p className="text-[15px] text-[var(--fg-4)] mt-3 leading-relaxed">
                  Five fields. Most filled in 4–6 minutes. The form is not screened by anyone other than the founder.
                </p>
              </div>

              <form className="flex flex-col gap-8">
                {/* Name */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Name</label>
                  <input
                    type="text"
                    className="bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[var(--fg)] text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 placeholder:text-[var(--fg-5)] bg-transparent"
                    placeholder="Your name"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Role</label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[var(--fg)] text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 placeholder:text-[var(--fg-5)]"
                    placeholder="e.g. Founder, CFO, CHRO"
                  />
                </div>

                {/* Organisation */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Organisation</label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[var(--fg)] text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 placeholder:text-[var(--fg-5)]"
                    placeholder="Your organisation"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Email</label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[var(--fg)] text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 placeholder:text-[var(--fg-5)]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Practice */}
                <div className="flex flex-col gap-4">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Practice of interest</label>
                  <div className="flex flex-wrap gap-3">
                    {practices.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedPractice(p)}
                        className={`px-5 py-3 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 border ${
                          selectedPractice === p
                            ? "bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]"
                            : "bg-transparent border-[rgba(255,255,255,0.08)] text-[var(--fg-4)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <p className="font-mono text-[10px] tracking-wide text-[var(--fg-5)]">
                    Select one. The diagnostic re-routes if the architecture under stress is elsewhere.
                  </p>
                </div>

                {/* Reading */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">Where is the architecture under stress?</label>
                  <div className="relative">
                    <select
                      value={selectedReading}
                      onChange={(e) => setSelectedReading(e.target.value)}
                      className="w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 appearance-none cursor-pointer text-[var(--fg-4)] [&>option]:bg-[#0E1117] [&>option]:text-[var(--fg)]"
                    >
                      <option value="" disabled>Select a reading…</option>
                      {readings.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--fg-4)] pointer-events-none text-[12px]">↓</span>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-4)]">A few sentences on what is being considered</label>
                  <textarea
                    className="bg-transparent border-b border-[rgba(255,255,255,0.1)] px-0 py-3 text-[var(--fg)] text-[16px] outline-none focus:border-[var(--accent)] transition-colors duration-300 min-h-[120px] resize-none placeholder:text-[var(--fg-5)]"
                    placeholder="What is the architecture being asked to do that it currently can't? What event or pressure is making this urgent?"
                  />
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <button
                    type="submit"
                    className="nav-cta bg-[var(--fg)] text-[var(--bg)] border-none hover:bg-[var(--accent)] transition-all duration-500 px-10 py-4"
                  >
                    Send written intent →
                  </button>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-5)]">Response within 48 hours</span>
                </div>
              </form>
            </motion.div>

            {/* SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Direct */}
              <div className="p-7 bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,168,92,0.25)] transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] opacity-60 block mb-3">Direct</span>
                <a href="mailto:nitin@axionindex.org" className="font-serif text-[18px] text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-300 block">
                  nitin@axionindex.org
                </a>
              </div>

              {/* Calendar */}
              <div className="p-7 bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,168,92,0.25)] transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] opacity-60 block mb-3">Calendar</span>
                <p className="text-[14px] leading-[1.65] text-[var(--fg-4)]">
                  Calls are arranged after the written intent — not before.
                </p>
              </div>

              {/* Press */}
              <div className="p-7 bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,168,92,0.25)] transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] opacity-60 block mb-3">Press & speaking</span>
                <p className="text-[14px] leading-[1.65] text-[var(--fg-4)]">
                  Press, speaking and editorial requests via the same channel — please mark the subject line accordingly.
                </p>
              </div>

              {/* Discretion */}
              <div className="p-7 bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,168,92,0.25)] transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] opacity-60 block mb-3">On discretion</span>
                <p className="text-[14px] leading-[1.65] text-[var(--fg-4)]">
                  Axion Index works with founders, boards and CHROs in regulated and family-held contexts. References, case material, and engagement details are not published on the website. They are shared on request, with relevance.
                </p>
              </div>

              {/* What we don't do */}
              <div className="p-7 bg-[rgba(255,255,255,0.02)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,168,92,0.25)] transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] opacity-60 block mb-3">What we don't do</span>
                <p className="text-[14px] leading-[1.65] text-[var(--fg-4)]">
                  Recruiting · payroll · vendor management · executive coaching · culture surveys · "engagement" programs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
