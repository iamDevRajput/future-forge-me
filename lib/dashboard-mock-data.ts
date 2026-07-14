// ─────────────────────────────────────────────────────────────────────────────
// FutureForge — Dashboard Mock Data
// Realistic data matching API contract shapes defined in types/dashboard.ts
// Replace individual exports with API calls — no component code changes needed.
// ─────────────────────────────────────────────────────────────────────────────

import type {
    User,
    CareerProgress,
    TodaysMission,
    EnrolledCourse,
    ActiveProject,
    ProjectEvaluation,
    EvaluatorStats,
    MentorSession,
    PortfolioOverview,
    Opportunity,
    ActivityItem,
    CommunityPost,
    Notification,
} from "@/types/dashboard";

// ── Current User ──────────────────────────────────────────────────────────────
export const mockUser: User = {
    id: "usr_devansh_001",
    name: "Devansh",
    email: "devansh@futureforge.dev",
    avatar: undefined,
    role: "student",
    level: 6,
    levelLabel: "Professional Builder",
    xp: 3460,
    xpToNextLevel: 5000,
    streak: 12,
    joinedAt: "2025-08-01",
    careerGoal: "Full Stack Developer",
    bio: "Passionate about building scalable web apps.",
};

// ── Career Progress ───────────────────────────────────────────────────────────
export const mockCareerProgress: CareerProgress = {
    overallPercent: 78,
    coursesCompleted: 12,
    assessmentsCleared: 8,
    projectsCompleted: 5,
    professionalValidations: 2,
};

// ── Today's Mission ───────────────────────────────────────────────────────────
export const mockTodaysMission: TodaysMission = {
    completedCount: 0,
    totalXpReward: 120,
    tasks: [
        {
            id: "task_001",
            title: "Continue React Advanced Course",
            duration: "20 min",
            status: "pending",
            xpReward: 30,
            link: "/dashboard/courses/react-advanced",
        },
        {
            id: "task_002",
            title: "Complete JavaScript Assessment",
            duration: "30 min",
            status: "pending",
            xpReward: 50,
            link: "/dashboard/assessments",
        },
        {
            id: "task_003",
            title: "Submit AI Resume Analyzer Project",
            duration: "15 min",
            status: "due-today",
            xpReward: 40,
            link: "/dashboard/projects/ai-resume-analyzer",
        },
        {
            id: "task_004",
            title: "Book Mentor Session",
            duration: "7:00 PM",
            status: "pending",
            xpReward: 0,
            link: "/dashboard/mentor",
        },
    ],
};

// ── Enrolled Courses (Continue Learning) ──────────────────────────────────────
export const mockActiveCourse: EnrolledCourse = {
    id: "crs_react_adv",
    title: "React Advanced",
    slug: "react-advanced",
    instructor: "Sarah Johnson",
    progressPercent: 72,
    nextLesson: "Handling Forms in React",
    nextLessonDuration: "12 min",
    status: "in-progress",
    totalLessons: 48,
    completedLessons: 35,
    category: "Development",
};

export const mockEnrolledCourses: EnrolledCourse[] = [
    mockActiveCourse,
    {
        id: "crs_node_api",
        title: "Node.js API Design",
        slug: "nodejs-api-design",
        instructor: "Ravi Kumar",
        progressPercent: 34,
        nextLesson: "Building REST APIs",
        nextLessonDuration: "18 min",
        status: "in-progress",
        totalLessons: 36,
        completedLessons: 12,
        category: "Backend",
    },
];

// ── Active Projects ───────────────────────────────────────────────────────────
export const mockActiveProjects: ActiveProject[] = [
    {
        id: "prj_001",
        title: "AI Resume Analyzer",
        slug: "ai-resume-analyzer",
        status: "in-progress",
        progressPercent: 65,
        techStack: ["React", "Python", "OpenAI"],
        collaborators: 2,
        lastUpdated: "2 hours ago",
    },
    {
        id: "prj_002",
        title: "Smart Attendance System",
        slug: "smart-attendance-system",
        status: "in-progress",
        progressPercent: 40,
        techStack: ["Next.js", "MongoDB", "OpenCV"],
        collaborators: 1,
        lastUpdated: "1 day ago",
    },
];

// ── Project Evaluations ───────────────────────────────────────────────────────
export const mockProjectEvaluations: ProjectEvaluation[] = [
    {
        id: "eval_001",
        projectTitle: "Portfolio Website",
        evaluatorName: "Priya Sharma",
        score: 95,
        maxScore: 100,
        status: "professional",
        submittedAt: "2 days ago",
    },
    {
        id: "eval_002",
        projectTitle: "AI Resume Analyzer",
        evaluatorName: undefined,
        score: undefined,
        maxScore: 100,
        status: "in-review",
        submittedAt: "1 day ago",
    },
    {
        id: "eval_003",
        projectTitle: "Smart Attendance System",
        evaluatorName: undefined,
        score: undefined,
        maxScore: 100,
        status: "pending",
        submittedAt: "5 hours ago",
    },
];

