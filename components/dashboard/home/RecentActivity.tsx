import React from "react";
import { ArrowRight, BookOpen, FolderKanban, Star, Award, ClipboardList, Users } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import type { ActivityItem, ActivityType } from "@/types/dashboard";

const activityIconMap: Record<ActivityType, React.ElementType> = {
    "lesson-completed": BookOpen,
    "course-completed": Award,
    "project-submitted": FolderKanban,
    "evaluation-received": Star,
    "certificate-earned": Award,
    "assessment-cleared": ClipboardList,
    "mentor-session": Users,
    "community-post": Users,
};

const activityColor: Record<ActivityType, string> = {
    "lesson-completed": "text-blue-600 bg-blue-50",
    "course-completed": "text-green-600 bg-green-50",
    "project-submitted": "text-purple-600 bg-purple-50",
    "evaluation-received": "text-amber-600 bg-amber-50",
    "certificate-earned": "text-[#C08A1E] bg-[rgba(192,138,30,0.1)]",
    "assessment-cleared": "text-indigo-600 bg-indigo-50",
    "mentor-session": "text-teal-600 bg-teal-50",
    "community-post": "text-slate-600 bg-slate-100",
};

export default function RecentActivity({ activity }: { activity: ActivityItem[] }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Recent Activity</h2>
                <a href="/dashboard/profile" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    View All <ArrowRight size={12} />
                </a>
            </div>

            <div className="space-y-1">
                {activity.map((item, idx) => {
                    const Icon = activityIconMap[item.type];
                    const color = activityColor[item.type];
                    return (
                        <div key={item.id} className="relative flex gap-3 pb-3">
                            {/* Connecting line */}
                            {idx < activity.length - 1 && (
                                <div className="absolute left-[17px] top-8 w-px h-[calc(100%-4px)] bg-[rgba(192,138,30,0.12)]" />
                            )}
                            {/* Icon */}
                            <div className={`h-8 w-8 shrink-0 rounded-full flex items-center justify-center ${color}`}>
                                <Icon size={14} />
                            </div>
                            {/* Content */}
                            <div className="flex-1 pt-0.5 min-w-0">
                                <p className="text-xs font-medium text-[#1A1A1A] leading-snug">{item.description}</p>
                                <p className="text-[10px] text-[#6B6B6B] mt-1 font-medium">{item.timestamp}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </DashboardCard>
    );
}
