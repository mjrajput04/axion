import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function FamilyBusiness() {
  return (
    <div className="shell">
      <Reveal>
        <section className="page-hero">
          <div className="breadcrumb mb-6">
            <Link href="/">Home</Link><span className="mx-2 text-[var(--cyan)]">/</span><Link href="/#practices">Practices</Link><span className="mx-2 text-[var(--cyan)]">/</span><span>Family Business</span>
          </div>
          <span className="ill-eyebrow"><span className="num">§FB</span> · The Generational Practice</span>
          <h1 className="ill-display mt-6 max-w-[18ch]">Family enterprises don't fail at strategy. <em>They fail at architecture.</em></h1>
          <p className="text-[18px] leading-[1.55] text-[var(--fg-soft)] mt-6 max-w-[64ch]">By the second generation, most family enterprises are running an organisation the founder no longer fits, governed by structures the family no longer trusts, and inherited by people the institution has not yet earned. The work is to install five architectures before any of them collapses on the others.</p>
        </section>
      </Reveal>

      <section className="py-20" id="architectures">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§FB · 02</span> · The five architectures</span></Reveal>
            <Reveal delay={0.1}><span className="ill-eyebrow"><span className="dim">Sequenced · interdependent</span></span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Five architectures. <em>Sequenced.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">The order matters. Skip ownership and the family architecture cannot hold. Skip family and the institution cannot hold. Skip the operator and succession is theatre.</p></Reveal>
          </div>
        </header>

        <div className="border-t border-[var(--ink-line)]">
          {[
            {
              num: "01O",
              name: "<em>Ownership</em>",
              sub: "Equity · trusts · holding",
              body: "Who owns what, on what terms, with what rights — across generations, branches, and trustees. The most under-built architecture in most Indian family enterprises, and the one that fails first under stress.",
              failure: "Equity drift becomes governance drift becomes operational drift."
            },
            {
              num: "02F",
              name: "Family",
              sub: "Council · constitution · charter",
              body: "The forum where the family — not the company — decides who it is, what it stands for, and how it disagrees in public. Without this layer, every business decision becomes a family decision in disguise.",
              failure: "Family conflict leaks into operating decisions."
            },
            {
              num: "03I",
              name: "<em>Institution</em>",
              sub: "Board · audit · charter",
              body: "The non-family governance the enterprise needs to scale and outlive any individual. Independent directors with real authority, audit committees with real teeth, charter that survives a difficult year.",
              failure: "Board theatre — present in name, absent in authority."
            },
            {
              num: "04S",
              name: "Succession",
              sub: "Roles · readiness · sequencing",
              body: "Not \"who comes next\" but \"what role does the next generation hold, when, and on what readiness\". Codified before it is needed; decoupled from death and divorce; built around capability and contribution.",
              failure: "Inheritance treated as event, not architecture."
            },
            {
              num: "05O",
              name: "<em>Operator</em>",
              sub: "CEO bench · independence · accountability",
              body: "The person — family or not — who runs the business with operating accountability. Architected with a real mandate, real boundaries, and a real bench. Where most family enterprises freeze, the operator architecture is what unfreezes them.",
              failure: "Operator with title but without authority."
            }
          ].map((arch, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="grid grid-cols-1 md:grid-cols-[minmax(180px,220px)_minmax(220px,1fr)_1.4fr_1fr] gap-8 md:gap-12 py-10 border-b border-[var(--ink-line)] items-start">
                <div className="font-mono text-[11px] tracking-widest uppercase text-[var(--gold)]">
                  i · <strong className="block font-serif italic font-medium text-[56px] text-[var(--fg)] mt-1 leading-[0.9]">{arch.num}</strong>
                </div>
                <div>
                  <h3 className="font-serif text-[28px] font-medium leading-[1.05] text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: arch.name }} />
                  <div className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)] mt-2">{arch.sub}</div>
                </div>
                <p className="text-[15.5px] leading-[1.55] text-[var(--fg-soft)] max-w-[50ch]">{arch.body}</p>
                <aside className="bg-[var(--ink-1)] text-[var(--gold)] p-4 font-mono text-[10.5px] tracking-widest uppercase leading-[1.5] border border-[var(--ink-line)]">
                  <strong className="block mb-1 font-semibold text-[var(--fg)]">Failure mode</strong>
                  {arch.failure}
                </aside>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(240,196,107,0.03)] -mx-[32px] px-[32px] py-20 border-y border-[var(--ink-line)]">
        <div className="max-w-[1280px] mx-auto">
          <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
            <div className="flex flex-col gap-2">
              <Reveal><span className="ill-eyebrow"><span className="num">§FB · 03</span> · The reading</span></Reveal>
            </div>
            <div>
              <Reveal delay={0.2}><h2 className="ill-display">Where the architecture <em>actually breaks</em>.</h2></Reveal>
              <Reveal delay={0.3}><p className="ill-lede mt-4">A diagnostic across all five layers — what is built, what is improvised, what is missing, and which gap will be exposed first by the next generational, regulatory or capital event.</p></Reveal>
            </div>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-t border-l border-[var(--ink-line)]">
              <thead>
                <tr className="bg-[rgba(255,255,255,0.02)]">
                  {["Architecture", "Built", "Improvised", "Missing"].map((h) => (
                    <th key={h} className="p-4 text-left border-r border-b border-[var(--ink-line)] font-mono text-[10.5px] tracking-widest uppercase text-[var(--cyan)] font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[14.5px] text-[var(--fg-soft)] leading-[1.45]">
                {[
                  { k: "Ownership", b: "Equity register, dividend policy", i: "Trust drafting, branch terms", m: "Generational transfer mechanics" },
                  { k: "Family", b: "Informal council", i: "Constitution, dispute rules", m: "Charter, public expression" },
                  { k: "Institution", b: "Statutory board", i: "Audit committee depth", m: "Independent authority" },
                  { k: "Succession", b: "Stated heir", i: "Readiness assessment", m: "Sequencing & decoupling" },
                  { k: "Operator", b: "CEO seat filled", i: "Mandate scope", m: "Bench, accountability rhythm" }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 border-r border-b border-[var(--ink-line)] font-mono text-[11px] tracking-widest uppercase text-[var(--fg)]">{row.k}</td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.b}</td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.i}</td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[680px]">
          <Reveal><span className="ill-eyebrow"><span className="num">§FB · 04</span> · Engagement</span></Reveal>
          <Reveal delay={0.1}><h2 className="ill-display mt-6">Discreet. <em>Sequenced.</em> Generational.</h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-[17px] leading-[1.55] text-[var(--fg-soft)] mt-6">
              Family Business engagements run private — typically 6–9 months across the five architectures, often longer for the institution and operator layers. References available on request, not on the website.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-4 mt-8">
            <Link className="ill-btn ill-btn--primary" href="/connect?practice=family-business">Begin a Conversation <span className="arrow">→</span></Link>
            <Link className="ill-btn" href="/#practices">Other practices <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
