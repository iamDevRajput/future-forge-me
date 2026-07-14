import type { Metadata } from "next";
import AvailableProjectsPage from "@/components/mentorship/pages/AvailableProjectsPage";

export const metadata: Metadata = {
  title: "Available Projects | Mentorship | FutureForge",
  description:
    "Browse and apply to mentor projects that match your skills and expertise on FutureForge.",
};

export default function AvailableProjectsRoute() {
  return <AvailableProjectsPage />;
}
