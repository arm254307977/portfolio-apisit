import { motion, type Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import projects from "../data/projects";
import { useLang } from "../i18n/LanguageContext";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const { lang, t } = useLang();

  return (
    <section
      id="projects"
      className="relative py-28 px-6 sm:px-12"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Section number */}
      <div
        className="absolute right-6 sm:right-12 top-8 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(5rem, 12vw, 10rem)", color: "rgba(34,211,238,0.03)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        02
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 max-w-2xl relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div style={{ width: 20, height: 1, background: "var(--cyan)" }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--cyan)" }}>
            {t.projects.eyebrow}
          </span>
        </div>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text)", letterSpacing: "-0.02em" }}
        >
          {t.projects.title}
        </h2>
        <p className="mt-4 leading-relaxed" style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 500 }}>
          {t.projects.subtitle}
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-4 xl:grid-cols-2 relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={card}
            className="group relative flex flex-col p-6 border transition-all duration-300"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              minHeight: 280,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(34,211,238,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Large number background */}
            <div
              className="absolute right-5 top-4 font-display font-bold select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(4rem, 8vw, 6rem)", color: "rgba(34,211,238,0.05)", letterSpacing: "-0.05em" }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Top row */}
            <div className="flex items-center justify-between gap-4 mb-5">
              {/* Language badge */}
              <span
                className="font-mono text-[10px] uppercase px-2.5 py-1 border"
                style={{
                  color: "var(--cyan)",
                  borderColor: "rgba(34,211,238,0.25)",
                  background: "rgba(34,211,238,0.06)",
                  letterSpacing: "0.15em",
                }}
              >
                {project.language}
              </span>
            </div>

            {/* Title + desc */}
            <div className="flex-1">
              <h3
                className="font-display font-bold mb-3"
                style={{ fontSize: "1.35rem", color: "var(--text)", letterSpacing: "-0.01em" }}
              >
                {lang === "th" ? project.titleTh : project.titleEn}
              </h3>
              <p className="leading-relaxed text-[13px]" style={{ color: "var(--text-muted)", maxWidth: 440 }}>
                {lang === "th" ? project.descTh : project.descEn}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase px-2 py-0.5 border"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border)", letterSpacing: "0.1em" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex flex-wrap gap-3 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="font-mono flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-all duration-300"
                style={{ background: "var(--cyan)", color: "#04050a" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 16px rgba(34,211,238,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <FaGithub size={12} />
                {t.projects.view_code}
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono flex items-center gap-2 border px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-all duration-300"
                  style={{ borderColor: "rgba(34,211,238,0.35)", color: "var(--text)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.7)"; e.currentTarget.style.background = "rgba(34,211,238,0.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)"; e.currentTarget.style.background = "transparent"; }}
                >
                  <HiExternalLink size={11} />
                  {t.projects.live_demo}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
