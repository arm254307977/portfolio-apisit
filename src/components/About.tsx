import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiCss, SiExpress, SiGit, SiHtml5, SiJavascript,
  SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

type Tab = "experience" | "education" | "skills";

const skills = [
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", Icon: SiCss, color: "#1572b6" },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function About() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  const tabItems: Record<Tab, Array<{ meta: string; title: string; body: string }>> = {
    experience: t.about.experience,
    education: t.about.education,
    skills: [],
  };

  const detailRows = [
    { label: t.about.details.name, value: t.hero.name },
    { label: t.about.details.role, value: t.hero.role },
    { label: t.about.details.location, value: "Bangkok, Thailand" },
    { label: t.about.details.email, value: "aps.axm@gmail.com", href: "mailto:aps.axm@gmail.com" },
    { label: t.about.details.github, value: "arm254307977", href: "https://github.com/arm254307977" },
    { label: t.about.details.availability, value: t.about.details.available, highlight: true },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-12"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Section number decoration */}
      <div
        className="absolute right-6 sm:right-12 top-8 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 12vw, 10rem)", color: "rgba(34,211,238,0.03)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="grid gap-12 xl:grid-cols-[1fr_1.1fr] relative z-10">
        {/* Left: Bio + Details */}
        <motion.div {...up(0)}>
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 20, height: 1, background: "var(--cyan)" }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--cyan)" }}>
              {t.about.eyebrow}
            </span>
          </div>

          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}
          >
            {t.about.title}
          </h2>

          <p className="mt-5 leading-relaxed" style={{ fontSize: 14, color: "var(--text-dim)", maxWidth: 440 }}>
            {t.about.bio1}
          </p>
          <p className="mt-3 leading-relaxed" style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 440 }}>
            {t.about.bio2}
          </p>

          {/* Detail grid */}
          <div className="mt-8 grid grid-cols-2 gap-2.5">
            {detailRows.map(({ label, value, href, highlight }) => (
              <div
                key={label}
                className="p-3.5"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] mb-1.5" style={{ color: "var(--text-muted)" }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="font-mono text-xs transition-colors duration-200"
                    style={{ color: "var(--cyan)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-mono text-xs" style={{ color: highlight ? "#4ade80" : "var(--text)" }}>
                    {highlight && <span style={{ marginRight: 5, fontSize: 7 }}>●</span>}
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://github.com/arm254307977"
              target="_blank"
              rel="noreferrer"
              className="font-display font-semibold flex items-center gap-2 px-5 py-2.5 text-sm transition-all duration-300"
              style={{ background: "var(--cyan)", color: "#04050a" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 20px rgba(34,211,238,0.35)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <FaGithub size={14} />
              {t.about.github_label}
            </a>
            <a
              href="mailto:aps.axm@gmail.com"
              className="font-display font-medium flex items-center gap-2 border px-5 py-2.5 text-sm transition-all duration-300"
              style={{ borderColor: "rgba(34,211,238,0.35)", color: "var(--text)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.7)"; e.currentTarget.style.background = "rgba(34,211,238,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)"; e.currentTarget.style.background = "transparent"; }}
            >
              <HiMail size={14} />
              {t.about.email_label}
            </a>
          </div>
        </motion.div>

        {/* Right: Tabs */}
        <motion.div {...up(0.1)}>
          <div
            style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            className="overflow-hidden"
          >
            {/* Tab bar */}
            <div
              role="tablist"
              aria-label={t.about.eyebrow}
              className="grid grid-cols-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {(["experience", "education", "skills"] as Tab[]).map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab)}
                    className="font-mono text-[10px] uppercase py-4 px-2 transition-colors duration-200 relative"
                    style={{
                      letterSpacing: "0.14em",
                      color: active ? "var(--cyan)" : "var(--text-muted)",
                      background: active ? "rgba(34,211,238,0.04)" : "transparent",
                    }}
                  >
                    {t.about.tabs[tab]}
                    {active && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: "var(--cyan)" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div role="tabpanel" className="p-5">
              {activeTab === "skills" ? (
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {skills.map(({ name, Icon, color }) => (
                    <motion.div
                      key={name}
                      whileHover={{ borderColor: "rgba(34,211,238,0.3)", y: -2 }}
                      className="p-4 border transition-all duration-200"
                      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <Icon size={22} style={{ color, opacity: 0.85 }} />
                      <p className="font-mono mt-3 text-xs" style={{ color: "var(--text)" }}>
                        {name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 min-h-[380px]">
                  {tabItems[activeTab].map((item) => (
                    <article
                      key={`${item.meta}-${item.title}`}
                      className="p-5 border transition-all duration-200 group"
                      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="mt-1 shrink-0 w-1 self-stretch rounded-full"
                          style={{ background: "rgba(34,211,238,0.3)", minHeight: 12 }}
                        />
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--cyan)" }}>
                            {item.meta}
                          </p>
                          <h3
                            className="font-display font-semibold mt-1.5"
                            style={{ fontSize: "1.05rem", color: "var(--text)" }}
                          >
                            {item.title}
                          </h3>
                          <p className="mt-2 leading-relaxed text-[13px]" style={{ color: "var(--text-muted)" }}>
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
