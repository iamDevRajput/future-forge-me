"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import SocialButton from "@/components/auth/SocialButton";
import PasswordStrength from "@/components/auth/PasswordStrength";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!acceptedTerms) {
            setError("You must accept the Terms and Conditions.");
            return;
        }

        setIsLoading(true);

        // Mock authentication delay
        setTimeout(() => {
            // Mock success routing to email verification
            router.push("/verify-email");
        }, 1500);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            <AuthHeader 
                title="Create an account" 
                description="Join thousands of learners building their future." 
            />

            <form onSubmit={handleRegister} className="space-y-4">
                <AuthInput
                    label="Full Name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                />

                <AuthInput
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />

                <div>
                    <AuthInput
                        label="Password"
                        isPassword
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                    <PasswordStrength password={password} />
                </div>

                <AuthInput
                    label="Confirm Password"
                    isPassword
                    placeholder="Repeat your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />

                <div className="flex items-start gap-2 pt-2 pb-1">
                    <label htmlFor="terms" className="relative flex items-center justify-center shrink-0 mt-0.5 cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="peer sr-only" 
                            id="terms"
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                        />
                        <div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-[#C08A1E] peer-checked:border-[#C08A1E] transition-colors focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-offset-1 peer-focus-visible:ring-[#C08A1E]" />
                        <svg className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none">
                            <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </label>
                    <label htmlFor="terms" className="text-xs font-medium text-[#6B6B6B] leading-relaxed cursor-pointer select-none">
                        I agree to the <Link href="/terms" className="text-[#C08A1E] hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-[#C08A1E] hover:underline">Privacy Policy</Link>.
                    </label>
                </div>

                {error && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 text-center">
                        {error}
                    </div>
                )}

                <div className="pt-2">
                    <AuthButton type="submit" isLoading={isLoading}>
                        Create Account
                    </AuthButton>
                </div>
            </form>

            <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-slate-200" />
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or sign up with</p>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
                <SocialButton provider="google">Google</SocialButton>
                <SocialButton provider="github">GitHub</SocialButton>
            </div>

            <p className="mt-8 text-center text-sm font-medium text-[#6B6B6B]">
                Already have an account?{" "}
                <Link href="/login" className="text-[#C08A1E] font-bold hover:text-[#A6740F] transition-colors">
                    Sign in
                </Link>
            </p>
        </motion.div>
    );
}
