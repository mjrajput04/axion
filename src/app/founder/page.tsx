"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const career = [
  { code: "SCB", full: "Standard Chartered", sub: "Rewards architecture · 700→10,000 scaled operation", body: "Built rewards architecture across a 700-to-10,000 scaled operation. Proved data is how HR earns authority, not how it gets ignored.", stat: "96%", statLabel: "Q12 participation" },
  { code: "TGB", full: "Tata Global Beverages", sub: "Decade · 3 heritage brands · Starbucks + PepsiCo JVs", body: "Decade-long institutional architecture across three heritage brands and joint ventures. London-to-Mumbai global HQ relocation completed at 95%+ retention.", stat: "95%+", statLabel: "Retention through global HQ relocation" },
  { code: "UDN", full: "Udaan", sub: "800→4,000 on-roll · 22 languages · 28 states", body: "Scaled people architecture from 800 to over 4,000 on-roll across 22 languages and 28 states. During COVID, when Udaan was classified as essential government infrastructure, manning held at 95% with no productivity loss.", stat: "95%", statLabel: "COVID manning · zero productivity loss" },
  { code: "GSK", full: "Gameskraft", sub: "9 → full institution · GST shock · zero layoffs", body: "Built the operating system from nine people managing event logistics into a full institution. When a 28% retroactive GST shock and state-level bans threatened the industry, the architecture held: 27% of roles impacted by strategy change, 97.1% top-performer retention, zero involuntary layoffs.", stat: "97.1%", statLabel: "Top-performer retention" },
];

const codified = [
  { label: "Methodology", title: "The BCR Framework.", body: "Belief → Conviction → Rhythm. The signature methodology that runs the platform." },
  { label: "Practice doctrines", title: "Four doctrines.", body: "One platform method — BCR — interpreted across labour, AI, people, and ownership through a second carrier framework, 3i (Interpret · Integrate · Institutionalise). Other methods sit underneath as embedded structures, not branded acronyms." },
  { label: "HROS", title: "The operating-system layer.", body: "Nitin is building separately, where the architecture lives in motion. It is the destination for the patterns codified at Axion Index." },
  { label: "In writing", title: "The Operating Architect (2026).", body: "The book that gathers the codified patterns, the institutional cases, and the doctrine into a single working text." },
];

