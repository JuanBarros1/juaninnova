import { Github, Linkedin, Instagram, Mail, LucideIcon } from 'lucide-react';

export interface SocialLink {
    icon: LucideIcon;
    href: string;
    label: string;
}

export interface QuickLink {
    name: string;
    href: string;
}

export interface FooterData {
    brand: {
        name: string;
        role: string;
        description: string;
        logo: string;
    };
    socialLinks: SocialLink[];
    quickLinksTitle: string;
    quickLinks: QuickLink[];
    contact: {
        title: string;
        email: string;
        badge: string;
    };
    copyright: string;
}

export const footerData: FooterData = {
    brand: {
        name: "Juan",
        role: "Web Developer",
        description: "Transforming ideas into extraordinary digital experiences. Modern, functional websites that drive your business to the next level.",
        logo: "/images/logo.png"
    },
    socialLinks: [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Mail, href: "mailto:juanbarros192@gmail.com", label: "Email" },
    ],
    quickLinksTitle: "Quick Links",
    quickLinks: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ],
    contact: {
        title: "Contact",
        email: "juanbarros192@gmail.com",
        badge: "Available for new projects"
    },
    copyright: "© 2024 Innova – All rights reserved."
};
