"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Briefcase,
  FolderSearch,
  Award,
  UserCheck,
  UserPlus,
  GraduationCap,
  Building,
  ChevronRight,
  Clock,
  FolderKanban,
  ClipboardCheck,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const goals = [
  { label: "Learn New Skills",    icon: Sparkles },
  { label: "Build Experience",    icon: Briefcase },
  { label: "Find Projects",       icon: FolderSearch },
  { label: "Get Certified",       icon: Award },
  { label: "Find Mentors",        icon: UserCheck },
  { label: "Hire Talent",         icon: UserPlus },
  { label: "Teach Others",        icon: GraduationCap },
  { label: "Join an Organization",icon: Building },
];

const featuredPaths = [
  {
    title: "Full Stack Developer",
    status: "Popular",
    statusColor: "bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white",
    image: "/assets/explore/full_stack.png",
    stats: [
      { label: "Courses",     value: "12", icon: GraduationCap },
      { label: "Projects",    value: "6",  icon: FolderKanban },
      { label: "Assessments", value: "4",  icon: ClipboardCheck },
      { label: "Mentors",     value: "3",  icon: Users },
    ],
    duration: "6 Months",
  },
  {
    title: "Data Science Specialist",
    status: "Best for Beginners",
    statusColor: "bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white",
    image: "/assets/explore/data_science.png",
    stats: [
      { label: "Courses",     value: "10", icon: GraduationCap },
      { label: "Projects",    value: "5",  icon: FolderKanban },
      { label: "Assessments", value: "4",  icon: ClipboardCheck },
      { label: "Mentors",     value: "2",  icon: Users },
    ],
    duration: "5 Months",
  },
  {
    title: "Cyber Security Analyst",
    status: "High Demand",
    statusColor: "bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white",
    image: "/assets/explore/cyber_security.png",
    stats: [
      { label: "Courses",     value: "8",  icon: GraduationCap },
      { label: "Projects",    value: "4",  icon: FolderKanban },
      { label: "Assessments", value: "3",  icon: ClipboardCheck },
      { label: "Mentors",     value: "2",  icon: Users },
    ],
    duration: "4 Months",
  },
  {
    title: "UI/UX Designer",
    status: "Trending",
    statusColor: "bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white",
    image: "/assets/explore/ui_ux.png",
    stats: [
      { label: "Courses",     value: "8",  icon: GraduationCap },
      { label: "Projects",    value: "4",  icon: FolderKanban },
      { label: "Assessments", value: "2",  icon: ClipboardCheck },
      { label: "Mentors",     value: "3",  icon: Users },
    ],
    duration: "4 Months",
  },
];

/* ------------------------------------------------------------------ */
/*  Card with 3D tilt on hover                                         */
/* ------------------------------------------------------------------ */

function PathCard({
  path,
  index,
}: {
  path: (typeof featuredPaths)[number];
  index: number;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ ry: px * 12, rx: -py * 12 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: 0.07 * index, duration: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101B33] shadow-xl"
    >
      {/* cover image */}
      <div className="relative h-36 w-full bg-[#0B1220]">
        <img
          src={path.image}
          alt={path.title}
          className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider shadow-lg ${path.statusColor}`}
        >
          {path.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold text-white">{path.title}</h3>

        {/* stats — vertical list (matching reference) */}
        <div className="mt-3 flex flex-col gap-1.5">
          {path.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2"
            >
              <s.icon className="h-4 w-4 text-[#D9A441] shrink-0" />
              <span className="text-xs text-white/70">
                {s.value} {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="flex items-center gap-1.5 text-xs text-white/60">
            <Clock className="h-3.5 w-3.5" />
            Estimated: {path.duration}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(200,141,30,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            Explore Path
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DiscoverGoals() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FDF9F2] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT — Discover by Goal */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <h2 className="mb-5 text-xs font-extrabold uppercase tracking-[0.15em] text-[#1A1A1A]">
              Discover by Goal
            </h2>
            <div className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/40 p-2 shadow-lg backdrop-blur-md">
              {goals.map((goal, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={goal.label}
                    onClick={() => setActive(i)}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 ${
                      isActive
                        ? "border border-[#C08A1E]/40 bg-[#C08A1E]/10 text-[#1A1A1A]"
                        : "border border-transparent text-[#1A1A1A]/70 hover:bg-[#C08A1E]/5 hover:text-[#1A1A1A]"
                    }`}
                  >
                    <goal.icon
                      className={`h-5 w-5 shrink-0 ${
                        isActive ? "text-[#C08A1E]" : "text-[#6B6B6B]"
                      }`}
                    />
                    <span className="flex-1">{goal.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isActive
                          ? "text-[#C08A1E]"
                          : "text-[#6B6B6B] group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — Featured Learning Paths */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            {/* Heading row with View All Paths link */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#1A1A1A]">
                Featured Learning Paths
              </h2>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-[#C08A1E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 rounded"
              >
                View All Paths
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            {/* 4-column grid at lg, 2-col at sm, 1-col on mobile */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featuredPaths.map((path, i) => (
                <PathCard key={path.title} path={path} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
