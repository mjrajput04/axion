import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="illuminated min-h-screen pt-[120px] pb-[80px]">
      <div className="shell mb-12">
        <Reveal>
          <div className="breadcrumb font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)] flex items-center gap-2">
            <Link href="/">Home</Link>
            <span className="text-[var(--cyan)]">/</span>
            <span className="text-[var(--fg-soft)]">Expertise</span>
          </div>
        </Reveal>
      </div>
      {children}
      
      <footer className="mt-24 pt-14 border-t border-[var(--ink-line)]">
        <div className="shell flex flex-wrap gap-4 justify-between font-mono text-[10.5px] tracking-widest uppercase text-[var(--fg-dim)]">
          <span>© 2026 Axion Index · Bengaluru</span>
          <a href="mailto:nitin@axionindex.org" className="text-[var(--gold)]">nitin@axionindex.org</a>
        </div>
      </footer>
    </div>
  );
}
