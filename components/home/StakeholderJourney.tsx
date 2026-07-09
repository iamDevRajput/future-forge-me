import { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  BookOpen,
  School,
  Briefcase,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";

interface JourneyStep {
  label: string;
  icon: LucideIcon;
}

interface Stakeholder {
  id: string;
  title: string;
  image: string;
  journey: JourneyStep[];
}

const stakeholders: Stakeholder[] = [
  {
    id: "students",
    title: "For Students",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Learn", icon: BookOpen },
      { label: "Build", icon: Briefcase },
      { label: "Review", icon: Users },
      { label: "Get Hired", icon: GraduationCap }
    ],
  },
  {
    id: "companies",
    title: "For Companies",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Post Project", icon: Briefcase },
      { label: "Review", icon: Users },
      { label: "Hire", icon: GraduationCap },
      { label: "Grow", icon: School }
    ],
  },
  {
    id: "mentors",
    title: "For Mentors",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Teach", icon: School },
      { label: "Guide", icon: Users },
      { label: "Review", icon: BookOpen },
      { label: "Earn", icon: Briefcase }
    ],
  },
  {
    id: "course-creators",
    title: "For Creators",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Create", icon: BookOpen },
      { label: "Publish", icon: Briefcase },
      { label: "Earn", icon: GraduationCap },
      { label: "Scale", icon: School }
    ],
  },
  {
    id: "institutions",
    title: "For Institutions",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Educate", icon: School },
      { label: "Track", icon: Users },
      { label: "Collaborate", icon: BookOpen },
      { label: "Place", icon: Briefcase }
    ],
  },
  {
    id: "recruiters",
    title: "For Recruiters",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    journey: [
      { label: "Discover", icon: Users },
      { label: "Verify", icon: GraduationCap },
      { label: "Interview", icon: BookOpen },
      { label: "Hire", icon: Briefcase }
    ],
  },
];

export default function StakeholderJourneySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getItemStepWidth = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const computedStyle = window.getComputedStyle(scrollRef.current);
      const gap = parseFloat(computedStyle.gap) || 0;
      return firstChild.clientWidth + gap;
    }
    return 360;
  };

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const stepWidth = getItemStepWidth();
        let scrollTo = scrollLeft + stepWidth;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollTo = 0;
        }
        scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      }
    }, 10000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const stepWidth = getItemStepWidth();
      let scrollTo = direction === "left" ? scrollLeft - stepWidth : scrollLeft + stepWidth;

      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollTo = 0;
      } else if (direction === "left" && scrollLeft <= 10) {
        scrollTo = scrollWidth;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
      startAutoplay();
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 font-sans text-slate-800">
      
      {/* Ambient background decoration shadows */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">

        {/* --- SHARP SCREENSHOT MATCHING TITLE HEADER --- */}
        <div className="flex flex-col items-center text-center mb-10 select-none">
          <div className="flex items-center justify-center gap-4 w-full">
            <div className="hidden sm:block h-px bg-cyan-700/60 w-20" />
            <h2 className="text-xl md:text-2xl font-bold tracking-wider text-slate-900 uppercase">
              SUCCESS PATHS. REAL IMPACT.
            </h2>
            <div className="hidden sm:block h-px bg-cyan-700/60 w-20" />
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
            Different journeys. One destination.
          </p>
        </div>

        {/* TRACK WRAPPER WITH FLANK BOOKEND BUTTONS */}
        <div className="flex flex-row items-center gap-3 md:gap-4 w-full relative">
          
          {/* UNIQUE LEFT BOOKEND CARD */}
          <button 
            onClick={() => scroll("left")}
            className="hidden sm:flex shrink-0 w-10 h-14 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-400 hover:text-[#2563EB] hover:border-blue-100 flex-col items-center justify-center transition-all cursor-pointer shadow-3xs active:scale-95 z-20"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>


          {/* RE-ENGINEERED CONTAINER MATRIX WIDTH FOR BULLETPROOF HORIZONTAL READABILITY */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-x-auto no-raw-bar flex flex-row gap-6 select-none pb-2 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {stakeholders.map((item) => (
              <div
                key={item.id}
                className="shrink-0 rounded-2xl md:rounded-3xl bg-slate-50/50 overflow-hidden flex flex-col sm:flex-row border border-slate-200 transition-all duration-300 hover:shadow-xs hover:border-blue-100 snap-start
                  w-full md:w-full lg:w-[calc((100%-24px)/2)]"
              >
                {/* PORTRAIT SECTION: Clean compact footprint */}
                <div className="w-full sm:w-[24%] md:w-[22%] lg:w-[25%] h-36 sm:h-auto shrink-0 relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[4%] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent to-slate-50/20 pointer-events-none" />
                </div>

                {/* EXPANDED RIGHT SIDE WORKSPACE */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-between items-start min-w-0 bg-white">
                  <div className="w-full">
                    <h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-none mb-5 md:mb-6">
                      {item.title}
                    </h3>

                    {/* DYNAMIC FLOW CONTAINER BAR - Auto distributes perfectly with zero squeezing */}
                    <div className="flex items-center justify-between w-full pt-1">
                      {item.journey.map((step, index) => {
                        const StepIcon = step.icon;
                        const isLast = index === item.journey.length - 1;

                        return (
                          <div key={index} className="flex items-center flex-1 justify-between w-full">
                            
                            {/* Circle Node Element */}
                            <div className="flex flex-col items-center gap-2 text-center w-12 sm:w-14 shrink-0 mx-auto">
                              <div className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-3xs flex items-center justify-center bg-white transition-transform duration-200 hover:scale-105 hover:border-blue-300 hover:text-[#2563EB]">
                                <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.2} />
                              </div>
                              <span className="text-[8px] sm:text-[9px] font-semibold tracking-tight text-slate-600 leading-none truncate w-full block">
                                {step.label}
                              </span>
                            </div>

                            {/* Crisp Spacer Arrow Lines */}
                            {!isLast && (
                              <div className="flex-1 flex items-center justify-center min-w-[8px]">
                                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-200 mt-[-16px] shrink-0" strokeWidth={2.5} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* READ MORE CTA TRIGGER */}
                  <div className="mt-5 md:mt-6 w-full">
                    <button className="group inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:text-[#06B6D4] transition-colors cursor-pointer">
                      Read Stories
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform duration-200 group-hover:translate-x-0.5 text-[#06B6D4]" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* UNIQUE RIGHT BOOKEND CARD */}
          <button 
            onClick={() => scroll("right")}
            className="hidden sm:flex shrink-0 w-10 h-14 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-400 hover:text-[#2563EB] hover:border-blue-100 flex-col items-center justify-center transition-all cursor-pointer shadow-3xs active:scale-95 z-20"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </section>
  );
}