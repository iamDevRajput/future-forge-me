"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AuthHeader from "@/components/auth/AuthHeader";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";
import PasswordStrength from "@/components/auth/PasswordStrength";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        
        if (!password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        // Mock API call
        setTimeout(() => {
            // Redirect to login or success screen
            router.push("/login?reset=success");
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
                title="Set new password" 
                description="Your new password must be different from previously used passwords." 
            />

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <AuthInput
                        label="New Password"
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
                    label="Confirm New Password"
                    isPassword
                    placeholder="Repeat your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />

                {error && (
                    <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-medium text-red-600 text-center">
                        {error}
                    </div>
                )}

                <div className="pt-4">
                    <AuthButton type="submit" isLoading={isLoading}>
                        Reset Password
                    </AuthButton>
                </div>
            </form>
        </motion.div>
    );
}
