import type { Metadata } from "next";
import MentorshipOverview from "@/components/mentorship/pages/MentorshipOverview";

export const metadata: Metadata = {
  title: "Mentorship Overview | FutureForge",
  description:
    "Guide learners, review projects, and build your reputation as a mentor on FutureForge.",
};

export default function MentorshipOverviewPage() {
  return <MentorshipOverview />;
}
