import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      className="border-t px-6 sm:px-12 py-10"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-1 font-display font-bold text-base" style={{ color: "var(--text)", letterSpacing: "-0.02em" }}>
          ARM
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--cyan)" }}
          >
            .
          </motion.span>
        </div>

        {/* Center: Copyright */}
        <p className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
          {t.footer.made} · © {new Date().getFullYear()}
        </p>

        {/* Right: Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/arm254307977"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:aps.axm@gmail.com"
            aria-label="Send email"
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <HiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
