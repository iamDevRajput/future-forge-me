"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Hammer,
  Sprout,
  Rocket,
  Users,
  FolderKanban,
  GraduationCap,
  UserCheck,
  Building2,
  Heart,
  Globe,
} from "lucide-react";
import { useCountUp } from "./hooks/useCountUp";
import { useReducedMotion } from "./hooks/useReducedMotion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const timelineSteps = [
  { year: "2022", title: "The Idea", description: "A vision to democratize opportunity was born.", icon: Lightbulb },
  { year: "2023", title: "Built with Purpose", description: "Platform launched with courses, projects, and mentorship.", icon: Hammer },
  { year: "2024", title: "Growing Together", description: "Reached 100K users and 500+ organizations.", icon: Sprout },
  { year: "2025+", title: "Shaping the Future", description: "Expanding globally with new tools and partnerships.", icon: Rocket },
];

const platformStats = [
  { label: "Active Users", value: 250, suffix: "K+", icon: Users },
  { label: "Projects Posted", value: 15, suffix: "K+", icon: FolderKanban },
  { label: "Courses", value: 2, suffix: "K+", icon: GraduationCap },
  { label: "Mentors", value: 5, suffix: "K+", icon: UserCheck },
  { label: "Organizations", value: 1, suffix: "K+", icon: Building2 },
  { label: "Satisfaction Rate", value: 98, suffix: "%", icon: Heart },
  { label: "Countries", value: 150, suffix: "+", icon: Globe },
];

/* ------------------------------------------------------------------ */
/*  Stat item with count-up                                            */
/* ------------------------------------------------------------------ */

function StatItem({
  stat,
  run,
  reduced,
}: {
  stat: (typeof platformStats)[number];
  run: boolean;
  reduced: boolean;
}) {
  const animated = useCountUp(stat.value, run);
  const display = reduced ? String(stat.value) : animated.toFixed(0);
  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={reduced ? { duration: 0 } : { duration: 0.4 }}
      className="flex flex-col items-center gap-2 px-3 text-center"
    >
      <stat.icon className="h-6 w-6 text-[#C08A1E]" />
      <div className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-2xl font-extrabold tabular-nums text-transparent sm:text-3xl">
        {display}
        {stat.suffix}
      </div>
      <div className="text-xs text-[#6B6B6B]">{stat.label}</div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline step                                                       */
/* ------------------------------------------------------------------ */

function TimelineStep({
  step,
  index,
  isLast,
  reduced,
}: {
  step: (typeof timelineSteps)[number];
  index: number;
  isLast: boolean;
  reduced: boolean;
}) {
  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={reduced ? { duration: 0 } : { delay: 0.1 * index, duration: 0.5 }}
      className="flex flex-col items-center relative"
    >
      {/* Connector line (dotted) */}
      {!isLast && (
        <div className="absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px border-t-2 border-dashed border-[#C08A1E]/25 hidden sm:block" />
      )}

      {/* Circular icon badge */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C08A1E]/30 bg-white shadow-[0_0_20px_rgba(200,141,30,0.1)]">
        <step.icon className="h-6 w-6 text-[#C08A1E]" />
      </div>

      {/* Year (bold, gold) */}
      <span className="mt-3 text-sm font-extrabold bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">
        {step.year}
      </span>

      {/* Title */}
      <h3 className="mt-1 text-sm font-bold text-[#1A1A1A]">{step.title}</h3>

      {/* Description */}
      <p className="mt-1 max-w-[140px] text-center text-xs leading-[1.5] text-[#6B6B6B]">
        {step.description}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function StoryTimeline() {
  const reduced = useReducedMotion();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#FDF9F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Our Story */}
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0 } : { duration: 0.6 }}
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-3xl mb-6">
              Our <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">Story</span>
            </h2>

            <div className="space-y-4 text-[#6B6B6B] leading-[1.7]">
              <p>
                FutureForge started with a simple observation: talent is everywhere, but
                opportunity isn&apos;t. In 2022, our founders set out to bridge that gap —
                creating a platform where anyone, regardless of their background, could
                access world-class learning, mentorship, and career-building opportunities.
              </p>
              <p>
                What began as a small community of passionate learners and mentors has grown
                into a thriving ecosystem of over 250,000 users across 150 countries.
                Today, FutureForge partners with organizations worldwide to help them
                discover talent, upskill teams, and drive real impact.
              </p>
            </div>

            <motion.button
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="mt-8 flex items-center gap-2 rounded-full border-2 border-[#C08A1E]/30 px-6 py-2.5 text-sm font-semibold text-[#C08A1E] transition-colors hover:border-[#C08A1E] hover:bg-[#C08A1E]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
            >
              Read Our Full Story
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* RIGHT — Timeline */}
          <div>
            <h3 className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
              Our Journey
            </h3>

            {/* Horizontal timeline — wraps on mobile */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-4 lg:flex-nowrap lg:justify-between">
              {timelineSteps.map((step, i) => (
                <TimelineStep
                  key={step.year}
                  step={step}
                  index={i}
                  isLast={i === timelineSteps.length - 1}
                  reduced={reduced}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ---- STATS ROW ---- */}
        <div ref={statsRef}>
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduced ? { duration: 0 } : { duration: 0.5 }}
            className="mt-16 rounded-2xl bg-[#0B1220] p-8 sm:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Faint dot pattern background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle, #C08A1E 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-white">
                <span className="text-white">FUTURE</span>{" "}
                <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">FORGE</span>{" "}
                BY THE NUMBERS
              </h3>

              <div className="grid grid-cols-3 gap-y-8 gap-x-4 sm:grid-cols-4 md:grid-cols-7">
                {platformStats.map((stat) => (
                  <StatItem key={stat.label} stat={stat} run={statsInView} reduced={reduced} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
