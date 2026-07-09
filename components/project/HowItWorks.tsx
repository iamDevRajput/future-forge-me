"use client";

import React from "react";
import {
  Search,
  Send,
  Users,
  MessageSquare,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discover",
    desc: "Search through verified projects by technology, category, or experience level.",
    icon: Search,
  },
  {
    step: "02",
    title: "Apply",
    desc: "Submit your profile and show interest in projects that match your learning path.",
    icon: Send,
  },
  {
    step: "03",
    title: "Work & Collaborate",
    desc: "Join project workspaces, coordinate with team members, and start building.",
    icon: Users,
  },
  {
    step: "04",
    title: "Get Feedback",
    desc: "Submit your milestones for code review, getting feedback from expert advisors.",
    icon: MessageSquare,
  },
  {
    step: "05",
    title: "Earn Reputation",
    desc: "Complete project goals, earn platform badges, and unlock corporate visibility.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 md:py-16 font-sans">
      {/* Background Subtle Blurs */}
      <div className="absolute right-0 top-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#2563EB]/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#06B6D4]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10 select-none">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            How It Works
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Five Steps to Success
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
            Learn our streamlined execution flow, from project application to earning industry-trusted reputation credentials.
          </p>
        </div>

        {/* Responsive Timeline Pipeline */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === steps.length - 1;

              return (
                <div key={item.title} className="relative flex items-stretch group w-full">
                  {/* Step Connector Links */}
                  {!isLast && (
                    <>
                      {/* Vertical line for tablet/mobile */}
                      <div className="absolute left-[21px] sm:left-1/2 top-11 bottom-[-28px] w-0.5 border-l-2 border-dashed border-slate-200 lg:hidden z-0" />
                      {/* Horizontal chevron for desktop */}
                      <div className="hidden lg:flex absolute top-5 -right-4.5 items-center justify-center text-slate-300 z-20 pointer-events-none group-hover:text-[#2563EB] transition-colors duration-300">
                        <ChevronRight size={15} strokeWidth={2.5} />
                      </div>
                    </>
                  )}

                  {/* Card Container */}
                  <div className="relative z-10 flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-3.5 sm:gap-0 rounded-2xl border border-slate-200/80 bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg h-full flex-1 w-full">
                    {/* Floating Step Number */}
                    <div className="absolute top-3 right-4.5 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#2563EB]/40 transition-colors hidden sm:block select-none">
                      {item.step}
                    </div>

                    {/* Icon Bubble */}
                    <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white border border-slate-100 group-hover:border-transparent shadow-3xs transition-all duration-300 sm:mx-auto">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                      <span className="absolute -top-1 -right-1 sm:hidden h-4 w-4 bg-slate-900 text-white rounded-full flex items-center justify-center font-mono text-[8px] font-bold border border-white shadow-xs">
                        {item.step}
                      </span>
                    </div>

                    {/* Metadata Content */}
                    <div className="sm:mt-4 text-left sm:text-center flex-1">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] leading-normal text-slate-500 font-medium max-w-xs sm:mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
