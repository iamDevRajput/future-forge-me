"use client";

import React from "react";
import HeroAbout from "@/components/about/HeroAbout";
import CoreValues from "@/components/about/CoreValues";
import StoryTimeline from "@/components/about/StoryTimeline";
import ImpactTeam from "@/components/about/ImpactTeam";
import Beliefs from "@/components/about/Beliefs";
import TestimonialCarousel from "@/components/about/TestimonialCarousel";
import CTABannerAbout from "@/components/about/CTABannerAbout";
import Footer from "@/components/explore/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDF9F2] font-sans antialiased text-[#475569]">
      <HeroAbout />
      <CoreValues />
      <StoryTimeline />
      <ImpactTeam />
      <Beliefs />
      <TestimonialCarousel />
      <CTABannerAbout />
      <Footer />
    </div>
  );
}
