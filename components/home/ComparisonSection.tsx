import { useState, useRef } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  XCircle, 
  BookOpen,
  TrendingUp,
  Briefcase,
  Users,
  Award,
  UserCheck
} from "lucide-react";

const comparison = [
  {
    icon: BookOpen,
    traditional: "Courses end with certificates.",
    traditionalShort: "Certificates only",
    futureforge: "Learning continues into projects, mentorship, reviews, portfolio building, and career opportunities.",
    futureforgeShort: "Continuous career loop",
  },
  {
    icon: UserCheck,
    traditional: "Skills are judged primarily through resumes and interviews.",
    traditionalShort: "Resume-based",
    futureforge: "Skills are verified through assessments, real projects, mentor feedback, and professional reviews.",
    futureforgeShort: "Multi-layer verification",
  },
  {
    icon: Briefcase,
    traditional: "Students build personal or dummy projects with limited real-world exposure.",
    traditionalShort: "Dummy projects",
    futureforge: "Work on real client projects with teams, deadlines, mentors, and measurable outcomes.",
    futureforgeShort: "Real client work",
  },
  {
    icon: Users,
    traditional: "Mentorship is limited or unavailable after learning.",
    traditionalShort: "No support",
    futureforge: "Continuous access to experienced mentors throughout the professional journey.",
    futureforgeShort: "Lifetime mentorship",
  },
  {
    icon: Award,
    traditional: "Static resume with limited proof of abilities.",
    traditionalShort: "Static resume",
    futureforge: "Dynamic verified portfolio showcasing projects, achievements, certifications, reviews, and growth.",
    futureforgeShort: "Dynamic portfolio",
  },
  {
    icon: TrendingUp,
    traditional: "Recruiters rely heavily on resumes and interviews.",
    traditionalShort: "Guesswork hiring",
    futureforge: "Organizations hire using verified skills, project history, mentor reviews, and portfolio credibility.",
    futureforgeShort: "Verified skill hiring",
  },
];

export default function PerfectedCurtainSlider() {
  const [sliderPos, setSliderPos] = useState(80);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    
    if (percentage < 20) percentage = 20;
    if (percentage > 80) percentage = 80;
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleMouseUp);
  };

  const isFutureForgeMinority = sliderPos <= 45;
  const isTraditionalMinority = sliderPos >= 55;

  return (
    <section className="relative overflow-hidden bg-white py-8 font-sans text-slate-800 select-none">
      <div className="mx-auto max-w-4xl px-4 relative z-10">
        
        {/* SIDE IDENTIFIERS */}
        <div className="grid grid-cols-2 gap-4 mb-4 px-2">
          <div className="text-left">
            <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
              isFutureForgeMinority ? "text-slate-400" : "text-[#2563EB]"
            }`}>
              Our Ecosystem
            </span>
          </div>
          <div className="text-right pl-4">
            <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
              isTraditionalMinority ? "text-red-500" : "text-slate-400"
            }`}>
              Traditional Model
            </span>
          </div>
        </div>

        {/* CONTAINER CONSOLE */}
        <div 
          ref={containerRef}
          className="relative bg-slate-50/60 backdrop-blur-xs border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs cursor-ew-resize min-h-[360px] md:min-h-[300px] flex flex-col justify-between p-5"
        >
          {/* Subtle Dot-Matrix Tech Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

          <div className="flex-1 flex flex-col justify-between divide-y divide-slate-200/60 h-full relative z-10">
            {comparison.map((item, idx) => {
              const TrackIcon = item.icon;

              return (
                <div 
                  key={idx} 
                  className="flex-1 grid items-center py-3 first:pt-0 last:pb-0 gap-4"
                  style={{
                    gridTemplateColumns: `${sliderPos}% 1fr`
                  }}
                >
                  {/* LEFT SIDE: FutureForge */}
                  <div className="overflow-hidden whitespace-nowrap text-ellipsis pr-2 transition-all duration-300">
                    {isFutureForgeMinority ? (
                      <div className="inline-flex items-center gap-2 text-[#2563EB] animate-fadeIn">
                        <div className="p-1 rounded-lg bg-blue-50 border border-blue-100 text-[#2563EB] shrink-0 shadow-3xs">
                          <TrackIcon size={13} strokeWidth={2.5} />
                        </div>
                        <span className="text-[11px] font-bold tracking-tight text-slate-700 whitespace-nowrap">
                          {item.futureforgeShort}
                        </span>
                      </div>
                    ) : (
                      <div className="inline-flex items-start gap-2.5 text-slate-900 animate-fadeIn max-w-full">
                        <div className="p-1 rounded-lg bg-blue-50 border border-blue-100 text-[#2563EB] shrink-0 mt-0.5 shadow-3xs">
                          <TrackIcon size={13} strokeWidth={2.5} />
                        </div>
                        <p className="text-xs font-bold tracking-tight text-left overflow-hidden text-ellipsis whitespace-normal leading-normal text-slate-800">
                          {item.futureforge}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE: Traditional */}
                  <div className="overflow-hidden whitespace-nowrap text-ellipsis pl-3 border-l border-slate-200/80">
                    {isTraditionalMinority ? (
                      <div className="inline-flex items-center gap-2 text-red-500 animate-fadeIn justify-start">
                        <div className="p-1 rounded-lg bg-red-50 border border-red-100 text-red-500 shrink-0 shadow-3xs">
                          <XCircle size={13} strokeWidth={2.5} />
                        </div>
                        <span className="text-[11px] font-bold tracking-tight text-slate-500 whitespace-nowrap">
                          {item.traditionalShort}
                        </span>
                      </div>
                    ) : (
                      <div className="inline-flex items-start gap-2.5 text-red-500 font-medium italic text-left animate-fadeIn max-w-full">
                        <XCircle size={13} strokeWidth={2} className="mt-0.5 text-red-400 shrink-0" />
                        <p className="text-xs tracking-tight leading-normal overflow-hidden text-ellipsis whitespace-normal text-red-400">
                          {item.traditional}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* MIDPOINT SLIDER HANDLE */}
          <div 
            className="absolute inset-y-0 z-20 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-[#2563EB] cursor-ew-resize touch-none"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center transition-transform active:scale-110 hover:border-[#2563EB]">
              <div className="flex gap-0.5 items-center justify-center text-slate-400">
                <span className="w-0.5 h-2.5 bg-slate-300 rounded-full" />
                <span className="w-0.5 h-3.5 bg-slate-400 rounded-full" />
                <span className="w-0.5 h-2.5 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION CTA FOOTER */}
        <div className="mt-5 rounded-xl bg-gradient-to-r from-[#2563EB]/5 to-[#06B6D4]/5 p-4 flex flex-col sm:flex-row gap-4 justify-between items-center border border-slate-200/60 shadow-3xs">
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles size={12} className="text-[#06B6D4]" />
              Education Alone Isn't Enough Anymore.
            </h3>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5 max-w-xl">
              FutureForge bridges the gap between learning and employment by helping learners build verified skills, experience, and portfolios.
            </p>
          </div>
          <button className="group flex items-center gap-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 text-[11px] font-black uppercase tracking-wider transition-all shadow-xs shrink-0">
            Get Started
            <ArrowRight size={11} className="text-cyan-300 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={3} />
          </button>
        </div>

      </div>
    </section>
  );
}