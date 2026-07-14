"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import SocialButton from "@/components/auth/SocialButton";
import AuthGuard from "@/components/auth/AuthGuard";
import { useAuth } from "@/contexts/AuthContext";
import { User } from "@/types/auth";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        // Basic validation
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        setIsLoading(true);

        // Mock authentication delay
        setTimeout(() => {
            try {
                login(email, password);
                // AuthGuard will automatically redirect to /dashboard
            } catch (err: any) {
                setError(err.message || "Invalid email or password.");
                setIsLoading(false);
            }
        }, 1200);
    };

    return (
        <AuthGuard requireAuth={false}>
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            <AuthHeader 
                title="Welcome back" 
                description="Enter your details to access your FutureForge dashboard." 
            />

            <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
                <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                />

                <div>
                    <AuthInput
                        label="Password"
                        isPassword
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                    <div className="flex justify-between items-center mt-2 px-1">
                        <label className="flex items-center gap-2 text-xs font-medium text-[#6B6B6B] cursor-pointer group">
                            <div className="relative flex items-center justify-center">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-[#C08A1E] peer-checked:border-[#C08A1E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#C08A1E]" />
                                <svg className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="group-hover:text-[#1A1A1A] transition-colors">Remember me</span>
                        </label>
                        
                        <Link 
                            href="/forgot-password" 
                            className="text-xs font-bold text-[#C08A1E] hover:text-[#A6740F] transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                {error && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 text-center">
                        {error}
                    </div>
                )}

                <div className="pt-2">
                    <AuthButton type="submit" isLoading={isLoading}>
                        Sign In
                    </AuthButton>
                </div>
            </form>

            <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</p>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
                <SocialButton provider="google">Google</SocialButton>
                <SocialButton provider="github">GitHub</SocialButton>
            </div>

            <p className="mt-8 text-center text-sm font-medium text-[#6B6B6B]">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#C08A1E] font-bold hover:text-[#A6740F] transition-colors">
                    Sign up
                </Link>
            </p>
        </motion.div>
        </AuthGuard>
    );
}
