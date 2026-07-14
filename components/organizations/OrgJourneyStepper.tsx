"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    UserPlus, 
    CheckCircle, 
    Briefcase, 
    Users, 
    BookOpen, 
    FolderKanban, 
    TrendingUp, 
    Award,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

const steps = [
    { id: '01', title: 'Register', desc: 'Sign up your organization', icon: UserPlus },
    { id: '02', title: 'Verify', desc: 'Complete KYC process', icon: CheckCircle },
    { id: '03', title: 'Create Workspace', desc: 'Set up your environment', icon: Briefcase },
    { id: '04', title: 'Invite Team', desc: 'Bring your employees onboard', icon: Users },
    { id: '05', title: 'Launch Courses', desc: 'Assign learning modules', icon: BookOpen },
    { id: '06', title: 'Post Projects', desc: 'Create real-world tasks', icon: FolderKanban },
    { id: '07', title: 'Track Performance', desc: 'Monitor progress analytics', icon: TrendingUp },
    { id: '08', title: 'Hire & Grow', desc: 'Recruit top talent', icon: Award },
];

export default function OrgJourneyStepper() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-12 md:py-24 w-full bg-[#FDF9F2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-[#1A1A1A]">
                        YOUR ORGANIZATION <span className="text-transparent bg-clip-text text-gold-gradient">JOURNEY</span>
                    </h2>
                    <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={scrollRight}
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full glass-card text-[#C08A1E] focus-visible:ring-2 ring-[#C08A1E]/50 transition-all outline-none"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </motion.div>

                <div className="relative">
                    <div 
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto pb-8 pt-4 snap-x snap-mandatory gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex-none w-[280px] snap-start relative group"
                                >
                                    <div className="relative z-10 flex flex-col h-full glass-card p-6 rounded-2xl transition-all duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-14 h-14 rounded-full bg-[#0B1220] flex items-center justify-center text-[#C08A1E] group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <span className="text-3xl font-black text-gray-200 group-hover:text-[#C08A1E]/30 transition-colors duration-300 tabular-nums font-bold font-sans">
                                                {step.id}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold font-display text-[#1A1A1A] mb-2">{step.title}</h3>
                                        <p className="text-[#6B6B6B] font-sans text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Arrow connecting to next step */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-0 hidden md:block translate-x-[12px]">
                                            <ArrowRight className="w-6 h-6 text-[#C08A1E]/40" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
}
