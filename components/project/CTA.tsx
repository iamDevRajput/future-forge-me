"use client";

import React from "react";
import { PlusCircle, Compass } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Outboard Card Chassis */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-blue-500/10 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/10 p-8 md:p-12 shadow-xs text-center relative overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Action Details */}
          <div className="max-w-2xl mx-auto space-y-5 relative z-10 select-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              Have a Project Idea?
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-500 font-medium">
              Connect with talented students, verified developers, and dedicated professionals ready to collaborate and bring your ideas to life.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
            <button className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-blue-500/10 active:scale-97 cursor-pointer">
              <PlusCircle size={15} />
              Post a Project
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 transition-all shadow-3xs active:scale-97 cursor-pointer">
              <Compass size={15} />
              Explore Projects
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
