import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function Connect() {
  return (
    <div className="illuminated min-h-screen pt-[120px] pb-[80px]">
      <section className="page-hero">
        <div className="shell">
          <Reveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep">/</span>
              <span>Connect</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <span className="ill-eyebrow"><span className="num">§C</span> · Connect</span>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="ill-display mt-6 max-w-[18ch]">
              Start where the signal is <em>strongest.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16 md:gap-32">
          <Reveal delay={0.3}>
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Full Name</label>
                  <input 
                    type="text" 
                    className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-4 text-[var(--fg)] outline-none focus:border-[var(--cyan)] transition-colors"
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Email Address</label>
                  <input 
                    type="email" 
                    className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-4 text-[var(--fg)] outline-none focus:border-[var(--cyan)] transition-colors"
                    placeholder="e.g. jane@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Organisation</label>
                <input 
                  type="text" 
                  className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-4 text-[var(--fg)] outline-none focus:border-[var(--cyan)] transition-colors"
                  placeholder="e.g. Axion Index"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Intent of Engagement</label>
                <div className="flex flex-wrap gap-3">
                  {["Inform · Diagnostic", "Instrument · Codify", "Install · Operate"].map((intent) => (
                    <button 
                      key={intent}
                      type="button"
                      className="px-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] font-mono text-[10px] tracking-widest uppercase text-[var(--fg-soft)] hover:text-[var(--fg)] hover:border-[var(--fg-dim)] transition-all"
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">The Signal</label>
                <textarea 
                  className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-4 text-[var(--fg)] outline-none focus:border-[var(--cyan)] transition-colors min-h-[160px] resize-none"
                  placeholder="What is breaking? Start from the signal."
                />
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-mute)] mt-2">Briefly describe the structural ambiguity you are facing.</span>
              </div>

              <button type="submit" className="ill-btn ill-btn--primary self-start px-12">
                Send Diagnostic Request <span className="arrow ml-2">→</span>
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col gap-12">
              <div className="ill-card">
                <div className="label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]">Direct Response</div>
                <h3 className="font-serif text-[22px] text-[var(--fg)] mt-2">office@axionindex.com</h3>
                <p className="text-[14px] leading-[1.55] text-[var(--fg-soft)] mt-4">
                  For immediate structural inquiries or board-level diagnostics.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Bengaluru HQ</h4>
                <div className="text-[15px] leading-[1.6] text-[var(--fg-soft)]">
                  Indiranagar, Bengaluru<br />
                  Karnataka, India
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-8 border-t border-[var(--ink-line)]">
                <span className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Elsewhere</span>
                <div className="flex gap-6 font-mono text-[11px] tracking-widest uppercase text-[var(--fg-soft)]">
                  <a href="#" className="hover:text-[var(--cyan)] transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[var(--cyan)] transition-colors">Substack</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
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
