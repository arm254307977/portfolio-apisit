import { motion, type Variants } from "framer-motion";
import { FaGithub, FaCloud, FaBirthdayCake, FaChartBar, FaMapMarkedAlt } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import projects from "../data/projects";
import { useLang } from "../i18n/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  weather: <FaCloud />,
  heart: <FaBirthdayCake />,
  chart: <FaChartBar />,
  map: <FaMapMarkedAlt />,
};

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
      className="relative py-20 bg-(--bg) border-b border-(--border) "
    >
      {/* Section number */}
      <div
        className="absolute right-12 sm:right-21 lg:right-11 top-2 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(1rem, 12vw, 6rem)", color: "rgba(34,211,238,0.03)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        02
      </div>

      <div className="max-w-7xl mx-auto w-screen px-6 sm:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-(--cyan)" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
              {t.projects.eyebrow}
            </span>
          </div>
          <h2
            className="font-bold leading-tight text-(--text) tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            {t.projects.title}
          </h2>
          <p className="mt-4 leading-relaxed text-sm text-(--text-muted) max-w-[500px]">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 relative z-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              className="group relative flex flex-col p-6 border border-(--border) bg-(--surface) transition-all duration-300"
              style={{ minHeight: 280 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(34,211,238,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Ghost icon background */}
              <div
                className="absolute right-4 top-4 select-none pointer-events-none"
                style={{ fontSize: "7rem", color: "rgba(34,211,238,0.03)" }}
                aria-hidden="true"
              >
                {iconMap[project.icon]}
              </div>

              {/* Top row */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <span
                  className="font-mono text-[10px] uppercase px-2.5 py-1 border text-cyan"
                  style={{
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
                  className="font-display font-bold mb-3 text-(--text) tracking-[-0.01em]"
                  style={{ fontSize: "1.35rem" }}
                >
                  {lang === "th" ? project.titleTh : project.titleEn}
                </h3>
                <p className="leading-relaxed text-[13px] text-(--text-muted) max-w-[440px]">
                  {lang === "th" ? project.descTh : project.descEn}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase px-2 py-0.5 border border-(--border) text-(--text-muted)"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-5 flex flex-wrap gap-3 pt-4 border-t border-(--border)">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-2 py-1 text-[11px] uppercase tracking-[0.12em] transition-all duration-300 bg-(--cyan) text-[#04050a]"
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
                    className="flex items-center gap-2 border px-2 py-1 text-[11px] uppercase tracking-[0.12em] transition-all duration-300 text-(--text)"
                    style={{ borderColor: "rgba(34,211,238,0.35)" }}
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
      </div>
    </section>
  );
}
