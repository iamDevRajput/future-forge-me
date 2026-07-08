import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react";

interface TestimonialItem {
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Arjun Sharma",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    review: "FutureForge helped me go from a student to a software engineer. The projects and reviews made all the difference!",
  },
  {
    name: "Priya Menon",
    role: "HR Manager, InnoSoft",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    review: "We found high-quality talent faster than ever before. The verified profiles save us so much time.",
  },
  {
    name: "Rohit Verma",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    review: "As a mentor, I love guiding learners and seeing them succeed in their careers.",
  },
  {
    name: "Neha Patel",
    role: "Course Creator",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop",
    review: "The best platform that bridges the gap between learning and real-world impact.",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getItemStepWidth = () => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const computedStyle = window.getComputedStyle(scrollRef.current);
      const gap = parseFloat(computedStyle.gap) || 0;
      return firstChild.clientWidth + gap;
    }
    return 380;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const stepWidth = getItemStepWidth();
      let scrollTo = direction === "left" ? scrollLeft - stepWidth : scrollLeft + stepWidth;

      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollTo = 0;
      } else if (direction === "left" && scrollLeft <= 10) {
        scrollTo = scrollWidth;
      }

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Synchronize dynamic dot tracking indicator values on scroll
  const handleScrollDetection = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const stepWidth = getItemStepWidth();
      const newIndex = Math.round(scrollLeft / stepWidth);
      if (newIndex >= 0 && newIndex < testimonials.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 font-sans text-slate-800">
      
      {/* Background Ambience Underlay Filters */}
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">

        {/* --- DYNAMIC EXACT MATCH HEADER LAYER --- */}
        <div className="flex flex-col items-center text-center pb-6 mb-8 select-none">
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            <div className="hidden sm:block h-px bg-slate-200 w-12 md:w-20" />
            <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-slate-900 uppercase whitespace-nowrap">
              What Our Community Says
            </h2>
            <div className="hidden sm:block h-px bg-slate-200 w-12 md:w-20" />
          </div>
        </div>

        {/* MAIN SLIDE RAIL WITH INTEGRATED CARD BOOKENDS */}
        <div className="flex flex-row items-stretch gap-3 md:gap-4 w-full relative">
          
          {/* LEFT INLINE CONTROL */}
          <button 
            onClick={() => scroll("left")}
            className="hidden sm:flex shrink-0 w-10 h-14 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-400 hover:text-[#2563EB] hover:border-blue-100 flex-col items-center justify-center transition-all cursor-pointer shadow-3xs active:scale-95 z-20 self-center"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          <style dangerouslySetInnerHTML={{__html: `
            .no-raw-bar::-webkit-scrollbar { display: none !important; }
            .no-raw-bar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
          `}} />

          {/* TESTIMONIAL VIEWPORT TRACK Frame */}
          <div 
            ref={scrollRef}
            onScroll={handleScrollDetection}
            className="flex-1 overflow-x-auto no-raw-bar flex flex-row gap-5 md:gap-6 select-none pb-3 scroll-smooth snap-x snap-mandatory"
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 rounded-xl md:rounded-2xl bg-[#FFFDF9]/30 border border-slate-200/70 p-4 sm:p-5 md:p-6 snap-start flex flex-row items-start gap-4 transition-all duration-300 hover:border-blue-500/20 hover:bg-white
                  w-full md:w-full lg:w-[calc((100%-24px)/2)] xl:w-[calc((100%-48px)/3)]"
              >
                {/* Left side circular profile thumbnail piece */}
                <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-full overflow-hidden bg-slate-100 border border-slate-200/60 relative">
                  <img
                    src={item.image}
                    alt={`${item.name} user card profile`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Right side information description field blocks */}
                <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                  <div>
                    {/* Review Block Quote String */}
                    <p className="text-[11px] sm:text-xs md:text-[13px] leading-normal sm:leading-relaxed text-slate-600 font-medium tracking-tight">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Operational User Details Footer Line */}
                  <div className="mt-4 pt-1">
                    <h3 className="text-[11px] sm:text-xs font-semibold text-slate-900 tracking-tight leading-none">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium mt-1 leading-none truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT INLINE CONTROL */}
          <button 
            onClick={() => scroll("right")}
            className="hidden sm:flex shrink-0 w-10 h-14 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-400 hover:text-[#2563EB] hover:border-blue-100 flex-col items-center justify-center transition-all cursor-pointer shadow-3xs active:scale-95 z-20 self-center"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

        </div>

        {/* BOTTOM PAGINATION DOT MATRIX BAR */}
        <div className="mt-8 flex justify-center gap-2 select-none">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                idx === activeIndex
                  ? "w-5 bg-[#2563EB]"
                  : "w-1.5 bg-slate-200/80"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}