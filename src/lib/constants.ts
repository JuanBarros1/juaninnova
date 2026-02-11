export const APP_CONFIG = {
  name: 'Innova',
  logo: '/images/logo.png',
  SITE_NAME: 'Innova',
  SITE_DESCRIPTION: 'Professional Web Development and Interface Design',
  SITE_URL: 'https://innova.com.br', // Placeholder
  SOCIAL_LINKS: {
    INSTAGRAM: 'https://instagram.com/innova',
    LINKEDIN: 'https://linkedin.com/in/innova',
    GITHUB: 'https://github.com/innova',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  PORTFOLIO: '#portfolio',
  CONTACT: '#contact',
} as const;

export const VALIDATION_RULES = {
  NAME: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZÀ-ÿ\s]*$/
  },
  EMAIL: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  MESSAGE: {
    minLength: 10,
    maxLength: 500
  }
} as const;