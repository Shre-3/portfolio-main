"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Typewriter from "@/components/ui/Typewriter";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

type PersonalInfoWithTagline = typeof PERSONAL_INFO & { heroTagline?: string };

const ParticleBackground = dynamic(
  () => import("@/components/ui/ParticleBackground"),
  { ssr: false }
);

interface HeroProps {
  avatarUrl: string;
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function AvatarCard({ avatarUrl }: { avatarUrl: string }) {
  return (
    <motion.div
      className="relative mx-auto w-fit select-none"
    >
      {/* Ambient glow layers */}
      <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary-cyan/25 blur-3xl" />
      <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-300/15 to-orange-300/10 blur-lg" />

      {/* Gradient-border frame: outer gradient wrapper → inner white card */}
      <div className="relative rounded-[1.75rem] bg-gradient-to-br from-amber-500 via-primary to-orange-500 p-[2px] shadow-2xl">
        <div className="rounded-[1.6rem] bg-white/95 p-4 backdrop-blur-xl dark:bg-slate-900/90">

          {/* Photo */}
          <div className="relative overflow-hidden rounded-[1.5rem] p-1">
            <Image
              src={avatarUrl}
              alt={PERSONAL_INFO.name}
              width={360}
              height={360}
              className="h-[420px] w-[420px] object-cover rounded-[1.2rem]"
              priority
            />
            {/* Subtle bottom fade */}
            <div className="pointer-events-none absolute bottom-1 left-1 right-1 h-16 bg-gradient-to-t from-white/50 to-transparent dark:from-slate-900/50" />
          </div>

          {/* Name + availability */}
          <div className="mt-4 flex items-center justify-between px-1">
            <div>
              <p className="text-sm font-bold text-foreground">{PERSONAL_INFO.name}</p>
              <p className="text-xs text-muted">Data Science · AI/ML · Security</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-green-300/60 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 dark:border-green-700/40 dark:bg-green-900/30 dark:text-green-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Glare sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function Hero({ avatarUrl }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient"
    >
      <ParticleBackground />

      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-300/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-48 right-1/4 h-96 w-96 rounded-full bg-primary-cyan/25 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -top-20 right-1/5 h-80 w-80 rounded-full bg-accent-pink/20 blur-3xl"
        />
      </div>

      {/* Subtle dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(180,83,9,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700 shadow-sm dark:border-green-700/40 dark:bg-green-900/20 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="mb-3 text-5xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Tagline — key phrase in gradient */}
            <motion.p variants={itemVariants} className="mb-4 max-w-xl text-lg font-bold text-foreground/80 sm:text-xl lg:text-2xl mx-auto lg:mx-0">
              I turn messy data into models,{" "}
              <span className="gradient-text-animated">and models into products.</span>
            </motion.p>

            {/* Typewriter roles */}
            <motion.div variants={itemVariants} className="mb-5 h-7 text-base sm:text-lg">
              <Typewriter words={PERSONAL_INFO.roles} className="gradient-text-animated font-semibold" />
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="mb-6 max-w-xl text-base leading-7 text-muted mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="mb-7 flex flex-wrap justify-center gap-4 lg:justify-start">
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary">
                <Zap size={18} />
                View My Work
              </motion.a>
              <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary">
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex justify-center gap-3 lg:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/60 bg-white/80 text-muted shadow-sm transition-colors hover:border-primary/60 hover:text-primary hover:shadow-glow dark:border-amber-700/40 dark:bg-amber-950/50"
                >
                  {iconMap[link.icon]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D avatar card — sm+ only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="hidden justify-center sm:flex lg:justify-end"
            style={{ perspective: "1000px" }}
          >
            <AvatarCard avatarUrl={avatarUrl} />
          </motion.div>

          {/* Mobile-only circular avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center sm:hidden"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 opacity-40 blur-xl" />
              <div className="relative rounded-full bg-gradient-to-br from-amber-500 to-orange-500 p-[2px] shadow-xl">
                <Image
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  width={130}
                  height={130}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll bounce indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-muted/60 hover:text-primary transition-colors">
          <ArrowDown size={22} />
        </a>
      </motion.div>
    </section>
  );
}
