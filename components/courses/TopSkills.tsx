import React from "react";
import { topSkills } from "@/lib/mock-data";

export default function TopSkills() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-black text-slate-800 tracking-tight mb-5">Top Skills to Learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {topSkills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer border border-transparent hover:border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                                    <Icon size={16} strokeWidth={2.5} />
                                </div>
                                <span className="text-sm font-bold text-slate-700 group-hover:text-[#2563EB] transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                            {skill.count && (
                                <span className="text-xs text-slate-400 font-medium">
                                    {skill.count}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
