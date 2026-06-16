import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiClipboard, HiClipboardCheck, HiMail, HiPaperAirplane, HiPhone } from "react-icons/hi";
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
      className="relative py-28 px-6 sm:px-12 bg-(--bg)"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 80% 80%, rgba(34,211,238,0.05) 0%, transparent 60%)" }}
      />

      {/* Section number */}
      <div
        className="absolute right-12 sm:right-21 lg:right-23 xl:right-10 top-2 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(1rem, 12vw, 6rem)", color: "rgba(34,211,238,0.03)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-7xl mx-auto w-screen px-6 sm:px-12">
        <div className="grid gap-10 xl:grid-cols-[1fr_1.1fr] relative z-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-(--cyan)" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
                {t.contact.eyebrow}
              </span>
            </div>

            <h2
              className="font-bold leading-tight text-(--text) tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              {t.contact.title}
            </h2>
            <p className="mt-4 leading-relaxed text-sm text-(--text-muted) max-w-[380px]">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              {/* Email card */}
              <div className="p-5 border border-(--border) bg-(--surface)">
                <div className="flex items-center gap-2 mb-3">
                  <HiMail size={14} className="text-cyan" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-(--text-muted)">
                    {t.contact.email_label}
                  </span>
                </div>
                <p className="font-mono text-sm mb-4 text-(--text)">
                  {EMAIL}
                </p>
                <button
                  onClick={handleCopy}
                  className="font-mono inline-flex items-center gap-2 px-2 py-1 text-[11px] uppercase tracking-[0.12em] transition-all duration-300 bg-(--cyan) text-[#04050a]"
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 16px rgba(34,211,238,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  {copied ? <HiClipboardCheck size={13} /> : <HiClipboard size={13} />}
                  {copied ? t.contact.copied : t.contact.copy}
                </button>
              </div>

              {/* Phone card */}
              <a
                href="tel:0655590908"
                className="block p-5 border border-(--border) bg-(--surface) transition-all duration-300 group"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HiPhone size={14} className="text-cyan" />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-(--text-muted)">
                        {t.contact.phone_label}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-(--text)">
                      065-559-0908
                    </p>
                  </div>
                  <span className="font-mono text-lg transition-transform duration-300 group-hover:translate-x-1 text-cyan">
                    ↗
                  </span>
                </div>
              </a>

              {/* GitHub card */}
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile: arm254307977 (opens in new tab)"
                className="block p-5 border border-(--border) bg-(--surface) transition-all duration-300 group"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaGithub size={14} className="text-(--text-dim)" />
                      <span className="text-[10px] uppercase tracking-[0.18em] text-(--text-muted)">
                        {t.contact.github_label}
                      </span>
                    </div>
                    <p className="font-mono text-sm text-(--text)">
                      arm254307977
                    </p>
                  </div>
                  <span className="font-mono text-lg transition-transform duration-300 group-hover:translate-x-1 text-cyan">
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
            className="p-6 sm:p-8 border border-(--border) bg-(--surface)"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.18em] block mb-2.5 text-(--text-muted)">
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
                <span className="text-[10px] uppercase tracking-[0.18em] block mb-2.5 text-(--text-muted)">
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
              <span className="text-[10px] uppercase tracking-[0.18em] block mb-2.5 text-(--text-muted)">
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
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 font-display font-semibold text-sm transition-all duration-300 bg-(--cyan) text-[#04050a]"
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(34,211,238,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <HiPaperAirplane size={14} />
              {t.contact.form.send}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
