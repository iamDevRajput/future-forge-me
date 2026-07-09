"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, Bookmark, Star, Code, Cpu, Shield, PenTool } from "lucide-react";

const featuredCourses = [
    {
        id: 1,
        title: "Python for Data Science",
        description: "Master Python data analysis, visualization, and machine learning from scratch.",
        badge: "Bestseller",
        badgeColor: "bg-amber-500",
        icon: Code,
        level: "Beginner",
        duration: "42 Hours",
        certificate: "Certificate",
        rating: 4.6,
        reviews: "2.1K",
        price: "₹2,499",
        originalPrice: "₹4,999",
    },
    {
        id: 2,
        title: "Machine Learning A-Z™",
        description: "Learn to create Machine Learning Algorithms in Python and R.",
        badge: "Trending",
        badgeColor: "bg-[#2563EB]",
        icon: Cpu,
        level: "Intermediate",
        duration: "55 Hours",
        certificate: "Certificate",
        rating: 4.7,
        reviews: "3.8K",
        price: "₹3,299",
        originalPrice: "₹6,599",
    },
    {
        id: 3,
        title: "Cyber Security Essentials",
        description: "Complete guide to network security, ethical hacking and defense.",
        badge: "Popular",
        badgeColor: "bg-[#06B6D4]",
        icon: Shield,
        level: "Beginner",
        duration: "30 Hours",
        certificate: "Certificate",
        rating: 4.5,
        reviews: "1.6K",
        price: "₹1,999",
        originalPrice: "₹3,999",
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        description: "Learn UX/UI design principles and tools to create stunning interfaces.",
        badge: "New",
        badgeColor: "bg-emerald-500",
        icon: PenTool,
        level: "All Levels",
        duration: "25 Hours",
        certificate: "Certificate",
        rating: 4.8,
        reviews: "912",
        price: "₹2,299",
        originalPrice: "₹4,599",
    }
];

export default function FeaturedCourses() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">Featured Courses</h2>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors hidden sm:block">
                        View All Courses
                    </button>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                        >
                            <ArrowLeft size={16} strokeWidth={2.5} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors"
                        >
                            <ArrowRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-6 hide-scrollbar snap-x snap-mandatory"
            >
                {featuredCourses.map((course) => {
                    const Icon = course.icon;
                    return (
                        <div key={course.id} className="min-w-[280px] sm:min-w-[340px] shrink-0 snap-start bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col">
                            {/* Thumbnail */}
                            <div className="h-44 bg-slate-900 relative p-5 flex flex-col justify-between overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/20 to-transparent pointer-events-none" />
                                <div className="flex justify-between items-start relative z-10">
                                    <span className={`text-[10px] font-bold text-white uppercase tracking-wider px-2 py-1 rounded-md ${course.badgeColor}`}>
                                        {course.badge}
                                    </span>
                                    <button className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-colors">
                                        <Bookmark size={16} strokeWidth={2} />
                                    </button>
                                </div>
                                <div className="relative z-10">
                                    <Icon size={40} strokeWidth={1} className="text-white/20 absolute -right-2 -bottom-4" />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-5 flex flex-col grow">
                                <h3 className="font-bold text-slate-800 text-base leading-tight mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                                    {course.title}
                               </h3>
                                <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-2 grow">
                                    {course.description}
                                </p>
                                
                                {/* Meta */}
                                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 flex-wrap">
                                    <span>{course.level}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    <span>{course.duration}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    <span>{course.certificate}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5 mb-4">
                                    <span className="text-sm font-bold text-amber-500">{course.rating}</span>
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className={i < Math.floor(course.rating) ? "fill-current" : "text-slate-200"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">({course.reviews})</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-black text-slate-900">{course.price}</span>
                                        <span className="text-sm text-slate-400 line-through font-medium">{course.originalPrice}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-wider">
                                        50% OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
