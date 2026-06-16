import { motion, type Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { useLang } from "../i18n/LanguageContext";

const skills = [
  { name: "React", Icon: SiReact, color: "#67e8f9", bg: "rgba(103,232,249,0.12)" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#f8fafc", bg: "rgba(248,250,252,0.08)" },
  { name: "TypeScript", Icon: SiTypescript, color: "#60a5fa", bg: "rgba(96,165,250,0.12)" },
  { name: "JavaScript", Icon: SiJavascript, color: "#fbbf24", bg: "rgba(251,191,36,0.12)" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#4ade80", bg: "rgba(74,222,128,0.12)" },
  { name: "Express", Icon: SiExpress, color: "#f8fafc", bg: "rgba(248,250,252,0.08)" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#22d3ee", bg: "rgba(34,211,238,0.12)" },
  { name: "Git", Icon: SiGit, color: "#fb7185", bg: "rgba(251,113,133,0.12)" },
  { name: "HTML5", Icon: SiHtml5, color: "#fb923c", bg: "rgba(251,146,60,0.12)" },
  { name: "CSS3", Icon: SiCss, color: "#60a5fa", bg: "rgba(96,165,250,0.12)" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Stack</p>
            <h2 className="text-4xl font-black text-slate-50 md:text-5xl">
              {t.skills.title}
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-8 text-slate-400">{t.skills.subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map(({ name, Icon, color, bg }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              whileHover={{
                boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                y: -4,
              }}
              className="group flex cursor-default flex-col gap-5 rounded-md border border-white/10 bg-white/[0.045] p-5 shadow-sm transition-colors hover:border-cyan-300/30"
            >
              <div
                className="flex size-14 items-center justify-center rounded-md transition-transform group-hover:rotate-3"
                style={{ backgroundColor: bg }}
              >
                <Icon size={32} color={color} />
              </div>
              <span className="text-sm font-black text-slate-50">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
