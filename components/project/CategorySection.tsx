"use client";

import React from "react";
import {
  Globe,
  Smartphone,
  Cpu,
  LineChart,
  Palette,
  Layers,
  Cloud,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Web Development",
    projectsCount: "140+ Projects",
    icon: Globe,
    color: "from-blue-500/10 to-blue-500/0",
    iconColor: "text-blue-600",
  },
  {
    name: "Mobile Development",
    projectsCount: "85+ Projects",
    icon: Smartphone,
    color: "from-indigo-500/10 to-indigo-500/0",
    iconColor: "text-indigo-600",
  },
  {
    name: "AI / ML",
    projectsCount: "110+ Projects",
    icon: Cpu,
    color: "from-cyan-500/10 to-cyan-500/0",
    iconColor: "text-cyan-600",
  },
  {
    name: "Data Science",
    projectsCount: "64+ Projects",
    icon: LineChart,
    color: "from-emerald-500/10 to-emerald-500/0",
    iconColor: "text-emerald-600",
  },
  {
    name: "UI/UX Design",
    projectsCount: "95+ Projects",
    icon: Palette,
    color: "from-pink-500/10 to-pink-500/0",
    iconColor: "text-pink-600",
  },
  {
    name: "Blockchain",
    projectsCount: "42+ Projects",
    icon: Layers,
    color: "from-violet-500/10 to-violet-500/0",
    iconColor: "text-violet-600",
  },
  {
    name: "Cloud Computing",
    projectsCount: "58+ Projects",
    icon: Cloud,
    color: "from-sky-500/10 to-sky-500/0",
    iconColor: "text-sky-600",
  },
];

export default function CategorySection() {
  return (
    <section className="relative bg-slate-50/50 py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Explore Categories
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Browse by Project Domain
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
            Jump directly into your area of expertise. Find specialized projects aligned with your learning and career pathways.
          </p>
        </div>

        {/* Categories Horizontal/Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="group relative flex items-center justify-between gap-4 p-4 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg cursor-pointer"
              >
                {/* Visual Left Node */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100/50 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 ${cat.iconColor}`}>
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug truncate">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {cat.projectsCount}
                    </p>
                  </div>
                </div>

                {/* Accent Right Arrow */}
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 text-slate-400 group-hover:text-[#2563EB] transition-all duration-300 shrink-0">
                  <ChevronRight size={13} strokeWidth={2.5} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
