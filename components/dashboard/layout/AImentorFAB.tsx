"use client";

import React, { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

const quickPrompts = [
    "Build my career roadmap",
    "What should I learn next?",
    "Review my resume",
    "Suggest projects for me",
];

export default function AImentorFAB() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* FAB Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-20 right-5 lg:bottom-6 lg:right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] text-white shadow-[0_0_0_4px_rgba(192,138,30,0.2),0_8px_24px_rgba(192,138,30,0.4)] hover:shadow-[0_0_0_6px_rgba(192,138,30,0.25),0_12px_32px_rgba(192,138,30,0.45)] transition-all duration-200 flex items-center justify-center group"
                aria-label="Open AI Mentor"
                aria-expanded={isOpen}
                aria-haspopup="dialog"
            >
                <Bot size={24} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Drawer / Modal */}
            {isOpen && (
                <>
                    {/* Backdrop — mobile becomes full-screen modal, desktop is slide-over */}
                    <div
                        className="fixed inset-0 z-50 bg-black/40 lg:bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    <div className="fixed bottom-0 left-0 right-0 z-50 h-[85vh] lg:bottom-6 lg:right-6 lg:left-auto lg:top-auto lg:h-[540px] lg:w-[400px] bg-white rounded-t-3xl lg:rounded-2xl shadow-[0_-8px_40px_rgba(11,18,32,0.15)] flex flex-col overflow-hidden border border-[rgba(192,138,30,0.15)]">
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#0B1220] to-[#101B33] rounded-t-3xl lg:rounded-t-2xl">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center shadow-md">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white leading-none">AI Mentor</p>
                                    <p className="text-[10px] text-white/50 mt-0.5 flex items-center gap-1">
                                        <Sparkles size={9} className="text-[#D9A441]" />
                                        Powered by FutureForge AI
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label="Close AI Mentor"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat area */}
                        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                            {/* AI greeting */}
                            <div className="flex gap-2.5">
                                <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center mt-0.5">
                                    <Bot size={14} className="text-white" />
                                </div>
                                <div className="bg-[#FDF9F2] border border-[rgba(192,138,30,0.15)] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                                    <p className="text-sm text-[#1A1A1A] leading-relaxed">
                                        👋 Hi! I&apos;m your AI Mentor. I can help you plan your learning path, suggest projects, review your resume, and guide your career growth.
                                    </p>
                                    <p className="text-xs text-[#6B6B6B] mt-2 font-medium">How can I help you today?</p>
                                </div>
                            </div>

                            {/* Quick prompts */}
                            <div className="ml-9 flex flex-wrap gap-2">
                                {quickPrompts.map((prompt) => (
                                    <button
                                        key={prompt}
                                        className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[rgba(192,138,30,0.3)] text-[#C08A1E] hover:bg-[rgba(192,138,30,0.08)] transition-colors"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <div className="px-4 pb-5 pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-2 bg-[#FDF9F2] border border-[rgba(192,138,30,0.2)] rounded-full px-4 py-2.5 hover:border-[#C08A1E] transition-colors focus-within:border-[#C08A1E] focus-within:ring-2 focus-within:ring-[rgba(192,138,30,0.15)]">
                                <input
                                    type="text"
                                    placeholder="Ask your AI mentor..."
                                    className="flex-1 text-sm bg-transparent outline-none text-[#1A1A1A] placeholder:text-[#6B6B6B] font-medium"
                                />
                                <button
                                    className="h-8 w-8 rounded-full bg-gradient-to-r from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white shrink-0 hover:shadow-[0_0_12px_rgba(192,138,30,0.4)] transition-shadow"
                                    aria-label="Send message"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
