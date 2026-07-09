"use client";

import React from "react";
import HeroExplore from "@/components/explore/HeroExplore";
import CategoryRow from "@/components/explore/CategoryRow";
import DiscoverGoals from "@/components/explore/DiscoverGoals";
import ActivityStatsBand from "@/components/explore/ActivityStatsBand";
import CTABanner from "@/components/explore/CTABanner";
import Footer from "@/components/explore/Footer";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FDF9F2] font-sans antialiased text-[#475569]">
      <HeroExplore />
      <CategoryRow />
      <DiscoverGoals />
      <ActivityStatsBand />
      <CTABanner />
      <Footer />
    </div>
  );
}
