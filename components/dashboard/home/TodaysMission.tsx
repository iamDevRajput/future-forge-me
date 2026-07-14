"use client";

import React, { useState } from "react";
import { Check, Clock, AlertCircle, Gift } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import { XPBadge } from "@/components/dashboard/shared/Badges";
import type { TodaysMission, MissionStatus } from "@/types/dashboard";

const statusConfig: Record<MissionStatus, { icon: React.ElementType; color: string; bg: string }> = {
    pending: { icon: Clock, color: "text-[#6B6B6B]", bg: "bg-slate-100" },
    "in-progress": { icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    completed: { icon: Check, color: "text-green-600", bg: "bg-green-50" },
    "due-today": { icon: AlertCircle, color: "text-red-500", bg: "bg-red-50" },
};

export default function TodaysMissionWidget({ mission }: { mission: TodaysMission }) {
    const [completed, setCompleted] = useState<Set<string>>(new Set());

    return (
        <DashboardCard className="p-5 col-span-full sm:col-span-1 lg:col-span-3">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Today&apos;s Mission</h2>
                    <p className="text-xs text-[#6B6B6B] mt-0.5 font-medium">
                        {completed.size}/{mission.tasks.length} tasks done
                    </p>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1">
                    <Gift size={12} className="text-amber-600" />
                    <span className="text-[10px] font-black text-amber-700">+{mission.totalXpReward} XP</span>
                </div>
            </div>

            <div className="space-y-2.5">
                {mission.tasks.map((task) => {
                    const done = completed.has(task.id);
                    const cfg = statusConfig[done ? "completed" : task.status];
                    const StatusIcon = cfg.icon;
                    return (
                        <div
                            key={task.id}
                            className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all ${
                                done
                                    ? "bg-green-50 border-green-200 opacity-60"
                                    : "bg-white border-[rgba(192,138,30,0.12)] hover:border-[rgba(192,138,30,0.25)]"
                            }`}
                        >
                            <button
                                onClick={() =>
                                    setCompleted((prev) => {
                                        const next = new Set(prev);
                                        next.has(task.id) ? next.delete(task.id) : next.add(task.id);
                                        return next;
                                    })
                                }
                                className={`mt-0.5 h-4 w-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    done
                                        ? "bg-green-500 border-green-500"
                                        : "border-[rgba(192,138,30,0.4)] hover:border-[#C08A1E]"
                                }`}
                                aria-label={done ? "Mark incomplete" : "Mark complete"}
                            >
                                {done && <Check size={10} className="text-white" strokeWidth={3} />}
                            </button>

                            <div className="flex-1 min-w-0">
                                <p className={`text-xs font-bold leading-tight ${done ? "line-through text-[#6B6B6B]" : "text-[#1A1A1A]"}`}>
                                    {task.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded ${cfg.bg} ${cfg.color}`}>
                                        <StatusIcon size={9} />
                                        {task.status === "due-today" ? "Due Today" : task.duration}
                                    </span>
                                    {task.xpReward > 0 && <XPBadge amount={task.xpReward} size="sm" />}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </DashboardCard>
    );
}
