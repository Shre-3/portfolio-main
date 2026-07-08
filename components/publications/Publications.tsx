"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLICATIONS, CERTIFICATIONS } from "@/lib/constants";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Publications() {
  return (
    <section id="achievements" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Achievements"
          subtitle="Publications, certifications, and milestones"
        />

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2 text-xl font-semibold"
          >
            <BookOpen className="text-primary" size={24} />
            Publications
          </motion.h3>
          <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {PUBLICATIONS.map((pub) => (
              <motion.div key={pub.title} variants={itemVariants}>
                <GlassCard className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {pub.badge}
                  </span>
                  <h4 className="mb-2 text-lg font-bold">{pub.title}</h4>
                  <p className="mb-1 text-sm font-medium text-primary-cyan">{pub.venue}</p>
                  <p className="mb-3 text-sm text-muted">
                    {pub.publisher} · {pub.date}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{pub.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2 text-xl font-semibold"
          >
            <Award className="text-primary" size={24} />
            Certifications
          </motion.h3>
          {CERTIFICATIONS.length > 0 ? (
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div key={cert.name} variants={itemVariants}>
                  <GlassCard className="p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Award size={20} className="text-primary" />
                    </div>
                    <h4 className="mb-1 font-semibold">{cert.name}</h4>
                    <p className="mb-2 text-sm font-medium text-primary-cyan">{cert.issuer}</p>
                    <p className="text-sm leading-relaxed text-muted">{cert.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-sm text-muted">More certifications coming soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