export default function Founder() {
  return (
    <div className="min-h-screen">


      {/* ══════════════════════════════════════════════════════════════════
          HERO — The Making of the Operating Architect
      ══════════════════════════════════════════════════════════════════ */}
      <header
        className="relative min-h-screen flex items-stretch overflow-hidden"
        style={{ background: "#080808" }}
      >
        {/* Back to home arrow — top right */}
        <Link
          href="/"
          className="absolute top-6 right-6 z-20 flex items-center gap-2 font-jetbrains text-[10px] tracking-[0.25em] uppercase text-[var(--fg-4)] hover:text-[var(--fg)] transition-colors duration-300 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Home
        </Link>
        {/* LEFT — full-height B&W photo with colour hover */}
        <div className="hidden md:block w-[42%] lg:w-[45%] relative shrink-0 group/photo">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #080808 0%, transparent 18%), linear-gradient(to left, #080808 0%, transparent 12%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          {/* B&W — default visible */}
          <img
            src="/nitishpic.png"
            alt="Nitin Nahata"
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 group-hover/photo:opacity-0"
            style={{ filter: "grayscale(100%)" }}
          />
          {/* Colour — visible on hover */}
          <img
            src="/nitishcolorfull.png"
            alt="Nitin Nahata"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 group-hover/photo:opacity-100"
          />
        </div>

        {/* RIGHT — content */}
        <div
          className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 relative z-10"
          style={{ paddingTop: "clamp(100px,14vh,160px)", paddingBottom: "clamp(60px,8vh,100px)" }}
        >
          {/* Name label */}
          <Reveal>
            <span
              className="font-serif tracking-[0.35em] uppercase mb-8 block"
              style={{ fontSize: "clamp(9px,0.75vw,11px)", color: "#C9A84C" }}
            >
              NITIN NAHATA
            </span>
          </Reveal>

          {/* Main title */}
          <Reveal delay={0.1}>
            <h1
              className="font-serif font-normal leading-[1.0] tracking-[-0.02em] mb-10"
              style={{
                fontSize: "clamp(36px,5.5vw,76px)",
                color: "#F5F0E8",
              }}
            >
              The Making<br />
              of the<br />
              Operating<br />
              Architect
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.18}>
            <p
              className="font-serif font-light leading-[1.5] mb-12"
              style={{
                fontSize: "clamp(16px,1.5vw,20px)",
                color: "rgba(200,195,185,0.7)",
                maxWidth: "36ch",
              }}
            >
              A 23-Year Journey Through Collision, Scars &amp; Conviction
            </p>
          </Reveal>

          {/* Italic quote — gold, no border */}
          <Reveal delay={0.26}>
            <p
              className="font-serif italic leading-[1.75]"
              style={{
                fontSize: "clamp(14px,1.2vw,18px)",
                color: "#C9A84C",
                maxWidth: "42ch",
              }}
            >
              &ldquo;A bamboo plant spends years building roots underground. No visible shoot. No measurable progress. Then, in what looks like weeks, it rises. The speed is not sudden. It was always happening — invisibly, structurally, below the surface.&rdquo;
            </p>
          </Reveal>

          {/* Thin vertical line below quote */}
          <Reveal delay={0.34}>
            <div
              className="mt-8"
              style={{ width: "1px", height: "48px", background: "rgba(255,255,255,0.2)" }}
            />
          </Reveal>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full h-[20vh]"
          style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)", zIndex: 3 }}
        />
      </header>
      {/* ══════════════════════════════════════════════════════════════════
          THE SOIL — BEFORE 2003
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative"
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "clamp(80px,12vh,160px) 0",
        }}
      >
        <div className="shell">

          {/* Section header */}
          <Reveal>
            <div className="mb-14 max-w-[680px] mx-auto">
              <span
                className="font-jetbrains tracking-[0.35em] uppercase block mb-1"
                style={{ fontSize: "12px", color: "#C9A84C" }}
              >
                THE SOIL
              </span>
              <span
                className="font-jetbrains tracking-[0.3em] uppercase block mb-8"
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
              >
                BEFORE 2003
              </span>
              <h2
                className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-8"
                style={{ fontSize: "clamp(28px,3.8vw,54px)", color: "#F5F0E8", maxWidth: "18ch" }}
              >
                Where the operating<br />
                system began writing itself
              </h2>
              <p
                className="font-sans font-light leading-[1.7]"
                style={{ fontSize: "clamp(13px,1.1vw,16px)", color: "rgba(200,195,185,0.55)", maxWidth: "62ch" }}
              >
                Every architect needs material to work with. For buildings, it is steel and concrete. For people systems, it is something less visible: a way of reading the world, a comfort with responsibility, an internal compass that holds when external certainty disappears.
              </p>
            </div>
          </Reveal>

          {/* Story cards */}
          <div className="flex flex-col gap-6 max-w-[900px] mx-auto">

            {/* Card 1 — The Origins */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-10"
              style={{
                background: "rgba(18,18,18,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              <span
                className="font-jetbrains tracking-[0.3em] uppercase block mb-4"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}
              >
                DELHI · A MARWARI HOUSEHOLD
              </span>
              <h3
                className="font-serif font-normal mb-5"
                style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#F5F0E8" }}
              >
                The Origins
              </h3>
              <p
                className="font-sans font-light leading-[1.7] mb-6"
                style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.6)" }}
              >
                Born into a world where the script was laid out early: Commerce, CA, Business, Respectability. But within that structure lived a different kind of influence. A maternal grandfather who began working at thirteen, who embodied responsibility before teaching it.
              </p>
              <div
                className="pl-5"
                style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
              >
                <p
                  className="font-serif italic leading-[1.7]"
                  style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "#C9A84C" }}
                >
                  &ldquo;The first operating system is not designed. It is absorbed — from the people who raise you, the values they embody without declaring, and the quiet conviction that thinking for yourself is not defiance but duty.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Card 2 — The First Collision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-10"
              style={{
                background: "rgba(18,18,18,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              <span
                className="font-jetbrains tracking-[0.3em] uppercase block mb-4"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}
              >
                DELHI · 2002 — SRCC VS. BANGALORE
              </span>
              <h3
                className="font-serif font-normal mb-5"
                style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#F5F0E8" }}
              >
                The First Collision
              </h3>
              <p
                className="font-sans font-light leading-[1.7] mb-6"
                style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.6)" }}
              >
                SRCC held firm within my consciousness — not simply a college but a verdict. When the letter came confirming what everyone expected, the path seemed settled. But life rarely honours the scripts we write for ourselves. At eighteen, standing between certainty and duty, I chose Bangalore. Not because I wanted to leave. But because accountability felt familiar.
              </p>
              <div
                className="pl-5"
                style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
              >
                <p
                  className="font-serif italic leading-[1.7]"
                  style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "#C9A84C" }}
                >
                  &ldquo;The choices that are easy do not form identity. The ones that arrive at the worst possible time and demand an answer — those reflect character, not convenience.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Card 3 — The Anonymous Years */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-10"
              style={{
                background: "rgba(18,18,18,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              <span
                className="font-jetbrains tracking-[0.3em] uppercase block mb-4"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}
              >
                BANGALORE · 2002–2005
              </span>
              <h3
                className="font-serif font-normal mb-5"
                style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#F5F0E8" }}
              >
                The Anonymous Years
              </h3>
              <p
                className="font-sans font-light leading-[1.7] mb-6"
                style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.6)" }}
              >
                Bangalore did not welcome me with clarity. It met me with stillness — the kind that unnerves you when you are eighteen and suddenly invisible in a city that does not know your past or care about your promise. Anonymity has a strange discipline. It cleans out the noise you did not know you were carrying.
              </p>
              <div
                className="pl-5"
                style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
              >
                <p
                  className="font-serif italic leading-[1.7]"
                  style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "#C9A84C" }}
                >
                  &ldquo;Anonymity is the crucible that separates those who need validation from those who generate their own momentum.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Card 4 — HR at TISS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-10"
              style={{
                background: "rgba(18,18,18,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px",
              }}
            >
              <span
                className="font-jetbrains tracking-[0.3em] uppercase block mb-4"
                style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}
              >
                MUMBAI
              </span>
              <h3
                className="font-serif font-normal mb-5"
                style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#F5F0E8" }}
              >
                HR at TISS
              </h3>
              <p
                className="font-sans font-light leading-[1.7] mb-6"
                style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.6)" }}
              >
                I did not choose HR as a fallback. I chose it because I finally recognised that my instinct for people and my instinct for business were not separate — they were the same instinct. Solve people problems with a business mind. Solve business problems with a people heart.
              </p>
              <div
                className="pl-5"
                style={{ borderLeft: "2px solid rgba(201,168,76,0.35)" }}
              >
                <p
                  className="font-serif italic leading-[1.7]"
                  style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "#C9A84C" }}
                >
                  &ldquo;The people instinct and the business instinct are not separate. They are the same instinct expressed through different lenses.&rdquo;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE ROOTS — 2003–2019
      ══════════════════════════════════════════════════════════════════ */}
      <RootsSection />

      {/* ══════════════════════════════════════════════════════════════════
          THE SYNTHESIS — Section 4
      ══════════════════════════════════════════════════════════════════ */}
      <SynthesisSection />

      {/* ══════════════════════════════════════════════════════════════════
          THE ECONOMICS — Section 5
      ══════════════════════════════════════════════════════════════════ */}
      <EconomicsSection />

      {/* ── FOUNDER FOOTER ── */}
      <footer className="relative border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#050505" }}>
        <div className="flex flex-col items-center justify-center py-16 gap-6">
          {/* Diamond icon */}
          <div style={{ color: "rgba(201,168,76,0.5)", fontSize: "28px", lineHeight: 1 }}>◇</div>

          {/* Name + title */}
          <div className="text-center">
            <p className="font-serif font-normal mb-1" style={{ fontSize: "clamp(18px,2vw,24px)", color: "#F5F0E8" }}>
              Nitin Nahata
            </p>
            <p className="font-serif font-light" style={{ fontSize: "clamp(12px,1.1vw,15px)", color: "rgba(200,195,185,0.45)" }}>
              The Operating Architect
            </p>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nitinnahata"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono tracking-[0.35em] uppercase transition-colors duration-300"
            style={{ fontSize: "11px", color: "#C9A84C" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E8C97A")}
            onMouseLeave={e => (e.currentTarget.style.color = "#C9A84C")}
          >
            LinkedIn
          </a>

          {/* Copyright */}
          <p className="font-mono tracking-[0.3em] uppercase" style={{ fontSize: "9px", color: "rgba(255,255,255,0.2)" }}>
            &copy; 2026 Nitin Nahata. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

// ─── THE ROOTS SECTION ────────────────────────────────────────────────────────

const ROOTS_TABS = [
  {
    id: "wipro",
    label: "WIPRO",
    num: "I.",
    period: "2003–2004",
    title: "The Monkey on My Back",
    sub: "GREENFIELD MANUFACTURING · PLANT HR",
    body: "At twenty-one, I stepped into the shoes of a plant manager at a manufacturing unit originally acquired from Godrej. Every worker on the floor was older than me. Union dynamics were real. I was the sole HR point of contact — production hiring, training coordination, post-acquisition policy integration, and the first employee engagement survey the unit had ever conducted.",
    scar: "\"The first system you ever design is yourself. When no one expects you to lead, the only credential that works is presence — not position, not tenure, not the right answer, but the willingness to step into responsibility and hold the room.\"",
    installed: "Designing for ambiguity. Sensitivity as precision, not softness. The instinct to step in before being asked.",
    tag: "Voice Architecture → Cultural Contracts",
  },
  {
    id: "scb",
    label: "STANDARD CHARTERED",
    num: "II.",
    period: "2004–2008",
    title: "The Night HR Became Dangerous",
    sub: "CONSUMER BANKING, REWARDS, SCOPE INTERNATIONAL",
    body: "The business had a comfortable hypothesis about why people were leaving. We challenged it. Dismantled the hypothesis with data. The authority was challenged. Senior leaders pushed back. But the numbers held. Four hours later, every number held. Overnight, we went from being the HR team to being the Wizards of Data.",
    scar: "\"The moment your authority gets challenged and the data holds — that is when HR stops asking for a seat and starts being needed in the room.\"",
    installed: "Data as the language of authority. When the comfortable hypothesis is wrong, the person who proves it with evidence permanently changes how the function is perceived.",
    tag: "HR as Risk Architecture → Data as Authority",
  },
  {
    id: "hsbc",
    label: "HSBC",
    num: "III.",
    period: "2008–2009",
    title: "The Pilot That Changed the Room",
    sub: "SOUTH INDIA GENERALIST & CORPORATE REWARDS",
    body: "South India was lagging because the business only wanted ready-made talent. But rather than confronting the belief head-on, I designed pilots — small, undeniable proofs that alternative approaches could work. The pilots turned scepticism into trust. Business managers who had resisted began advocating. Not through persuasion. Through proof.",
    scar: "\"Dignity is tested in contraction, not growth. The frameworks you design for hard times matter more — because people remember how they were treated when it cost something.\"",
    installed: "When the room will not listen to the argument, design a proof so small it cannot be ignored. Let the evidence do the persuading. Constraint is the mother of architecture.",
    tag: "Belief Translation → Proof Before Philosophy",
  },
  {
    id: "tgb",
    label: "TATA GLOBAL BEVERAGES",
    num: "IV.",
    period: "2009–2019",
    title: "The Decade That Made the Architect",
    sub: "GLOBAL HR, JV ARCHITECTURE, M&A INTEGRATION",
    body: "Ten years. Three stints. The platter was placed in my hands. Three heritage brands — Tata Tea, Tetley, Eight O'Clock Coffee — each over a century old. I managed Global HR across Europe, the Middle East, North America, Kenya, Australia, and South Asia. The Starbucks People Charter. The London to Mumbai HQ relocation — two hundred roles, ninety-five percent retention. The only HR leader on the Maverick team.",
    scar: "\"The decade that gives you everything is also the decade that prepares you to leave it behind. Operating as a leader before the title is not ambition — it is architecture.\"",
    installed: "Values must be structural, not aspirational. If the benefits architecture contradicts the culture narrative, the architecture wins — people believe what they experience, not what they are told.",
    tag: "Humanity Over Hierarchy → Values as Architecture",
  },
];

function RootsSection() {
  const [active, setActive] = useState(0);
  const tab = ROOTS_TABS[active];

  return (
    <section
      className="relative"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "clamp(80px,12vh,160px) 0",
      }}
    >
      <div className="shell">
        {/* Header */}
        <div className="mb-14 max-w-[680px] mx-auto">
          <span className="font-jetbrains tracking-[0.35em] uppercase block mb-1" style={{ fontSize: "12px", color: "#C9A84C" }}>
            THE ROOTS
          </span>
          <span className="font-jetbrains tracking-[0.3em] uppercase block mb-8" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
            2003–2019
          </span>
          <h2
            className="font-serif font-normal leading-[1.05] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(28px,3.8vw,54px)", color: "#F5F0E8" }}
          >
            Preparing for the war<br />when you are not at war
          </h2>
          <p className="font-sans font-light leading-[1.7]" style={{ fontSize: "clamp(13px,1.1vw,16px)", color: "rgba(200,195,185,0.55)", maxWidth: "62ch" }}>
            In the root years, the organisation around you is already built. Someone else designed the architecture. Your job is to operate inside it, learn its mechanics, understand what holds and what breaks.
          </p>
        </div>

        {/* Tab bar */}
        <div className="max-w-[680px] mx-auto mb-0">
          <div className="flex items-center gap-0 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {ROOTS_TABS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="font-jetbrains tracking-[0.2em] uppercase px-4 py-3 text-left transition-all duration-250 relative"
                style={{
                  fontSize: "clamp(9px,0.75vw,11px)",
                  color: active === i ? "#C9A84C" : "rgba(255,255,255,0.35)",
                  background: "transparent",
                  borderBottom: active === i ? "2px solid #C9A84C" : "2px solid transparent",
                  marginBottom: "-1px",
                  whiteSpace: "nowrap",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active card */}
        <div className="max-w-[680px] mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 sm:p-10"
            style={{
              background: "rgba(18,18,18,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
            }}
          >
            {/* Company + period */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-serif italic" style={{ fontSize: "clamp(16px,1.5vw,22px)", color: "#C9A84C" }}>{tab.num}</span>
              <span className="font-jetbrains tracking-[0.25em] uppercase font-semibold" style={{ fontSize: "11px", color: "#F5F0E8" }}>{tab.label}</span>
              <span className="font-jetbrains tracking-[0.2em]" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>{tab.period}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif font-normal mb-2" style={{ fontSize: "clamp(22px,2.4vw,34px)", color: "#F5F0E8" }}>
              {tab.title}
            </h3>

            {/* Sub */}
            <p className="font-jetbrains tracking-[0.2em] uppercase mb-6" style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)" }}>
              {tab.sub}
            </p>

            {/* Body */}
            <p className="font-sans font-light leading-[1.7] mb-8" style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.6)" }}>
              {tab.body}
            </p>

            {/* THE SCAR box */}
            <div
              className="p-6 mb-6"
              style={{
                background: "rgba(10,10,10,0.8)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderLeft: "3px solid rgba(201,168,76,0.5)",
              }}
            >
              <span className="font-jetbrains tracking-[0.3em] uppercase block mb-3" style={{ fontSize: "9px", color: "#C9A84C" }}>
                THE SCAR
              </span>
              <p className="font-serif italic leading-[1.7]" style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "#C9A84C" }}>
                {tab.scar}
              </p>
            </div>

            {/* What this collision installed */}
            <div className="mb-6">
              <span className="font-jetbrains tracking-[0.3em] uppercase block mb-3" style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)" }}>
                WHAT THIS COLLISION INSTALLED
              </span>
              <p className="font-sans font-light leading-[1.65]" style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(200,195,185,0.75)" }}>
                {tab.installed}
              </p>
            </div>

            {/* Tag pill */}
            <div
              className="inline-block px-4 py-2 font-jetbrains tracking-[0.15em] uppercase"
              style={{
                fontSize: "9px",
                color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
              }}
            >
              {tab.tag}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {ROOTS_TABS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? "20px" : "6px",
                    height: "6px",
                    background: active === i ? "#C9A84C" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── THE SYNTHESIS SECTION ────────────────────────────────────────────────────

const TIMELINE_ITEMS = [
  { source: "FROM THE SOIL",         quote: '"The first operating system is not designed. It is absorbed."' },
  { source: "FROM WIPRO",            quote: '"Leadership is presence, not position."' },
  { source: "FROM STANDARD CHARTERED", quote: '"HR earns authority through conviction, not compliance."' },
  { source: "FROM HSBC",             quote: '"Dignity is tested in contraction, not growth."' },
  { source: "FROM TATA",             quote: '"Integration is belief translation, not policy alignment."' },
  { source: "FROM UDAAN",            quote: '"Build systems for the company becoming, not the company that exists."' },
  { source: "FROM GAMESKRAFT",       quote: '"The architecture must be real before the crisis arrives."' },
];

const CORE_CARDS = [
  { label: "CORE THESIS",     value: "People Systems Fail Before Strategy Does" },
  { label: "CORE FRAMEWORK",  value: "Belief → Conviction → Rhythm" },
  { label: "CORE CREDO",      value: "Humanity Over Hierarchy" },
];

function SynthesisSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "clamp(80px,14vh,180px) 0",
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="shell relative z-10">

        {/* Header — centered */}
        <div className="text-center mb-20">
          <Reveal>
            <span
              className="font-serif tracking-[0.35em] uppercase block mb-6"
              style={{ fontSize: "12px", color: "#C9A84C" }}
            >
              THE SYNTHESIS
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="font-serif font-normal leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px,5vw,72px)", color: "#F5F0E8" }}
            >
              How Lived Chapters<br />
              Became a Philosophy
            </h2>
          </Reveal>
        </div>

        {/* Vertical timeline — centered */}
        <div className="flex flex-col items-center mb-20">
          {TIMELINE_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              {/* Gold dot */}
              <div
                className="rounded-full shrink-0"
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#C9A84C",
                  boxShadow: "0 0 8px rgba(201,168,76,0.5)",
                  margin: "0 auto",
                }}
              />
              {/* Connector line */}
              {i < TIMELINE_ITEMS.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "16px",
                    background: "rgba(201,168,76,0.2)",
                  }}
                />
              )}
              {/* Content */}
              <div className="py-2">
                <span
                  className="font-serif tracking-[0.3em] uppercase block mb-2"
                  style={{ fontSize: "10px", color: "rgba(200,195,185,0.45)" }}
                >
                  {item.source}
                </span>
                <p
                  className="font-serif italic"
                  style={{
                    fontSize: "clamp(13px,1.1vw,16px)",
                    color: "rgba(220,215,205,0.7)",
                    maxWidth: "44ch",
                  }}
                >
                  {item.quote}
                </p>
              </div>
              {/* Connector line after content */}
              {i < TIMELINE_ITEMS.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "16px",
                    background: "rgba(201,168,76,0.2)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Core cards — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[760px] mx-auto">
          {CORE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 text-center"
              style={{
                background: "rgba(18,18,18,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
              }}
            >
              <span
                className="font-serif tracking-[0.3em] uppercase block mb-4"
                style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}
              >
                {card.label}
              </span>
              <p
                className="font-serif font-normal leading-[1.2]"
                style={{ fontSize: "clamp(16px,1.5vw,22px)", color: "#C9A84C" }}
              >
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom vertical line */}
        <div className="flex justify-center mt-16">
          <div style={{ width: "1px", height: "60px", background: "rgba(255,255,255,0.15)" }} />
        </div>

      </div>
    </section>
  );
}

