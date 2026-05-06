import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <div className="illuminated min-h-screen pt-[120px] pb-[80px]">
      <section className="page-hero">
        <div className="shell">
          <Reveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>About</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <span className="ill-eyebrow"><span className="num">§A</span> · About Axion Index</span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="ill-display mt-6 max-w-[18ch]">
              The patterns that let organisations <em>survive the person</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        {[
          {
            num: "01",
            label: "Genesis",
            title: "Why we exist.",
            body: "Axion Index exists to <strong>codify the patterns</strong> that let organisations grow and sustain their people architecture. The work is pattern-codification — converting individual intellect into institutional structure."
          },
          {
            num: "02",
            label: "The gap we close",
            title: "HR's biggest historical failure was <em>dependence on individual intellect</em>.",
            body: "<p>The right person, in the right role, making the right judgment in the moment. When that person leaves, the architecture collapses. Axion Index makes the patterns explicit, transferable, and institutional, so the architecture survives the person.</p><p class='mt-4'>Most organisations under-invest in the choices that look small in the moment and decide everything afterwards. By the time the cost shows, the architecture has already drifted.</p>"
          },
          {
            num: "03",
            label: "What we do",
            title: "Diagnose. Codify. Redesign. <em>Operate.</em>",
            body: "<ul><li><strong>Diagnose</strong> — surface where the architecture has drifted before the cost becomes visible.</li><li><strong>Codify</strong> — convert observed patterns into transferable frameworks. Two carry the practice: <strong>Belief → Conviction → Rhythm</strong>, and <strong>Interpret · Integrate · Institutionalise</strong>. Others sit underneath as embedded methods.</li><li><strong>Redesign</strong> — install the architecture the operating model actually needs.</li><li><strong>Operate</strong> — keep the redesign alive in cadence, not in slides.</li></ul>"
          },
          {
            num: "04",
            label: "What this means for you",
            title: "Three personas. <em>Each line is a promise.</em>",
            body: "<div class='persona-grid mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'><div class='ill-card ill-card--accent'><div class='label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]'>Founder · CEO</div><div class='promise font-serif text-[20px]'>See where the organisation will <em>break</em> before it does.</div></div><div class='ill-card ill-card--accent'><div class='label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]'>CFO</div><div class='promise font-serif text-[20px]'>Read workforce as <em>cost, risk, and control</em> architecture — not headcount.</div></div><div class='ill-card ill-card--accent'><div class='label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]'>CHRO</div><div class='promise font-serif text-[20px]'>Stop running <em>HR programs.</em> Start running the operating system underneath them.</div></div></div><p class='mt-6 text-[14px] text-[var(--fg-dim)]'>Boards are addressed implicitly through the founder/CEO persona — not a separate row.</p>"
          },
          {
            num: "05",
            label: "How we hold together",
            title: "Two sentences. <em>Both true.</em>",
            body: "<p>Every engagement diagnoses where you are stuck in one sequence — <strong>Belief → Conviction → Rhythm.</strong> The platform itself stands on three layers — the founder's thinking, Axion Index as the codification platform, and <strong>HROS</strong> as the system layer being built on top.</p><p class='mt-4 text-[15px] italic text-[var(--fg-dim)]'>HROS — the operating-system layer Nitin is building separately, where the architecture lives in motion.</p>"
          }
        ].map((movement, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <article className="py-14 border-b border-[var(--ink-line)] grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr] gap-6 md:gap-16">
              <div>
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--cyan)]">
                  Movement<strong className="block font-serif italic text-[56px] text-[var(--fg)] mt-1.5 leading-[0.9]">{movement.num}</strong>
                </span>
                <div className="font-mono text-[10.5px] tracking-wider uppercase text-[var(--fg-dim)] mt-2">{movement.label}</div>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(28px,3vw,40px)] font-medium leading-[1.1] text-[var(--fg)] mb-4" dangerouslySetInnerHTML={{ __html: movement.title }} />
                <div className="text-[17px] leading-[1.6] text-[var(--fg-soft)] max-w-[64ch]" dangerouslySetInnerHTML={{ __html: movement.body }} />
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.6}>
          <article className="py-14 grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr] gap-6 md:gap-16">
            <div>
              <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--cyan)]">
                Movement<strong className="block font-serif italic text-[56px] text-[var(--fg)] mt-1.5 leading-[0.9]">06</strong>
              </span>
              <div className="font-mono text-[10.5px] tracking-wider uppercase text-[var(--fg-dim)] mt-2">Closing</div>
            </div>
            <div>
              <h2 className="ill-display italic">From ambiguity to architecture.</h2>
              <div className="mt-8 flex flex-col gap-3">
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--fg-soft)]">Continue →</span>
                <div className="flex gap-4 text-[var(--fg)] font-medium">
                  <Link href="/founder" className="hover:text-[var(--cyan)] transition-colors">Read about the founder</Link>
                  <span className="text-[var(--fg-dim)]">·</span>
                  <Link href="/#practices" className="hover:text-[var(--cyan)] transition-colors">Open the practices</Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <footer className="mt-14 pt-14 border-t border-[var(--ink-line)]">
        <div className="shell flex flex-wrap gap-4 justify-between font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">
          <span>© 2026 Axion Index · Bengaluru</span>
          <a href="mailto:nitin@axionindex.org" className="text-[var(--gold)]">nitin@axionindex.org</a>
        </div>
      </footer>
    </div>
  );
}
