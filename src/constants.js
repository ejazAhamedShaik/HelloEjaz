import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const HERO_IMAGE_URL = "/images/hero-bg.jpg";

// Utility function for section IDs
export const sectionIds = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact'
};

// Content configuration
export const content = {
  name: "Shaik Ejaz Ahamed",
  tagline: "Full Stack (MERN) Developer crafting performant, AI-ready web apps",
  bio: "I'm a passionate Full Stack Developer with expertise in the MERN stack. With 5+ years of experience building scalable web applications, I specialize in creating efficient, user-friendly solutions that drive business value. I'm currently available for freelance projects and full-time opportunities.",
  experience: [
    "5+ years of experience in Full Stack Development",
    "Expertise in MERN stack (MongoDB, Express, React, Node.js)",
    "Proficient in modern JavaScript frameworks and libraries",
    "Experience with cloud platforms like AWS and Docker",
    "Strong understanding of AI/ML concepts and integration"
  ],
  socials: [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Email', icon: FaEnvelope, url: 'mailto:ejaz@example.com' }
  ],
  skills: [
    // Frontend
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux',
    // Backend
    'Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL', 'RESTful APIs',
    // Databases
    'MongoDB', 'PostgreSQL', 'Redis', 'Firebase',
    // DevOps/Cloud
    'Docker', 'AWS', 'CI/CD', 'Git', 'Linux',
    // AI/ML
    'OpenAI API', 'LangChain', 'Vector DBs', 'Prompt Engineering'
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      summary: "A full-featured online shopping platform with payment integration",
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: "https://placehold.co/600x400/4f46e5/ffffff?text=E-Commerce",
      responsibilities: [
        "Designed and implemented the entire frontend architecture",
        "Developed RESTful APIs for product and order management",
        "Integrated Stripe payment processing",
        "Implemented user authentication and authorization"
      ],
      highlights: [
        "Reduced page load time by 40% through optimization",
        "Implemented responsive design for all device sizes",
        "Achieved 95% test coverage for critical components"
      ],
      repoUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management System",
      summary: "Collaborative task management application with real-time updates",
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Task+Manager",
      responsibilities: [
        "Built real-time collaboration features using WebSockets",
        "Designed database schema for efficient task tracking",
        "Implemented drag-and-drop functionality for task reordering",
        "Created responsive UI with mobile-first approach"
      ],
      highlights: [
        "Supported 500+ concurrent users with optimized backend",
        "Reduced server response time by 30%",
        "Implemented offline functionality with service workers"
      ],
      repoUrl: "https://github.com/example/task-manager",
      liveUrl: "https://taskmanager-demo.com"
    },
    {
      id: 3,
      title: "AI-Powered Content Generator",
      summary: "Content creation tool using OpenAI API for marketing copy",
      tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      image: "https://placehold.co/600x400/0ea5e9/ffffff?text=AI+Content",
      responsibilities: [
        "Integrated OpenAI API for content generation",
        "Designed prompt engineering system for consistent outputs",
        "Implemented user authentication and content history",
        "Optimized API usage to reduce costs by 25%"
      ],
      highlights: [
        "Generated 10,000+ pieces of content in first month",
        "Achieved 4.8/5 user satisfaction rating",
        "Reduced API costs by 25% through caching strategies"
      ],
      repoUrl: "https://github.com/example/ai-content",
      liveUrl: "https://aicontent-demo.com"
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      summary: "Mobile-first application for tracking workouts and nutrition",
      tech: ['React Native', 'Node.js', 'MongoDB', 'D3.js'],
      image: "https://placehold.co/600x400/10b981/ffffff?text=Fitness+App",
      responsibilities: [
        "Developed cross-platform mobile application",
        "Implemented data visualization for fitness metrics",
        "Designed RESTful APIs for data synchronization",
        "Integrated with wearable device APIs"
      ],
      highlights: [
        "Achieved 10,000+ downloads on app stores",
        "Maintained 4.7-star rating with 500+ reviews",
        "Processed 1M+ data points daily with 99.9% uptime"
      ],
      repoUrl: "https://github.com/example/fitness-tracker",
      liveUrl: "https://fitnesstracker-demo.com"
    },
    {
      id: 5,
      title: "Real Estate Analytics Dashboard",
      summary: "Data visualization platform for real estate market analysis",
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      image: "https://placehold.co/600x400/f97316/ffffff?text=Real+Estate",
      responsibilities: [
        "Designed interactive data visualizations using D3.js",
        "Built backend services for data processing in Python",
        "Implemented responsive dashboard with filtering capabilities",
        "Optimized database queries for large datasets"
      ],
      highlights: [
        "Processed 500GB+ of real estate data monthly",
        "Reduced report generation time by 60%",
        "Supported 200+ real estate agents with actionable insights"
      ],
      repoUrl: "https://github.com/example/real-estate",
      liveUrl: "https://realestatedemo.com"
    },
    {
      id: 6,
      title: "Social Learning Platform",
      summary: "Online education platform with peer-to-peer learning features",
      tech: ['Next.js', 'GraphQL', 'MongoDB', 'WebRTC'],
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Learning+App",
      responsibilities: [
        "Implemented real-time video conferencing using WebRTC",
        "Designed GraphQL API for flexible data fetching",
        "Built interactive course creation tools",
        "Optimized platform for low-bandwidth environments"
      ],
      highlights: [
        "Supported 10,000+ students across 50+ courses",
        "Achieved 99.5% uptime during peak usage",
        "Reduced latency by 40% through CDN implementation"
      ],
      repoUrl: "https://github.com/example/learning-platform",
      liveUrl: "https://learningdemo.com"
    }
  ]
};
