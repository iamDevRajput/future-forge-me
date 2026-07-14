import FeaturedMentorsDashboard from '@/components/mentors/FeaturedMentors'
import MentorHero from '@/components/mentors/HeroSection'
import CourseHighLightSection from "@/components/mentors/HighlightSection"
import MentorFilterSection from '@/components/mentors/MentorFilterSection'
import MentorshipImpactHub from '@/components/mentors/MentorshipImpact'
import React from 'react'

function page() {
  return (
    <div>
      <MentorHero />
      <CourseHighLightSection />
      <MentorFilterSection />
      <FeaturedMentorsDashboard />
      <MentorshipImpactHub />
    </div>
  )
}

export default page
