"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MailCheck } from "lucide-react";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        setIsLoading(true);

        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1200);
    };

    return (
        <div className="w-full">
            <Link 
                href="/login" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors mb-6"
            >
                <ArrowLeft size={14} /> Back to login
            </Link>

            <AnimatePresence mode="wait">
                {!isSuccess ? (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AuthHeader 
                            title="Reset your password" 
                            description="Enter your email address and we will send you a link to reset your password." 
                        />

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <AuthInput
                                label="Email Address"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 text-center">
                                    {error}
                                </div>
                            )}

                            <div className="pt-4">
                                <AuthButton type="submit" isLoading={isLoading}>
                                    Send Reset Link
                                </AuthButton>
                            </div>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center py-6"
                    >
                        <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <MailCheck size={32} className="text-green-600" />
                        </div>
                        <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-2">Check your email</h2>
                        <p className="text-sm text-[#6B6B6B] font-medium leading-relaxed max-w-sm mx-auto">
                            We have sent a password reset link to <span className="text-[#1A1A1A] font-bold">{email}</span>. Please check your inbox.
                        </p>
                        
                        <div className="mt-8">
                            <p className="text-xs text-[#6B6B6B] font-medium">
                                Didn&apos;t receive the email?{" "}
                                <button 
                                    onClick={() => { setIsSuccess(false); setEmail(""); }} 
                                    className="text-[#C08A1E] font-bold hover:text-[#A6740F]"
                                >
                                    Click to resend
                                </button>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
