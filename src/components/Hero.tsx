import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

function AvatarRings() {
  return (
    <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
      {/* Outer dashed ring — purple counter-rotating */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "calc(100% + 52px)",
          height: "calc(100% + 52px)",
          top: "-26px",
          left: "-26px",
          borderRadius: "50%",
          border: "1px dashed rgba(167,139,250,0.3)",
        }}
      />
      {/* Dot on outer ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "calc(100% + 52px)",
          height: "calc(100% + 52px)",
          top: "-26px",
          left: "-26px",
          borderRadius: "50%",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--purple)",
          boxShadow: "0 0 8px var(--purple)",
        }} />
      </motion.div>

      {/* Inner cyan ring — spinning */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "calc(100% + 24px)",
          height: "calc(100% + 24px)",
          top: "-12px",
          left: "-12px",
          borderRadius: "50%",
          border: "1px solid transparent",
          borderTopColor: "var(--cyan)",
          borderRightColor: "rgba(34,211,238,0.25)",
          borderBottomColor: "transparent",
          borderLeftColor: "rgba(34,211,238,0.1)",
        }}
      />
      {/* Dot on inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: "calc(100% + 24px)",
          height: "calc(100% + 24px)",
          top: "-12px",
          left: "-12px",
          borderRadius: "50%",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "var(--cyan)",
          boxShadow: "0 0 10px var(--cyan)",
        }} />
      </motion.div>

      {/* Avatar circle */}
      <motion.div
        animate={{ boxShadow: [
          "0 0 30px rgba(34,211,238,0.1), 0 0 0 2px rgba(34,211,238,0.2)",
          "0 0 50px rgba(34,211,238,0.18), 0 0 0 2px rgba(34,211,238,0.35)",
          "0 0 30px rgba(34,211,238,0.1), 0 0 0 2px rgba(34,211,238,0.2)",
        ]}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src="/avatar.jpg"
          alt="Apisit Janpalee"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </motion.div>

      {/* Glow blob */}
      <div style={{
        position: "absolute",
        inset: "-30%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 65%)",
        zIndex: -1,
        pointerEvents: "none",
      }} />
    </div>
  );
}

export default function Hero() {
  const { lang, t } = useLang();

  const up = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
    id="home"
    className="relative overflow-hidden w-full flex items-center justify-center md:h-[90vh] h-[120vh] -mt-20 md:mt-0"
    style={{ background: "var(--bg)" }}
  >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid" style={{ opacity: 0.5 }} />

      {/* Ambient glow — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 70% at 72% 50%, rgba(34,211,238,0.06) 0%, transparent 65%)" }}
      />
      {/* Ambient glow — left top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 50% at 15% 20%, rgba(167,139,250,0.04) 0%, transparent 60%)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full md:mt-0 px-6 sm:px-12 py-28 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 max-w-7xl">
        {/* Left: Text */}
        <div className="flex-1 lg:max-w-2xl order-2 lg:order-1 text-center lg:text-left">
          {/* Terminal label */}
          <motion.div {...up(0)} className="mb-6 flex items-center gap-1.5 font-mono text-[11px] justify-center lg:justify-start">
            <span className="text-cyan">›</span>
            <span className="text-(--text-muted)">const</span>
            <span className="text-(--text-dim)">role</span>
            <span className="text-(--text-muted)">=</span>
            <span className="text-(--purple)">"</span>
            <span className="text-(--text)">{t.hero.role}</span>
            <span className="text-(--purple)">"</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              style={{ display: "inline-block", width: 2, height: "0.95em", background: "var(--cyan)", verticalAlign: "middle", marginLeft: 2 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            {...up(0.1)}
            className={`font-bold tracking-tight text-(--text) ${lang === "th" ? "leading-[1.05]" : "leading-[0.88]"}`}
            style={{
              fontSize: lang === "th" ? "clamp(2.6rem, 7.2vw, 6.8rem)" : "clamp(3.2rem, 9vw, 8.5rem)",
            }}
          >
            {t.hero.name.split(" ").map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="my-2 h-px w-16 origin-left mx-auto lg:mx-0"
            style={{ background: "linear-gradient(to right, var(--cyan), rgba(167,139,250,0.5))" }}
          />

          {/* Subtitle */}
          <motion.p {...up(0.3)} className="leading-relaxed mx-auto lg:mx-0 max-w-md text-[15px] text-(--text-muted)">
            {t.hero.subtitle}
          </motion.p>

          {/* Location badge */}
          <motion.div {...up(0.38)} className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] text-(--text-muted)">
            <span className="text-cyan" style={{ fontSize: 8 }}>●</span>
            Chiang Rai, Thailand
          </motion.div>

          {/* CTAs */}
          <motion.div {...up(0.45)} className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 text-sm border transition-all duration-300 bg-(--cyan) text-[#04050a]"
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(34,211,238,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {t.hero.cta_projects} ↗
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm border transition-all duration-300 text-(--text)"
              style={{ borderColor: "rgba(34,211,238,0.35)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.7)"; e.currentTarget.style.background = "rgba(34,211,238,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)"; e.currentTarget.style.background = "transparent"; }}
            >
              {t.hero.cta_contact} →
            </a>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 shrink-0 flex items-center justify-center"
          style={{ paddingRight: "clamp(0px, 3vw, 40px)" }}
        >
          <AvatarRings />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--text-muted)">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 28, background: "linear-gradient(to bottom, var(--cyan), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
