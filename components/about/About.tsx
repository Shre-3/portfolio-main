"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";

interface AboutProps {
  avatarUrl: string;
  publicRepos: number;
  followers: number;
}

export default function About({
  avatarUrl,
  publicRepos,
  followers,
}: AboutProps) {
  // Intentionally hiding the stats cards (GitHub Repos / Followers / CGPA).

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent, scalable systems"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <GlassCard className="p-8" hover={false}>
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-cyan/20 blur-xl" />
                <Image
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  width={280}
                  height={280}
                  className="relative rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  {PERSONAL_INFO.location}
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-primary"
                >
                  <Mail size={16} className="text-primary" />
                  {PERSONAL_INFO.email}
                </a>
                <span className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  {PERSONAL_INFO.phone}
                </span>
              </div>

              {/* VS Code–style code snippet */}
              <div className="mt-5 w-full rounded-xl border border-amber-200/40 bg-slate-950 p-4">
                <div className="mb-3 flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10px] text-slate-500">profile.ts</span>
                </div>
                <pre className="overflow-x-auto font-mono text-[11px] leading-[1.7] sm:text-xs">
                  <span className="text-amber-400">const </span>
                  <span className="text-sky-400">shreya</span>
                  <span className="text-slate-400"> = {"{"}</span>{"\n"}
                  {"  "}<span className="text-green-400">name</span><span className="text-slate-400">: </span><span className="text-orange-300">&quot;Shreya Acharya&quot;</span><span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-green-400">role</span><span className="text-slate-400">: </span><span className="text-orange-300">&quot;Data Scientist&quot;</span><span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-green-400">focus</span><span className="text-slate-400">: [</span><span className="text-orange-300">&quot;ML&quot;</span><span className="text-slate-400">, </span><span className="text-orange-300">&quot;RAG&quot;</span><span className="text-slate-400">, </span><span className="text-orange-300">&quot;Security&quot;</span><span className="text-slate-400">],</span>{"\n"}
                  {"  "}<span className="text-green-400">cgpa</span><span className="text-slate-400">: </span><span className="text-yellow-300">9.2</span><span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-green-400">publication</span><span className="text-slate-400">: </span><span className="text-orange-300">&quot;IEEE Xplore, COMP-SIF&quot;</span><span className="text-slate-400">,</span>{"\n"}
                  {"  "}<span className="text-green-400">openTo</span><span className="text-slate-400">: </span><span className="text-orange-300">&quot;Werkstudent roles&quot;</span><span className="text-slate-400">,</span>{"\n"}
                  <span className="text-slate-400">{"}"}</span>
                </pre>
              </div>
            </div>
          </GlassCard>

          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              Engineering across{" "}
              <span className="gradient-text">AI, ML &amp; Security</span>
            </h3>
            <p className="mb-4 text-base leading-7 text-muted">
              {PERSONAL_INFO.longBio}
            </p>
            <p className="text-base leading-7 text-muted">
              Currently pursuing an <strong className="font-semibold text-foreground">M.Sc. in Data Science at TUHH</strong>,
              building on a Bachelor&apos;s in Cyber Security. Published research
              at IEEE Xplore via the COMP-SIF international conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
