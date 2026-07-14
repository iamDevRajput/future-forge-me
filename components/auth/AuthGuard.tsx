"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface AuthGuardProps {
    children: React.ReactNode;
    requireAuth?: boolean; // If true, requires auth (redirects to /login). If false, requires guest (redirects to /dashboard)
}

export default function AuthGuard({ children, requireAuth = true }: AuthGuardProps) {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (requireAuth && !isAuthenticated) {
            router.replace("/login");
        } else if (!requireAuth && isAuthenticated) {
            router.replace("/dashboard");
        }
    }, [isAuthenticated, loading, requireAuth, router]);

    // Show nothing (or a spinner) while checking authentication to prevent UI flashing
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FDF9F2]">
                <div className="w-8 h-8 border-4 border-[#C08A1E] border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // If requireAuth is true and not authenticated, don't render children (avoids flickering before redirect)
    if (requireAuth && !isAuthenticated) {
        return null;
    }

    // If requireAuth is false and authenticated, don't render children
    if (!requireAuth && isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
