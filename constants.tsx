import { Project, Experience, Skill, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/mustafahischam',
    icon: 'github'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/mustafa-hesham',
    icon: 'linkedin'
  },
  {
    platform: 'Email',
    url: 'mailto:mustafahisham1998@gmail.com',
    icon: 'mail'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Central Bank of Egypt (EgyCash)',
    period: '12/2024 – Present',
    description: [
      'Architecting the frontend infrastructure for a nationwide secure ERP system managing cash and gold logistics.',
      'Leading the implementation of high-performance dashboards using React and Next.js, optimizing data visualization for complex financial metrics.',
      'Designed a scalable role-based access control (RBAC) system to ensure strict data security and compliance.',
      'Mentoring junior developers and establishing code quality standards across the frontend stack.'
    ]
  },
  {
    id: '2',
    role: 'Full-Stack Engineer',
    company: 'Nusuk Wear (Freelance)',
    period: '2024 – 2025',
    description: [
      'Engineered a premium e-commerce experience for modest fashion using Next.js 14 and Shopify Storefront API.',
      'Implemented a custom "Collection Filtering" engine and optimized image loading strategies for heavy visual assets.',
      'Integrated global payment gateways and automated shipping calculation based on region.',
      'Built a CMS-driven blog section to drive organic SEO traffic.'
    ]
  },
  {
    id: '3',
    role: 'Backend Developer',
    company: 'Freelance (Blockchain)',
    period: '01/2023 – 05/2023',
    description: [
      'Developed high-frequency trading bots interacting with smart contracts via Web3.js.',
      'Built automated data pipelines on Node.js to index and analyze blockchain transactions in real-time.',
      'Implemented fail-safe mechanisms to ensure transaction reliability during network congestion.'
    ]
  },
  {
    id: '4',
    role: 'Android Developer',
    company: 'Bosta',
    period: '10/2020 – 03/2021',
    description: [
      'Collaborated within an Agile team to build and maintain the core logistics mobile application.',
      'Refactored legacy Java codebases to Kotlin, improving app stability and reducing crash rates.',
      'Worked closely with Product Managers to translate complex logistics requirements into intuitive UI/UX.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend & Architecture",
    items: [
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "React.js", iconSlug: "react" },
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "Tailwind", iconSlug: "tailwindcss" },
      { name: "System Design", iconSlug: "diagramsdotnet" }, 
      { name: "Framer Motion", iconSlug: "framer" }
    ]
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "MongoDB", iconSlug: "mongodb" },
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "Docker", iconSlug: "docker" },
      { name: "AWS", iconSlug: "amazonaws" },
      { name: "Redis", iconSlug: "redis" }
    ]
  },
  {
    category: "Mobile & Blockchain",
    items: [
      { name: "Android", iconSlug: "android" },
      { name: "Kotlin", iconSlug: "kotlin" },
      { name: "Web3.js", iconSlug: "web3dotjs" },
      { name: "Solidity", iconSlug: "solidity" },
      { name: "Git", iconSlug: "git" },
      { name: "CI/CD", iconSlug: "githubactions" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nusuk-wear',
    title: 'Nusuk Wear',
    description: 'A premium, modest wear e-commerce platform featuring elegant prayer wear. Built with a focus on visual storytelling, seamless checkout flows, and high-performance asset delivery.',
    techStack: ['Next.js 14', 'Shopify API', 'Tailwind', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1520013329424-9b369ec2a149?q=80&w=800&auto=format&fit=crop', // Brown/Beige Silk Texture
    liveUrl: 'https://nusukwear.com/', 
    githubUrl: 'https://github.com/vercel/commerce', 
    category: 'Full Stack',
    isPrivate: false 
  },
  {
    id: 'egycash-erp',
    title: 'Enterprise Logistics ERP',
    description: 'A mission-critical ERP system for the Central Bank of Egypt. Handles secure logistics for cash and gold transport with real-time tracking, complex reporting, and banking-grade security.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    isPrivate: true,
    category: 'Full Stack'
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI SaaS',
    description: 'A commercial-grade SaaS platform leveraging OpenAI. Features include a credit-based subscription model, rate-limiting middleware, and a responsive marketing content generator.',
    techStack: ['Next.js', 'OpenAI', 'PostgreSQL', 'Stripe', 'ShadcnUI'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/shadcn-ui/taxonomy', 
    category: 'AI',
    isPrivate: false
  },
  {
    id: 'cinema-sys',
    title: 'Renaissance Cinemas',
    description: 'Core developer for the foundational ticketing engine (Team Project). This system was renovated and evolved to power the current Renaissance Cinemas digital platform, serving thousands of daily users.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Legacy Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800',
    liveUrl: 'https://rnscinemas.com/en',
    category: 'Legacy',
    isPrivate: true
  },
  {
    id: 'discord-web3-bot',
    title: 'Web3 Liquidity Tracker',
    description: 'Real-time blockchain analysis tool. Monitors liquidity pools and large transactions (Whale Alerts) across EVM chains, delivering instant signals via Discord webhooks.',
    techStack: ['Node.js', 'Web3.js', 'Ethers.js', 'AWS Lambda'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/aave/interface', 
    category: 'Blockchain',
    isPrivate: true
  },
  {
    id: 'crypto-hunter',
    title: 'CryptoHunter Pro',
    description: 'A native Android application built with modern Clean Architecture. Provides real-time market data, portfolio tracking, and price alerts for cryptocurrency investors.',
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Coroutines'],
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/kryptoco/krypto', // Valid open source Crypto App repo
    category: 'Mobile',
    isPrivate: false
  },
  {
    id: 'smart-city-iot',
    title: 'Smart City IoT Dashboard',
    description: 'Real-time visualization platform for city sensors. Monitors traffic flow, air quality, and energy consumption using WebSocket connections for live data updates.',
    techStack: ['React', 'D3.js', 'Socket.io', 'Node.js', 'InfluxDB'],
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/mustafahischam/Smart-City-IoT-Dashboard', 
    category: 'Full Stack',
    isPrivate: false
  },
  {
    id: 'telehealth',
    title: 'TeleHealth Connect',
    description: 'A HIPAA-compliant telemedicine platform enabling secure video consultations between doctors and patients. Features WebRTC streaming and appointment scheduling.',
    techStack: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/mustafahischam/TeleHealth-Connect',
    category: 'Full Stack',
    isPrivate: false
  }
];