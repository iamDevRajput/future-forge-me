import { 
    Code, 
    Cpu, 
    Shield, 
    PenTool, 
    Database, 
    Monitor, 
    Briefcase, 
    TrendingUp, 
    Sparkles, 
    Layout, 
    Server, 
    LineChart, 
    Globe, 
    Smartphone 
} from "lucide-react";
import { Course, Category, Skill } from "@/types/course";

export const featuredCourses: Course[] = [
    {
        id: 1,
        title: "Python for Data Science",
        description: "Master Python data analysis, visualization, and machine learning from scratch.",
        badge: "Bestseller",
        badgeColor: "bg-amber-500",
        icon: Code,
        level: "Beginner",
        duration: "42 Hours",
        certificate: "Certificate",
        rating: 4.6,
        reviews: "2.1K",
        price: "₹2,499",
        originalPrice: "₹4,999",
    },
    {
        id: 2,
        title: "Machine Learning A-Z™",
        description: "Learn to create Machine Learning Algorithms in Python and R.",
        badge: "Trending",
        badgeColor: "bg-[#2563EB]",
        icon: Cpu,
        level: "Intermediate",
        duration: "55 Hours",
        certificate: "Certificate",
        rating: 4.7,
        reviews: "3.8K",
        price: "₹3,299",
        originalPrice: "₹6,599",
    },
    {
        id: 3,
        title: "Cyber Security Essentials",
        description: "Complete guide to network security, ethical hacking and defense.",
        badge: "Popular",
        badgeColor: "bg-[#06B6D4]",
        icon: Shield,
        level: "Beginner",
        duration: "30 Hours",
        certificate: "Certificate",
        rating: 4.5,
        reviews: "1.6K",
        price: "₹1,999",
        originalPrice: "₹3,999",
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        description: "Learn UX/UI design principles and tools to create stunning interfaces.",
        badge: "New",
        badgeColor: "bg-emerald-500",
        icon: PenTool,
        level: "All Levels",
        duration: "25 Hours",
        certificate: "Certificate",
        rating: 4.8,
        reviews: "912",
        price: "₹2,299",
        originalPrice: "₹4,599",
    }
];

export const popularList: Course[] = [
    {
        id: 1,
        title: "Python for Data Science",
        level: "Beginner",
        duration: "42 Hours",
        certificate: "Certificate",
        rating: 4.6,
        price: "₹2,499",
        icon: Code
    },
    {
        id: 2,
        title: "Machine Learning A-Z™",
        level: "Intermediate",
        duration: "55 Hours",
        certificate: "Certificate",
        rating: 4.7,
        price: "₹3,299",
        icon: Cpu
    },
    {
        id: 3,
        title: "Cyber Security Essentials",
        level: "Beginner",
        duration: "30 Hours",
        certificate: "Certificate",
        rating: 4.5,
        price: "₹1,999",
        icon: Shield
    },
    {
        id: 4,
        title: "UI/UX Design Fundamentals",
        level: "All Levels",
        duration: "25 Hours",
        certificate: "Certificate",
        rating: 4.8,
        price: "₹2,299",
        icon: PenTool
    }
];

export const topCategories: Category[] = [
    { label: "Development", count: "4,250 Courses", icon: Code },
    { label: "Data Science", count: "2,150 Courses", icon: Database },
    { label: "IT & Software", count: "2,350 Courses", icon: Monitor },
    { label: "Business", count: "1,650 Courses", icon: Briefcase },
    { label: "Design", count: "1,660 Courses", icon: PenTool },
    { label: "Marketing", count: "1,200 Courses", icon: TrendingUp },
    { label: "Personal Growth", count: "960 Courses", icon: Sparkles },
];

export const topSkills: Skill[] = [
    { name: "React JS", count: "12,450", icon: Layout },
    { name: "Node JS", count: "8,150", icon: Server },
    { name: "Python", count: "6,740", icon: Code },
    { name: "Machine Learning", count: "6,210", icon: Cpu },
    { name: "Data Analysis", count: "5,980", icon: LineChart },
    { name: "Web Development", count: "5,210", icon: Globe },
    { name: "UI/UX Design", count: "4,870", icon: PenTool },
    { name: "Mobile App Dev", count: "4,210", icon: Smartphone },
];