// ── Evaluator Stats ───────────────────────────────────────────────────────────
export const mockEvaluatorStats: EvaluatorStats = {
    reputationScore: 4.9,
    totalEvaluations: 12,
    projectsToEvaluate: 3,
    pendingRequests: 1,
    totalImpactPoints: 560,
    isCertified: true,
};

// ── Upcoming Mentor Session ───────────────────────────────────────────────────
export const mockMentorSession: MentorSession = {
    id: "sess_001",
    mentorName: "Ananya Sharma",
    mentorAvatar: undefined,
    mentorTitle: "Career Guidance Specialist",
    sessionTitle: "Career Guidance Session",
    scheduledAt: "Tomorrow, 7:00 PM",
    durationMinutes: 60,
    meetLink: "#",
    status: "upcoming",
};

// ── Portfolio Overview ────────────────────────────────────────────────────────
export const mockPortfolio: PortfolioOverview = {
    strengthPercent: 82,
    strengthLabel: "Great job! Your portfolio is strong.",
    suggestions: [
        "Add 2 more projects",
        "Complete skill verification",
        "Add a professional summary",
    ],
    profileViews: 142,
};

// ── Recommended Opportunities ─────────────────────────────────────────────────
export const mockOpportunities: Opportunity[] = [
    {
        id: "opp_001",
        title: "Frontend Developer Intern",
        company: "TechNova Solutions",
        type: "internship",
        location: "Remote",
        isRemote: true,
        isNew: true,
        deadline: "Jul 25",
        ctaLabel: "Apply",
        ctaLink: "#",
    },
    {
        id: "opp_002",
        title: "Web Development Project",
        company: "StartupHub",
        type: "job",
        location: "Bangalore",
        isRemote: false,
        isNew: false,
        ctaLabel: "Apply",
        ctaLink: "#",
    },
    {
        id: "opp_003",
        title: "AI/ML Hackathon 2024",
        company: "Online",
        type: "hackathon",
        location: "Online · 10-12 June",
        isRemote: true,
        isNew: false,
        ctaLabel: "Register",
        ctaLink: "#",
    },
];

// ── Recent Activity ───────────────────────────────────────────────────────────
export const mockActivity: ActivityItem[] = [
    {
        id: "act_001",
        type: "lesson-completed",
        description: "Completed lesson \"State Management in React\"",
        timestamp: "2 hours ago",
        link: "#",
    },
    {
        id: "act_002",
        type: "project-submitted",
        description: "Submitted project \"Smart Attendance System\"",
        timestamp: "5 hours ago",
        link: "#",
    },
    {
        id: "act_003",
        type: "evaluation-received",
        description: "Received evaluation on \"Portfolio Website\"",
        timestamp: "1 day ago",
        link: "#",
    },
    {
        id: "act_004",
        type: "certificate-earned",
        description: "Earned certificate \"JavaScript Advanced\"",
        timestamp: "2 days ago",
        link: "#",
    },
    {
        id: "act_005",
        type: "assessment-cleared",
        description: "Cleared \"React Fundamentals\" assessment with 94%",
        timestamp: "3 days ago",
        link: "#",
    },
];

// ── Community Spotlight ───────────────────────────────────────────────────────
export const mockCommunityPosts: CommunityPost[] = [
    {
        id: "post_001",
        authorName: "Rahul Verma",
        content: "What are some best practices for writing clean code?",
        replyCount: 24,
        timeAgo: "1h ago",
        link: "#",
    },
    {
        id: "post_002",
        authorName: "Priya Menon",
        content: "Resources for System Design Preparation",
        replyCount: 38,
        timeAgo: "3h ago",
        link: "#",
    },
    {
        id: "post_003",
        authorName: "Arjun Kumar",
        content: "Show your project! Feedback & Suggestions",
        replyCount: 52,
        timeAgo: "5h ago",
        link: "#",
    },
];

// ── Notifications ─────────────────────────────────────────────────────────────
export const mockNotifications: Notification[] = [
    {
        id: "notif_001",
        category: "learning",
        title: "Continue your learning streak!",
        body: "You have a lesson pending — React Advanced · 20 min",
        isRead: false,
        timestamp: "2 hours ago",
        actionLabel: "Continue",
        actionLink: "/dashboard/courses/react-advanced",
    },
    {
        id: "notif_002",
        category: "projects",
        title: "Evaluation received",
        body: "Priya Sharma evaluated your Portfolio Website — 95/100",
        isRead: false,
        timestamp: "3 hours ago",
        actionLabel: "View",
        actionLink: "/dashboard/evaluations",
    },
    {
        id: "notif_003",
        category: "mentorship",
        title: "Mentor session tomorrow",
        body: "Career Guidance with Ananya Sharma · Tomorrow 7:00 PM",
        isRead: true,
        timestamp: "1 day ago",
        actionLabel: "Join",
        actionLink: "#",
    },
    {
        id: "notif_004",
        category: "opportunities",
        title: "New opportunity match",
        body: "Frontend Developer Intern at TechNova matches your profile",
        isRead: true,
        timestamp: "1 day ago",
        actionLabel: "Apply",
        actionLink: "#",
    },
    {
        id: "notif_005",
        category: "system",
        title: "Profile update",
        body: "Your skill verification has been approved",
        isRead: true,
        timestamp: "2 days ago",
    },
];
