import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import ProgressRing from "@/components/dashboard/shared/ProgressRing";
import type { PortfolioOverview } from "@/types/dashboard";

export default function PortfolioOverviewWidget({ portfolio }: { portfolio: PortfolioOverview }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Portfolio Overview</h2>
                <Link href="/dashboard/portfolio" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    View Portfolio <ArrowRight size={12} />
                </Link>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <ProgressRing
                    value={portfolio.strengthPercent}
                    size={90}
                    strokeWidth={9}
                    label={`${portfolio.strengthPercent}%`}
                    sublabel="Strength"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#1A1A1A] leading-snug">{portfolio.strengthLabel}</p>
                    {portfolio.profileViews && (
                        <p className="text-xs text-[#6B6B6B] mt-1 font-medium flex items-center gap-1">
                            <FileText size={11} className="text-[#C08A1E]" />
                            {portfolio.profileViews} profile views
                        </p>
                    )}
                </div>
            </div>

            {/* Suggestions */}
            <div className="space-y-2 mb-4">
                {portfolio.suggestions.map((suggestion, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#6B6B6B] font-medium">
                        <CheckCircle2 size={13} className="text-[rgba(192,138,30,0.5)] shrink-0" />
                        {suggestion}
                    </div>
                ))}
            </div>

            <Link
                href="/dashboard/portfolio"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-[rgba(192,138,30,0.25)] text-xs font-bold text-[#C08A1E] hover:bg-[rgba(192,138,30,0.06)] transition-colors"
            >
                Improve Portfolio <ArrowRight size={12} />
            </Link>
        </DashboardCard>
    );
}
