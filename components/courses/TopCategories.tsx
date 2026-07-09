"use client";

import React, { useRef } from "react";
import { Code, Database, Monitor, Briefcase, PenTool, TrendingUp, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";

const categories = [
    { label: "Development", count: "4,250 Courses", icon: Code },
    { label: "Data Science", count: "2,150 Courses", icon: Database },
    { label: "IT & Software", count: "2,350 Courses", icon: Monitor },
    { label: "Business", count: "1,650 Courses", icon: Briefcase },
    { label: "Design", count: "1,660 Courses", icon: PenTool },
    { label: "Marketing", count: "1,200 Courses", icon: TrendingUp },
    { label: "Personal Growth", count: "960 Courses", icon: Sparkles },
];

export default function TopCategories() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -200 : 200;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">Top Categories</h2>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors hidden sm:block">
                        View All Categories
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
                className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
            >
                {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                        <div 
                            key={idx} 
                            className="min-w-[160px] snap-start bg-white border border-slate-200 rounded-3xl p-6 flex flex-col items-center text-center hover:border-[#2563EB] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-[#2563EB] group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors mb-4">
                                <Icon size={20} strokeWidth={2} />
                            </div>
                            <h3 className="font-bold text-sm text-slate-800 mb-1 group-hover:text-[#2563EB] transition-colors">{cat.label}</h3>
                            <p className="text-xs text-slate-500 font-medium">{cat.count}</p>
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
