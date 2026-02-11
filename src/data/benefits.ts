import {
    DollarSign,
    Clock,
    Palette,
    TrendingUp,
    HeadphonesIcon,
    Lightbulb,
    LucideIcon
} from 'lucide-react';

export interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    textColor: string;
}

export const benefitsData: Benefit[] = [
    {
        icon: DollarSign,
        title: "SAVE MONEY",
        description: "An effective website can boost your business by providing an online presence that makes a difference.",
        gradient: "from-green-400 to-emerald-600",
        textColor: "text-emerald-400",
    },
    {
        icon: Clock,
        title: "SAVE TIME",
        description: "Stop wasting time searching for designers to build your product from scratch.",
        gradient: "from-blue-400 to-cyan-600",
        textColor: "text-cyan-400",
    },
    {
        icon: Palette,
        title: "TOTAL CUSTOMIZATION",
        description: "We develop websites that completely reflect your business's visual identity.",
        gradient: "from-purple-400 to-pink-600",
        textColor: "text-pink-400",
    },
    {
        icon: TrendingUp,
        title: "DIRECT BUSINESS IMPACT",
        description: "Our websites are strategically designed to generate new leads and customers for your business.",
        gradient: "from-orange-400 to-red-600",
        textColor: "text-orange-400",
    },
    {
        icon: HeadphonesIcon,
        title: "SUPPORT",
        description: "We offer ongoing support and maintenance to ensure your site is always running smoothly.",
        gradient: "from-indigo-400 to-purple-600",
        textColor: "text-indigo-400",
    },
    {
        icon: Lightbulb,
        title: "WE EMBRACE YOUR IDEAS",
        description: "Bring your ideas to life and transform them into a stunning website.",
        gradient: "from-yellow-400 to-orange-600",
        textColor: "text-yellow-400",
    }
];
