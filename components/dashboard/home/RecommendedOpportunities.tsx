import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import type { Opportunity, OpportunityType } from "@/types/dashboard";

const typeIcon: Record<OpportunityType, React.ElementType> = {
    job: Briefcase, internship: Briefcase, hackathon: Globe, workshop: Globe, competition: Globe,
};

const typeColor: Record<OpportunityType, string> = {
    job: "bg-blue-50 text-blue-600",
    internship: "bg-purple-50 text-purple-600",
    hackathon: "bg-amber-50 text-amber-700",
    workshop: "bg-green-50 text-green-600",
    competition: "bg-red-50 text-red-600",
};

export default function RecommendedOpportunities({ opportunities }: { opportunities: Opportunity[] }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Recommended Opportunities</h2>
                <Link href="/dashboard/opportunities" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    View All <ArrowRight size={12} />
                </Link>
            </div>

            {opportunities.length === 0 ? (
                <EmptyState
                    icon={<Briefcase size={20} />}
                    title="No opportunities yet"
                    description="Complete your profile to get personalized matches"
                    actionLabel="Complete Profile"
                    actionHref="/dashboard/profile"
                    size="sm"
                />
            ) : (
                <div className="space-y-3">
                    {opportunities.map((opp) => {
                        const Icon = typeIcon[opp.type];
                        return (
                            <div key={opp.id} className="flex items-center gap-3 p-3 bg-[#FDF9F2] rounded-xl border border-[rgba(192,138,30,0.12)] hover:border-[rgba(192,138,30,0.3)] hover:shadow-sm transition-all">
                                {/* Company icon */}
                                <div className={`h-9 w-9 shrink-0 rounded-lg flex items-center justify-center ${typeColor[opp.type]}`}>
                                    <Icon size={16} />
                                </div>
                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-xs font-bold text-[#1A1A1A] truncate">{opp.title}</p>
                                        {opp.isNew && (
                                            <span className="shrink-0 text-[9px] font-black px-1.5 py-0.5 rounded bg-green-100 text-green-700 uppercase tracking-wide">New</span>
                                        )}
                                    </div>
                                    <p className="text-[10px] text-[#6B6B6B] mt-0.5">{opp.company} · {opp.location}</p>
                                </div>
                                {/* CTA */}
                                <a
                                    href={opp.ctaLink ?? "#"}
                                    className="shrink-0 text-[10px] font-bold px-2.5 py-1.5 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] text-white hover:shadow-[0_0_12px_rgba(200,141,30,0.3)] transition-shadow"
                                >
                                    {opp.ctaLabel}
                                </a>
                            </div>
                        );
                    })}
                </div>
            )}
        </DashboardCard>
    );
}
