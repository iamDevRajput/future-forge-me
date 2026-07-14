import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import ProgressRing from "@/components/dashboard/shared/ProgressRing";
import type { CareerProgress } from "@/types/dashboard";

const stats = [
    { label: "Courses Completed", key: "coursesCompleted" as const },
    { label: "Skill Assessments Cleared", key: "assessmentsCleared" as const },
    { label: "Projects Completed", key: "projectsCompleted" as const },
    { label: "Professional Validations", key: "professionalValidations" as const },
];

export default function CareerProgressRing({ progress }: { progress: CareerProgress }) {
    return (
        <DashboardCard className="p-5 col-span-full sm:col-span-1 lg:col-span-3">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Your Career Progress</h2>
                    <p className="text-xs text-[#6B6B6B] mt-0.5 font-medium">Goal: {progress.overallPercent}% achieved</p>
                </div>
                <Link href="/dashboard/roadmaps" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    Full Progress <ArrowRight size={12} />
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4">
                <ProgressRing
                    value={progress.overallPercent}
                    size={120}
                    strokeWidth={11}
                    label={`${progress.overallPercent}%`}
                    sublabel="Overall"
                />

                <div className="space-y-2 flex-1 w-full">
                    {stats.map(({ label, key }) => (
                        <div key={key} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-[#C08A1E] shrink-0" />
                            <span className="text-xs font-semibold text-[#1A1A1A]">{progress[key]}</span>
                            <span className="text-xs text-[#6B6B6B] truncate">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardCard>
    );
}
