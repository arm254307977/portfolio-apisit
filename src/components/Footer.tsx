import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useLang } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-(--border) bg-(--surface) px-6 sm:px-12 py-2 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-1 font-display font-bold text-base text-(--text) tracking-[-0.02em]">
          ARM
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-cyan ml-px"
          >
            .
          </motion.span>
        </div>

        {/* Center: Copyright */}
        <p className="font-mono text-[11px] text-(--text-muted)">
          {t.footer.made} · © {new Date().getFullYear()}
        </p>

        {/* Right: Social links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/arm254307977"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition-colors duration-200 text-(--text-muted)"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:aps.axm@gmail.com"
            aria-label="Send email"
            className="transition-colors duration-200 text-(--text-muted)"
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
