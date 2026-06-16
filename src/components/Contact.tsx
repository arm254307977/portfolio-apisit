import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiClipboard, HiClipboardCheck, HiMail, HiPaperAirplane } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

const EMAIL = "aps.axm@gmail.com";
const GITHUB = "https://github.com/arm254307977";

const inputBase: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--border)",
  background: "var(--surface)",
  padding: "11px 14px",
  color: "var(--text)",
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  fontWeight: 400,
  outline: "none",
  transition: "border-color 0.25s ease",
};

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 sm:px-12"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 80%, rgba(34,211,238,0.05) 0%, transparent 60%)" }}
      />

      {/* Section number */}
      <div
        className="absolute right-6 sm:right-12 top-8 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 12vw, 10rem)", color: "rgba(34,211,238,0.03)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="grid gap-10 xl:grid-cols-[1fr_1.1fr] relative z-10">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 20, height: 1, background: "var(--cyan)" }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--cyan)" }}>
              {t.contact.eyebrow}
            </span>
          </div>

          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 leading-relaxed" style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 380 }}>
            {t.contact.subtitle}
          </p>

          <div className="mt-8 space-y-3">
            {/* Email card */}
            <div
              className="p-5 border"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <HiMail size={14} style={{ color: "var(--cyan)" }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                  {t.contact.email_label}
                </span>
              </div>
              <p className="font-mono text-sm mb-4" style={{ color: "var(--text)" }}>
                {EMAIL}
              </p>
              <button
                onClick={handleCopy}
                className="font-mono inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-all duration-300"
                style={{ background: "var(--cyan)", color: "#04050a" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 16px rgba(34,211,238,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                {copied ? <HiClipboardCheck size={13} /> : <HiClipboard size={13} />}
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>

            {/* GitHub card */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile: arm254307977 (opens in new tab)"
              className="block p-5 border transition-all duration-300 group"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub size={14} style={{ color: "var(--text-dim)" }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--text-muted)" }}>
                      {t.contact.github_label}
                    </span>
                  </div>
                  <p className="font-mono text-sm" style={{ color: "var(--text)" }}>
                    arm254307977
                  </p>
                </div>
                <span
                  className="font-mono text-lg transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "var(--cyan)" }}
                >
                  ↗
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:${EMAIL}`;
          }}
          className="p-6 sm:p-8 border"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] block mb-2.5" style={{ color: "var(--text-muted)" }}>
                {t.contact.form.name}
              </span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                style={inputBase}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] block mb-2.5" style={{ color: "var(--text-muted)" }}>
                {t.contact.form.email}
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                style={inputBase}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] block mb-2.5" style={{ color: "var(--text-muted)" }}>
              {t.contact.form.message}
            </span>
            <textarea
              name="message"
              rows={7}
              style={{ ...inputBase, resize: "none" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 font-display font-semibold text-sm transition-all duration-300"
            style={{ background: "var(--cyan)", color: "#04050a" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(34,211,238,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <HiPaperAirplane size={14} />
            {t.contact.form.send}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