// ─── THE ECONOMICS SECTION ────────────────────────────────────────────────────

const PROOF_ROWS = [
  { stat: "96%",       label: "Survey Participation",       context: "SCB — first engagement campaign",                  intervention: 'Designed "It Belongs to You" Q12 campaign',          result: "Shifted HR perception from admin to authority" },
  { stat: "95%",       label: "Retention on HQ Relocation", context: "TGB — London to Mumbai, 200 roles",                intervention: "Designed transition architecture with belief-first approach", result: "Zero disruption to operations" },
  { stat: "90%",       label: "Adoption in 6 Months",       context: "TGB — Global org restructuring",                   intervention: "Designed shared operating rhythm across 3 legacy cultures", result: "Unified identity across continents" },
  { stat: "800→4K+",   label: "On-roll; 7.5K→27K+ Off-roll",context: "Udaan — hypergrowth",                              intervention: "Built people engine for national-scale ops across 28 states, 22 languages", result: "95% manning through COVID" },
  { stat: "97.1%",     label: "Top Performer Retention",    context: "Gameskraft — regulatory crisis",                   intervention: "Golden Handshake: dignity-first separation, 27% roles impacted", result: "Ambassadors, not casualties" },
  { stat: "90%+",      label: "Offer-to-Join",              context: "Gameskraft — zero employer brand to institution",   intervention: "Built employer identity + Generation-G campus programme", result: "88% cost reduction vs lateral hiring" },
  { stat: "<10%",      label: "Engineering Attrition",      context: "Gameskraft — comp philosophy redesign",             intervention: "No variable pay, fixed bands, ESOPs, Performance ESOPs", result: "18 months of resistance → model proved" },
  { stat: "2x ROI",    label: "HR Function Transformation", context: "Gameskraft — HR function transformation",           intervention: "From 9-person event team to profit-enabling function",  result: "HR savings = 2x annual HR cost" },
  { stat: "4.3",       label: "Glassdoor Rating",           context: "Gameskraft — culture under crisis",                 intervention: "Maintained Krafter-first culture through existential threat", result: "Top-quartile engagement sustained" },
];

