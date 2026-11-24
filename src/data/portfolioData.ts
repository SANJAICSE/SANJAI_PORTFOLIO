
/*
 * SANJAI R – PERSONAL PORTFOLIO DATA
 * Customized from the original portfolio template.
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Sanjai R',
  pageTitle: 'Sanjai R – Python Full-Stack Developer',
  role: 'Python Full-Stack Developer',
  email: 'sanjaisjcetcse@gmail.com',
  phone: '919384308122',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO ───────────── */
export const HERO = {
  eyebrow: 'PYTHON DEVELOPER • FULL-STACK DEVELOPMENT',
  headline: 'SANJAI R',
  roles: ['PYTHON DEVELOPER', 'FULL-STACK DEVELOPER'] as [string, string],
  tagline: 'I build practical web applications and explore intelligent solutions using Python and modern technologies.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg',
  imageAlt: 'Professional portrait of Sanjai R',
  imagePosition: '69% center',
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING PRACTICAL SOLUTIONS WITH CODE AND CREATIVITY',
  redWords: ['PRACTICAL', 'CREATIVITY'],
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Python Development · Web Technologies · Problem Solving',
  portrait: '/media/profile.webp',
  portraitAlt: 'Professional portrait of Sanjai R',
  portraitCaption: 'Python Full-Stack Developer',
  paragraphs: [
    'I am a Computer Science and Engineering graduate from St. Joseph’s College of Engineering and Technology, Thanjavur. I have a foundation in Python programming, Django, web development, SQL databases, and data analytics.',
    'I have developed an online shopping website and worked on  a deep learning-based traffic sign detection project. I enjoy learning new technologies, solving practical problems, and building useful applications. I am looking for an entry-level opportunity where I can contribute and grow as a software developer.',
  ],
  technologies: [
    'Python',
    'Django',
    'HTML',
    'CSS',
    'PHP',
    'MySQL',
  ],
  focus: [
    'Python Full-Stack Development',
    'Web Application Development',
    'AI and Deep Learning',
  ],
};

/* ───────────── 5. SOCIAL LINKS ───────────── */
export const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/SANJAICSE',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sanjai-r-sa0505',
  },
] as const;

/* ───────────── 6. TECHNICAL SKILLS ───────────── */
export const SKILL_CARDS: {
  name: string;
  category: string;
  level: string;
}[] = [
  {
    name: 'Python',
    category: 'Programming · Problem Solving',
    level: 'Proficient',
  },
  {
    name: 'Django',
    category: 'Python · Web Framework',
    level: 'Foundational',
  },
  {
    name: 'Web Development',
    category: 'HTML · CSS · PHP',
    level: 'Proficient',
  },
  {
    name: 'Database Management',
    category: 'SQL · MySQL',
    level: 'Proficient',
  },
  {
    name: 'Data Analytics',
    category: 'MS Excel · Data Analysis',
    level: 'Foundational',
  },
  {
    name: 'Deep Learning',
    category: 'Python · Computer Vision',
    level: 'Foundational',
  },
];

/* ───────────── 6b. TECH STACK ───────────── */
export const TECH_STACK: string[] = [
  'Python',
  'Django',
  'HTML',
  'CSS',
  'PHP',
  'MySQL',
  'SQL',
  'Git',
  'GitHub',
  'JavaScript',
  'Excel',
  'PowerPoint',
];

/* ───────────── 7. PROJECTS ───────────── */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
  screenshots?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
 {
  title: "Traffic Sign Detection Under Challenging Weather Conditions",
  description: "A deep learning-based framework for robust traffic sign detection under challenging weather conditions. The project uses a CNN-based approach to identify and classify traffic signs.",
  tags: [
    "Python",
    "Deep Learning",
    "Computer Vision",
    "CNN",
    "Traffic Sign Recognition"
  ],
  poster: "/assets/thumbnails/project-1-1.jpg",
  screenshots: [
  '/assets/thumbnails/project-1-1.jpg',
  '/assets/thumbnails/project-1-2.jpg',
  '/assets/thumbnails/project-1-3.jpg',
  '/assets/thumbnails/project-1-4.jpg',
  '/assets/thumbnails/project-1-5.jpg',
],
},
  {
    id: 'online-shopping-website',
    kind: 'software',
    title: 'Online Shopping Website',
    subtitle: 'A web-based shopping application with product listings and user authentication',
    category: 'Web Development · Full Stack',
    poster: '/assets/thumbnails/project-2-1.jpg',
    screenshots: [
  '/assets/thumbnails/project-2-1.jpg',
  '/assets/thumbnails/project-2-2.jpg',
  '/assets/thumbnails/project-2-3.jpg',
  '/assets/thumbnails/project-2-4.jpg',
],
    description: 'Developed an online shopping website using HTML, CSS, PHP, and MySQL. The application includes product catalog views, user authentication, and relational database integration.',
    tags: [
      'HTML',
      'CSS',
      'PHP',
      'MySQL',
      'Web Development',
    ],
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  {
    id: 'python-development',
    title: 'Python Development',
    priceLabel: 'Discuss requirements',
    price: 'On request',
    featured: true,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    priceLabel: 'Discuss requirements',
    price: 'On request',
    featured: false,
  },
  {
    id: 'database-development',
    title: 'Database Integration',
    priceLabel: 'Discuss requirements',
    price: 'On request',
    featured: false,
  },
  {
    id: 'data-analysis',
    title: 'Basic Data Analysis',
    priceLabel: 'Discuss requirements',
    price: 'On request',
    featured: false,
  },
  {
    id: 'website-maintenance',
    title: 'Website Improvements',
    priceLabel: 'Discuss requirements',
    price: 'On request',
    featured: false,
  },
] as const;

/* ───────────── 9. HEADLINE NUMBERS ───────────── */
export const CLIENT_STATS = [
  {
    id: 'stat-1',
    value: 2,
    suffix: '',
    label: 'Academic & Development Projects',
  },
  {
    id: 'stat-2',
    value: 4,
    suffix: '',
    label: 'Internship Programs',
  },
  {
    id: 'stat-3',
    value: 3,
    suffix: '',
    label: 'Areas of Technical Focus',
  },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

