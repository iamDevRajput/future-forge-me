// ─────────────────────────────────────────────────────────────────────────────
// FutureForge — Dashboard Types
// All interfaces mirror expected API response shapes so swap from mock → real
// data requires only changing the data source, not any component code.
// ─────────────────────────────────────────────────────────────────────────────

// ── User & Auth ──────────────────────────────────────────────────────────────

export type UserRole = "student" | "mentor" | "organization" | "admin";

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: UserRole;
    level: number;
    levelLabel: string;
    xp: number;
    xpToNextLevel: number;
    streak: number;
    joinedAt: string;
    careerGoal?: string;
    bio?: string;
}

// ── Career & Progress ─────────────────────────────────────────────────────────

export interface CareerProgress {
    overallPercent: number;
    coursesCompleted: number;
    assessmentsCleared: number;
    projectsCompleted: number;
    professionalValidations: number;
}

// ── Mission / Tasks ───────────────────────────────────────────────────────────

export type MissionStatus = "pending" | "in-progress" | "completed" | "due-today";

export interface MissionTask {
    id: string;
    title: string;
    duration: string;
    status: MissionStatus;
    xpReward: number;
    link?: string;
}

export interface TodaysMission {
    tasks: MissionTask[];
    totalXpReward: number;
    completedCount: number;
}

// ── Learning ──────────────────────────────────────────────────────────────────

export type CourseStatus = "not-started" | "in-progress" | "completed" | "paused";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

export interface EnrolledCourse {
    id: string;
    title: string;
    slug: string;
    thumbnail?: string;
    instructor: string;
    progressPercent: number;
    nextLesson: string;
    nextLessonDuration: string;
    status: CourseStatus;
    totalLessons: number;
    completedLessons: number;
    category: string;
}

// ── Projects ──────────────────────────────────────────────────────────────────

export type ProjectStatus = "in-progress" | "completed" | "review-requested" | "under-review";

export interface ActiveProject {
    id: string;
    title: string;
    slug: string;
    thumbnail?: string;
    status: ProjectStatus;
    progressPercent: number;
    techStack: string[];
    collaborators?: number;
    lastUpdated: string;
}

// ── Evaluations ───────────────────────────────────────────────────────────────

export type EvaluationStatus = "professional" | "in-review" | "pending" | "completed";

export interface ProjectEvaluation {
    id: string;
    projectTitle: string;
    evaluatorName?: string;
    score?: number;
    maxScore: number;
    status: EvaluationStatus;
    submittedAt: string;
}

export interface EvaluatorStats {
    reputationScore: number;
    totalEvaluations: number;
    projectsToEvaluate: number;
    pendingRequests: number;
    totalImpactPoints: number;
    isCertified: boolean;
}

// ── Mentorship ────────────────────────────────────────────────────────────────

export interface MentorSession {
    id: string;
    mentorName: string;
    mentorAvatar?: string;
    mentorTitle: string;
    sessionTitle: string;
    scheduledAt: string;
    durationMinutes: number;
    meetLink?: string;
    status: "upcoming" | "in-progress" | "completed" | "cancelled";
}

// ── Portfolio ─────────────────────────────────────────────────────────────────

export interface PortfolioOverview {
    strengthPercent: number;
    strengthLabel: string;
    suggestions: string[];
    profileViews?: number;
}

// ── Opportunities ─────────────────────────────────────────────────────────────

export type OpportunityType = "job" | "internship" | "hackathon" | "workshop" | "competition";

export interface Opportunity {
    id: string;
    title: string;
    company: string;
    companyLogo?: string;
    type: OpportunityType;
    location: string;
    isRemote: boolean;
    isNew: boolean;
    deadline?: string;
    ctaLabel: string;
    ctaLink?: string;
}

// ── Activity Feed ─────────────────────────────────────────────────────────────

export type ActivityType =
    | "course-completed"
    | "lesson-completed"
    | "project-submitted"
    | "evaluation-received"
    | "certificate-earned"
    | "assessment-cleared"
    | "mentor-session"
    | "community-post";

export interface ActivityItem {
    id: string;
    type: ActivityType;
    description: string;
    timestamp: string;
    link?: string;
}

// ── Community ─────────────────────────────────────────────────────────────────

export interface CommunityPost {
    id: string;
    authorName: string;
    authorAvatar?: string;
    content: string;
    replyCount: number;
    timeAgo: string;
    link?: string;
}

// ── Notifications ─────────────────────────────────────────────────────────────

export type NotificationCategory =
    | "learning"
    | "projects"
    | "mentorship"
    | "community"
    | "opportunities"
    | "system";

export interface Notification {
    id: string;
    category: NotificationCategory;
    title: string;
    body: string;
    isRead: boolean;
    timestamp: string;
    actionLabel?: string;
    actionLink?: string;
}

// ── Sidebar Navigation ────────────────────────────────────────────────────────

export interface NavItem {
    label: string;
    href: string;
    icon: string; // Lucide icon name — resolved at component level
    phase: 1 | 2 | 3;
    badge?: number;
    allowedRoles?: UserRole[]; // undefined = all roles
    children?: NavItem[];
}

export interface NavGroup {
    id: string;
    label?: string; // undefined = no group label
    items: NavItem[];
    phase: 1 | 2 | 3;
    collapsible?: boolean;
    defaultOpen?: boolean;
}
