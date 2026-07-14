"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const popularSearches = [
  "AI & ML",
  "UI/UX Design",
  "Web Development",
  "Cyber Security",
  "Data Science",
  "Cloud Computing",
];

/* ------------------------------------------------------------------ */
/*  Floating chip animation variants                                    */
/* ------------------------------------------------------------------ */

// Each chip floats independently with a different amplitude/delay
const floatVariants = (delay: number, amplitude: number) => ({
  animate: {
    y: [0, -amplitude, 0, amplitude / 2, 0],
    transition: {
      duration: 4 + delay * 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  },
});

/* ------------------------------------------------------------------ */
/*  Stat chip data                                                       */
/* ------------------------------------------------------------------ */

const statChips = [
  {
    label: "Courses",
    value: "2,100+",
    position: "absolute top-[12%] left-[-4%]",
    floatDelay: 0,
    floatAmp: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
  },
  {
    label: "Projects",
    value: "15,000+",
    position: "absolute top-[2%] right-[8%]",
    floatDelay: 0.8,
    floatAmp: 10,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    label: "Mentors",
    value: "5,000+",
    position: "absolute top-[35%] right-[-5%]",
    floatDelay: 1.5,
    floatAmp: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    label: "Organizations",
    value: "1,200+",
    position: "absolute bottom-[28%] right-[-3%]",
    floatDelay: 0.4,
    floatAmp: 9,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    label: "Certificates",
    value: "3,500+",
    position: "absolute bottom-[5%] right-[18%]",
    floatDelay: 1.1,
    floatAmp: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
    ),
  },
  {
    label: "Assessments",
    value: "2,800+",
    position: "absolute bottom-[8%] left-[2%]",
    floatDelay: 1.8,
    floatAmp: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroExplore() {
  const [query, setQuery] = useState("");

  return (
    <section
      id="explore"
      className="relative overflow-hidden bg-[#FDF9F2] py-16 sm:py-20 lg:py-28"
    >
      {/* soft gold glow backdrop */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D9A441]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ---- LEFT ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Discover. Build. Grow.
              <br />
              Shape your{" "}
              <span className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-transparent">
                future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#6B6B6B]">
              Explore thousands of courses, real-world projects, expert mentors,
              and organizations — all in one unified platform designed to take
              you from learning to career-ready.
            </p>

            {/* Search bar */}
            <div className="mt-8 flex items-center gap-2 rounded-full border border-white/60 bg-white/60 p-2 pl-5 shadow-lg backdrop-blur-md focus-within:ring-2 focus-within:ring-[#C08A1E]/40">
              <Search className="h-5 w-5 shrink-0 text-[#6B6B6B]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, projects, mentors, skills..."
                className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder:text-[#6B6B6B]/70 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white shadow-[0_0_25px_rgba(200,141,30,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
                aria-label="Submit search"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Popular searches */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                Popular Searches:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {popularSearches.map((tag, i) => (
                  <motion.button
                    key={tag}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuery(tag)}
                    className="rounded-full border border-[#1A1A1A]/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#1A1A1A] backdrop-blur-sm transition-colors hover:border-[#C08A1E] hover:bg-[#C08A1E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---- RIGHT: Hero 3D Illustration & Floating Stats ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto hidden w-full max-w-[700px] sm:block lg:-mr-10"
          >
            <div className="relative w-full aspect-[4/3]">
              <img
                src="/assets/home/heroBackground.png"
                alt="FutureForge 3D Campus"
                className="h-full w-full object-contain"
              />

              {/* Floating Stat Chips — each has a continuous looping animation */}
              {statChips.map((chip) => (
                <motion.div
                  key={chip.label}
                  className={`${chip.position} rounded-xl border border-white/60 bg-white/85 px-4 py-2.5 shadow-xl backdrop-blur-md z-10`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: [0, -chip.floatAmp, 0, chip.floatAmp / 2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: chip.floatDelay * 0.3 },
                    y: {
                      duration: 4 + chip.floatDelay * 0.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: chip.floatDelay,
                    },
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9A441]/10 text-[#D9A441]">
                      {chip.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                        {chip.label}
                      </div>
                      <div className="bg-gradient-to-r from-[#D9A441] to-[#B8791A] bg-clip-text text-base font-extrabold text-transparent">
                        {chip.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
