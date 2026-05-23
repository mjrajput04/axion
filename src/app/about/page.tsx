"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const differentiators = [
  "We start with risk, cost, and structure — not engagement or process",
  "We design for CFOs and boards, not just HR teams",
  "We quantify what others describe",
  "We expose what most systems hide",
];

const breakdownItems = [
  "Workforce models became fragmented",
  "Compliance became interpretive",
  "HR systems became bookkeeping layers",
  "Decision ownership became unclear",
];

const diagnosticQuestions = [
  "Where is your workforce structurally at risk?",
  "What will regulatory shifts do to your cost and operating model?",
  "Which parts of your organisation are resilient — and which are already obsolete?",
  "What decisions belong to HR — and which must move to the CFO and the board?",
];

export default function About() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <header className="relative min-h-screen flex items-center justify-center bg-transparent pt-20 overflow-hidden">
        <div className="shell text-center relative z-10">
          <Reveal>
            <div className="eyebrow eyebrow--center mb-8 text-[var(--accent)]">AXION&nbsp;&nbsp;·&nbsp;&nbsp;ABOUT</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h-display hero-glow leading-[0.95] mb-8 drop-shadow-2xl">
              Axion Index
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead mx-auto mb-6 opacity-90 text-[var(--fg-2)] max-w-[50ch]">
              Most organisations don't fail because of strategy.<br />
              They fail because the system underneath cannot carry the strategy.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-[var(--fg-3)] mx-auto mb-12 max-w-[52ch] text-[16px] leading-relaxed">
              Work today is being reshaped by three irreversible forces —
              AI compression, regulatory resets, and structural fragmentation of the workforce.
              Yet the way organisations measure, design, and operate work has not kept pace.
              <br /><br />
              <em className="text-[var(--accent)]">Axion Index exists to solve that gap.</em>
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a className="kbd-arrow text-[var(--fg-3)] hover:text-[var(--accent)]" href="#what-we-do">
              Read the architecture
            </a>
          </Reveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(160,160,160,0.03)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#06070B] to-transparent pointer-events-none" />
      </header>

      {/* WHAT WE DO */}
      <section className="chapter section-dark relative" id="what-we-do">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-start">
            <div className="lg:sticky lg:top-32 h-fit">
              <Reveal>
                <span className="eyebrow mb-6 text-[var(--accent)]">What We Do</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="h-section mb-8">
                  Is your organisation structurally built for<br />
                  <em className="text-[var(--accent)]">what is coming next?</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[var(--fg-3)] leading-relaxed max-w-[36ch] mb-6">
                  Axion Index is an operating intelligence company focused on one question.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-[var(--fg-4)] text-[14px] leading-relaxed max-w-[36ch]">
                  We do not run HR programs.<br />
                  We do not implement HR systems.<br /><br />
                  We diagnose, quantify, and redesign the operating architecture of work.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6 pt-2">
              <Reveal>
                <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-[var(--fg-4)] mb-4">
                  Through proprietary indices, diagnostics, and frameworks, we help organisations answer:
                </p>
              </Reveal>
              {diagnosticQuestions.map((q, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="cool-card group border-[rgba(255,255,255,0.05)] hover:border-[var(--accent)] transition-all duration-500">
                    <span className="font-mono text-[10px] text-[var(--accent)] opacity-60 mb-4 block">[ 0{i + 1} ]</span>
                    <p className="font-serif text-[18px] leading-snug text-[var(--fg-2)] group-hover:text-[var(--fg)] transition-colors">
                      {q}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.5}>
                <p className="font-serif italic text-[clamp(20px,2.5vw,28px)] text-[var(--accent)] mt-6 leading-snug">
                  We are Rewriting the Operating Logic of Work.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="chapter section-deep relative overflow-hidden" id="why">
        <div className="shell">
          <div className="max-w-[800px] mx-auto">
            <Reveal>
              <span className="eyebrow mb-6 text-[var(--accent)]">Why Axion Index Exists</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section mb-12">
                For years, organisations optimised for<br />
                <em className="text-[var(--accent)]">speed, flexibility, and scale.</em>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-4 mb-16">
              {breakdownItems.map((item, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-6 py-5 border-b border-[rgba(255,255,255,0.05)]">
                    <span className="font-mono text-[10px] text-[var(--accent)] opacity-60 mt-1 shrink-0">[ 0{i + 1} ]</span>
                    <p className="text-[17px] text-[var(--fg-3)] leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <div className="border-l-2 border-[var(--accent)] pl-8 mb-12">
                <p className="font-serif text-[clamp(18px,2.2vw,26px)] text-[var(--fg-2)] leading-snug mb-4">
                  The result is a system that looks functional on the surface —<br />
                  but is broken by design underneath.
                </p>
                <p className="text-[16px] text-[var(--fg-3)] leading-relaxed">
                  The next phase of work will not be defined by tools.<br />
                  It will be defined by operating discipline, structural clarity, and decision ownership.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <p className="font-serif italic text-[clamp(20px,2.5vw,28px)] text-[var(--accent)]">
                Axion Index was built to bring that clarity.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="absolute right-[-10%] top-[20%] font-serif italic text-[20vw] text-white opacity-[0.015] pointer-events-none select-none">
          CLARITY
        </div>
      </section>

      {/* OUR APPROACH — links to homepage #bridge section */}
      <section className="chapter section-dark relative" id="approach">
        <div className="shell">
          <div className="mb-16">
            <Reveal>
              <span className="eyebrow mb-6 text-[var(--accent)]">Our Approach</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section mb-8">
                We don't explore the<br />
                <em className="text-[var(--accent)]">problem.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-[var(--fg-2)] max-w-[40ch] leading-tight mb-12">
                We map the architecture that carries the consequence.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { step: "01", label: "DIAGNOSE", title: "Where the system is breaking" },
              { step: "02", label: "CODIFY", title: "What is holding it together artificially" },
              { step: "03", label: "PREDICT", title: "What will fail next" },
              { step: "04", label: "INSTALL", title: "Then we redesign it so it holds" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="cool-card group hover:border-[var(--accent)] transition-all duration-500">
                  <span className="font-mono text-[9px] tracking-[0.4em] text-[var(--accent)] opacity-60 mb-3 block">{item.label}</span>
                  <span className="font-serif italic text-[32px] text-[var(--fg-5)] group-hover:text-[var(--accent)] transition-colors duration-500 block mb-4">{item.step}</span>
                  <h3 className="font-serif text-[18px] leading-snug text-[var(--fg)]">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="text-center">
              <Link href="/#bridge" className="nav-cta inline-flex">
                See how we work →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDING PHILOSOPHY */}
      <section className="section-tint relative overflow-hidden py-16" id="philosophy">
        <div className="shell">
          <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
            <Reveal>
              <span className="eyebrow eyebrow--center mb-8 text-[var(--accent)]">Founding Philosophy</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section mb-10">
                One platform method.<br />
                <em className="text-[var(--accent)]">Four practice doctrines.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-text text-[var(--fg-3)] mb-8">
                Interpreted across labour, AI, people, and ownership.
              </p>
            </Reveal>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-0">
              {["Belief", "Conviction", "Rhythm"].map((label, i) => (
                <div key={i} className="flex items-center gap-6 md:gap-10">
                  <Reveal delay={0.3 + i * 0.15} y={10}>
                    <span className="font-serif text-[clamp(24px,3vw,42px)] text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-500 cursor-default">
                      {label}
                    </span>
                  </Reveal>
                  {i < 2 && (
                    <Reveal delay={0.4 + i * 0.15} scale={0.8}>
                      <span className="text-[var(--accent)] opacity-40 text-[20px] font-light">→</span>
                    </Reveal>
                  )}
                </div>
              ))}
            </div>

            <Reveal delay={0.6}>
              <div className="border-t border-[rgba(255,255,255,0.08)] pt-12 flex flex-col gap-6">
                <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-[var(--fg-2)] leading-snug">
                  Architecture is not designed in presentations.
                </p>
                <p className="font-serif italic text-[clamp(18px,2vw,24px)] text-[var(--fg-2)] leading-snug">
                  It is read in signals.
                </p>
                <p className="text-[16px] text-[var(--fg-3)] leading-relaxed max-w-[44ch] mx-auto">
                  We don't sell services. We read what is already breaking — and build what must hold.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[radial-gradient(circle,rgba(160,160,160,0.03)_0%,transparent_70%)] pointer-events-none" />
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="chapter section-dark relative" id="different">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
            <div className="lg:sticky lg:top-32 h-fit">
              <Reveal>
                <span className="eyebrow mb-6 text-[var(--accent)]">What Makes Us Different</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="h-section mb-8">
                  A new category of<br />
                  <em className="text-[var(--accent)]">operating intelligence.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-3 text-[14px] text-[var(--fg-4)] leading-relaxed">
                  <p>Axion Index is not an HR advisory firm.</p>
                  <p>It is not a SaaS product.</p>
                  <p>It is not a benchmarking report.</p>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col gap-6">
              {differentiators.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                    className="flex items-start gap-6 py-6 border-b border-[rgba(255,255,255,0.05)] group"
                  >
                    <span className="font-mono text-[10px] text-[var(--accent)] opacity-60 mt-1 shrink-0">[ 0{i + 1} ]</span>
                    <p className="text-[17px] text-[var(--fg-3)] group-hover:text-[var(--fg)] transition-colors leading-relaxed">{item}</p>
                  </motion.div>
                </Reveal>
              ))}
              <Reveal delay={0.5}>
                <p className="font-serif italic text-[clamp(16px,1.8vw,22px)] text-[var(--fg-2)] pt-6 leading-snug">
                  Where others optimise the visible layer,<br />
                  we rebuild the system underneath.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH — links to homepage #roles */}
      <section className="chapter section-deep" id="who">
        <div className="shell">
          <div className="mb-16">
            <Reveal>
              <span className="eyebrow mb-6 text-[var(--accent)]">Who We Work With</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-section mb-8">
                Who we engage with <em className="text-[var(--accent)]">depending on where you sit.</em>
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col border-t border-[rgba(255,255,255,0.05)] mb-16">
            {[
              { role: "Founder / CEO", then: "See where the organisation will break — before it does." },
              { role: "CFO", then: "Read workforce as cost, risk, and control architecture — not headcount." },
              { role: "CHRO", then: "Stop running HR programs. Start running the operating system underneath them." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="py-10 border-b border-[rgba(255,255,255,0.05)] group hover:bg-[rgba(255,255,255,0.01)] transition-colors px-4 -mx-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] mb-4 block">{item.role}</span>
                  <p className="font-serif text-[24px] leading-snug text-[var(--fg-2)] group-hover:text-[var(--fg)] transition-colors">{item.then}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* END NOTE — CLOSING CTA */}
      <section className="chapter section-tint py-32 overflow-hidden relative">
        <div className="shell text-center relative z-10">
          <Reveal>
            <div className="eyebrow eyebrow--center mb-10 text-[var(--accent)]">Axion Index</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display mb-12">
              From <s className="opacity-40">ambiguity</s> to <em className="text-[var(--accent)]">architecture.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-3 mb-16 font-serif italic text-[clamp(16px,1.8vw,22px)] text-[var(--fg-3)]">
              <p>From compliance to control.</p>
              <p>From systems to operating intelligence.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/connect"
                className="nav-cta scale-110 bg-[var(--fg)] text-[var(--bg)] border-none hover:bg-[var(--accent)] transition-all duration-500"
              >
                Start Diagnostic
              </Link>
              <Link href="/founder" className="nav-cta scale-110">
                Read about the founder
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(160,160,160,0.05)_0%,transparent_70%)] pointer-events-none" />
      </section>
    </div>
  );
}
