"use client";

import React from "react";
import { FolderKanban, GraduationCap, Award, Users } from "lucide-react";

const benefits = [
  {
    title: "Build Portfolio",
    description:
      "Showcase completed real-world projects and verified code contributions instead of just static text on a resume.",
    icon: FolderKanban,
    color: "bg-blue-50 text-[#2563EB] border-blue-100",
  },
  {
    title: "Learn by Doing",
    description:
      "Apply theoretical knowledge directly to live projects, tackling production issues, API integrations, and code deployment.",
    icon: GraduationCap,
    color: "bg-cyan-50 text-[#06B6D4] border-cyan-100",
  },
  {
    title: "Earn Rewards",
    description:
      "Unlock reputation points, digital badges, credentials, and paid gigs for high-quality project submissions.",
    icon: Award,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  {
    title: "Collaborate with Experts",
    description:
      "Work directly alongside industry professionals, startups, and expert mentors who review and audit your code.",
    icon: Users,
    color: "bg-pink-50 text-pink-600 border-pink-100",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 select-none">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            Why Join Us
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Supercharge Your Growth
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
            Gain verified skills, earn recognition, and unlock real career opportunities by participating in our ecosystem.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative flex flex-col p-5 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg h-full"
              >
                {/* Icon Bubble */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border shadow-xs transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-transparent ${benefit.color}`}>
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Details */}
                <div className="mt-5 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#475569] font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
