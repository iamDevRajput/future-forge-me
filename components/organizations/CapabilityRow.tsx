"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, Briefcase, Users, ClipboardCheck, TrendingUp, Target, Code2, BarChart3 } from "lucide-react";

const CAPABILITIES = [
  { id: "courses", title: "Create Courses", desc: "Build custom learning paths for your team.", icon: BookOpen, color: "text-[#C08A1E]" },
  { id: "projects", title: "Post Projects", desc: "Outsource tasks to top-tier talent.", icon: Briefcase, color: "text-[#C08A1E]" },
  { id: "hire", title: "Hire Talent", desc: "Recruit pre-vetted professionals directly.", icon: Users, color: "text-[#C08A1E]" },
  { id: "assessments", title: "Skill Assessments", desc: "Evaluate competencies with real tests.", icon: ClipboardCheck, color: "text-[#C08A1E]" },
  { id: "upskilling", title: "Employee Upskilling", desc: "Keep your workforce ahead of the curve.", icon: TrendingUp, color: "text-[#C08A1E]" },
  { id: "mentorship", title: "Mentorship", desc: "Connect employees with expert mentors.", icon: Target, color: "text-[#C08A1E]" },
  { id: "hackathons", title: "Hackathons", desc: "Host internal or public coding challenges.", icon: Code2, color: "text-[#C08A1E]" },
  { id: "analytics", title: "Learning Analytics", desc: "Track progress and ROI on training.", icon: BarChart3, color: "text-[#C08A1E]" },
];

export default function CapabilityRow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 lg:py-24 bg-[#FDF9F2] overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        {/* Section Header with inline Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
            Organization Capabilities
          </h2>
          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#C08A1E] hover:text-white hover:border-transparent transition-colors focus-visible:ring-2 ring-[#C08A1E]/50 cursor-pointer"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#C08A1E] hover:text-white hover:border-transparent transition-colors focus-visible:ring-2 ring-[#C08A1E]/50 cursor-pointer"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[280px] group cursor-pointer"
            >
              <div className="h-full glass-card rounded-2xl p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 border border-[#1A1A1A]/5">
                  <cap.icon className={`w-6 h-6 ${cap.color}`} />
                </div>
                <h3 className="text-xl font-display tracking-tight font-bold text-[#1A1A1A] mb-2">{cap.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
