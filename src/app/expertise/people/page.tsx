import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function PeopleArchitecture() {
  return (
    <div className="shell">
      <Reveal>
        <section className="page-hero">
          <div className="breadcrumb mb-6">
            <Link href="/">Home</Link><span className="mx-2 text-[var(--cyan)]">/</span><Link href="/#practices">Practices</Link><span className="mx-2 text-[var(--cyan)]">/</span><span>People Architecture</span>
          </div>
          <span className="ill-eyebrow"><span className="num">§PA</span> · The Foundation Practice</span>
          <h1 className="ill-display mt-6 max-w-[18ch]">The architecture that lets the organisation <em>survive the person</em>.</h1>
          <p className="text-[18px] leading-[1.55] text-[var(--fg-soft)] mt-6 max-w-[64ch]">People Architecture is the foundation practice. Every other practice — Labour Codes, AI Edge Lab, Family Business — sits on top of it. Without architecture, the rest is intervention without ground.</p>
        </section>
      </Reveal>

      <section className="py-20" id="bcr">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§PA · 02</span> · The BCR framework</span></Reveal>
            <Reveal delay={0.1}><span className="ill-eyebrow"><span className="dim">Belief → Conviction → Rhythm</span></span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Three stages. <em>One sequence.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">Every engagement diagnoses where the organisation is stuck. The break is almost always at the same place — between Conviction and Rhythm. Belief is loud; rhythm is quiet; conviction is what bridges them.</p></Reveal>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--ink-line)] mt-12">
          {[
            {
              num: "B · Stage 01",
              name: "<span class='font-serif italic text-[var(--gold)] mr-2'>— </span>Belief",
              desc: "What the founder, board and operating leadership actually hold to be true about people, scale, performance, and risk. Often inconsistent across the room. Always upstream of every other failure.",
              break: "Break · belief drift"
            },
            {
              num: "C · Stage 02",
              name: "<span class='font-serif italic text-[var(--gold)] mr-2'>— </span><em>Conviction</em>",
              desc: "The compressed point of view the institution is willing to defend in public, in policy, and in pay. The bridge layer. Where most organisations stop investing — and where the architecture quietly collapses.",
              break: "Break · conviction-to-rhythm gap"
            },
            {
              num: "R · Stage 03",
              name: "<span class='font-serif italic text-[var(--gold)] mr-2'>— </span>Rhythm",
              desc: "The operating cadence that turns conviction into behaviour — calendars, reviews, decisions, signals. Codified once, run weekly. The rhythm is where culture actually lives.",
              break: "Break · rhythm decay"
            }
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-r border-b border-[var(--ink-line)] p-8 md:p-10 bg-[rgba(11,13,20,0.5)] flex flex-col gap-4 min-h-[280px] relative">
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--gold)]">{step.num}</span>
                <h3 className="font-serif text-[44px] font-medium leading-none text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: step.name }} />
                <p className="text-[15px] leading-[1.55] text-[var(--fg-soft)]">{step.desc}</p>
                <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)] font-mono text-[10.5px] tracking-widest uppercase text-[var(--accent-2)]">{step.break}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 max-w-[780px] p-6 bg-[rgba(181,102,58,0.05)] border-l-2 border-[var(--accent-2)]">
          <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent-2)]">The diagnostic</div>
          <p className="text-[16px] text-[var(--fg-soft)] mt-2">You are not stuck on three things. You are stuck on <em>one</em> — at one of these three stages. The diagnostic finds it. The redesign installs it.</p>
        </Reveal>
      </section>

      <section className="bg-[rgba(11,13,20,0.4)] -mx-[32px] px-[32px] py-20 border-y border-[var(--ink-line)]" id="surfaces">
        <div className="max-w-[1280px] mx-auto">
          <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
            <div className="flex flex-col gap-2">
              <Reveal><span className="ill-eyebrow"><span className="num">§PA · 03</span> · The surfaces and their owners</span></Reveal>
            </div>
            <div>
              <Reveal delay={0.2}><h2 className="ill-display">People architecture works across <em>four surfaces</em> — each with a different owner.</h2></Reveal>
              <Reveal delay={0.3}><p className="ill-lede mt-4">People architecture is not "HR work". It is four distinct surfaces with four distinct owners. Confusion at this layer is why most organisations cannot tell whether their people problem is a strategy, structure, system, or signalling problem.</p></Reveal>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-[var(--ink-line)]">
            {[
              { name: "Strategy", desc: "What the business is asking the workforce to do. Sized, sequenced, scenarioed against capital and time.", owner: "Owner · CEO + CFO" },
              { name: "Structure", desc: "Org design, role taxonomy, decision rights. The skeleton. Where the strategy actually meets gravity.", owner: "Owner · CEO + CHRO" },
              { name: "Systems", desc: "Comp, performance, talent, succession. The mechanics. Where conviction either gets paid for or gets hollowed out.", owner: "Owner · CHRO" },
              { name: "Signalling", desc: "What the institution actually rewards, tolerates, and punishes — in public and in private. The truth-test for everything above it.", owner: "Owner · CEO + Board" }
            ].map((surface, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <article className="border-r border-b border-[var(--ink-line)] p-8 bg-[rgba(11,13,20,0.5)] flex flex-col gap-4 min-h-[280px]">
                  <span className="font-serif italic font-medium text-[56px] text-[var(--gold)] leading-[0.85]">{i + 1}</span>
                  <h4 className="font-serif text-[26px] font-medium leading-[1.05] text-[var(--fg)]">{surface.name}</h4>
                  <p className="text-[14px] leading-[1.55] text-[var(--fg-soft)]">{surface.desc}</p>
                  <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)] font-mono text-[10px] tracking-widest uppercase text-[var(--fg)]">{surface.owner}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[680px]">
          <Reveal><span className="ill-eyebrow"><span className="num">§PA · 04</span> · Engagement</span></Reveal>
          <Reveal delay={0.1}><h2 className="ill-display mt-6">Diagnose. Codify. Redesign. <em>Operate.</em></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-[17px] leading-[1.55] text-[var(--fg-soft)] mt-6">
              A People Architecture engagement runs across all four surfaces and ends with a redesign and an operating handover. Most engagements run 12–16 weeks for the diagnostic and codification, with the operating layer continuing into HROS.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-4 mt-8">
            <Link className="ill-btn ill-btn--primary" href="/connect?practice=people-architecture">Begin a Diagnostic <span className="arrow">→</span></Link>
            <Link className="ill-btn" href="/#practices">Other practices <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
