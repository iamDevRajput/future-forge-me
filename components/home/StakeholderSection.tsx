import { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  School,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  LucideIcon
} from "lucide-react";

interface Stakeholder {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  features: string[];
}

const stakeholders: Stakeholder[] = [
  {
    id: "students",
    title: "Students",
    subtitle: "Learn, build skills and launch their careers",
    icon: GraduationCap,
    features: [
      "Access quality learning",
      "Verify your skills",
      "Build real projects",
      "Get reviews & mentorship",
      "Unlock career opportunities",
    ],
  },
  {
    id: "companies",
    title: "Companies",
    subtitle: "Find talent, build teams and grow faster",
    icon: Building2,
    features: [
      "Launch internal learning",
      "Upskill existing employees",
      "Outsource micro-projects",
      "Recruit verified professionals",
      "Streamline team management",
    ],
  },
  {
    id: "mentors",
    title: "Mentors",
    subtitle: "Guide learners, share knowledge and earn",
    icon: Users,
    features: [
      "Provide 1-on-1 guidance",
      "Review project submissions",
      "Build industry reputation",
      "Flexible active earnings",
      "Impact thousands of minds",
    ],
  },
  {
    id: "course-creators",
    title: "Course Creators",
    subtitle: "Create courses and impact thousands",
    icon: BookOpen,
    features: [
      "Publish premium courses",
      "Upload rich learning resources",
      "Generate recurring income",
      "Issue authenticated certificates",
      "Expand professional reach",
    ],
  },
  {
    id: "institutions",
    title: "Educational Institutions",
    subtitle: "Empower learners and track real outcomes",
    icon: School,
    features: [
      "Digitize baseline curriculums",
      "Monitor student progress metrics",
      "Partner with industry players",
      "Improve baseline placement rates",
      "Access centralized tracking",
    ],
  },
  {
    id: "recruiters",
    title: "Recruiters",
    subtitle: "Discover verified talent and hire with confidence",
    icon: Briefcase,
    features: [
      "Filter via verified portfolios",
      "Evaluate transparent project files",
      "Review mentor assessment feedback",
      "Bypass resume verification checks",
      "Match with specific role models",
    ],
  },
];

