"use client";

import React from "react";
import { motion } from "framer-motion";

export function EmptySessionsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="12" y="14" width="40" height="38" rx="6" fill="#EDE9FE" />
      <path d="M12 24H52" stroke="#7C5CFF" strokeWidth="2" />
      <rect x="20" y="8" width="4" height="12" rx="2" fill="#7C5CFF" />
      <rect x="40" y="8" width="4" height="12" rx="2" fill="#7C5CFF" />
      <rect x="20" y="32" width="10" height="10" rx="2" fill="#7C5CFF" fillOpacity="0.2" />
      <motion.circle
        cx="44"
        cy="44"
        r="8"
        fill="#F59E0B"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M44 40L44 48M40 44L48 44" stroke="#FFF7ED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EmptyProjectsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="32" r="16" fill="#EFF6FF" />
      <circle cx="40" cy="32" r="16" fill="#ECFDF5" fillOpacity="0.8" />
      <path d="M24 32L40 32" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="24" cy="32" r="4" fill="#3B82F6" />
      <circle cx="40" cy="32" r="4" fill="#10B981" />
    </svg>
  );
}

export function EmptyInvitationsIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="12" y="20" width="40" height="28" rx="4" fill="#FEF2F2" />
      <path d="M12 24L32 38L52 24" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path
        d="M32 12V6M32 6L28 10M32 6L36 10"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -4, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  );
}

export function HelpCenterIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="20" fill="#EFF6FF" />
      <circle cx="24" cy="24" r="14" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M24 16L28 28L24 24L20 28L24 16Z" fill="#3B82F6" />
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export function ProfileGrowthIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4" y="4" width="40" height="40" rx="12" fill="#EDE9FE" />
      <path d="M14 34V26M24 34V18M34 34V12" stroke="#7C5CFF" strokeWidth="4" strokeLinecap="round" />
      <motion.path
        d="M14 26L24 18L34 12"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <circle cx="34" cy="12" r="3" fill="#F59E0B" />
    </svg>
  );
}

type BadgeProps = {
  type: "top10" | "reviews" | "outstanding" | "student";
  className?: string;
};

export function AchievementBadgeIllustration({ type, className = "" }: BadgeProps) {
  if (type === "top10") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="20" cy="20" r="16" fill="#FFF7ED" />
        <path d="M20 10L23 16L29 17L24 21L25 27L20 24L15 27L16 21L11 17L17 16L20 10Z" fill="#F59E0B" />
      </svg>
    );
  }
  if (type === "reviews") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="8" y="8" width="24" height="24" rx="6" fill="#EDE9FE" />
        <path d="M14 20L18 24L26 14" stroke="#7C5CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "outstanding") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="20" cy="20" r="16" fill="#ECFDF5" />
        <circle cx="20" cy="20" r="8" fill="#10B981" />
        <path d="M16 26L14 32L20 30L26 32L24 26" fill="#10B981" />
      </svg>
    );
  }
  // student
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="20" r="16" fill="#EFF6FF" />
      <path d="M20 14C20 14 15 10 12 14C9 18 14 24 20 28C26 24 31 18 28 14C25 10 20 14 20 14Z" fill="#3B82F6" />
    </svg>
  );
}

export function LevelShieldIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M40 10L65 18V38C65 56 40 70 40 70C40 70 15 56 15 38V18L40 10Z" fill="#7C5CFF" />
      <path d="M40 16L59 22V38C59 52 40 64 40 64C40 64 21 52 21 38V22L40 16Z" fill="#6B4DE6" />
      <path d="M40 20L55 24V38C55 50 40 60 40 60C40 60 25 50 25 38V24L40 20Z" fill="#5A3CC2" />
    </svg>
  );
}
