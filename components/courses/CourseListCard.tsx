import React from "react";
import { Star } from "lucide-react";
import { Course } from "@/types/course";

export default function CourseListCard({ course }: { course: Course }) {
    return (
        <div className="flex gap-3 sm:gap-4 group cursor-pointer hover:bg-slate-50 p-2 sm:-mx-2 rounded-xl transition-colors">
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-slate-900 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <course.icon size={24} className="text-white/40" />
                </div>
            </div>
            <div className="flex flex-col justify-center flex-1">
                <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#2563EB] transition-colors line-clamp-1">
                    {course.title}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                    <span>{course.level}</span>
                    <span className="w-0.5 h-0.5 rounded-full bg-slate-300" />
                    <span>{course.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1 text-xs">
                        <span className="font-bold text-amber-500">{course.rating}</span>
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-sm font-black text-slate-900">{course.price}</span>
                </div>
            </div>
        </div>
    );
}
