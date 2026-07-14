import React from "react";
import { Bookmark, Star } from "lucide-react";
import { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
    const Icon = course.icon;
    return (
        <div className="w-[85vw] max-w-[280px] sm:w-[320px] sm:max-w-none shrink-0 snap-start bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group cursor-pointer flex flex-col">
            {/* Thumbnail */}
            <div className="h-40 bg-slate-900 relative p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/20 to-transparent pointer-events-none" />
                <div className="flex justify-between items-start relative z-10">
                    <span className={`text-[10px] font-bold text-white uppercase tracking-wider px-2 py-1 rounded-md ${course.badgeColor}`}>
                        {course.badge}
                    </span>
                    <button 
                        aria-label="Save Course"
                        className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                        <Bookmark size={16} strokeWidth={2} />
                    </button>
                </div>
                <div className="relative z-10">
                    <Icon size={40} strokeWidth={1} className="text-white/20 absolute -right-2 -bottom-4 pointer-events-none" />
                </div>
            </div>
            
            {/* Content */}
            <div className="p-4 flex flex-col grow">
                <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-tight mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
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
}
