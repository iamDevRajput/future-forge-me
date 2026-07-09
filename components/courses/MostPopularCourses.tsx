import React from "react";
import CourseListCard from "@/components/courses/CourseListCard";
import { popularList } from "@/lib/mock-data";

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
                    <CourseListCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}
