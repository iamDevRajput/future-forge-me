import React from "react";
import { Target } from "lucide-react";

export default function RecommendationBanner() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-7 flex flex-col md:flex-row items-center justify-between gap-6 mb-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Ambient Background Blur */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#06B6D4]/10 blur-[50px] pointer-events-none" />
            
            <div className="flex items-center gap-5 z-10">
                <div className="h-14 w-14 shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2563EB] shadow-sm">
                    <Target size={28} strokeWidth={2} />
                </div>
                <div>
                    <h3 className="text-lg font-black text-slate-800 tracking-tight">Not sure what to learn?</h3>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                        Answer a few questions and we'll recommend the best courses for you.
                    </p>
                </div>
            </div>
            
            <button className="shrink-0 w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm text-sm uppercase tracking-wider z-10">
                Get Recommendations
            </button>
        </div>
    );
}
