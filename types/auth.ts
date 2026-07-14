export type Role = "student" | "mentor" | "organization" | "admin";

export interface User {
    id: string;
    fullName: string;
    email: string;
    role: Role;
    avatar?: string;
    xp: number;
    streak: number;
    onboardingStatus: "pending" | "completed";
    createdAt: string;
}

export interface Session {
    isAuthenticated: boolean;
    loginTime: string | null;
    expiresAt: string | null;
}

export interface AuthContextType {
    currentUser: User | null;
    session: Session;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password?: string) => void;
    register: (user: User, password?: string) => void;
    logout: () => void;
    updateProfile: (updates: Partial<User>) => void;
}
