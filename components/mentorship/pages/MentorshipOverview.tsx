"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

import MentorshipHeader from "@/components/mentorship/MentorshipHeader";
import StatCardRow from "@/components/mentorship/StatCardRow";
import MentorshipJourneyCard from "@/components/mentorship/MentorshipJourneyCard";
import UpcomingSessionsCard from "@/components/mentorship/UpcomingSessionsCard";
import MentorProfileWidget from "@/components/mentorship/MentorProfileWidget";
import HelpCenterCard from "@/components/mentorship/HelpCenterCard";
import ProjectCard from "@/components/mentorship/ProjectCard";
import ActiveMentorshipRow from "@/components/mentorship/ActiveMentorshipRow";
import InvitationCard from "@/components/mentorship/InvitationCard";
import RecentActivityCard from "@/components/mentorship/RecentActivityCard";
import FeedbackCarousel from "@/components/mentorship/FeedbackCarousel";
import AchievementsCard from "@/components/mentorship/AchievementsCard";
import QuickActionsCard from "@/components/mentorship/QuickActionsCard";
import UpdateProfileBanner from "@/components/mentorship/UpdateProfileBanner";
import { ToastContainer, useToast } from "@/components/mentorship/Toast";
import { EmptyProjectsIllustration, EmptyInvitationsIllustration } from "@/components/mentorship/Illustrations";

import {
  topStats,
  impactStats,
  availableProjects,
  activeMentorships,
  invitations as invitationsData,
} from "@/lib/mentorship-data";

export default function MentorshipOverview() {
  const { toasts, addToast, dismiss } = useToast();
  const [invitations, setInvitations] = useState(invitationsData);

  const handleAccept = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    addToast("success", "Invitation accepted! You've joined the project.");
  };

  const handleDecline = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    addToast("error", "Invitation declined.");
  };

  // Only show active mentorships (not completed) in overview
  const activeMentorshipsFiltered = activeMentorships.filter(
    (m) => m.stage !== "Completed"
  );

  return (
    <div className="px-4 sm:px-6 py-6 max-w-[1400px] mx-auto space-y-6">
      {/* Page Header */}
      <MentorshipHeader />

      {/* Top Stat Row */}
      <StatCardRow stats={topStats} />

      {/* Row 1: Journey (2/3) + Upcoming Sessions (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MentorshipJourneyCard />
        </div>
        <div className="lg:col-span-1">
          <UpcomingSessionsCard />
        </div>
      </div>

      {/* Row 2: Profile widget + Help card (sidebar) stacked in right column — show beside projects row on xl */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left + Center: Available Projects (2/3) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <h2 className="text-base font-bold text-[#1A1A2E]">
                Projects Available for Mentorship
              </h2>
              <p className="text-xs text-[#6B7280] mt-0.5">
                Apply to mentor projects that match your expertise.
              </p>
            </div>
            <Link
              href="/mentorship/available-projects"
              className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {availableProjects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Right: Profile widget + Help card */}
        <div className="space-y-4">
          <MentorProfileWidget />
          <HelpCenterCard />
        </div>
      </div>

      {/* Active Mentorships (full width) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#1A1A2E]">
            My Active Mentorships
          </h2>
          <Link
            href="/mentorship/my-mentorships"
            className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
          >
            View All
          </Link>
        </div>

        {activeMentorshipsFiltered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E9EAEE] p-10 text-center flex flex-col items-center justify-center">
            <EmptyProjectsIllustration className="mb-4" />
            <p className="text-sm font-bold text-[#1A1A2E] mb-1">
              Ready to guide a team?
            </p>
            <p className="text-xs text-[#6B7280] max-w-[250px]">
              Browse available projects and apply as a mentor to start making an impact.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {activeMentorshipsFiltered.map((m, i) => (
              <ActiveMentorshipRow key={m.id} mentorship={m} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Row 3: Invitations + Activity (2-col) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Invitations */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#1A1A2E]">
              Mentor Invitations
            </h2>
            <Link
              href="/mentorship/invitations"
              className="text-xs font-semibold text-[#7C5CFF] hover:text-[#6B4DE6] transition-colors focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/40 outline-none rounded"
            >
              View All
            </Link>
          </div>
          {invitations.length === 0 ? (
            <div className="bg-white rounded-2xl border border-[#E9EAEE] p-8 text-center flex flex-col items-center justify-center h-[200px]">
              <EmptyInvitationsIllustration className="mb-3" />
              <p className="text-sm font-bold text-[#1A1A2E] mb-1">
                You're all caught up
              </p>
              <p className="text-xs text-[#6B7280]">
                Invitations from project teams will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence mode="popLayout">
                {invitations.map((inv, i) => (
                  <InvitationCard
                    key={inv.id}
                    invitation={inv}
                    index={i}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <RecentActivityCard />
      </div>

      {/* Your Impact (4 stat cards) */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-[#1A1A2E]">Your Impact</h2>
        <StatCardRow stats={impactStats} />
      </div>

      {/* Row 4: Feedback carousel (2/3) + Achievements + Quick Actions (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback */}
        <div className="lg:col-span-2">
          <FeedbackCarousel />
        </div>

        {/* Right: Achievements + Quick Actions */}
        <div className="space-y-4">
          <AchievementsCard />
          <QuickActionsCard />
        </div>
      </div>

      {/* Bottom Banner */}
      <UpdateProfileBanner />

      {/* Toast portal */}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
