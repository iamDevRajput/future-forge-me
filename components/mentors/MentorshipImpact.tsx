"use client";

import { useState, useRef } from "react";
import { 
  UserCheck, 
  Users, 
  Compass, 
  FileCheck, 
  FileText, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  Mail, 
  BookOpen, 
  TrendingUp, 
  Award,
  Rocket,
  Star
} from "lucide-react";

// Types
interface ServiceItem {
  icon: any;
  title: string;
  desc: string;
}

interface JourneyStep {
  num: string;
  title: string;
  desc: string;
  icon: any;
}

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

// Mock Data
const services: ServiceItem[] = [
  { icon: UserCheck, title: "One-on-One Sessions", desc: "Connect privately with verified mentors" },
  { icon: Users, title: "Group Mentorship", desc: "Learn together in small groups" },
  { icon: Compass, title: "Career Guidance", desc: "Get help with career planning & growth" },
  { icon: FileCheck, title: "Project Reviews", desc: "Get feedback on your projects & portfolio" },
  { icon: FileText, title: "Resume & Profile Review", desc: "Improve your resume and online presence" },
  { icon: MessageSquare, title: "Mock Interviews", desc: "Prepare for interviews with experts" },
];

const journeySteps: JourneyStep[] = [
  { num: "01", title: "Discover", desc: "Find mentors that match your goals and needs", icon: Search },
  { num: "02", title: "Connect", desc: "Send a request and connect with mentors", icon: Mail },
  { num: "03", title: "Learn", desc: "Attend sessions and gain valuable insights", icon: BookOpen },
  { num: "04", title: "Grow", desc: "Apply learnings and achieve your goals", icon: TrendingUp },
  { num: "05", title: "Succeed", desc: "Build your career and create impact", icon: Award },
];

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "My mentor helped me crack my dream job at Google. The guidance and feedback were invaluable!",
    name: "Rahul Mehta",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "2",
    quote: "The mock interview sessions gave me the confidence I lacked. Transitioned to UI/UX seamlessly.",
    name: "Sneha Rao",
    role: "Product Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5
  }
];

