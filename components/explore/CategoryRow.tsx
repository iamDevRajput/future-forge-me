"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  FolderKanban,
  Users,
  Building2,
  ClipboardCheck,
  Award,
  Users2,
  CalendarDays,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const categories = [
  { title: "Courses",          count: "2,100+",  label: "Courses",       icon: GraduationCap },
  { title: "Projects",         count: "15,000+", label: "Projects",      icon: FolderKanban },
  { title: "Mentors",          count: "5,000+",  label: "Mentors",       icon: Users },
  { title: "Organizations",    count: "1,200+",  label: "Organizations", icon: Building2 },
  { title: "Skill Assessments",count: "2,800+",  label: "Assessments",   icon: ClipboardCheck },
  { title: "Certifications",   count: "3,500+",  label: "Certificates",  icon: Award },
  { title: "Communities",      count: "950+",    label: "Communities",   icon: Users2 },
  { title: "Events",           count: "500+",    label: "Events",        icon: CalendarDays },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CategoryRow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FDF9F2] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading — left-aligned with gold accent line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-4"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
            Explore by Category
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#C08A1E]/60 to-transparent" />
        </motion.div>

        <div className="relative">
          {/* left chevron */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur-md transition-colors hover:bg-[#C08A1E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            <ChevronLeft className="h-5 w-5 text-[#C08A1E]" />
          </button>

          {/* scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-12 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((cat, i) => (
              <motion.a
                key={cat.title}
                href="#"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group flex min-w-[180px] flex-col gap-3 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-lg backdrop-blur-md transition-colors hover:border-[#C08A1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C08A1E]/10 transition-colors group-hover:bg-[#C08A1E]/20">
                  <cat.icon className="h-6 w-6 text-[#C08A1E]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]">
                    {cat.count} {cat.label}
                  </p>
                </div>
                <span className="mt-auto text-sm font-semibold text-[#C08A1E] transition-transform group-hover:translate-x-1">
                  Explore →
                </span>
              </motion.a>
            ))}
          </div>

          {/* right chevron */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-lg backdrop-blur-md transition-colors hover:bg-[#C08A1E]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50"
          >
            <ChevronRight className="h-5 w-5 text-[#C08A1E]" />
          </button>
        </div>
      </div>
    </section>
  );
}
