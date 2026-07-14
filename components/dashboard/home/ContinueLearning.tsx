import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import ProgressBar from "@/components/dashboard/shared/ProgressBar";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import type { EnrolledCourse } from "@/types/dashboard";

export default function ContinueLearning({ course }: { course: EnrolledCourse | null }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Continue Learning</h2>
                <Link href="/dashboard/courses" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F]">
                    My Courses
                </Link>
            </div>

            {!course ? (
                <EmptyState
                    icon={<BookOpen size={20} />}
                    title="No active course"
                    description="Start learning today and track your progress here"
                    actionLabel="Browse Courses"
                    actionHref="/courses"
                    size="sm"
                />
            ) : (
                <>
                    {/* Course card */}
                    <div className="flex gap-4 p-3 bg-[#0B1220] rounded-2xl">
                        {/* Thumbnail */}
                        <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#0B1220] flex items-center justify-center border border-white/10">
                            <BookOpen size={28} className="text-[#D9A441]" />
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold text-[#D9A441] uppercase tracking-wider">{course.category}</span>
                            <h3 className="text-sm font-black text-white leading-tight mt-0.5 truncate">{course.title}</h3>
                            <p className="text-[10px] text-white/50 mt-0.5">{course.instructor}</p>
                            <div className="mt-2">
                                <ProgressBar
                                    value={course.progressPercent}
                                    showPercent
                                    height="slim"
                                    color="bg-gradient-to-r from-[#D9A441] to-[#B8791A]"
                                    className="[&_.bg-\[\#F5EDD8\]]:bg-white/15"
                                />
                                <p className="text-[10px] text-white/40 mt-1">
                                    {course.completedLessons}/{course.totalLessons} lessons
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next lesson */}
                    <div className="mt-4 flex items-center justify-between p-3 bg-[#FDF9F2] rounded-xl border border-[rgba(192,138,30,0.15)]">
                        <div className="flex items-center gap-2 min-w-0">
                            <div className="h-7 w-7 shrink-0 rounded-full bg-[rgba(192,138,30,0.12)] flex items-center justify-center">
                                <Clock size={13} className="text-[#C08A1E]" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] text-[#6B6B6B] font-medium">Next Lesson</p>
                                <p className="text-xs font-bold text-[#1A1A1A] truncate">{course.nextLesson}</p>
                            </div>
                        </div>
                        <Link
                            href={`/dashboard/courses/${course.slug}`}
                            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-xs font-bold shadow-[0_0_16px_rgba(200,141,30,0.25)] hover:shadow-[0_0_24px_rgba(200,141,30,0.35)] transition-shadow"
                        >
                            Continue <ArrowRight size={12} />
                        </Link>
                    </div>
                </>
            )}
        </DashboardCard>
    );
}
