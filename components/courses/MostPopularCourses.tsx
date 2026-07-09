import React from "react";
import { Star, PlayCircle, BookOpen, Clock, ShieldCheck } from "lucide-react";

const popularList = [
    {
        id: 1,
        title: "Python for Data Science",
        level: "Beginner",
        duration: "42 Hours",
        certificate: "Certificate",
        rating: 4.6,
        price: "₹2,499"
    },
    {
        id: 2,
        title: "Machine Learning A-Z™",
        level: "Intermediate",
        duration: "55 Hours",
        certificate: "Certificate",
        rating: 4.7,
        price: "₹3,299"
    },
    {
        id: 3,
        title: "Cyber Security Essentials",
        level: "Beginner",
        duration: "30 Hours",
        certificate: "Certificate",
        rating: 4.5,
        price: "₹1,999"
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        level: "All Levels",
        duration: "25 Hours",
        certificate: "Certificate",
        rating: 4.8,
        price: "₹2,299"
    }
];

export default function MostPopularCourses() {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-black text-slate-800 tracking-tight">Most Popular Courses</h3>
                <button className="text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors">
                    View All
                </button>
            </div>
            <div className="space-y-4">
                {popularList.map((course) => (
                    <div key={course.id} className="flex gap-4 group cursor-pointer">
                        <div className="w-16 h-16 shrink-0 bg-slate-900 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 bg-linear-to-br from-[#2563EB]/20 to-transparent pointer-events-none" />
                        </div>
                        <div className="flex flex-col justify-center">
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
                ))}
            </div>
        </div>
    );
}
