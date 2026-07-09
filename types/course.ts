import { LucideIcon } from "lucide-react";

export interface Course {
    id: string | number;
    title: string;
    description?: string;
    badge?: string;
    badgeColor?: string;
    icon: LucideIcon;
    level: string;
    duration: string;
    certificate: string;
    rating: number;
    reviews?: string;
    price: string;
    originalPrice?: string;
}

export interface Category {
    id?: string | number;
    label: string;
    count: string | number;
    icon?: LucideIcon;
}

export interface Skill {
    id?: string | number;
    name: string;
    count?: string | number;
    icon: LucideIcon;
}
