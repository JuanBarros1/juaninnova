export interface ContactData {
    badge: string;
    title: {
        prefix: string;
        highlight: string;
    };
    subtitle: string;
    button: string;
}

export const contactData: ContactData = {
    badge: "Ready to start?",
    title: {
        prefix: "We are waiting for",
        highlight: "you!"
    },
    subtitle: "Click the button below to send me an email and find the best solution for your business.",
    button: "Send Email"
};
