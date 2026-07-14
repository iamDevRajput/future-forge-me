import React from "react";
import {
    mockUser,
    mockCareerProgress,
    mockTodaysMission,
    mockActiveCourse,
    mockActiveProjects,
    mockProjectEvaluations,
    mockEvaluatorStats,
    mockMentorSession,
    mockPortfolio,
    mockOpportunities,
    mockActivity,
    mockCommunityPosts,
} from "@/lib/dashboard-mock-data";

// Layout widgets
import WelcomeHero from "@/components/dashboard/home/WelcomeHero";
import CareerProgressRing from "@/components/dashboard/home/CareerProgressRing";
import TodaysMission from "@/components/dashboard/home/TodaysMission";

// Row 2 — Active work
import ContinueLearning from "@/components/dashboard/home/ContinueLearning";
import ActiveProjects from "@/components/dashboard/home/ActiveProjects";
import ProjectEvaluations from "@/components/dashboard/home/ProjectEvaluations";

// Row 3 — Human layer
import EvaluatorDashboard from "@/components/dashboard/home/EvaluatorDashboard";
import UpcomingMentorSession from "@/components/dashboard/home/UpcomingMentorSession";
import PortfolioOverview from "@/components/dashboard/home/PortfolioOverview";

// Row 4 — Discovery
import RecommendedOpportunities from "@/components/dashboard/home/RecommendedOpportunities";
import RecentActivity from "@/components/dashboard/home/RecentActivity";
import CommunitySpotlight from "@/components/dashboard/home/CommunitySpotlight";

export const metadata = {
    title: "Dashboard",
    description: "Your personal career development command center on FutureForge",
};

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* ── ROW 1: Identity + Progress (Above the fold) ────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
                {/* Welcome Hero — 6/12 cols */}
                <div className="col-span-1 sm:col-span-2 lg:col-span-6">
                    <WelcomeHero user={mockUser} progressPercent={mockCareerProgress.overallPercent} />
                </div>

                {/* Career Progress Ring — 3/12 cols */}
                <div className="col-span-1 lg:col-span-3">
                    <CareerProgressRing progress={mockCareerProgress} />
                </div>

                {/* Today's Mission — 3/12 cols */}
                <div className="col-span-1 lg:col-span-3">
                    <TodaysMission mission={mockTodaysMission} />
                </div>
            </div>

            {/* ── ROW 2: Daily Active Work ────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                <div className="lg:col-span-4">
                    <ContinueLearning course={mockActiveCourse} />
                </div>
                <div className="lg:col-span-4">
                    <ActiveProjects projects={mockActiveProjects} />
                </div>
                <div className="lg:col-span-4">
                    <ProjectEvaluations evaluations={mockProjectEvaluations} />
                </div>
            </div>

            {/* ── ROW 3: Human Layer ──────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                <div className="lg:col-span-4">
                    <EvaluatorDashboard stats={mockEvaluatorStats} />
                </div>
                <div className="lg:col-span-4">
                    <UpcomingMentorSession session={mockMentorSession} />
                </div>
                <div className="lg:col-span-4">
                    <PortfolioOverview portfolio={mockPortfolio} />
                </div>
            </div>

            {/* ── ROW 4: Discovery ────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                <div className="lg:col-span-4">
                    <RecommendedOpportunities opportunities={mockOpportunities} />
                </div>
                <div className="lg:col-span-4">
                    <RecentActivity activity={mockActivity} />
                </div>
                <div className="lg:col-span-4">
                    <CommunitySpotlight posts={mockCommunityPosts} />
                </div>
            </div>
        </div>
    );
}
