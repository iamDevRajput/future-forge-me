import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Globe } from "lucide-react";
import DashboardCard from "@/components/dashboard/shared/DashboardCard";
import EmptyState from "@/components/dashboard/shared/EmptyState";
import type { CommunityPost } from "@/types/dashboard";

export default function CommunitySpotlight({ posts }: { posts: CommunityPost[] }) {
    return (
        <DashboardCard className="p-5 col-span-full lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-black text-[#1A1A1A] tracking-tight">Community Spotlight</h2>
                <Link href="/dashboard/community" className="text-xs text-[#C08A1E] font-bold hover:text-[#A6740F] flex items-center gap-1">
                    View All <ArrowRight size={12} />
                </Link>
            </div>

            {posts.length === 0 ? (
                <EmptyState
                    icon={<Globe size={20} />}
                    title="Nothing here yet"
                    description="Join the community and start meaningful conversations"
                    actionLabel="Go to Community"
                    actionHref="/dashboard/community"
                    size="sm"
                />
            ) : (
                <div className="space-y-3">
                    {posts.map((post) => {
                        const initials = post.authorName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
                        return (
                            <a
                                key={post.id}
                                href={post.link ?? "#"}
                                className="flex gap-3 p-3 bg-[#FDF9F2] rounded-xl border border-[rgba(192,138,30,0.12)] hover:border-[rgba(192,138,30,0.3)] hover:shadow-sm transition-all block"
                            >
                                {/* Avatar */}
                                <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#D9A441] to-[#B8791A] flex items-center justify-center text-white font-black text-xs shadow-sm">
                                    {initials}
                                </div>
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-[#6B6B6B]">{post.authorName}</p>
                                    <p className="text-xs text-[#1A1A1A] font-medium leading-snug mt-0.5 line-clamp-2">
                                        {post.content}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1.5 text-[#6B6B6B]">
                                        <MessageCircle size={11} />
                                        <span className="text-[10px] font-medium">{post.replyCount} replies</span>
                                        <span className="text-[10px] text-[#6B6B6B]/60 ml-1">· {post.timeAgo}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            )}
        </DashboardCard>
    );
}
