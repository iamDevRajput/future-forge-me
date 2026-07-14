"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Building, Briefcase, Users, BookOpen, UserCheck, Star, Activity } from "lucide-react";

// CountUp Component
const CountUp = ({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);
  
  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * to);
        
        const formatted = current.toLocaleString();
        setDisplayValue(prefix + formatted + suffix);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, to, prefix, suffix]);

  return <span ref={ref}>{displayValue}</span>;
};

const organizations = ["TechNova", "Stratos", "OmniCorp", "Vanguard", "Nexus", "Aegis", "Zenith", "Quantum"];

const impacts = [
  { id: 1, label: "Organizations", value: 2000, suffix: "+", icon: Building },
  { id: 2, label: "Projects Posted", value: 15000, suffix: "+", icon: Briefcase },
  { id: 3, label: "Users Upskilled", value: 250000, suffix: "+", icon: Users },
  { id: 4, label: "Courses Created", value: 5000, suffix: "+", icon: BookOpen },
  { id: 5, label: "Hires Made", value: 50000, suffix: "+", icon: UserCheck },
  { id: 6, label: "Satisfaction Rate", value: 98, suffix: "%", icon: Star },
  { id: 7, label: "Active Sessions", value: 10000, suffix: "+", icon: Activity }
];

export default function TrustedByImpact() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-[#FDF9F2] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
          
          {/* Left Column: Trusted By */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#6B6B6B] mb-8 uppercase font-display">
              Trusted by <span className="tabular-nums font-bold font-sans">2,000+</span> Organizations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {organizations.map((org, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card h-20 rounded-xl flex items-center justify-center text-[#1A1A1A] font-extrabold tracking-tight text-lg opacity-60 hover:opacity-100 transition-opacity"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Platform Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-sm font-bold tracking-widest text-[#6B6B6B] uppercase font-display">
                Platform Impact
              </h2>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollRight}
                className="p-2 rounded-full border border-[#C08A1E]/30 text-[#C08A1E] hover:bg-[#C08A1E]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A1E]/50 outline-none lg:hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <div 
              ref={scrollRef}
              className="flex lg:flex-wrap gap-6 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {impacts.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass-card min-w-[160px] lg:min-w-0 lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start rounded-2xl p-6 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C08A1E]/10 flex items-center justify-center text-[#C08A1E] mb-4">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl text-[#1A1A1A] mb-1 tracking-tight tabular-nums font-bold font-sans">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[#6B6B6B] font-medium font-sans">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>

    </section>
  );
}
