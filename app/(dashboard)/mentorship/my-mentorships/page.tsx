import type { Metadata } from "next";
import MyMentorshipsPage from "@/components/mentorship/pages/MyMentorshipsPage";

export const metadata: Metadata = {
  title: "My Mentorships | FutureForge",
  description:
    "Track and manage your active and completed mentorships on FutureForge.",
};

export default function MyMentorshipsRoute() {
  return <MyMentorshipsPage />;
}
