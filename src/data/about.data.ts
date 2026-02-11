export interface AboutData {
    title: {
        prefix: string;
        highlight: string;
    };
    description: {
        mobile: string;
        desktop: {
            text: string;
            highlight: string;
        };
    };
    buttons: {
        portfolio: string;
        contact: string;
    };
    image: {
        src: string;
        alt: string;
    };
}

export const aboutData: AboutData = {
    title: {
        prefix: "VISION",
        highlight: "BEYOND CODE"
    },
    description: {
        mobile: "I transform ideas into digital experiences that leave a mark. Robust engineering, unforgettable design.",
        desktop: {
            text: "I transform complex ideas into immersive digital realities. My mission is to elevate the standard of your online presence, combining robust engineering with unforgettable design.",
            highlight: "immersive digital realities"
        }
    },
    buttons: {
        portfolio: "View Portfolio",
        contact: "Get in Touch"
    },
    image: {
        src: "/images/juan-avatar.webp",
        alt: "Juan avatar"
    }
};
