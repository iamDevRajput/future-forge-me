"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import type { Invitation } from "@/lib/mentorship-data";

const themeMap: Record<string, {
  iconBg: string;
  avatarBg: string;
}> = {
  violet: {
    iconBg: "bg-[#1A1A2E]",
    avatarBg: "bg-[#7C5CFF]",
  },
  green: {
    iconBg: "bg-[#064E3B]",
    avatarBg: "bg-[#10B981]",
  },
  amber: {
    iconBg: "bg-[#7C2D12]",
    avatarBg: "bg-[#F59E0B]",
  },
  blue: {
    iconBg: "bg-[#1E3A5F]",
    avatarBg: "bg-[#3B82F6]",
  },
};

type InvitationCardProps = {
  invitation: Invitation;
  index?: number;
  onAccept?: (id: string) => void;
  onDecline?: (id: string) => void;
};

export default function InvitationCard({
  invitation,
  index = 0,
  onAccept,
  onDecline,
}: InvitationCardProps) {
  const t = themeMap[invitation.color];
  const iconLabel = invitation.projectTitle.substring(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-[#E9EAEE] shadow-[0_1px_3px_rgba(16,24,40,0.06)] p-5 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg ${t.iconBg} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}
        >
          {iconLabel}
        </div>
        <div className="min-w-0 flex-1 mt-0.5">
          <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
            <span className="text-sm font-bold text-[#1A1A2E] leading-tight">
              {invitation.projectTitle}
            </span>
            <BadgeCheck size={14} className="text-[#3B82F6] flex-shrink-0" />
          </div>
          <p className="text-[11px] font-medium text-[#6B7280] truncate">
            {invitation.org}
          </p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
            Role
          </p>
          <p className="text-sm font-semibold text-[#1A1A2E]">
            {invitation.role}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-1">
            Invited by
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm font-semibold text-[#1A1A2E]">
              {invitation.invitedBy}
            </p>
            {invitation.inviterAvatar ? (
              <div className="w-6 h-6 rounded-full overflow-hidden bg-[#F8F9FB] border border-[#E9EAEE]">
                <img src={invitation.inviterAvatar} alt={invitation.invitedBy} className="w-full h-full object-cover" />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex -space-x-2">
          {invitation.avatarInitials.map((initials, i) => {
            const avatarUrl = invitation.avatarUrls?.[i];
            return (
              <div
                key={i}
                className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden ${
                  avatarUrl ? "bg-[#F8F9FB]" : `${t.avatarBg} text-white`
                }`}
              >
                {avatarUrl ? (
                  <img src={avatarUrl} alt={initials} className="w-full h-full object-cover" />
                ) : (
                  initials
                )}
              </div>
            );
          })}
          {invitation.extraMembers > 0 && (
            <div className="w-7 h-7 rounded-full bg-[#E9EAEE] border-2 border-white flex items-center justify-center text-[#6B7280] text-[10px] font-bold">
              +{invitation.extraMembers}
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-[#E9EAEE]">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAccept?.(invitation.id)}
          className="py-2 rounded-xl border border-[#10B981] text-[#10B981] text-xs font-bold hover:bg-[#ECFDF5] transition-colors focus-visible:ring-2 focus-visible:ring-[#10B981]/40 outline-none"
        >
          Accept
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onDecline?.(invitation.id)}
          className="py-2 rounded-xl border border-[#EF4444]/30 text-[#EF4444] text-xs font-bold hover:bg-[#FEF2F2] transition-colors focus-visible:ring-2 focus-visible:ring-[#EF4444]/40 outline-none"
        >
          Decline
        </motion.button>
      </div>
    </motion.div>
  );
}
