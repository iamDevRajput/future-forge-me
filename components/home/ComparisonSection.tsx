import { useState } from "react";
import { 
  XCircle, 
  ChevronRight,
  BookOpen, 
  UserCheck, 
  Briefcase, 
  Users, 
  Award, 
  TrendingUp,
  Sparkles
} from "lucide-react";

const bottlenecks = [
  { label: "Learning", sub: "No practical application" },
  { label: "Skills", sub: "No proof of expertise" },
  { label: "Certificates", sub: "No real utilization" },
  { label: "Projects", sub: "No guidance or quality" },
  { label: "Hiring", sub: "No trust or transparency" },
];

const solutions = [
  {
    icon: BookOpen,
    title: "Courses",
    desc: "Learn from industry experts",
  },
  {
    icon: UserCheck,
    title: "Skill Verification",
    desc: "Prove what you truly know",
  },
  {
    icon: Briefcase,
    title: "Real Projects",
    desc: "Build experience that matters",
  },
  {
    icon: Users,
    title: "Professional Reviews",
    desc: "Get feedback from industry experts",
  },
  {
    icon: Award,
    title: "Verified Portfolio",
    desc: "Showcase your complete journey",
  },
  {
    icon: TrendingUp,
    title: "Career Opportunities",
    desc: "Connect with right opportunities",
  },
];

export default function SplitEcosystemDeck() {
  const [activeTab, setActiveTab] = useState<"problem" | "solution">("solution");

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16 font-sans text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* MOBILE ONLY: Tactile Tab Controller */}
        <div className="flex lg:hidden justify-center mb-5">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 w-full max-w-sm shadow-inner">
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                activeTab === "problem"
                  ? "bg-white text-red-600 shadow-3xs"
                  : "text-slate-500"
              }`}
            >
              <XCircle size={13} strokeWidth={2.5} />
              The Problem
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                activeTab === "solution"
                  ? "bg-white text-[#2563EB] shadow-3xs"
                  : "text-slate-500"
              }`}
            >
              <Sparkles size={13} className="text-[#06B6D4]" />
              The Solution
            </button>
          </div>
        </div>

        {/* ECOSYSTEM HOUSING CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white items-stretch">
          
          {/* ========================================================================= */}
          {/* LEFT CHASSIS: THE PROBLEM SPACE (Soft Crimson Warning Theme)              */}
          {/* ========================================================================= */}
          <div className={`col-span-1 lg:col-span-4 bg-red-100/40 p-6 md:p-8 flex flex-col justify-between relative lg:border-r border-slate-200/80 ${
            activeTab === "problem" ? "block animate-fadeIn" : "hidden lg:flex"
          }`}>
            {/* Minimal error cross-pattern mesh texture underlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#fee2e2_1.5px,transparent_1.5px)] bg-[size:16px_16px] opacity-70 pointer-events-none" />
            
            <div className="relative z-10 space-y-5 my-auto w-full">
              <div className="hidden lg:block">
                <div className="w-6 h-0.5 bg-red-500 mb-2 rounded-full" />
                <h3 className="text-[11px] font-black uppercase tracking-widest text-red-500/80">
                  The Platform Today
                </h3>
              </div>

              {/* Problem Bottlenecks Cards */}
              <div className="space-y-3.5">
                {bottlenecks.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/90 backdrop-blur-xs border border-red-100/70 p-3 rounded-xl shadow-3xs transition-transform hover:scale-[1.01]">
                    <XCircle size={16} className="text-red-500 shrink-0" strokeWidth={2.5} />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 tracking-tight leading-none">
                        {item.label}
                      </h4>
                      <p className="text-[10px] text-red-500/80 font-semibold mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT CHASSIS: THE SOLUTION SPACE (Clean Blue/Cyan Growth Theme)          */}
          {/* ========================================================================= */}
          <div className={`col-span-1 lg:col-span-8 p-6 md:p-10 flex flex-col justify-between relative bg-blue-50/10 overflow-hidden ${
            activeTab === "solution" ? "block animate-fadeIn" : "hidden lg:flex"
          }`}>
            <div className="absolute right-0 top-0 h-48 w-48 bg-[#06B6D4]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute left-12 bottom-0 h-48 w-48 bg-[#2563EB]/20 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10 my-auto space-y-8 w-full">
              <div className="hidden lg:block">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#2563EB] flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#06B6D4] animate-pulse" />
                  The FutureForge Solution
                </h3>
              </div>

              {/* DESKTOP HORIZONTAL MAP FLOW */}
              <div className="hidden lg:grid lg:grid-cols-6 gap-2 relative pt-2">
                {solutions.map((item, idx) => {
                  const StepIcon = item.icon;
                  const isLast = idx === solutions.length - 1;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center relative group">
                      {!isLast && (
                        <div className="absolute left-[calc(50%+24px)] right-[calc(-50%+24px)] top-6 h-0.5 border-t border-dashed border-slate-200 z-0" />
                      )}
                      <div className="relative z-10 h-12 w-12 rounded-full bg-white border border-blue-100 text-[#2563EB] flex items-center justify-center shadow-3xs group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                        <StepIcon size={16} strokeWidth={2.5} />
                      </div>
                      <div className="mt-4 space-y-1 px-1">
                        <h4 className="text-xs font-black tracking-tight text-slate-800 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] leading-relaxed text-slate-400 font-semibold max-w-[105px] mx-auto">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* MOBILE VERTICAL CHRONO TIMELINE */}
              <div className="flex lg:hidden flex-col gap-2.5">
                {solutions.map((item, idx) => {
                  const StepIcon = item.icon;
                  const isLast = idx === solutions.length - 1;

                  return (
                    <div key={idx} className="relative flex items-center gap-3.5 bg-white border border-blue-100/50 p-3 rounded-xl shadow-3xs">
                      {!isLast && (
                        <div className="absolute left-[27px] top-11 bottom-[-15px] w-px border-l border-dashed border-slate-200 z-0" />
                      )}
                      <div className="relative z-10 h-8 w-8 rounded-full bg-blue-50 border border-blue-100 text-[#2563EB] flex items-center justify-center shadow-3xs shrink-0">
                        <StepIcon size={13} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black tracking-tight text-slate-800 leading-none">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Anchor Footnote Tab */}
              <div className="pt-4 border-t border-slate-200/60 flex justify-center">
                <p className="text-[10px] font-bold text-slate-400 text-center tracking-tight bg-white border border-slate-200 rounded-full px-4 py-1 shadow-3xs">
                  Bridging the gap between learning and real-world success.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}