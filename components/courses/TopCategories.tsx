"use client";

import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { topCategories } from "@/lib/mock-data";

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
                            aria-label="Scroll left"
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                        >
                            <ArrowLeft size={16} strokeWidth={2.5} />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            aria-label="Scroll right"
                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
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
                {topCategories.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <div 
                            key={idx} 
                            className="min-w-[160px] snap-start bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white hover:border-[#2563EB] hover:shadow-sm transition-all group cursor-pointer focus-within:ring-2 focus-within:ring-[#2563EB]"
                        >
                            <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-[#2563EB] group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors mb-4">
                                {Icon && <Icon size={20} strokeWidth={2} />}
                            </div>
                            <h3 className="text-sm font-bold text-slate-800 mb-1 group-hover:text-[#2563EB] transition-colors">
                                {category.label}
                            </h3>
                            <p className="text-xs font-medium text-slate-500">
                                {category.count}
                            </p>
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
