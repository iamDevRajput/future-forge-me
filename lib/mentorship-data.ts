// ─── Mentorship Static Data ──────────────────────────────────────────────────
// All data lives here. Replace with API calls when backend is ready.

export type StatCard = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  subtitle: string;
  icon: string; // lucide icon name
  color: "violet" | "blue" | "amber" | "green" | "red";
};

export type Session = {
  id: string;
  day: string; // "Today" | "Tomorrow" | "Saturday, 12 Jul" etc.
  time: string;
  title: string;
  type: string;
  action: "join" | "reschedule";
};

export type AvailableProject = {
  id: string;
  title: string;
  org: string;
  verified: boolean;
  description: string;
  needsRole: string;
  teamSize: number;
  stage: string;
  theme: "violet" | "green" | "orange";
  iconLabel: string; // 2-letter abbrev for colored square
};

export type ActiveMentorship = {
  id: string;
  projectTitle: string;
  org: string;
  needsRole: string;
  stage: string;
  teamSize: number;
  avatarInitials: string[];
  avatarUrls?: string[];
  extraMembers: number;
  nextReview: string;
  color: "violet" | "blue" | "amber" | "green";
};

export type Invitation = {
  id: string;
  projectTitle: string;
  org: string;
  role: string;
  invitedBy: string;
  inviterAvatar?: string;
  teamSize: number;
  avatarInitials: string[];
  avatarUrls?: string[];
  extraMembers: number;
  color: "violet" | "blue" | "amber" | "green";
};

export type ActivityItem = {
  id: string;
  icon: string; // lucide icon name
  color: "violet" | "blue" | "amber" | "green" | "red";
  title: string;
  description: string;
  timestamp: string;
};

export type FeedbackItem = {
  id: string;
  stars: number;
  quote: string;
  project: string;
  reviewerInitials: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerColor: string;
  avatarUrl?: string;
};

export type Achievement = {
  id: string;
  icon: string;
  color: "violet" | "blue" | "amber" | "green" | "red";
  title: string;
  subtitle: string;
};

export type QuickAction = {
  id: string;
  icon: string;
  color: "violet" | "blue" | "amber" | "green";
  title: string;
  subtitle: string;
  href: string;
};

// ─── Top Stats (4 cards) ─────────────────────────────────────────────────────
export const topStats: StatCard[] = [
  {
    id: "level",
    label: "Mentorship Level",
    value: 4,
    subtitle: "Senior Mentor",
    icon: "Shield",
    color: "violet",
  },
  {
    id: "projects",
    label: "Projects Mentoring",
    value: 6,
    subtitle: "Active Projects",
    icon: "FolderKanban",
    color: "blue",
  },
  {
    id: "sessions",
    label: "Upcoming Sessions",
    value: 4,
    subtitle: "Next 7 Days",
    icon: "CalendarClock",
    color: "amber",
  },
  {
    id: "rating",
    label: "Mentor Rating",
    value: 4.9,
    suffix: "★",
    subtitle: "(48 Reviews)",
    icon: "Star",
    color: "green",
  },
];

// ─── Impact Stats (4 cards, bottom) ──────────────────────────────────────────
export const impactStats: StatCard[] = [
  {
    id: "reviews",
    label: "Reviews Completed",
    value: 48,
    subtitle: "High quality reviews",
    icon: "ClipboardCheck",
    color: "violet",
  },
  {
    id: "mentored",
    label: "Projects Mentored",
    value: 31,
    subtitle: "Across domains",
    icon: "FolderKanban",
    color: "blue",
  },
  {
    id: "mentees",
    label: "Mentees Impacted",
    value: 87,
    subtitle: "Positive outcomes",
    icon: "Users",
    color: "green",
  },
  {
    id: "avg-rating",
    label: "Average Rating",
    value: 4.9,
    suffix: "★",
    subtitle: "From mentees",
    icon: "Star",
    color: "amber",
  },
];

