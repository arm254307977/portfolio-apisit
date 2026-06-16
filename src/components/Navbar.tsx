import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

const navLinks = [
  { key: "home" as const, href: "#home" },
  { key: "about" as const, href: "#about" },
  { key: "projects" as const, href: "#projects" },
  { key: "services" as const, href: "#services" },
  { key: "contact" as const, href: "#contact" },
];

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4,5,10,0.9)" : "rgba(4,5,10,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(34,211,238,0.1)" : "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex h-[72px] items-center justify-between px-6 sm:px-12">
        {/* Logo */}
        <a href="#home" className="font-display font-bold text-lg flex items-center gap-0.5" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
          ARM
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--cyan)", marginLeft: 1 }}
          >
            .
          </motion.span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-mono text-[11px] uppercase transition-colors duration-300 relative group"
              style={{ color: "var(--text-muted)", letterSpacing: "0.18em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t.nav[link.key]}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--cyan)" }}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Lang toggle desktop */}
          <button
            onClick={toggleLang}
            aria-label={lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
            className="hidden font-mono text-[11px] uppercase border px-3 py-1.5 transition-all duration-300 lg:block"
            style={{
              color: "var(--cyan)",
              borderColor: "rgba(34,211,238,0.3)",
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(34,211,238,0.08)";
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
            }}
          >
            {lang === "th" ? "EN" : "TH"}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="border p-2 transition-colors duration-300 lg:hidden"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t lg:hidden"
            style={{ background: "rgba(4,5,10,0.98)", borderColor: "rgba(34,211,238,0.1)" }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-[11px] uppercase transition-colors duration-200"
                  style={{ color: "var(--text-dim)", letterSpacing: "0.18em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <button
                onClick={() => { toggleLang(); setMenuOpen(false); }}
                aria-label={lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
                className="font-mono text-[11px] uppercase text-left transition-colors duration-200"
                style={{ color: "var(--cyan)", letterSpacing: "0.18em" }}
              >
                {lang === "th" ? "EN" : "TH"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
