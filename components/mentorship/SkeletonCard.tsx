"use client";

import React from "react";

export function SkeletonBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[#E9EAEE] rounded-lg animate-pulse ${className}`}
    />
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
      <div className="flex items-start gap-3">
        <SkeletonBox className="w-11 h-11 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <SkeletonBox className="h-3 w-24" />
          <SkeletonBox className="h-7 w-12" />
          <SkeletonBox className="h-3 w-20" />
        </div>
      </div>
    </div>
  );
}

export function CardSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EAEE] p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] space-y-4">
      <SkeletonBox className="h-5 w-40" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <SkeletonBox className="w-10 h-10 rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <SkeletonBox className="h-3.5 w-3/4" />
            <SkeletonBox className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
