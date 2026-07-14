"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User, Session, AuthContextType } from "@/types/auth";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = "ff_auth_user";
const SESSION_STORAGE_KEY = "ff_auth_session";
const ACCOUNTS_STORAGE_KEY = "ff_auth_accounts";

// Helper for accounts
const getAccounts = () => {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(ACCOUNTS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session>({
        isAuthenticated: false,
        loginTime: null,
        expiresAt: null,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initialize auth state from localStorage
        const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        const storedSession = localStorage.getItem(SESSION_STORAGE_KEY);

        if (storedUser && storedSession) {
            try {
                const parsedUser = JSON.parse(storedUser);
                const parsedSession = JSON.parse(storedSession);
                
                if (!parsedUser || !parsedSession || typeof parsedUser !== "object" || typeof parsedSession !== "object") {
                    throw new Error("Malformed session data");
                }
                
                const isExpired = parsedSession.expiresAt && new Date(parsedSession.expiresAt) < new Date();

                if (!isExpired) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setCurrentUser(parsedUser);
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setSession(parsedSession);
                } else {
                    localStorage.removeItem(AUTH_STORAGE_KEY);
                    localStorage.removeItem(SESSION_STORAGE_KEY);
                    router.push("/login");
                }
            } catch (error) {
                console.error("Failed to parse auth data", error);
                localStorage.removeItem(AUTH_STORAGE_KEY);
                localStorage.removeItem(SESSION_STORAGE_KEY);
                router.push("/login");
            }
        }
        setLoading(false);
        
        // Multi-tab synchronization
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === SESSION_STORAGE_KEY && !e.newValue) {
                // Logged out from another tab
                setCurrentUser(null);
                setSession({ isAuthenticated: false, loginTime: null, expiresAt: null });
                router.push("/login");
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [router]);

    const login = (email: string, password?: string) => {
        const accounts = getAccounts();
        const account = accounts.find((a: any) => a.email === email && a.password === password);
        
        if (!account) {
            throw new Error("Invalid email or password.");
        }

        const newSession: Session = {
            isAuthenticated: true,
            loginTime: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
        };

        // Omit password from current user session
        const { password: _, ...user } = account;

        setCurrentUser(user as User);
        setSession(newSession);

        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
    };

    const register = (user: User, password?: string) => {
        const accounts = getAccounts();
        if (accounts.some((a: any) => a.email === user.email)) {
            throw new Error("An account with this email already exists.");
        }

        // TODO: Replace with backend authentication. Never store plaintext passwords in localStorage in production.
        const newAccount = { ...user, password };
        accounts.push(newAccount);
        localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
        
        login(user.email, password);
    };

    const logout = () => {
        setCurrentUser(null);
        setSession({
            isAuthenticated: false,
            loginTime: null,
            expiresAt: null,
        });
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(SESSION_STORAGE_KEY);
        router.push("/login");
    };

    const updateProfile = (updates: Partial<User>) => {
        if (!currentUser) return;
        
        const updatedUser = { ...currentUser, ...updates };
        setCurrentUser(updatedUser);
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                session,
                isAuthenticated: session.isAuthenticated,
                loading,
                login,
                register,
                logout,
                updateProfile,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
