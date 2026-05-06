import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function AIEdgeLab() {
  return (
    <div className="shell">
      <Reveal>
        <div className="ai-hero grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-14 md:gap-18 py-16 md:py-24 border-b border-[var(--ink-line)] items-end">
          <div>
            <span className="ill-eyebrow"><span className="num">§AE</span> · The Surgical Practice · 2026</span>
            <h1 className="ill-display mt-6 max-w-[14ch]">AI doesn't disrupt jobs. <em>It disrupts judgment.</em></h1>
            <p className="text-[18px] leading-[1.55] text-[var(--fg-soft)] mt-6 max-w-[56ch]">
              Most AI-and-work conversations are pitched at the wrong altitude — tooling adoption, productivity uplift, headcount math. The real question is what happens to the architecture of human judgment when the cognitive layer underneath it changes.
            </p>
            <div className="mt-8 p-6 bg-[rgba(255,61,138,0.05)] border-l-2 border-[var(--magenta)]">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--magenta)]">Surgical posture</div>
              <p className="text-[15px] text-[var(--fg-soft)] mt-2">This is the only practice where the diagnostic comes <em>before</em> the conversation. We do not generalise, we operate on specifics.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link className="ill-btn ill-btn--primary" href="/connect?practice=ai-edge-lab">Begin a Diagnostic <span className="arrow">→</span></Link>
              <a className="ill-btn" href="#laws">Read the three laws <span className="arrow">→</span></a>
            </div>
          </div>
          <div>
            <div className="ill-card">
              <div className="label font-mono text-[10px] tracking-wider uppercase text-[var(--magenta)]">The defining shift</div>
              <p className="text-[16px] leading-[1.55] text-[var(--fg-soft)] mt-4">
                The question is not <em>"does AI replace people"</em>. The question is whether your operating model still makes sense once judgment, taste and architecture are the only things humans uniquely do.
              </p>
              <cite className="block mt-4 font-mono text-[10px] tracking-widest uppercase text-[var(--fg-dim)] font-normal italic">From the AI Edge Lab doctrine</cite>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Who this is for */}
      <section className="py-20 border-t border-[var(--ink-line)]" id="audience">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§AE · 01b</span> · Who this is for</span></Reveal>
            <Reveal delay={0.1}><span className="ill-eyebrow"><span className="dim">Entry points</span></span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display max-w-[18ch]">Different stakes. <em>One question.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">AI Edge Lab is the entry point for anyone whose work is changing faster than their role.</p></Reveal>
          </div>
        </header>

        <ol className="border-t border-[var(--ink-line)]">
          {[
            "Leaders navigating <em>AI-led change.</em>",
            "Professionals <em>redesigning their work.</em>",
            "Individuals building <em>future-proof capability.</em>",
            "Students preparing for an <em>AI-shaped economy.</em>"
          ].map((text, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <li className="grid grid-cols-[120px_1fr] gap-8 py-7 border-b border-[var(--ink-line)] items-baseline">
                <span className="ill-eyebrow"><span className="num">[ 0{i+1} ]</span></span>
                <p className="font-serif text-[clamp(20px,1.8vw,24px)] leading-[1.45] text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.4} className="mt-14 pt-10 border-t border-[var(--ink-line)] flex flex-wrap gap-8 items-baseline justify-between">
          <p className="font-serif italic text-[clamp(20px,1.8vw,24px)] text-[var(--fg-soft)] max-w-[36ch]">
            If your work is changing faster than your role,<br />this is where you start.
          </p>
          <a className="ill-btn ill-btn--primary" href="#edge">Explore AI Edge Lab <span className="arrow">→</span></a>
        </Reveal>
      </section>

      {/* Four Actors */}
      <section className="py-20" id="actors">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§AE · 02</span> · How AI reshapes work</span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Stop counting heads. <em>Start reading the four roles AI work actually contains.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">Inside an AI-shaped operating model, work no longer divides cleanly into employees and vendors. It divides into who holds judgment, who produces output, who keeps the system inside its envelope, and what now acts without accountability.</p></Reveal>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--ink-line)]">
          {[
            {
              name: "The work that <em>holds judgment</em>",
              desc: "Architectural intent, taste, the shape of the question itself. This work cannot be replaced by tooling — only amplified or starved. As cognitive cost falls, this is the work that compounds in value.",
              stake: "Stake · architecture & taste"
            },
            {
              name: "The work that <em>produces output</em>",
              desc: "Translating intent into deliverables. The most exposed to substitution — and the most often defended out of habit. The right move is to redesign it upward toward judgment work, not insulate it.",
              stake: "Stake · throughput & quality"
            },
            {
              name: "The work that <em>keeps the envelope</em>",
              desc: "Lawful, ethical, reputational containment. Invisible until something breaks. Codifying this layer is half the diagnostic — most organisations are running on a steward function nobody has named.",
              stake: "Stake · integrity & risk"
            },
            {
              name: "The work that is <em>no longer human</em>",
              desc: "Models, agents, pipelines. They act with consequence, but the organisation has not issued them accountability. They must be governed like a role, not configured like a tool.",
              stake: "Stake · scale & velocity"
            }
          ].map((actor, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="border-r border-b border-[var(--ink-line)] p-8 md:p-10 bg-[rgba(11,13,20,0.5)] flex flex-col gap-4 min-h-[280px]">
                <h3 className="font-serif text-[36px] font-medium leading-[1.05] text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: actor.name }} />
                <p className="text-[15px] leading-[1.55] text-[var(--fg-soft)] max-w-[42ch]">{actor.desc}</p>
                <div className="mt-auto pt-4 border-t border-[var(--ink-line)] font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg)]">{actor.stake}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Three Laws */}
      <section className="bg-[var(--ink-0)] text-[var(--fg)] -mx-[32px] px-[32px] py-24 border-y border-[var(--ink-line)]" id="laws">
        <div className="max-w-[1280px] mx-auto">
          <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-16">
            <div className="flex flex-col gap-2">
              <Reveal><span className="ill-eyebrow text-[var(--gold)]"><span className="num">§AE · 03</span> · The three laws</span></Reveal>
            </div>
            <div>
              <Reveal delay={0.2}><h2 className="ill-display text-[var(--fg)]">Three laws. <em className="text-[var(--gold)]">In sequence.</em></h2></Reveal>
              <Reveal delay={0.3}><p className="ill-lede text-[var(--fg-soft)] mt-4">Each law constrains the next. Skip one and the architecture you build will not survive contact with the wave.</p></Reveal>
            </div>
          </header>

          <div className="flex flex-col">
            {[
              {
                num: "I.",
                title: "The Law of <em>Judgment Compression</em>",
                body: "As cognitive cost falls toward zero, the value of <strong class='text-[var(--fg)]'>human judgment</strong> rises non-linearly. The architecture that wins is the one that puts judgment closest to consequence — not the one that automates the most.",
                verdict: "Move judgment toward the edges of the system, not the centre."
              },
              {
                num: "II.",
                title: "The Law of <em>Accountability Lag</em>",
                body: "Synthetic actors gain authority faster than the organisation issues accountability. The gap is where <strong class='text-[var(--fg)]'>institutional risk</strong> lives. Closing it is the steward's job — and it cannot be retrofitted.",
                verdict: "Issue accountability before authority. Always."
              },
              {
                num: "III.",
                title: "The Law of <em>Architectural Inheritance</em>",
                body: "The model an organisation deploys inherits the operating model it deploys it inside. Bad architecture <strong class='text-[var(--fg)]'>amplifies, not heals</strong>. AI does not fix a broken system; it makes the breakage faster and harder to see.",
                verdict: "Fix the operating model first. Deploy second."
              }
            ].map((law, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <article className="grid grid-cols-1 md:grid-cols-[minmax(220px,280px)_1fr_minmax(180px,240px)] gap-8 md:gap-16 py-12 border-b border-[rgba(255,255,255,0.1)] last:border-0 items-start">
                  <div className="font-serif italic text-[96px] text-[var(--gold)] leading-[0.9] font-medium">{law.num}</div>
                  <div>
                    <h3 className="font-serif text-[32px] font-medium leading-[1.1] text-[var(--fg)] mb-3" dangerouslySetInnerHTML={{ __html: law.title }} />
                    <p className="text-[16px] leading-[1.55] text-[var(--fg-soft)] max-w-[50ch]" dangerouslySetInnerHTML={{ __html: law.body }} />
                  </div>
                  <aside className="bg-[var(--fg)] text-[var(--ink-0)] p-6 font-mono text-[11px] tracking-widest uppercase leading-[1.5]">
                    <strong className="block mb-2 font-semibold">Verdict</strong>
                    {law.verdict}
                  </aside>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E.D.G.E. */}
      <section className="py-20" id="edge">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§AE · 04</span> · The E.D.G.E. method</span></Reveal>
            <Reveal delay={0.1}><span className="ill-eyebrow"><span className="dim">Four steps · sequenced</span></span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">How a diagnostic <em>actually runs</em>.</h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">Examine. Decompose. Govern. Embed. Each step ends in an artefact, not a slide. The diagnostic is the engagement.</p></Reveal>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-[var(--ink-line)]">
          {[
            {
              letter: "E",
              num: "Step 01",
              name: "Examine",
              desc: "Map the existing operating model — actors, judgments, decision rights, where consequence actually lands."
            },
            {
              letter: "D",
              num: "Step 02",
              name: "Decompose",
              desc: "Break each role into the four actors. Surface where executor work has crowded out operator work."
            },
            {
              letter: "G",
              num: "Step 03",
              name: "Govern",
              desc: "Issue accountability for synthetic actors. Build the steward layer before the deployment runs hot."
            },
            {
              letter: "E",
              num: "Step 04",
              name: "Embed",
              desc: "Re-install the operating model. Move judgment to the edges. Redesign executor roles upward, not sideways. Hand off into the operating layer where the rhythm begins — <em class='text-[var(--gold)] font-style:italic'>HROS, the operating-system layer Nitin is building separately.</em>",
              dark: true
            }
          ].map((step, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className={`border-r border-b border-[var(--ink-line)] p-6 md:p-7 flex flex-col gap-3 min-h-[220px] relative overflow-hidden ${step.dark ? 'bg-[var(--ink-1)]' : 'bg-[rgba(11,13,20,0.5)]'}`}>
                <span className="font-serif italic text-[96px] text-[var(--gold)] leading-[0.85] font-medium absolute right-3 top-1 opacity-20 pointer-events-none">{step.letter}</span>
                <span className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">{step.num}</span>
                <h4 className="font-serif text-[24px] font-medium text-[var(--fg)]">{step.name}</h4>
                <p className={`text-[13.5px] leading-[1.5] ${step.dark ? 'text-[var(--fg-soft)]' : 'text-[var(--fg-soft)]'}`} dangerouslySetInnerHTML={{ __html: step.desc }} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-[var(--ink-line)]">
        <div className="max-w-[680px]">
          <Reveal><span className="ill-eyebrow"><span className="num">§AE · 05</span> · Engagement model</span></Reveal>
          <Reveal delay={0.1}><h2 className="ill-display mt-6">A diagnostic, <em>not a deck</em>.</h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-[17px] leading-[1.55] text-[var(--fg-soft)] mt-6">
              AI Edge Lab does not run discovery calls. The diagnostic is the engagement — a 4–6 week deep dive into one operating model under stress, ending in an architectural verdict and a sequenced redesign.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-4 mt-8">
            <Link className="ill-btn ill-btn--primary" href="/connect?practice=ai-edge-lab">Begin a Diagnostic <span className="arrow">→</span></Link>
            <Link className="ill-btn" href="/#practices">Other practices <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
