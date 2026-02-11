export interface Project {
    title: string;
    category: string;
    url: string;
    imageDesktop: string;
    imageMobile: string;
    description: string;
    tech: string[];
}

export const projectsData: Project[] = [
    {
        title: "Dra. Carolina Mendes",
        category: "Psychology",
        url: "https://carolinamendes.netlify.app",
        imageDesktop: "/projects/nutritionist-desktop.webp",
        imageMobile: "/projects/nutritionist-mobile-v2.webp",
        description: "Professional website developed for a psychologist, featuring a welcoming design, integrated blog, and scheduling system.",
        tech: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Advocacia Especialista",
        category: "Legal",
        url: "https://advogadoespecialista.netlify.app",
        imageDesktop: "/projects/lawyer-desktop.webp",
        imageMobile: "/projects/lawyer-mobile.webp",
        description: "Complete digital solution for a law firm, focused on capturing qualified leads and conveying authority.",
        tech: ["React", "TypeScript", "Tailwind CSS"]
    }
];
