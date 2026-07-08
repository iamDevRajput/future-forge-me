import { useState } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BookOpen,
  School,
  Briefcase,
  ChevronDown,
  Layers
} from "lucide-react";

const stakeholders = [
  {
    id: "students",
    title: "Students",
    subtitle: "Learn • Build • Get Hired",
    icon: GraduationCap,
    description:
      "Transform academic learning into real-world experience through industry courses, projects, mentorship, professional reviews, and verified portfolios.",
    features: [
      "Industry-led courses",
      "Real-world projects",
      "Skill assessments",
      "Verified certifications",
    ],
  },
  {
    id: "companies",
    title: "Companies",
    subtitle: "Upskill • Innovate • Hire",
    icon: Building2,
    description:
      "Upskill employees, launch internal learning programs, outsource projects, and recruit verified professionals from one unified ecosystem.",
    features: [
      "Create company courses",
      "Employee training",
      "Post industry projects",
      "Hire verified talent",
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    subtitle: "Guide • Review • Earn",
    icon: Users,
    description:
      "Help learners grow by mentoring, reviewing projects, sharing expertise, and building your professional reputation while earning through mentoring.",
    features: [
      "Personal mentoring",
      "Project guidance",
      "Review submissions",
      "Flexible earnings",
    ],
  },
  {
    id: "course-creators",
    title: "Course Creators",
    subtitle: "Teach • Publish • Inspire",
    icon: BookOpen,
    description:
      "Create engaging learning experiences, publish premium or free courses, reach thousands of learners, and generate recurring income.",
    features: [
      "Create video courses",
      "Upload resources",
      "Issue certificates",
      "Monetize courses",
    ],
  },
  {
    id: "institutions",
    title: "Educational Institutions",
    subtitle: "Educate • Monitor • Collaborate",
    icon: School,
    description:
      "Digitize learning, monitor student growth, collaborate with industry partners, and improve placement outcomes through FutureForge.",
    features: [
      "Manage students",
      "Track performance",
      "Industry pairings",
      "Placement support",
    ],
  },
  {
    id: "recruiters",
    title: "Recruiters",
    subtitle: "Discover • Evaluate • Hire",
    icon: Briefcase,
    description:
      "Recruit professionals based on verified skills, project experience, mentor reviews, and trusted portfolios instead of resumes alone.",
    features: [
      "Access verified talent",
      "Advanced search",
      "Portfolio-first hiring",
      "Project history",
    ],
  },
];

export default function CollapsibleMenuRadialSection() {
  // Initialized to null so no stakeholder is open or active on mount
  const [active, setActive] = useState<number | null>(null);

  const current = active !== null ? stakeholders[active] : null;
  const MainIcon = current ? current.icon : Layers;

  const totalNodes = stakeholders.length;
  const radius = 150; 

  return (
    <section className="relative overflow-hidden bg-white py-6 md:py-16 font-sans text-slate-800">
      
      {/* Ambient background layout glow rings */}
      <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-[#06B6D4]/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[#2563EB]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#06B6D4]" />
              Interconnected Hub
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 leading-none mt-0.5">
              Built for Every Stakeholder
            </h2>
          </div>
        </div>

        {/* MOBILE LAYOUT: Pure Inline Mutually Exclusive Accordions */}
        <div className="lg:hidden flex flex-col gap-2.5">
          {stakeholders.map((item, index) => {
            const TabIcon = item.icon;
            const isOpen = active === index;

            return (
              <div 
                key={item.id}
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-slate-200 bg-slate-50/60 shadow-3xs" 
                    : "border-slate-200/70 bg-white"
                }`}
              >
                {/* Accordion Trigger Track Button */}
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-3.5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                      isOpen ? "bg-[#2563EB] text-white" : "bg-slate-100 text-[#2563EB]"
                    }`}>
                      <TabIcon size={14} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-black tracking-tight text-slate-900 leading-none">
                        {item.title}
                      </h3>
                      {!isOpen && (
                        <p className="text-[10px] text-slate-400 font-semibold mt-0.5 tracking-tight">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#2563EB]" : ""}`} />
                </button>

                {/* Inline Expandable Vault Body Content */}
                <div className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 border-t border-slate-200/60" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                }`}>
                  <div className="overflow-hidden bg-white">
                    <div className="p-4 space-y-3.5">
                      <div>
                        <span className="text-[9px] text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-black uppercase tracking-widest block">
                          {item.subtitle}
                        </span>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium mt-1">
                          {item.description}
                        </p>
                      </div>

                      {/* Feature matrix badges */}
                      <div className="grid gap-1.5 grid-cols-1 sm:grid-cols-2">
                        {item.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 p-2 bg-slate-50/60 border border-slate-100 rounded-lg">
                            <div className="p-0.5 rounded-md bg-blue-50 text-[#2563EB] shrink-0">
                              <CheckCircle2 size={11} strokeWidth={3} />
                            </div>
                            <span className="text-[11px] font-bold text-slate-600 truncate">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Shortcut Link */}
                      <div className="pt-2 flex justify-end">
                        <button className="group flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white transition-all">
                          Explore Dashboard
                          <ArrowRight size={11} className="text-cyan-400 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP BREAKPOINT MATRIX: Pinned Dynamic Display Panel + untouched Radial Wheel */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch min-h-[430px]">
          
          {/* Left Side Navigation: Absolute Radial Wheel Arrangement */}
          <div className="col-span-5 flex items-center justify-center relative min-h-[380px]">
            <div className="relative w-80 h-80 rounded-full border border-slate-200/60 bg-slate-50/30 flex items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-dashed border-slate-200/80" />
              
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-slate-800 shadow-2xl flex flex-col items-center justify-center text-white relative z-10">
                <MainIcon size={28} className={`text-cyan-400 ${active !== null ? "animate-pulse" : ""}`} strokeWidth={2} />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-2">
                  {active !== null ? "Active" : "Ready"}
                </span>
              </div>

              {stakeholders.map((item, index) => {
                const TabIcon = item.icon;
                const isActive = active === index;

                const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(index)}
                    className="absolute z-20 flex flex-col items-center gap-1 group origin-center transition-all duration-300 hover:scale-105"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive
                        ? "border-[#2563EB] bg-[#2563EB] text-white scale-110 shadow-lg shadow-blue-600/20"
                        : "border-slate-200/80 bg-white text-slate-500 hover:border-slate-400 hover:bg-slate-50"
                    }`}>
                      <TabIcon size={16} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-2xs ${
                      isActive ? "bg-slate-900 text-white" : "text-slate-400 bg-white/95"
                    }`}>
                      {item.title.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Dynamic Presentation Box Display Panel */}
          <div className="col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-3xs">
            {current ? (
              <div className="animate-fadeIn space-y-4 flex-1 flex flex-col justify-center">
                <div>
                  <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-black uppercase tracking-widest block">
                    {current.subtitle}
                  </span>
                  <h3 className="text-xl font-black tracking-tight text-slate-900 mt-0.5">
                    The {current.title} Ecosystem
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-500 font-medium max-w-xl">
                  {current.description}
                </p>

                <div className="grid gap-2 grid-cols-2 max-w-xl pt-1">
                  {current.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 p-2 bg-white border border-slate-200/60 rounded-xl shadow-3xs">
                      <div className="p-0.5 rounded-md bg-blue-50 text-[#2563EB] shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs font-bold text-slate-600 truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 animate-fadeIn">
                <Layers size={36} className="text-slate-300 mb-3 stroke-[1.5]" />
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider">
                  Select an Ecosystem Node
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1 max-w-xs">
                  Click on any surrounding network vector node to map its infrastructure configurations and workflows.
                </p>
              </div>
            )}

            <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between gap-4">
              <p className="text-[10px] text-slate-400 font-medium max-w-xs">
                {current 
                  ? `Initialize custom configuration protocols engineered exclusively for ${current.title.toLowerCase()} configurations.`
                  : "Select a network workspace node from the terminal loop map interface to begin setup."
                }
              </p>
              <button 
                disabled={active === null}
                className={`group flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition-all shadow-xs shrink-0 ${
                  active !== null ? "bg-slate-900 hover:bg-slate-800 cursor-pointer" : "bg-slate-300 cursor-not-allowed shadow-none"
                }`}
              >
                Explore Panel
                <ArrowRight size={12} className={`${active !== null ? "text-cyan-400 transition-transform group-hover:translate-x-0.5" : "text-white"}`} strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}