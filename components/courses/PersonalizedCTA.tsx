import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export default function PersonalizedCTA() {
    return (
        <section className="mt-16 mb-8 relative overflow-hidden bg-slate-900 rounded-3xl py-12 px-6 sm:px-12 text-center flex flex-col items-center justify-center font-sans">
            {/* Ambient Glows */}
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#2563EB]/20 blur-[80px] pointer-events-none" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-[#06B6D4]/20 blur-[80px] pointer-events-none" />

            <div className="h-16 w-16 rounded-full bg-linear-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 relative z-10">
                <Rocket size={28} strokeWidth={2} />
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 relative z-10 max-w-xl">
                Want a Personalized Learning Path?
            </h2>
            <p className="text-slate-400 text-sm font-medium mb-8 max-w-lg relative z-10">
                Tell us your career goals and current skill level, and we&apos;ll craft a customized journey to get you where you want to be.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <button className="group flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-amber-500 hover:bg-amber-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-amber-500/10">
                    Get Started Free
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
                <button className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all">
                    Explore Platform
                </button>
            </div>
        </section>
    );
}
