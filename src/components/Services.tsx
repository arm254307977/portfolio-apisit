import { motion, type Variants } from "framer-motion";
import { HiDeviceMobile, HiLightningBolt, HiTemplate, HiTerminal } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

const icons = [HiTerminal, HiTemplate, HiDeviceMobile, HiLightningBolt];
const accentColors = ["var(--cyan)", "var(--purple)", "var(--cyan)", "var(--purple)"];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const { t } = useLang();

  return (
    <section
      id="services"
      className="relative py-28 px-6 sm:px-12 bg-(--surface) border-b border-(--border)"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" style={{ opacity: 0.3 }} />

      {/* Section number */}
      <div
        className="absolute right-6 sm:right-12 top-2 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "clamp(1rem, 12vw, 6rem)", color: "rgba(167,139,250,0.04)", lineHeight: 1, letterSpacing: "-0.05em" }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl relative z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-(--purple)" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-(--purple)">
              {t.services.eyebrow}
            </span>
          </div>
          <h2
            className="font-bold leading-tight text-(--text) tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            {t.services.title}
          </h2>
          <p className="mt-4 leading-relaxed text-sm text-(--text-muted) max-w-[480px]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 md:grid-cols-2 relative z-10"
        >
          {t.services.items.map((service, index) => {
            const Icon = icons[index] ?? HiTerminal;
            const accent = accentColors[index] ?? "var(--cyan)";
            return (
              <motion.article
                key={service.title}
                variants={item}
                className="p-6 border border-(--border) bg-(--surface-2) transition-all duration-300 group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = index % 2 === 0
                    ? "rgba(34,211,238,0.3)"
                    : "rgba(167,139,250,0.3)";
                  e.currentTarget.style.boxShadow = index % 2 === 0
                    ? "0 0 30px rgba(34,211,238,0.06)"
                    : "0 0 30px rgba(167,139,250,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="flex items-center justify-center w-12 h-12 border border-(--border) transition-colors duration-300"
                    style={{ color: accent }}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs text-(--text-muted)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="font-display font-semibold mb-3 text-(--text) tracking-[-0.01em]"
                  style={{ fontSize: "1.2rem" }}
                >
                  {service.title}
                </h3>
                <p className="leading-relaxed text-[13px] text-(--text-muted)">
                  {service.body}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
