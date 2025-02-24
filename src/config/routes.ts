export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PROJECTS: '/projects',
  BLOG: '/blog',
  CONTACT: '/contact',
  ABOUT: '/about',
  
  // Routes externes
  SOCIAL: {
    LINKEDIN: 'https://linkedin.com/in/edwin-tchamba',
    GITHUB: 'https://github.com/synapsetech',
    TWITTER: 'https://twitter.com/synapsetech'
  },

  // Routes projets
  PROJECT: {
    PORTIQUE: '/projects/portique-automobile',
    MONFAXE: '/projects/mon-faxe',
    HOTEL: '/projects/hotel-echangeur'
  },

  // Routes blog
  BLOG_POST: (slug: string) => `/blog/${slug}`
} as const;
