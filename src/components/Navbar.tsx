"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const expertiseLinks = [
    { name: "Labour Codes", href: "/expertise/labour" },
    { name: "AI Edge Lab", href: "/expertise/ai-edge" },
    { name: "Family Business", href: "/expertise/family" },
    { name: "People Architecture", href: "/expertise/people" },
  ];

  return (
    <nav className={`nav ${isScrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="brand">
        Ax<em>ion</em>
        <span className="domain">INDEX</span>
      </Link>

      <div className="flex items-center gap-10">
        <Link 
          href="/about" 
          className={`text-[11px] font-mono tracking-[0.24em] uppercase transition-colors ${
            pathname === "/about" ? "text-[var(--accent)]" : "text-[var(--fg-3)] hover:text-[var(--fg)]"
          }`}
        >
          About
        </Link>

        {/* Expertise Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setIsExpertiseOpen(true)}
          onMouseLeave={() => setIsExpertiseOpen(false)}
        >
          <button 
            className={`text-[11px] font-mono tracking-[0.24em] uppercase transition-colors flex items-center gap-2 outline-none ${
              pathname.startsWith("/expertise") ? "text-[var(--accent)]" : "text-[var(--fg-3)] hover:text-[var(--fg)]"
            }`}
          >
            Expertise
            <motion.div
              animate={{ rotate: isExpertiseOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ChevronDown size={12} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isExpertiseOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="nav-dropdown"
              >
                {expertiseLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={`nav-dropdown-item ${pathname === link.href ? "bg-[var(--line)] text-[var(--fg)]" : ""}`}
                    onClick={() => setIsExpertiseOpen(false)}
                  >
                    {link.name}
                    <span>→</span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link 
          href="/founder" 
          className={`text-[11px] font-mono tracking-[0.24em] uppercase transition-colors ${
            pathname === "/founder" ? "text-[var(--accent)]" : "text-[var(--fg-3)] hover:text-[var(--fg)]"
          }`}
        >
          Founder
        </Link>
        <Link href="/connect" className="nav-cta">
          Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
