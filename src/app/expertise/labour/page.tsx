"use client";

import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LabourCodes() {
  const [inputs, setInputs] = useState({
    hc: 450,
    state: "KA",
    workers: 40,
    contract: 22,
    gig: 8,
    basic: 35,
    ctc: 9.5
  });

  const [outputs, setOutputs] = useState({
    total: 12.4,
    wages: 6.2,
    ss: 3.1,
    cl: 1.8,
    osh: 1.3
  });

  const STATE_FACTOR: Record<string, number> = { TN: 1.0, KA: 1.0, MH: 0.7, DL: 0.7, GJ: 0.4, HR: 0.95 };

  useEffect(() => {
    const f = STATE_FACTOR[inputs.state] || 1;
    const w = inputs.workers / 100;
    const cl = inputs.contract / 100;
    const gig = inputs.gig / 100;
    const basic = inputs.basic / 100;

    const wagesImpact = Math.max(0, (0.50 - basic)) * 18 * f;
    const ssImpact = (gig * 22 + w * 3.5) * f;
    const clImpact = cl * 8 * f;
    const oshImpact = 1.3 * f * (inputs.hc > 100 ? 1 : 0.6);

    setOutputs({
      total: Number((wagesImpact + ssImpact + clImpact + oshImpact).toFixed(1)),
      wages: Number(wagesImpact.toFixed(1)),
      ss: Number(ssImpact.toFixed(1)),
      cl: Number(clImpact.toFixed(1)),
      osh: Number(oshImpact.toFixed(1))
    });
  }, [inputs]);

  const fmt = (n: number) => (n >= 0 ? "+ " : "− ") + Math.abs(n).toFixed(1) + "%";

  return (
    <div className="shell">
      <Reveal>
        <section className="page-hero">
          <div className="breadcrumb mb-6">
            <Link href="/">Home</Link><span className="mx-2 text-[var(--cyan)]">/</span><Link href="/#practices">Practices</Link><span className="mx-2 text-[var(--cyan)]">/</span><span>Labour Codes</span>
          </div>
          <span className="ill-eyebrow"><span className="num">§LC</span> · Decision Architecture · 2026</span>
          <h1 className="ill-display mt-6 max-w-[14ch]">29 Laws Consolidated. 4 Codes. <em>One Reset.</em></h1>
          <p className="text-[18px] leading-[1.55] text-[var(--fg-soft)] mt-6 max-w-[64ch]">India's Labour Code consolidation is a structural reset of how organisations define, compensate, and govern their workforce. This is an interpretive advisory interface — not a substitute for legal counsel.</p>
          <div className="mt-8 p-6 bg-[rgba(181,102,58,0.05)] border-l-2 border-[var(--accent-2)]">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent-2)]">The diagnostic question</div>
            <p className="text-[15px] text-[var(--fg-soft)] mt-2">Most organisations are still asking <em>"when does this apply?"</em><br />The better question: where does it hit first — <strong>cost · classification · credibility · control</strong>?</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link className="ill-btn ill-btn--primary" href="/connect">Request a Diagnostic <span className="arrow">→</span></Link>
            <a className="ill-btn" href="#codes">Explore the 4 Codes <span className="arrow">→</span></a>
          </div>
        </section>
      </Reveal>

      <section className="py-20" id="classify">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§LC · 02</span> · Worker classification grid</span></Reveal>
            <Reveal delay={0.1}><span className="ill-eyebrow"><span className="dim">Six categories · the new map</span></span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Six categories. <em>Each with its own architecture.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">Classification drives everything downstream — comp, social security, OSH, governance. The codes do not merely consolidate language; they redraw the boundaries of who counts as what.</p></Reveal>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--ink-line)]">
          {[
            { num: "01", name: "Employee", desc: "Salaried, on-roll, employer-employee relationship. The default assumption that most others are exceptions to.", meta: ["All 4 codes", "White & blue collar"] },
            { num: "02", name: "Worker", desc: "Statutory category with wage thresholds and protections. The boundary that determines overtime, leave, and dispute pathways.", meta: ["Wages · IR · OSH", "Threshold-bound"] },
            { num: "03", name: "<em>Fixed-Term</em>", desc: "Now eligible for proportionate statutory benefits. Closes the historical gap with permanent employees.", meta: ["Pro-rata gratuity", "Statutory parity"] },
            { num: "04", name: "Contract Labour", desc: "Threshold-driven licensing. Principal-employer obligations sharpened. Audit trails are now mandatory, not aspirational.", meta: ["Licensing thresholds", "Principal liability"] },
            { num: "05", name: "Gig Worker", desc: "First-time codification under Social Security. Aggregator levy, social security fund, identification requirements.", meta: ["Social Security only", "New category"] },
            { num: "06", name: "<em>Platform</em> Worker", desc: "Distinct from gig — algorithmic management, performance opacity, and aggregator obligations create new architecture.", meta: ["Aggregator levy", "Algorithmic transparency"] }
          ].map((cls, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="border-r border-b border-[var(--ink-line)] p-6 bg-[rgba(11,13,20,0.5)] flex flex-col gap-3 min-h-[200px] hover:bg-[var(--ink-1)] transition-colors">
                <span className="font-mono text-[11px] tracking-widest uppercase text-[var(--gold)]">{cls.num}</span>
                <h4 className="font-serif text-[28px] font-medium text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: cls.name }} />
                <p className="text-[14px] leading-[1.5] text-[var(--fg-soft)]">{cls.desc}</p>
                <div className="mt-auto pt-3 border-t border-[var(--ink-line)] flex gap-4 font-mono text-[10px] tracking-widest uppercase text-[var(--fg-dim)]">
                  {cls.meta.map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(11,13,20,0.4)] -mx-[32px] px-[32px] py-20 border-y border-[var(--ink-line)]" id="codes">
        <div className="max-w-[1280px] mx-auto">
          <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
            <div className="flex flex-col gap-2">
              <Reveal><span className="ill-eyebrow"><span className="num">§LC · 03</span> · The four codes</span></Reveal>
            </div>
            <div>
              <Reveal delay={0.2}><h2 className="ill-display">Four codes. <em>One regulatory architecture.</em></h2></Reveal>
              <Reveal delay={0.3}><p className="ill-lede mt-4">Wages · Industrial Relations · Social Security · Occupational Safety, Health and Working Conditions. The Centre defines; states draft; you operate.</p></Reveal>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--ink-line)]">
            {[
              { num: "01", label: "Code I · Wages", title: "The <em>Code on Wages</em>", desc: "Universal definition of wages. Statutory minimum wage floor across all employees. The basic-allowance arithmetic that determines PF, gratuity and bonus liabilities.", tags: ["Statute · Centre", "State drafts ongoing"], accent: true },
              { num: "02", label: "Code II · Industrial Relations", title: "Industrial <em>Relations</em>", desc: "Standing orders threshold. Recognition of unions. Dispute resolution architecture. Workforce-size-driven obligations sharpen with scale.", tags: ["Statute · Centre", "State variation"] },
              { num: "03", label: "Code III · Social Security", title: "Social <em>Security</em>", desc: "Universal social security architecture. Gig and platform workers in scope for the first time. Aggregator levy, ESIC expansion, gratuity portability.", tags: ["Statute · Centre", "Schemes drafting"], accent: true },
              { num: "04", label: "Code IV · OSH", title: "Safety, Health & <em>Working Conditions</em>", desc: "Single registration. Threshold-driven obligations. Working hours, leave, women in night-shift, contract labour licensing — all consolidated.", tags: ["Statute · Centre", "Notification phased"] }
            ].map((code, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <article className="border-r border-b border-[var(--ink-line)] p-8 bg-[rgba(11,13,20,0.5)] flex flex-col gap-4 min-h-[240px] relative overflow-hidden">
                  <span className={`absolute right-4 top-2 font-serif italic font-medium text-[120px] leading-none opacity-5 ${code.accent ? 'text-[var(--gold)] opacity-20' : 'text-[var(--fg)]'}`}>{code.num}</span>
                  <span className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--gold)]">{code.label}</span>
                  <h3 className="font-serif text-[32px] font-medium leading-none text-[var(--fg)]" dangerouslySetInnerHTML={{ __html: code.title }} />
                  <p className="text-[15px] leading-[1.5] text-[var(--fg-soft)] max-w-[42ch]">{code.desc}</p>
                  <div className="mt-auto flex gap-3">
                    {code.tags.map(t => (
                      <span key={t} className="px-3 py-1 border border-[var(--ink-line-strong)] font-mono text-[10px] tracking-widest uppercase text-[var(--fg-soft)] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-current"></span>{t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20" id="calc">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§LC · 05</span> · Live calculator</span></Reveal>
            <Reveal delay={0.1}>
              <span className="ill-eyebrow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_12px_var(--cyan)]"></span>
                <span className="text-[var(--fg-dim)]">Live · updates with notifications</span>
              </span>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Where will it <em>hit first</em>?</h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">A first-pass cost-impact estimate against current statutory positions. Inputs stay on your device. The full diagnostic — by code, by state, by cost line — is the engagement deliverable.</p></Reveal>
          </div>
        </header>

        <Reveal delay={0.4}>
          <div className="bg-[var(--ink-1)] border border-[var(--ink-line)] grid grid-cols-1 md:grid-cols-[1.2fr_1fr]">
            <div className="p-8 border-r border-[var(--ink-line)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Total headcount</label>
                  <input type="number" value={inputs.hc} onChange={e => setInputs({...inputs, hc: +e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">State</label>
                  <select value={inputs.state} onChange={e => setInputs({...inputs, state: e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]">
                    <option value="TN">Tamil Nadu · Statute</option>
                    <option value="KA">Karnataka · Statute</option>
                    <option value="MH">Maharashtra · Draft</option>
                    <option value="DL">Delhi NCT · Draft</option>
                    <option value="GJ">Gujarat · Advisory</option>
                    <option value="HR">Haryana · Statute</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Workers (% of HC)</label>
                  <input type="number" value={inputs.workers} onChange={e => setInputs({...inputs, workers: +e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Contract labour (% of HC)</label>
                  <input type="number" value={inputs.contract} onChange={e => setInputs({...inputs, contract: +e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Gig & platform (% of HC)</label>
                  <input type="number" value={inputs.gig} onChange={e => setInputs({...inputs, gig: +e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">Current basic % of CTC</label>
                  <input type="number" value={inputs.basic} onChange={e => setInputs({...inputs, basic: +e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[var(--ink-line-strong)] p-3 text-[var(--fg)] outline-none focus:border-[var(--cyan)]" />
                </div>
              </div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-dim)] leading-[1.5]">This is an interpretive advisory tool. Outputs are estimates based on current statutory positions and should not be substituted for legal counsel.</p>
            </div>

            <div className="p-8 bg-[rgba(11,13,20,0.5)] flex flex-col gap-6">
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--gold)]">Estimated cost impact</div>
              <div className="font-serif italic text-[clamp(72px,9vw,120px)] font-medium leading-none text-[var(--accent-2)]">
                +{outputs.total}<span className="font-mono text-[0.45em] align-top ml-1 font-normal text-[var(--fg-dim)]">%</span>
              </div>
              <p className="text-[14px] text-[var(--fg-soft)] max-w-[34ch]">Increase in fully-loaded statutory cost vs. your current architecture.</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Wages · basic recompute", val: outputs.wages, tag: "Statute" },
                  { label: "Social security · gig/platform", val: outputs.ss, tag: "Draft" },
                  { label: "Contract labour licensing", val: outputs.cl, tag: "Statute" },
                  { label: "OSH thresholds", val: outputs.osh, tag: "Advisory" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--ink-line)] font-mono text-[11px] tracking-widest uppercase">
                    <span className="text-[var(--fg-soft)]">{row.label}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[var(--fg)]">{fmt(row.val)}</span>
                      <span className="text-[var(--fg-dim)] text-[9px] border border-[var(--ink-line-strong)] px-2 py-0.5">{row.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6 border-t border-[var(--ink-line)]">
                <p className="font-mono text-[10px] tracking-widest uppercase text-[var(--fg-dim)]">Calculated 28 Apr 2026 · Statutes notified up to 21 Apr 2026</p>
                <Link className="ill-btn ill-btn--primary mt-4 w-full justify-center" href="/connect">Request full diagnostic <span className="arrow ml-2">→</span></Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-20" id="engage">
        <header className="grid grid-cols-1 md:grid-cols-[minmax(180px,240px)_1fr] gap-8 md:gap-16 mb-12">
          <div className="flex flex-col gap-2">
            <Reveal><span className="ill-eyebrow"><span className="num">§LC · 06</span> · The 3i engagement model</span></Reveal>
          </div>
          <div>
            <Reveal delay={0.2}><h2 className="ill-display">Interpret. Integrate. <em>Institutionalise.</em></h2></Reveal>
            <Reveal delay={0.3}><p className="ill-lede mt-4">Three stages. Sequenced. Each one earns the next. The page is organised by user journey; the engagement is organised by 3i.</p></Reveal>
          </div>
        </header>

        <Reveal delay={0.4}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-t border-l border-[var(--ink-line)]">
              <thead>
                <tr className="bg-[rgba(255,255,255,0.02)]">
                  {["Stage", "What we do", "Output", "Cadence"].map((h) => (
                    <th key={h} className="p-4 text-left border-r border-b border-[var(--ink-line)] font-mono text-[10.5px] tracking-widest uppercase text-[var(--cyan)] font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[14.5px] text-[var(--fg-soft)] leading-[1.45]">
                {[
                  { k: "Interpret", d: "Map your exposure to each of the four codes — by workforce category, by state, by cost line.", o: "Exposure diagnostic", c: "2–3 weeks" },
                  { k: "Integrate", d: "Redesign the operating architecture — comp structure, classification, governance, contracts.", o: "Architecture redesign", c: "8–12 weeks" },
                  { k: "Institutionalise", d: "Install the ongoing compliance rhythm — calendars, audits, change management.", o: "Operating system", c: "Ongoing" }
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 border-r border-b border-[var(--ink-line)] font-mono text-[11px] tracking-widest uppercase text-[var(--fg)]"><strong>{row.k}</strong></td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.d}</td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.o}</td>
                    <td className="p-4 border-r border-b border-[var(--ink-line)]">{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.5} className="mt-12 flex flex-wrap gap-4">
          <Link className="ill-btn ill-btn--primary" href="/connect?practice=labour-codes">Request a Diagnostic <span className="arrow">→</span></Link>
          <Link className="ill-btn" href="/#practices">Other practices <span className="arrow">→</span></Link>
        </Reveal>
      </section>
    </div>
  );
}
