"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  FolderKanban,
  GraduationCap,
  UserCheck,
  Building2,
  TrendingUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const activityFeed = [
  { dot: "bg-emerald-500", text: "New project 'AI Chatbot' posted",          time: "2 mins ago" },
  { dot: "bg-sky-500",     text: "Cyber Security Bootcamp launched",          time: "15 mins ago" },
  { dot: "bg-amber-500",   text: "Sarah earned Python Certificate",           time: "25 mins ago" },
  { dot: "bg-rose-500",    text: "TechNova posted a new internship",          time: "40 mins ago" },
  { dot: "bg-violet-500",  text: "Ananya joined as a mentor",                 time: "1 hour ago" },
];

const platformStats = [
  { label: "Members",       value: 250, suffix: "K+", icon: Users,         displayPrefix: "" },
  { label: "Projects",      value: 15,  suffix: "K+", icon: FolderKanban,  displayPrefix: "" },
  { label: "Courses",       value: 2,   suffix: "K+", icon: GraduationCap, displayPrefix: "" },
  { label: "Mentors",       value: 5,   suffix: "K+", icon: UserCheck,     displayPrefix: "" },
  { label: "Organizations", value: 1,   suffix: "K+", icon: Building2,     displayPrefix: "" },
  { label: "Success Rate",  value: 98,  suffix: "%",  icon: TrendingUp,    displayPrefix: "" },
];

/* ------------------------------------------------------------------ */
/*  Count-up hook                                                      */
/* ------------------------------------------------------------------ */

function useCountUp(target: number, run: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return value;
}

/* ------------------------------------------------------------------ */
/*  Single stat with count-up                                          */
/* ------------------------------------------------------------------ */

function StatItem({
  stat,
  run,
}: {
  stat: (typeof platformStats)[number];
  run: boolean;
}) {
  const animated = useCountUp(stat.value, run);
  const display = animated.toFixed(0);
  return (
    <div className="flex flex-col items-center gap-2 px-3 text-center">
      <stat.icon className="h-6 w-6 text-[#D9A441]" />
      <div className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
        {display}
        {stat.suffix}
      </div>
      <div className="text-xs text-white/60">{stat.label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ActivityStatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FDF9F2] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT — Live activity feed */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-md lg:col-span-4 flex flex-col"
          >
            {/* Heading with pulsing live dot */}
            <div className="mb-1 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1A1A1A]">
                Live on FutureForge
              </h3>
            </div>
            <p className="mb-4 text-xs text-[#6B6B6B]">
              Latest activity from our community
            </p>

            <div className="flex flex-col gap-1">
              {activityFeed.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#C08A1E]/5"
                >
                  <span className={`h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
                  <span className="flex-1 text-sm text-[#1A1A1A]">{item.text}</span>
                  <span className="text-xs text-[#6B6B6B] whitespace-nowrap">{item.time}</span>
                </motion.div>
              ))}
            </div>

            <button className="mt-5 w-full rounded-full border-2 border-[#C08A1E]/30 py-2 text-sm font-semibold text-[#C08A1E] transition-colors hover:border-[#C08A1E] hover:bg-[#C08A1E]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50">
              View All Activity
            </button>
          </motion.div>

          {/* RIGHT — Platform stats on navy with world-map dots */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-[#0B1220] p-8 shadow-xl lg:col-span-8 flex flex-col justify-center"
          >
            {/* world map background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
              style={{
                backgroundImage: "url('/assets/explore/world_map_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h3 className="mb-8 text-sm font-extrabold uppercase tracking-widest text-white">
                <span className="text-white">FUTURE</span>
                <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">FORGE</span>
                {" "}AT A GLANCE
              </h3>
              <div className="grid grid-cols-3 gap-y-6 md:grid-cols-6 divide-x divide-white/10">
                {platformStats.map((stat) => (
                  <StatItem key={stat.label} stat={stat} run={inView} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
