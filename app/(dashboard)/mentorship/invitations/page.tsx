import type { Metadata } from "next";
import InvitationsPage from "@/components/mentorship/pages/InvitationsPage";

export const metadata: Metadata = {
  title: "Mentor Invitations | FutureForge",
  description:
    "Review and respond to project teams that have invited you to be their mentor on FutureForge.",
};

export default function InvitationsRoute() {
  return <InvitationsPage />;
}
