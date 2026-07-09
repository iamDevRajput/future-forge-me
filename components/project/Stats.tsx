"use client";

import React from "react";
import { FolderKanban, Building2, Users, CheckCircle2, HeartHandshake } from "lucide-react";

const stats = [
  {
    value: "15K+",
    label: "Projects Posted",
    icon: FolderKanban,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
  {
    value: "8K+",
    label: "Organizations",
    icon: Building2,
    color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    value: "120K+",
    label: "Contributors",
    icon: Users,
    color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    value: "2500+",
    label: "Completed Projects",
    icon: CheckCircle2,
    color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    value: "98%",
    label: "Success Rate",
    icon: HeartHandshake,
    color: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20 font-sans text-slate-100">
      {/* Background Deep Glow Elements */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 select-none">
          <span className="inline-flex rounded-full bg-blue-500/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400">
            Platform Stats
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Our Growing Ecosystem
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-400 font-medium">
            FutureForge coordinates project discovery, workflow evaluation, and talent placement across thousands of active participants.
          </p>
        </div>

        {/* Stats Matrix Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700/80 hover:bg-slate-900/60"
              >
                {/* Floating Glow Circle */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 ${item.color}`}>
                  <Icon size={16} strokeWidth={2.2} />
                </div>

                {/* Numeric value output */}
                <h3 className="mt-4 text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  {item.value}
                </h3>

                {/* Stat label */}
                <p className="mt-2 text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wider uppercase select-none">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
