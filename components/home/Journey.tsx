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
    <section className="relative overflow-hidden bg-white py-10 md:py-16 font-sans">
      {/* Background Subtle Ambience Blur Sprites */}
      <div className="absolute right-0 top-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#2563EB]/5 blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 md:h-96 md:w-96 rounded-full bg-[#06B6D4]/5 blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex rounded-full bg-[#2563EB]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
            How It Works
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            One Journey.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"> Endless Possibilities.</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
            FutureForge transforms traditional learning into professional growth by connecting education, practical experience, expert guidance, and career opportunities within one seamless ecosystem.
          </p>
        </div>

        {/* RESPONSIVE STEPPED PIPELINE CONTROLLER */}
        <div className="relative">
          
          {/* OPTIMIZED GRID SYSTEM FOR BALANCED CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {journey.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === journey.length - 1;

              return (
                <div key={item.title} className="relative flex items-stretch group w-full">
                  
                  {/* STEP ARCHITECTURE DASHED PIPELINE PATH LINKS */}
                  {!isLast && (
                    <>
                      {/* 1. Mobile, Tablet & Medium Screen Native Vertical Line */}
                      <div className="absolute left-[21px] sm:left-1/2 top-11 bottom-[-24px] w-0.5 border-l-2 border-dashed border-slate-200 lg:hidden z-0" />
                      
                      {/* 2. Desktop Widescreen Horizontal Link Element Chevron */}
                      <div className="hidden lg:flex absolute top-4 -right-4 items-center justify-center text-slate-300 z-20 pointer-events-none group-hover:text-[#2563EB] transition-colors duration-300">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </div>
                    </>
                  )}

                  {/* NATIVE 100% RESPONSIVE COMPACT STEP PANEL CARD */}
                  <div className="relative z-10 flex sm:flex-col items-start sm:items-center text-left sm:text-center gap-3.5 sm:gap-0 rounded-xl border border-slate-200/70 bg-white p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:shadow-lg h-full flex-1 w-full">
                    
                    {/* Floating High-Contrast Desktop Step Counter */}
                    <div className="absolute top-2.5 right-3.5 text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#2563EB]/40 transition-colors hidden sm:block">
                      {item.step}
                    </div>

                    {/* Left Icon Node Indicator */}
                    <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-13 md:w-13 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white border border-slate-100 group-hover:border-transparent shadow-xs transition-all duration-300 sm:mx-auto">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" strokeWidth={2} />
                      
                      {/* High-density Mobile Step Counter Ring Overlays */}
                      <span className="absolute -top-1 -right-1 sm:hidden h-4 w-4 bg-slate-900 text-white rounded-full flex items-center justify-center font-mono text-[8px] font-bold border border-white shadow-xs">
                        {item.step}
                      </span>
                    </div>
                    
                    {/* Details Content Layout Grid */}
                    <div className="sm:mt-4 text-left sm:text-center flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] leading-normal text-slate-500 font-medium max-w-xs sm:mx-auto">
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