export default function AutomatedStakeholderHub() {
  const [active, setActive] = useState<number>(0);
  const totalNodes = stakeholders.length;
  const radius = 135; 
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev === totalNodes - 1 ? 0 : prev + 1));
    }, 10000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [totalNodes]);

  const handleSelectStakeholder = (index: number) => {
    setActive(index);
    startAutoplay();
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? totalNodes - 1 : prev - 1));
    startAutoplay();
  };

  const handleNext = () => {
    setActive((prev) => (prev === totalNodes - 1 ? 0 : prev + 1));
    startAutoplay();
  };

  const current = stakeholders[active];

  return (
    <section className="relative overflow-hidden bg-slate-50/40 py-10 md:py-20 font-sans text-slate-800">
      
      {/* Ambient background layout glow rings */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-150 w-150 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* 1. LEFT PANEL: CONTEXT HEADER CHASSIS                                    */}
          {/* ========================================================================= */}
          <div className="col-span-1 lg:col-span-3 space-y-5 text-left">
            <div className="space-y-3">
              <div className="w-10 h-0.5 bg-[#2563EB] rounded-full" />
              <h2 className="text-2xl lg:text-2xl xl:text-4xl font-semibold tracking-tight text-slate-900 uppercase leading-none md:leading-tight">
                One Platform.<br />Every Stakeholder.
              </h2>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
              FutureForge brings together everyone in the learning-to-career ecosystem in one unified platform.
            </p>
            <div className="pt-1">
              <button className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] shadow-3xs transition-all hover:bg-blue-50 hover:border-blue-200 cursor-pointer">
                Explore All Roles
                <ArrowRight size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. CENTER PANEL: DESKTOP RADIAL COMPASS WHEEL                            */}
          {/* ========================================================================= */}
          <div className="hidden lg:flex col-span-1 lg:col-span-5 items-center justify-center relative min-h-[380px]">
            
            {/* Desktop Step Controls */}
            <div className="absolute -left-4 z-30">
              <button onClick={handlePrev} className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] shadow-xs hover:border-blue-100 transition-colors cursor-pointer">
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
            </div>
            
            <div className="absolute -right-4 z-30">
              <button onClick={handleNext} className="h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] shadow-xs hover:border-blue-100 transition-colors cursor-pointer">
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Central Circle Network Container */}
            <div className="relative w-80 h-80 rounded-full border border-blue-200/20 bg-white/40 flex items-center justify-center shadow-3xs">
              <div className="absolute inset-8 rounded-full border border-dashed border-blue-100/60" />
              
              {/* Central Core Branding Hub Box */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-white/90 border border-blue-100 shadow-inner flex flex-col items-center justify-center relative z-10 p-2 text-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] mb-1 font-bold text-xl tracking-tighter flex items-center justify-center">
                  FF
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-800">
                  FutureForge
                </span>
              </div>

              {/* Stakeholder Vector Nodes Ring */}
              {stakeholders.map((item, index) => {
                const TabIcon = item.icon;
                const isActive = active === index;

                const angle = (index * 2 * Math.PI) / totalNodes - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={item.id}
                    className="absolute z-20 transition-all duration-300 origin-center"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <button
                      onClick={() => handleSelectStakeholder(index)}
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 group cursor-pointer ${
                        isActive
                          ? "bg-white border-[#2563EB] text-[#2563EB] scale-110 shadow-md shadow-blue-500/10"
                          : "bg-white border-slate-100 text-slate-400 hover:border-blue-200 hover:text-[#2563EB] shadow-3xs"
                      }`}
                    >
                      <div className={`absolute top-1/2 left-1/2 w-16 h-px border-t border-dashed origin-left z-0 pointer-events-none opacity-40 transition-colors ${
                        isActive ? "border-blue-400" : "border-slate-200"
                      }`} style={{ transform: `rotate(${angle + Math.PI}rad) translateX(-100%)` }} />

                      <div className="relative z-10">
                        <TabIcon size={18} strokeWidth={2} />
                      </div>
                    </button>

                    {/* Node Labels */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-14 whitespace-nowrap text-center transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-40 scale-95 pointer-events-none"
                    }`}>
                      <h4 className="text-[10px] font-bold text-slate-900 tracking-tight leading-none">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. RIGHT PANEL: THE DYNAMIC PREVIEW WORKBENCH                            */}
          {/* ========================================================================= */}
          <div className="col-span-1 lg:col-span-4 bg-white/75 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-xs h-full min-h-[340px] lg:min-h-[380px] transition-all duration-300 relative">
            
            {/* --- CREATIVE MOBILE NAVIGATION BADGE CONTROLLER --- */}
            <div className="flex lg:hidden items-center justify-between border-b border-slate-100 pb-3 mb-4 select-none">
              <button onClick={handlePrev} className="p-1.5 border border-slate-200 rounded-full text-slate-500 hover:text-[#2563EB] bg-white active:scale-95 shadow-2xs transition-all cursor-pointer">
                <ChevronLeft size={14} strokeWidth={2.5} />
              </button>
              
              {/* Creative status capsule layout shifting context based on selected active variable */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-b from-blue-500/10 to-transparent border border-blue-100 text-[#2563EB] text-[10px] font-bold uppercase tracking-wider relative overflow-hidden shadow-3xs animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" />
                Viewing: <span className="text-slate-900 font-extrabold ml-0.5">{current.title}</span>
              </div>

              <button onClick={handleNext} className="p-1.5 border border-slate-200 rounded-full text-slate-500 hover:text-[#2563EB] bg-white active:scale-95 shadow-2xs transition-all cursor-pointer">
                <ChevronRight size={14} strokeWidth={2.5} />
              </button>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-center">
              <div>
                <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4] font-bold uppercase tracking-widest block">
                  For {current.title}
                </span>
                <p className="text-xs font-semibold text-slate-400 mt-0.5 leading-tight">
                  {current.subtitle}
                </p>
              </div>

              {/* Checkmark Feature Matrix Stack */}
              <div className="space-y-2.5 pt-1">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 group">
                    <div className="p-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-100 shrink-0 mt-0.5">
                      <CheckCircle2 size={11} strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-600 tracking-tight leading-tight group-hover:text-[#2563EB] transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel CTA Footer */}
            <div className="pt-4 border-t border-slate-100 mt-5 flex justify-start">
              <button className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer">
                Explore {current.title.split(" ")[0]} Dashboard
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5 text-[#06B6D4]" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}