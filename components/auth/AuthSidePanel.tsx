"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Users, FolderKanban, GraduationCap, Quote } from "lucide-react";

const metrics = [
    { label: "Active Learners", value: "250K+", icon: Users },
    { label: "Projects Built", value: "15K+", icon: FolderKanban },
    { label: "Skill Courses", value: "2K+", icon: GraduationCap },
];

const testimonials = [
    {
        quote: "FutureForge gave me the exact roadmap I needed to transition from a beginner to landing my first tech role.",
        author: "Sarah J.",
        role: "Software Engineer at TechCorp",
    },
    {
        quote: "The AI Mentor is a game-changer. It feels like having a senior engineer reviewing my code 24/7.",
        author: "Michael T.",
        role: "Frontend Developer",
    },
    {
        quote: "I found my co-founders and launched our startup directly through the FutureForge community.",
        author: "Elena R.",
        role: "Startup Founder",
    },
];

export default function AuthSidePanel() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-full w-full bg-[#0B1220] overflow-hidden flex flex-col justify-between p-12 lg:p-16">
            {/* Background effects */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#D9A441]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#B8791A]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Grid Pattern overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />

            {/* Top Branding / Welcome */}
            <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(217,164,65,0.3)] bg-[rgba(217,164,65,0.1)] text-[10px] font-bold tracking-widest text-[#D9A441] uppercase mb-6">
                    <Sparkles size={11} className="animate-pulse" />
                    Join The Movement
                </div>
                
                <h1 className="text-4xl xl:text-5xl font-black text-white leading-[1.1] tracking-tight">
                    Your career <br />
                    acceleration <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] to-[#B8791A]">
                        starts here.
                    </span>
                </h1>
                
                <p className="mt-5 text-[#94A3B8] text-sm md:text-base font-medium max-w-sm leading-relaxed">
                    Access premium courses, real-world projects, and a 24/7 AI mentor tailored to your career goals.
                </p>
            </div>

            {/* Middle: Platform Metrics (Glass cards) */}
            <div className="relative z-10 grid grid-cols-1 gap-3 mt-12 mb-12">
                {metrics.map((metric, i) => (
                    <motion.div 
                        key={metric.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                        className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm"
                    >
                        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-[#D9A441]/20 to-[#B8791A]/20 border border-[rgba(217,164,65,0.3)] flex items-center justify-center">
                            <metric.icon size={18} className="text-[#D9A441]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white">{metric.value}</h3>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{metric.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom: Testimonial Carousel */}
            <div className="relative z-10 max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <Quote size={24} className="text-[#D9A441]/30 mb-4" />
                <div className="min-h-[80px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="text-white/90 text-sm font-medium leading-relaxed italic">
                                &quot;{testimonials[currentTestimonial].quote}&quot;
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="h-1 w-4 bg-[#D9A441] rounded-full" />
                                <div>
                                    <p className="text-xs font-bold text-white">{testimonials[currentTestimonial].author}</p>
                                    <p className="text-[10px] text-white/50">{testimonials[currentTestimonial].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Dots indicator */}
                <div className="flex gap-1.5 mt-5">
                    {testimonials.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentTestimonial(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentTestimonial ? "w-6 bg-[#D9A441]" : "w-1.5 bg-white/20"}`}
                            aria-label={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
