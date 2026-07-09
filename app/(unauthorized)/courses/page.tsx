import React from "react";
import CoursesHero from "@/components/courses/CoursesHero";
import FilterSidebar from "@/components/courses/FilterSidebar";
import CourseTabs from "@/components/courses/CourseTabs";
import RecommendationBanner from "@/components/courses/RecommendationBanner";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import TopCategories from "@/components/courses/TopCategories";
import MostPopularCourses from "@/components/courses/MostPopularCourses";
import TopSkills from "@/components/courses/TopSkills";
import WhyLearnSection from "@/components/courses/WhyLearnSection";
import PersonalizedCTA from "@/components/courses/PersonalizedCTA";

export const metadata = {
    title: "Courses | FutureForge",
    description: "Explore expert-led courses across in-demand skills. Learn at your pace and earn industry-recognized certificates."
};

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Hero Section */}
            <CoursesHero />

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row gap-8 relative z-10">
                
                {/* Left Sidebar */}
                <FilterSidebar />

                {/* Main Content Area */}
                <div className="flex-1 min-w-0">
                    <CourseTabs />
                    <RecommendationBanner />
                    <FeaturedCourses />
                    <TopCategories />
                    
                    {/* Three-column Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                        <MostPopularCourses />
                        <TopSkills />
                        <WhyLearnSection />
                    </div>

                    <PersonalizedCTA />
                </div>
            </div>
        </div>
    );
}
