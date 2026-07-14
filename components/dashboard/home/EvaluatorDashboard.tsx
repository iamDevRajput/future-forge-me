import React from "react";
import Link from "next/link";
import { ArrowRight, Star, Shield, Users, CheckCircle2 } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import type { EvaluatorStats } from "@/types/dashboard";

export default function EvaluatorDashboard({ stats }: { stats: EvaluatorStats }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Evaluator Dashboard</h2>
                    {stats.isCertified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C08A1E] bg-[rgba(192,138,30,0.1)] border border-[rgba(192,138,30,0.2)] px-2 py-0.5 rounded-full mt-1">
                            <Shield size={9} /> Certified Student Evaluator
                        </span>
                    )}
                </div>
            </div>

            {/* Reputation Score */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-[#FDF9F2] rounded-xl border border-[rgba(192,138,30,0.15)]">
                <div className="flex-1">
                    <p className="text-[10px] text-[#6B6B6B] font-medium uppercase tracking-wider">Reputation Score</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-2xl font-black text-[#1A1A1A]">{stats.reputationScore}</span>
                        <Star size={16} className="text-amber-500 fill-amber-400" />
                    </div>
                    <p className="text-[10px] text-[#6B6B6B] mt-0.5">Top 8% Evaluators</p>
                </div>
                <div className="w-px h-12 bg-[rgba(192,138,30,0.15)]" />
                <div className="text-right">
                    <p className="text-[10px] text-[#6B6B6B] font-medium">Impact Points</p>
                    <p className="text-2xl font-black text-[#1A1A1A]">{stats.totalImpactPoints}</p>
                </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                    { icon: Users, label: "To Evaluate", value: stats.projectsToEvaluate },
                    { icon: CheckCircle2, label: "Completed", value: stats.totalEvaluations },
                    { icon: Shield, label: "Pending", value: stats.pendingRequests },
                ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <Icon size={16} className="mx-auto text-[#C08A1E] mb-1" />
                        <p className="text-base font-black text-[#1A1A1A]">{value}</p>
                        <p className="text-[10px] text-[#6B6B6B] font-medium leading-tight">{label}</p>
                    </div>
                ))}
            </div>

            <Link
                href="/dashboard/evaluations"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white text-xs font-bold shadow-sm hover:shadow-[0_0_16px_rgba(200,141,30,0.3)] transition-shadow"
            >
                Go to Evaluation Center <ArrowRight size={12} />
            </Link>
        </DashboardCard>
    );
}
