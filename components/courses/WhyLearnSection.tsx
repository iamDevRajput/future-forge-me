import React from "react";
import { Users, Briefcase, Award, Globe } from "lucide-react";

const reasons = [
    {
        title: "Expert Instructors",
        desc: "Learn from industry professionals with real-world experience.",
        icon: Users
    },
    {
        title: "Industry-Relevant Curriculum",
        desc: "Stay ahead with courses designed to meet current market demands.",
        icon: Briefcase
    },
    {
        title: "Certificates That Matter",
        desc: "Earn verified certificates recognized by top companies.",
        icon: Award
    },
    {
        title: "Learn Anywhere Anytime",
        desc: "Access courses 24/7 on any device and learn at your own pace.",
        icon: Globe
    }
];

export default function WhyLearnSection() {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 shadow-lg relative overflow-hidden group">
            {/* Ambient Background Blur */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#06B6D4]/10 blur-[50px] pointer-events-none" />
            
            <h3 className="text-base font-black text-white tracking-tight mb-5 relative z-10">Why Learn on FutureForge?</h3>
            <div className="space-y-4 relative z-10">
                {reasons.map((reason, idx) => {
                    const Icon = reason.icon;
                    return (
                        <div key={idx} className="flex gap-4 group">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-[#06B6D4] group-hover:border-[#06B6D4]/50 transition-colors">
                                <Icon size={18} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                                    {reason.title}
                                </h4>
                                <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