export default function MentorshipImpactHub() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const serviceScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (serviceScrollRef.current) {
      const { scrollLeft, clientWidth } = serviceScrollRef.current;
      const scrollAmt = dir === "left" ? scrollLeft - 300 : scrollLeft + 300;
      serviceScrollRef.current.scrollTo({ left: scrollAmt, behavior: "smooth" });
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-10 md:py-14 font-sans text-slate-800 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col gap-10">
        
        {/* ========================================== */}
        {/* 1. TOP RAIL: MENTORSHIP SERVICES TRACK       */}
        {/* ========================================== */}
        <div className="flex flex-col gap-5 w-full">
          <h2 className="text-center text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
            Mentorship That Drives Impact
          </h2>

          <div className="w-full relative group">
            {/* Left navigation anchor */}
            <button 
              onClick={() => handleScroll("left")}
              className="absolute left-[-14px] top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 lg:hidden items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-[#2563EB] shadow-3xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* Scroll Container Chassis */}
            <div 
              ref={serviceScrollRef}
              className="w-full overflow-x-auto lg:overflow-x-visible flex flex-row items-center gap-4 lg:gap-3 pb-3 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-6 snap-x snap-mandatory"
            >
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="shrink-0 w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-auto snap-center flex items-start gap-3 p-3 rounded-xl border border-slate-100 lg:border-transparent bg-slate-50/40 lg:bg-transparent transition-all duration-300 hover:bg-white hover:border-blue-500/10 hover:shadow-3xs"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white lg:bg-slate-50 text-[#2563EB] border border-slate-100 shadow-3xs">
                      <Icon className="w-4 h-4" strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-medium text-slate-400 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right navigation anchor */}
            <button 
              onClick={() => handleScroll("right")}
              className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 lg:hidden items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 hover:text-[#2563EB] shadow-3xs cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. MIDDLE PIPELINE LAYOUT MATRIX ROUTE     */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-6 w-full items-stretch">
          
          {/* LEFT COMPONENT: JOURNEY STEPS MODULE */}
          <div className="bg-linear-to-b from-white to-slate-50/25 border border-blue-500/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-3xs">
            <div className="text-center lg:text-left mb-6 select-none">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                Your Mentorship Journey
              </h3>
              <p className="text-[10px] sm:text-xs font-medium text-slate-400 mt-0.5">
                Simple steps to connect with the right mentor
              </p>
            </div>

            {/* Timeline Row Flow Architecture */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 md:gap-2 relative w-full">
              {journeySteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isLast = idx === journeySteps.length - 1;

                return (
                  <div key={idx} className="flex-1 flex flex-row md:flex-col items-center justify-start md:justify-center relative group">
                    <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2.5 text-left md:text-center w-full">
                      
                      {/* Interactive Point Node Bubble */}
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200/80 text-slate-700 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-300 group-hover:text-[#2563EB] shadow-3xs relative z-10">
                        <StepIcon className="w-4 h-4" strokeWidth={2.2} />
                      </div>

                      {/* Info Content Strings */}
                      <div className="min-w-0 flex-1 md:w-full">
                        <div className="flex items-center md:justify-center gap-1">
                          <span className="text-[10px] font-black tracking-wider text-slate-300 uppercase">{step.num}</span>
                          <h4 className="text-xs font-bold text-slate-900 tracking-tight">{step.title}</h4>
                        </div>
                        <p className="mt-0.5 text-[9.5px] sm:text-[10px] font-medium text-slate-400 leading-tight md:max-w-[120px] md:mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Connecting Vector Arrows */}
                    {!isLast && (
                      <div className="hidden md:block absolute top-[22px] left-[calc(50%+26px)] right-[calc(-50%+26px)] h-px pointer-events-none z-0">
                        <div className="w-full flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-blue-200 shrink-0" strokeWidth={2.5} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COMPONENT: TESTIMONIAL PANEL CAROUSEL */}
          <div className="bg-white border border-blue-500/10 rounded-2xl p-5 md:p-6 flex flex-col justify-between shadow-3xs relative overflow-hidden">
            
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/5 blur-xl pointer-events-none" />
            
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight mb-5 border-b border-slate-50 pb-2 select-none">
              What Learners Say
            </h3>

            {/* Quote Sandbox Container */}
            <div className="flex-1 flex flex-col justify-between relative z-10 w-full">
              
              <div className="w-full relative min-h-[85px] sm:min-h-[70px] flex items-center">
                
                {/* Bookend slider triggers */}
                <button 
                  onClick={prevTestimonial}
                  className="absolute left-[-8px] z-20 flex h-7 w-7 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 hover:text-[#2563EB] shadow-3xs cursor-pointer active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>

                {/* Main Quote Copy Text block */}
                <div className="px-6 text-center">
                  <p className="text-[11px] sm:text-xs font-medium italic text-slate-600 leading-relaxed tracking-tight">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="absolute right-[-8px] z-20 flex h-7 w-7 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 hover:text-[#2563EB] shadow-3xs cursor-pointer active:scale-95 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                </button>
              </div>

              {/* User Bio Subcard Footer Metadata */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between w-full">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img 
                    src={testimonials[activeTestimonial].avatar} 
                    alt={testimonials[activeTestimonial].name} 
                    className="w-8 h-8 rounded-full border border-slate-100 object-cover bg-slate-50 shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="text-[11px] font-bold text-slate-900 truncate leading-none">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[9.5px] font-semibold text-slate-400 truncate mt-0.5 leading-none">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Rating Matrix Points */}
                <div className="flex items-center gap-0.5 shrink-0 select-none">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" strokeWidth={2.5} />
                  ))}
                </div>
              </div>

            </div>

            {/* Slider Pagination Dot Rail Indicator */}
            <div className="flex items-center justify-center gap-1 mt-4 select-none">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer
                    ${idx === activeTestimonial ? "w-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" : "w-1 bg-slate-200"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ========================================== */}
        {/* 3. BOTTOM PANEL: ACCELERATION HERO BANNER   */}
        {/* ========================================== */}
        <div className="w-full rounded-2xl md:rounded-3xl border border-blue-500/10 bg-linear-to-b from-white to-slate-50/20 p-4 sm:p-5 lg:p-6 shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          
          <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-cyan-500/5 blur-2xl pointer-events-none" />
          <div className="absolute left-0 top-0 h-44 w-44 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

          {/* Left Block Content Frame */}
          <div className="flex items-center gap-4 relative z-10 w-full lg:w-auto">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-3xs text-[#2563EB]">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                Ready to accelerate your growth?
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-400 leading-none">
                Connect with expert mentors and unlock your true potential.
              </p>
            </div>
          </div>

          {/* Right Action Trigger Stack Panels */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 w-full lg:w-auto shrink-0 relative z-10">
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-xs font-bold shadow-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap min-w-[130px]">
              Find a Mentor
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-200 hover:border-blue-300 bg-white text-xs font-bold text-slate-700 hover:text-[#2563EB] transition-all shadow-3xs cursor-pointer active:scale-95 whitespace-nowrap min-w-[130px]">
              Become a Mentor
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}