// ─── Journey inner stats ──────────────────────────────────────────────────────
export const journeyStats = [
  { label: "Reviews Completed", value: 48 },
  { label: "Projects Mentored", value: 31 },
  { label: "Hours Mentored", value: 126 },
  { label: "Mentees Impacted", value: 87 },
];

// ─── Upcoming Sessions ────────────────────────────────────────────────────────
export const upcomingSessions: Session[] = [
  {
    id: "s1",
    day: "Today",
    time: "3:00 PM",
    title: "AI Model Architecture Review",
    type: "Project Mentorship",
    action: "join",
  },
  {
    id: "s2",
    day: "Today",
    time: "6:30 PM",
    title: "Code Review: Backend API",
    type: "Code Review Session",
    action: "join",
  },
  {
    id: "s3",
    day: "Tomorrow",
    time: "11:00 AM",
    title: "UX Feedback Session",
    type: "Design Review",
    action: "join",
  },
  {
    id: "s4",
    day: "Saturday, 12 Jul",
    time: "2:00 PM",
    title: "Team Milestone Check-In",
    type: "Progress Review",
    action: "reschedule",
  },
];

// ─── Available Projects ───────────────────────────────────────────────────────
export const availableProjects: AvailableProject[] = [
  {
    id: "ap1",
    title: "Neural Insight Engine",
    org: "TechNova Solutions",
    verified: true,
    description:
      "Building an AI-powered analytics platform for real-time business intelligence and predictive modeling.",
    needsRole: "AI/ML",
    teamSize: 5,
    stage: "MVP",
    theme: "violet",
    iconLabel: "AI",
  },
  {
    id: "ap2",
    title: "MediTrack Pro",
    org: "MediCare Group",
    verified: true,
    description:
      "Scalable patient record management system with HIPAA-compliant backend and secure API layer.",
    needsRole: "Backend",
    teamSize: 4,
    stage: "Beta",
    theme: "green",
    iconLabel: "MT",
  },
  {
    id: "ap3",
    title: "FinFlow Dashboard",
    org: "Apex Finance Co.",
    verified: false,
    description:
      "Consumer-facing personal finance dashboard with intuitive UI/UX and accessibility-first design.",
    needsRole: "UI/UX",
    teamSize: 3,
    stage: "Design",
    theme: "orange",
    iconLabel: "FF",
  },
  {
    id: "ap4",
    title: "EduPath Learner",
    org: "BrightMinds Inc.",
    verified: true,
    description:
      "Adaptive learning platform using ML to personalize course recommendations for students.",
    needsRole: "AI/ML",
    teamSize: 6,
    stage: "MVP",
    theme: "violet",
    iconLabel: "EP",
  },
  {
    id: "ap5",
    title: "CloudVault Storage",
    org: "Nexus Cloud Ltd.",
    verified: true,
    description:
      "Distributed cloud storage solution with end-to-end encryption and zero-knowledge architecture.",
    needsRole: "Backend",
    teamSize: 5,
    stage: "Alpha",
    theme: "green",
    iconLabel: "CV",
  },
  {
    id: "ap6",
    title: "RetailSense POS",
    org: "TradePoint Corp.",
    verified: false,
    description:
      "Modern point-of-sale UI system for retail chains with real-time inventory and analytics.",
    needsRole: "UI/UX",
    teamSize: 4,
    stage: "Design",
    theme: "orange",
    iconLabel: "RS",
  },
];

