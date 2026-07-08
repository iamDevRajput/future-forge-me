"use client"
import React from 'react';
import HeroSection from "@/components/home/Hero"
import JourneySection from '@/components/home/Journey';
import StakeholderSection from '@/components/home/StakeholderSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import PlatformFeaturesSection from '@/components/home/Features';
import StakeholderJourneySection from '@/components/home/StakeholderJourney';
import TrustedSection from '@/components/home/TrustSection';
import TestimonialsSection from '@/components/home/Testomonial';

export default function FutureForgeLanding() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-[#475569]">

      <HeroSection />

      <JourneySection />

      <StakeholderSection />

      <ComparisonSection />

      <PlatformFeaturesSection />

      <StakeholderJourneySection />

      <TrustedSection />

      <TestimonialsSection />
    </div>
  );
}