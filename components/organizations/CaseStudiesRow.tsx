"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const caseStudies = [
  { id: 1, initials: "TC", company: "TechCorp", outcome: "Reduced onboarding time by 40% with internal courses." },
  { id: 2, initials: "GI", company: "Global Innovate", outcome: "Hired 150+ top developers through assessments." },
  { id: 3, initials: "FL", company: "FinTech Labs", outcome: "Upskilled entire engineering team in React & Node." },
  { id: 4, initials: "SS", company: "Swift Solutions", outcome: "Streamlined project management & delivery speed." },
  { id: 5, initials: "EL", company: "EduLearn", outcome: "Created a centralized hub for all training materials." },
  { id: 6, initials: "NX", company: "Nexus Dynamics", outcome: "Boosted employee satisfaction by offering certs." }
];

export default function CaseStudiesRow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-[#FDF9F2] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-2 font-display">Success Stories</h2>
            <p className="text-[#6B6B6B] font-sans">See how top organizations are transforming with us.</p>
          </div>
          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-[#C08A1E]/30 text-[#C08A1E] hover:bg-[#C08A1E]/10 focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-[#C08A1E]/30 text-[#C08A1E] hover:bg-[#C08A1E]/10 focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card min-w-[280px] md:min-w-[320px] shrink-0 snap-start rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white font-bold text-lg shadow-sm font-sans">
                    {study.initials}
                  </div>
                  <h3 className="font-semibold text-lg text-[#1A1A1A] font-display">{study.company}</h3>
                </div>
                <p className="text-[#1A1A1A] font-medium leading-relaxed mb-8 text-lg font-sans">
                  &ldquo;{study.outcome}&rdquo;
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-[#C08A1E] font-semibold hover:text-[#B8791A] transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none rounded self-start font-sans"
              >
                Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
  );
}
