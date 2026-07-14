import type { User } from "./dashboard";

export type { User, UserRole } from "./dashboard";

export interface AuthUser extends User {
    sessionToken?: string;
    lastSeen?: string;
}