const SIX_C = [
  { name: "Clarity",     desc: "How decisions move" },
  { name: "Conviction",  desc: "How belief becomes behaviour" },
  { name: "Commitment",  desc: "How energy aligns" },
  { name: "Craft",       desc: "How capability develops" },
  { name: "Culture",     desc: "How truth returns to the system" },
  { name: "Consequence", desc: "How accountability lives" },
];

const DAY_ZERO = [
  "9-person event logistics team (no HR function)",
  "300 employees",
  "250 open roles",
  "Zero employer identity",
  "No performance architecture",
  "No compensation philosophy",
  "No campus pipeline",
];

const TWENTY_FOUR_MONTHS = [
  "Profit-enabling HR function (2x ROI)",
  "Institution-grade people architecture",
  "Generation-G campus programme (88% cost reduction)",
  "Compensation philosophy that survived 18 months of resistance",
  "Golden Handshake crisis protocol",
  "Glassdoor 4.3, top-quartile engagement",
  "Engineering attrition in single digits",
];

function EconomicsSection() {
  return (
    <section
      className="relative"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "clamp(80px,12vh,160px) 0",
      }}
    >
      <div className="shell">

        {/* The Signature Model */}
        <div className="text-center mb-10">
          <Reveal>
            <h3 className="font-serif font-normal" style={{ fontSize: "clamp(24px,3vw,42px)", color: "#F5F0E8" }}>
              The Signature Model
            </h3>
          </Reveal>
        </div>

        <div className="max-w-[760px] mx-auto mb-20">
          <Reveal delay={0.1}>
            <div className="p-8 sm:p-12" style={{ background: "rgba(18,18,18,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}>

              {/* Single row: Belief → Conviction → Rhythm */}
              <div className="flex items-start justify-center gap-0 mb-8 flex-wrap">

                {/* Belief */}
                <div className="flex flex-col items-center" style={{ width: "180px" }}>
                  <div className="flex items-center justify-center rounded-full mb-4"
                    style={{ width: "140px", height: "140px", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(10,10,10,0.8)" }}>
                    <span className="font-serif italic" style={{ fontSize: "22px", color: "#C9A84C" }}>Belief</span>
                  </div>
                  <p className="font-serif font-light text-center leading-[1.6]" style={{ fontSize: "12px", color: "rgba(200,195,185,0.5)", maxWidth: "14ch" }}>
                    Absorbed in the Soil. Tested at Udaan. Every founder starts here.
                  </p>
                </div>

                {/* Arrow 1 */}
                <div className="flex items-start pt-14 px-3">
                  <span className="font-serif" style={{ fontSize: "18px", color: "rgba(201,168,76,0.45)" }}>→</span>
                </div>

                {/* Conviction */}
                <div className="flex flex-col items-center" style={{ width: "180px" }}>
                  <div className="flex items-center justify-center rounded-full mb-4"
                    style={{ width: "140px", height: "140px", border: "2px solid rgba(201,168,76,0.7)", background: "rgba(10,10,10,0.8)", boxShadow: "0 0 20px rgba(201,168,76,0.1)" }}>
                    <span className="font-serif italic" style={{ fontSize: "22px", color: "#C9A84C" }}>Conviction</span>
                  </div>
                  <p className="font-serif font-light text-center leading-[1.6]" style={{ fontSize: "12px", color: "rgba(200,195,185,0.5)", maxWidth: "16ch" }}>
                    Earned through collisions at SCB, HSBC, TGB. Data, proof, and lived experience.
                  </p>
                </div>

                {/* Arrow 2 */}
                <div className="flex items-start pt-14 px-3">
                  <span className="font-serif" style={{ fontSize: "18px", color: "rgba(201,168,76,0.45)" }}>→</span>
                </div>

                {/* Rhythm */}
                <div className="flex flex-col items-center" style={{ width: "180px" }}>
                  <div className="flex items-center justify-center rounded-full mb-4"
                    style={{ width: "140px", height: "140px", border: "1px solid rgba(201,168,76,0.35)", background: "rgba(10,10,10,0.8)" }}>
                    <span className="font-serif italic" style={{ fontSize: "22px", color: "#C9A84C" }}>Rhythm</span>
                  </div>
                  <p className="font-serif font-light text-center leading-[1.6]" style={{ fontSize: "12px", color: "rgba(200,195,185,0.5)", maxWidth: "14ch" }}>
                    Designed at Gameskraft. When conviction becomes repeatable behaviour.
                  </p>
                </div>

              </div>

              {/* What breaks */}
              <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="font-serif text-center leading-[1.65]" style={{ fontSize: "clamp(12px,1vw,14px)", color: "rgba(200,195,185,0.55)" }}>
                  <strong className="font-semibold" style={{ color: "rgba(240,235,225,0.8)" }}>What breaks without it:</strong>{" "}
                  Belief without conviction becomes fragility. Conviction without rhythm becomes bureaucracy. Speed without architecture becomes chaos.
                </p>
              </div>

            </div>
          </Reveal>
        </div>

        {/* The 6C Operating System */}
        <div className="text-center mb-10">
          <Reveal>
            <h3 className="font-serif font-normal" style={{ fontSize: "clamp(24px,3vw,42px)", color: "#F5F0E8" }}>
              The 6C Operating System
            </h3>
          </Reveal>
        </div>

        <div className="max-w-[760px] mx-auto mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {SIX_C.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 text-center"
                style={{ background: "rgba(18,18,18,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}
              >
                <span className="font-serif font-normal block mb-2" style={{ fontSize: "clamp(18px,1.8vw,24px)", color: "#C9A84C" }}>
                  {c.name}
                </span>
                <span className="font-serif font-light" style={{ fontSize: "12px", color: "rgba(200,195,185,0.5)" }}>
                  {c.desc}
                </span>
              </motion.div>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="font-serif italic text-center" style={{ fontSize: "clamp(12px,1vw,14px)", color: "rgba(200,195,185,0.4)" }}>
              These six domains map directly to the six chapters of The Operating Architect book.
            </p>
          </Reveal>
        </div>

        {/* What Comes Next */}
        <div className="mt-24 pt-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-center mb-14">
            <Reveal>
              <span className="font-serif tracking-[0.35em] uppercase block mb-4" style={{ fontSize: "11px", color: "#C9A84C" }}>
                WHAT COMES NEXT
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif font-normal leading-[1.05] tracking-[-0.02em]" style={{ fontSize: "clamp(28px,4vw,52px)", color: "#F5F0E8" }}>
                The arc continues
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[860px] mx-auto mb-16">
            {[
              {
                icon: "📖",
                title: "The Books",
                body: <><em>Baptism by Chaos</em> — the startup HR survival manual. <em>The Operating Architect</em> — the codified philosophy. Two books that turn lived scars into transferable architecture.</>,
              },
              {
                icon: "⚙️",
                title: <>The Startup<br />— HROS</>,
                body: "A people operating system for unfinished organisations. Not another HR tool — but the codification of every framework forged through two decades of collision.",
              },
              {
                icon: "🎯",
                title: "The Mission",
                body: "Democratising HR through codification. Making institutional-grade people architecture accessible to every growing company, not just those who can afford a twenty-year veteran.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-7"
                style={{ background: "rgba(18,18,18,0.7)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px" }}
              >
                <div className="text-[32px] mb-5">{item.icon}</div>
                <h3 className="font-serif font-normal mb-4" style={{ fontSize: "clamp(16px,1.5vw,20px)", color: "#F5F0E8" }}>
                  {item.title}
                </h3>
                <p className="font-serif font-light leading-[1.7]" style={{ fontSize: "clamp(12px,1vw,14px)", color: "rgba(200,195,185,0.55)" }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="font-serif italic text-center max-w-[680px] mx-auto" style={{ fontSize: "clamp(16px,1.8vw,24px)", color: "rgba(200,195,185,0.7)", lineHeight: 1.6 }}>
              &ldquo;The founders who watched me build are funding what I build next. The arc is complete. The next chapter is my own.&rdquo;
            </p>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