// ─── Active Mentorships ───────────────────────────────────────────────────────
export const activeMentorships: ActiveMentorship[] = [
  {
    id: "m1",
    projectTitle: "AI Resume Analyzer",
    org: "TechNova Solutions",
    needsRole: "AI Mentor",
    stage: "Implementation",
    teamSize: 6,
    avatarInitials: ["RS", "AV", "KS"],
    avatarUrls: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2", "https://i.pravatar.cc/150?u=3"],
    extraMembers: 3,
    nextReview: "Tomorrow, 10:00 AM",
    color: "blue",
  },
  {
    id: "m2",
    projectTitle: "Hospital Management System",
    org: "MediCare Group",
    needsRole: "Frontend Mentor",
    stage: "Testing",
    teamSize: 5,
    avatarInitials: ["MJ", "PR", "LK"],
    avatarUrls: ["https://i.pravatar.cc/150?u=4", "https://i.pravatar.cc/150?u=5", "https://i.pravatar.cc/150?u=6"],
    extraMembers: 2,
    nextReview: "In 2 Days, 04:00 PM",
    color: "green",
  },
  {
    id: "m3",
    projectTitle: "E-Learning Platform",
    org: "LearnSphere",
    needsRole: "Product Mentor",
    stage: "Planning",
    teamSize: 4,
    avatarInitials: ["SJ", "AT"],
    avatarUrls: ["https://i.pravatar.cc/150?u=7", "https://i.pravatar.cc/150?u=8"],
    extraMembers: 2,
    nextReview: "In 5 Days, 11:00 AM",
    color: "amber",
  },
  {
    id: "m4",
    projectTitle: "Smart Attendance System",
    org: "EduCore Solutions",
    needsRole: "Backend Mentor",
    stage: "Completed",
    teamSize: 3,
    avatarInitials: ["RV", "NM"],
    avatarUrls: ["https://i.pravatar.cc/150?u=9", "https://i.pravatar.cc/150?u=10"],
    extraMembers: 1,
    nextReview: "Completed",
    color: "green",
  },
];

// ─── Invitations ──────────────────────────────────────────────────────────────
export const invitations: Invitation[] = [
  {
    id: "inv1",
    projectTitle: "AI Healthcare Platform",
    org: "HealthTech Innovations",
    role: "AI Mentor",
    invitedBy: "Rahul Sharma",
    inviterAvatar: "https://i.pravatar.cc/150?u=11",
    teamSize: 5,
    avatarInitials: ["RS", "PJ", "AK"],
    avatarUrls: ["https://i.pravatar.cc/150?u=11", "https://i.pravatar.cc/150?u=12", "https://i.pravatar.cc/150?u=13"],
    extraMembers: 2,
    color: "blue",
  },
  {
    id: "inv2",
    projectTitle: "Inventory Management System",
    org: "LogiTrack Systems",
    role: "Backend Mentor",
    invitedBy: "Ananya Verma",
    inviterAvatar: "https://i.pravatar.cc/150?u=14",
    teamSize: 4,
    avatarInitials: ["AV", "MS"],
    avatarUrls: ["https://i.pravatar.cc/150?u=14", "https://i.pravatar.cc/150?u=15"],
    extraMembers: 2,
    color: "green",
  },
  {
    id: "inv3",
    projectTitle: "CryptoLedger UI",
    org: "BlockBase Ltd.",
    role: "UI/UX Mentor",
    invitedBy: "Rohan Verma",
    inviterAvatar: "https://i.pravatar.cc/150?u=16",
    teamSize: 3,
    avatarInitials: ["RV", "SC", "TL"],
    avatarUrls: ["https://i.pravatar.cc/150?u=16", "https://i.pravatar.cc/150?u=17", "https://i.pravatar.cc/150?u=18"],
    extraMembers: 0,
    color: "amber",
  },
];

