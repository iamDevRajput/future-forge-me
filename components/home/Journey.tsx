import {
  GraduationCap,
  FolderKanban,
  BadgeCheck,
  Star,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const journey = [
  {
    step: "01",
    title: "Learn",
    desc: "Master industry skills with structured courses, live sessions, and hands-on learning.",
    icon: GraduationCap,
  },
  {
    step: "02",
    title: "Assess & Verify",
    desc: "Validate your knowledge through skill assessments and earn verified credentials.",
    icon: BadgeCheck,
  },
  {
    step: "03",
    title: "Build Portfolio",
    desc: "Apply your knowledge on real-world projects and showcase practical experience.",
    icon: FolderKanban,
  },
  {
    step: "04",
    title: "Professional Review",
    desc: "Receive detailed feedback from industry professionals and mentors.",
    icon: Star,
  },
  {
    step: "05",
    title: "Career Opportunities",
    desc: "Build credibility and connect with organizations hiring verified talent.",
    icon: Briefcase,
  },
];

export default function JourneySection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 font-sans">
      {/* Background Subtle Ambience Blur Sprites */}
      <div className="absolute right-0 top-10 h-72 w-72 md:h-125 md:w-125 rounded-full bg-[#2563EB]/5 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 md:h-125 md:w-125 rounded-full bg-[#06B6D4]/10 blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB]">
            How It Works
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            One Journey.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"> Endless Possibilities.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-slate-600 font-medium">
            FutureForge transforms traditional learning into professional growth by connecting education, practical experience, expert guidance, and career opportunities within one seamless ecosystem.
          </p>
        </div>

        {/* RESPONSIVE STEPPED PIPELINE CONTROLLER */}
        <div className="mt-12 md:mt-16 relative">
          
          {/* FLEXIBLE LAYOUTSpectra STRUCTURE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-8 gap-x-6 relative z-10">
            {journey.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === journey.length - 1;

              return (
                <div key={item.title} className="relative flex items-stretch group w-full">
                  
                  {/* STEP ARCHITECTURE DASHED PIPELINE PATH LINKS */}
                  {!isLast && (
                    <>
                      {/* 1. Mobile & Tablet Native Vertical Process Thread Line */}
                      <div className="absolute left-[23px] sm:left-1/2 top-12 bottom-[-32px] w-0.5 border-l-2 border-dashed border-slate-200 xl:hidden z-0" />
                      
                      {/* 2. Desktop Widescreen Horizontal Link Element Chevron */}
                      <div className="hidden xl:flex absolute top-5 -right-5 items-center justify-center text-slate-300 z-20 pointer-events-none group-hover:text-[#2563EB] transition-colors duration-300">
                        <ChevronRight size={16} strokeWidth={3} className="animate-pulse" />
                      </div>
                    </>
                  )}

                  {/* NATIVE 100% RESPONSIVE STEP PANEL CARD */}
                  <div className="relative z-10 flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-0 rounded-2xl border border-slate-200/80 bg-white p-4 md:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563EB]/30 hover:shadow-xl h-full flex-1 w-full">
                    
                    {/* Floating High-Contrast Desktop Step Counter */}
                    <div className="absolute top-3 right-4 text-xs font-mono font-black text-slate-300 group-hover:text-[#2563EB]/40 transition-colors hidden sm:block">
                      {item.step}
                    </div>

                    {/* Left Icon / Numeric Step Node Bubble Indicator */}
                    <div className="relative flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl md:rounded-2xl bg-slate-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white border border-slate-100 group-hover:border-transparent shadow-3xs transition-all duration-300 sm:mx-auto">
                      <Icon className="h-5 w-5 md:h-7 md:w-7" strokeWidth={2} />
                      
                      {/* High-density Mobile Step Counter Ring Overlays */}
                      <span className="absolute -top-1.5 -right-1.5 sm:hidden h-5 w-5 bg-slate-900 text-white rounded-full flex items-center justify-center font-mono text-[9px] font-black tracking-tighter border-2 border-white shadow-xs">
                        {item.step}
                      </span>
                    </div>
                    
                    {/* Details Content Layout Grid */}
                    <div className="sm:mt-5 text-left sm:text-center flex-1">
                      <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs md:text-sm leading-relaxed text-slate-500 font-medium max-w-xs sm:mx-auto">
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