import React from "react";
import { Calendar, Clock, GraduationCap, ArrowRight } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import type { MentorSession } from "@/types/dashboard";

export default function UpcomingMentorSession({ session }: { session: MentorSession | null }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Upcoming Mentor Session</h2>
                <a href="/dashboard/mentor" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    View Schedule <ArrowRight size={12} />
                </a>
            </div>

            {!session ? (
                <EmptyState
                    icon={<GraduationCap size={20} />}
                    title="No session scheduled"
                    description="Book a 1:1 session with a mentor to fast-track your growth"
                    actionLabel="Find a Mentor"
                    actionHref="/dashboard/mentor"
                    size="sm"
                />
            ) : (
                <>
                    {/* Mentor info */}
                    <div className="flex items-center gap-3 p-3 bg-[#FDF9F2] rounded-xl border border-[rgba(192,138,30,0.15)] mb-4">
                        {/* Avatar */}
                        <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white font-black text-base shadow-md">
                            {session.mentorName.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-[#1A1A1A] truncate">{session.sessionTitle}</p>
                            <p className="text-xs text-[#6B6B6B] mt-0.5">With {session.mentorName}</p>
                            <p className="text-[10px] text-[#6B6B6B] mt-0.5 font-medium">{session.mentorTitle}</p>
                        </div>
                    </div>

                    {/* Time + Duration */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] font-medium">
                            <Calendar size={13} className="text-[#C08A1E]" />
                            {session.scheduledAt}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] font-medium">
                            <Clock size={13} className="text-[#C08A1E]" />
                            Duration: {session.durationMinutes} min
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                        <a
                            href={session.meetLink ?? "#"}
                            className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-xs font-bold shadow-sm hover:shadow-[0_0_16px_rgba(200,141,30,0.3)] transition-shadow"
                        >
                            Join Session
                        </a>
                        <button className="flex-1 py-2.5 rounded-xl border border-[rgba(192,138,30,0.25)] text-xs font-bold text-[#C08A1E] hover:bg-[rgba(192,138,30,0.06)] transition-colors">
                            Reschedule
                        </button>
                    </div>
                </>
            )}
        </DashboardCard>
    );
}