// ─── Recent Activity ──────────────────────────────────────────────────────────
export const recentActivity: ActivityItem[] = [
  {
    id: "act1",
    icon: "ClipboardCheck",
    color: "violet",
    title: "Completed Code Review",
    description: "Reviewed backend API architecture for MediTrack Pro.",
    timestamp: "2h ago",
  },
  {
    id: "act2",
    icon: "Star",
    color: "amber",
    title: "New Feedback Received",
    description: "Aryan gave you a 5-star review on Neural Insight Engine.",
    timestamp: "Yesterday",
  },
  {
    id: "act3",
    icon: "UserCheck",
    color: "green",
    title: "Invitation Accepted",
    description: "You accepted mentorship for GreenRoute Logistics.",
    timestamp: "Yesterday",
  },
  {
    id: "act4",
    icon: "CalendarCheck",
    color: "blue",
    title: "Session Completed",
    description: "UX Feedback Session with FinFlow Dashboard team.",
    timestamp: "3 days ago",
  },
  {
    id: "act5",
    icon: "Trophy",
    color: "amber",
    title: "Achievement Unlocked",
    description: "Earned the 'Outstanding Mentor' badge for May 2024.",
    timestamp: "3 days ago",
  },
];

// ─── Feedback (Carousel) ──────────────────────────────────────────────────────
export const feedbackItems: FeedbackItem[] = [
  {
    id: "fb1",
    stars: 5,
    quote:
      "Incredible mentor! Their guidance on our AI model architecture was spot-on and helped us avoid critical pitfalls. Always available and deeply knowledgeable.",
    project: "Neural Insight Engine",
    reviewerInitials: "AR",
    reviewerName: "Aryan Rao",
    reviewerRole: "Team Lead, TechNova Solutions",
    reviewerColor: "#7C5CFF",
    avatarUrl: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "fb2",
    stars: 5,
    quote:
      "Really helped us streamline our database schema and API endpoints. We cut our query times in half thanks to their suggestions.",
    project: "MediTrack Pro",
    reviewerInitials: "DL",
    reviewerName: "Diana Lin",
    reviewerRole: "Backend Dev, MediCare Group",
    reviewerColor: "#10B981",
  },
  {
    id: "fb3",
    stars: 5,
    quote:
      "Our UX went from confusing to award-worthy after just two sessions. The mentor's eye for detail and user empathy is extraordinary.",
    project: "FinFlow Dashboard",
    reviewerInitials: "FJ",
    reviewerName: "Felix Johansson",
    reviewerRole: "Designer, Apex Finance Co.",
    reviewerColor: "#F59E0B",
  },
  {
    id: "fb4",
    stars: 4,
    quote:
      "Very insightful feedback on our ML pipeline. Would love more async communication between sessions, but the session quality itself was excellent.",
    project: "EduPath Learner",
    reviewerInitials: "HN",
    reviewerName: "Hannah Nguyen",
    reviewerRole: "ML Engineer, BrightMinds Inc.",
    reviewerColor: "#3B82F6",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: "ach1",
    icon: "Trophy",
    color: "amber",
    title: "Top 10% Mentors",
    subtitle: "Among all mentors",
  },
  {
    id: "ach2",
    icon: "ClipboardCheck",
    color: "violet",
    title: "100 Reviews Completed",
    subtitle: "Milestone Achieved",
  },
  {
    id: "ach3",
    icon: "Award",
    color: "green",
    title: "Outstanding Mentor Award",
    subtitle: "May 2024",
  },
  {
    id: "ach4",
    icon: "Heart",
    color: "blue",
    title: "Student Choice Award",
    subtitle: "April 2024",
  },
];

// ─── Quick Actions ────────────────────────────────────────────────────────────
export const quickActions: QuickAction[] = [
  {
    id: "qa1",
    icon: "FolderSearch",
    color: "violet",
    title: "Browse Projects",
    subtitle: "Find projects to mentor",
    href: "/mentorship/available-projects",
  },
  {
    id: "qa2",
    icon: "CalendarPlus",
    color: "blue",
    title: "Schedule Session",
    subtitle: "Book a private mentorship session",
    href: "#",
  },
  {
    id: "qa3",
    icon: "UserCog",
    color: "amber",
    title: "Update Mentor Profile",
    subtitle: "Update skills and availability",
    href: "#",
  },
  {
    id: "qa4",
    icon: "BarChart3",
    color: "green",
    title: "View Mentorship Analytics",
    subtitle: "Track your impact and growth",
    href: "#",
  },
];
