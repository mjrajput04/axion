import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Founder() {
  return (
    <div className="illuminated min-h-screen pt-[120px] pb-[80px]">
      <section className="page-hero">
        <div className="shell">
          <Reveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Founder</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <span className="ill-eyebrow"><span className="num">§F</span> · The Founder</span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="ill-display mt-6 max-w-[18ch]">
              Operating from <em>consequence</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="flex flex-col gap-8">
              <div className="ill-card ill-card--accent">
                <div className="label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]">The Principal</div>
                <h2 className="ill-h2 mt-2">Nitin Nahata</h2>
                <p className="text-[18px] leading-[1.6] text-[var(--fg-soft)] mt-4">
                  Nitin Nahata is an operating architect. He does not begin by selling a service. He reads what is already breaking — and builds what must hold.
                </p>
                <div className="mt-6 flex flex-col gap-2 font-mono text-[11px] tracking-widest uppercase text-[var(--fg-dim)]">
                  <span>Founder · Axion Index</span>
                  <span>Creator · HROS</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="ill-h2 text-[28px]">The Thesis</h3>
                <p className="text-[17px] leading-[1.6] text-[var(--fg-soft)]">
                  "Most organisations don’t fail when strategy breaks. They fail when their internal architecture cannot carry what they are becoming."
                </p>
                <p className="text-[17px] leading-[1.6] text-[var(--fg-soft)]">
                  Nitin's work focuses on <strong>codifying the patterns</strong> that allow organisations to survive the person. He converts individual intellect into institutional structure.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="ill-h2 text-[28px]">Operating History</h3>
                <div className="flex flex-col gap-8">
                  {[
                    {
                      org: "Udaan",
                      result: "Scaled from 800 to 4,000 across 22 languages and 28 states. Manning held at 95% through COVID."
                    },
                    {
                      org: "Gameskraft",
                      result: "Held through 28% retroactive GST shock. 97.1% top-performer retention. Zero involuntary layoffs."
                    },
                    {
                      org: "Tata Global Beverages",
                      result: "London-to-Mumbai global HQ relocation, 95%+ retention through the transition."
                    }
                  ].map((item, i) => (
                    <div key={i} className="pb-6 border-b border-[var(--ink-line)]">
                      <div className="font-serif italic text-[24px] text-[var(--fg)] mb-2">{item.org}</div>
                      <p className="text-[15px] leading-[1.55] text-[var(--fg-soft)]">{item.result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ill-card bg-[rgba(56,225,255,0.03)] border-[rgba(56,225,255,0.2)]">
                <div className="label font-mono text-[10px] tracking-wider uppercase text-[var(--cyan)]">Next Architecture</div>
                <h3 className="ill-h2 text-[24px] mt-2">HROS</h3>
                <p className="text-[15px] leading-[1.55] text-[var(--fg-soft)] mt-4">
                  The operating-system layer Nitin is building separately, where the architecture lives in motion. It is the destination for the patterns codifed at Axion Index.
                </p>
                <Link href="/connect" className="mt-6 ill-btn text-[var(--cyan)] border-[rgba(56,225,255,0.2)] hover:border-[var(--cyan)]">
                  Learn more <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.5} className="mt-24 pt-16 border-t border-[var(--ink-line)]">
          <div className="max-w-[800px]">
            <span className="ill-eyebrow">Engagement Logic</span>
            <h2 className="ill-h2 mt-6">"We don’t explore the problem. We map where the system is breaking."</h2>
            <div className="mt-12 flex flex-wrap gap-6">
              <Link href="/connect" className="ill-btn ill-btn--primary">Start Diagnostic</Link>
              <Link href="/about" className="ill-btn">The Methodology</Link>
            </div>
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 pt-14 border-t border-[var(--ink-line)]">
        <div className="shell flex flex-wrap gap-4 justify-between font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">
          <span>© 2026 Axion Index · Bengaluru</span>
          <a href="mailto:nitin@axionindex.org" className="text-[var(--gold)]">nitin@axionindex.org</a>
        </div>
      </footer>
    </div>
  );
}
