"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import InvitationCard from "@/components/mentorship/InvitationCard";
import { ToastContainer, useToast } from "@/components/mentorship/Toast";
import { invitations as initialInvitations } from "@/lib/mentorship-data";
import { EmptyInvitationsIllustration } from "@/components/mentorship/Illustrations";

export default function InvitationsPage() {
  const [invitations, setInvitations] = useState(initialInvitations);
  const { toasts, addToast, dismiss } = useToast();

  const handleAccept = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    addToast("success", "Invitation accepted! You've joined the project.");
  };

  const handleDecline = (id: string) => {
    setInvitations((prev) => prev.filter((inv) => inv.id !== id));
    addToast("error", "Invitation declined.");
  };

  return (
    <div className="px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A2E] tracking-tight">
            Mentor Invitations
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">
            Review and respond to project teams that want your guidance.
          </p>
        </div>
        <span className="text-sm font-semibold text-[#6B7280] self-center">
          {invitations.length} pending
        </span>
      </div>

      {/* List */}
      {invitations.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl border border-[#E9EAEE] p-16 text-center flex flex-col items-center justify-center min-h-[400px]"
        >
          <EmptyInvitationsIllustration className="mb-6" />
          <p className="text-lg font-bold text-[#1A1A2E] mb-2">
            You're all caught up
          </p>
          <p className="text-sm text-[#6B7280] max-w-[300px] mx-auto leading-relaxed">
            When project teams invite you to mentor, they'll appear here. Ensure your profile is updated to attract the right opportunities.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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

      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}
