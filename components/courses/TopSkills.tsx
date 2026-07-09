import React from "react";
import { Code, Database, Cpu, Monitor, FileJson, Shield, Cloud, PenTool } from "lucide-react";

const skills = [
    { label: "Python", count: "12,450", icon: Code },
    { label: "Data Science", count: "8,150", icon: Database },
    { label: "Machine Learning", count: "6,740", icon: Cpu },
    { label: "Web Development", count: "6,210", icon: Monitor },
    { label: "JavaScript", count: "5,980", icon: FileJson },
    { label: "Cyber Security", count: "5,210", icon: Shield },
    { label: "AWS", count: "4,870", icon: Cloud },
    { label: "UI/UX Design", count: "4,210", icon: PenTool },
];

export default function TopSkills() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-base font-black text-slate-800 tracking-tight mb-5">Top Skills to Learn</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-[#2563EB] group-hover:bg-blue-50 transition-colors">
                                    <Icon size={14} strokeWidth={2.5} />
                                </div>
                                <span className="text-sm font-bold text-slate-700 group-hover:text-[#2563EB] transition-colors">
                                    {skill.label}
                                </span>
                            </div>
                            <span className="text-xs text-slate-400 font-medium">
                                {skill.count}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
