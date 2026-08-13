"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Server, Code2, Database, Terminal, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Languages:   "from-amber-400/20 to-orange-300/15 border-amber-300/30",
  Backend:     "from-stone-400/20 to-amber-400/15 border-stone-400/30",
  Frontend:    "from-orange-400/20 to-amber-300/15 border-orange-300/30",
  "AI & ML":   "from-orange-500/20 to-amber-400/15 border-orange-400/30",
  Databases:   "from-amber-500/20 to-orange-400/15 border-amber-400/30",
  Tools:       "from-stone-500/20 to-stone-400/15 border-stone-400/30",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Languages:  <Code2   size={14} strokeWidth={2} />,
  Backend:    <Server  size={14} strokeWidth={2} />,
  Frontend:   <Globe   size={14} strokeWidth={2} />,
  "AI & ML":  <Brain   size={14} strokeWidth={2} />,
  Databases:  <Database size={14} strokeWidth={2} />,
  Tools:      <Terminal size={14} strokeWidth={2} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills"
          subtitle="Tools and technologies I use to build, train and ship AI-powered products"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SKILL_CATEGORIES.map((category) => {
            const colors = categoryColors[category.name] || "from-primary/20 to-primary-cyan/10 border-primary/20";
            const icon = categoryIcons[category.name] || <Zap size={14} />;
            const [fromClass, toClass, borderClass] = colors.split(" ");

            return (
              <motion.div key={category.name} variants={cardVariants}>
                <GlassCard className="h-full p-6">
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${fromClass} ${toClass} border ${borderClass} px-3 py-1.5`}>
                    <span className="text-primary">{icon}</span>
                    <h3 className="font-semibold text-sm text-foreground">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="cursor-default rounded-full border border-amber-200/50 bg-amber-50/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-primary dark:border-amber-700/40 dark:bg-amber-950/40 dark:text-stone-300 dark:hover:border-primary/50 dark:hover:bg-primary/15 dark:hover:text-primary-cyan"
                        title={skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
