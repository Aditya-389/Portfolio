export const projectFilters = [
  'All',
  'C',
  'C++',
  'JavaScript',
  'Python',
  'Java',
  'Machine Learning',
  'Artificial Intelligence',
] as const

export type ProjectFilter = (typeof projectFilters)[number]
export type ProjectTechnology = string

export type Project = {
  title: string
  summary: string
  liveUrl: string
  technologies: ProjectTechnology[]
  accent: string
  previewLabel: string
}

export const projects: Project[] = [
  {
    title: 'GPT-389',
    summary: 'AI-powered conversational platform with LLaMA, persistent memory, and real-time web search for context-aware responses. Robust backend with intelligent retry logic for reliable and uninterrupted AI interactions.',
    liveUrl: 'https://gpt-389.vercel.app/',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'Artificial Intelligence'],
    accent: '#4e7efc',
    previewLabel: 'Web App',
  },
  {
    title: 'Time Capsule Messaging System',
    summary: 'Secure time-delayed messaging platform that delivers messages on scheduled dates with guaranteed delivery using Redis. Resilient backend architecture ensuring message persistence and reliable delivery even after server restarts.',
    liveUrl: 'https://github.com/Aditya-389/Time-Capsule-Messaging-System',
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    accent: '#ff6c4a',
    previewLabel: 'Backend',
  },
  {
    title: 'Full Stack Authentication System',
    summary: 'Full-stack authentication system with secure user registration, login, and role-based access control. JWT authentication, encrypted passwords, and protected APIs for secure session management.',
    liveUrl: 'https://full-stack-auth-system-ckt6.vercel.app/',
    technologies: ['JavaScript', 'Node.js', 'React.js', 'MongoDB', 'JWT'],
    accent: '#171542',
    previewLabel: 'Web App',
  },
  {
    title: 'Virtual R',
    summary: 'Responsive SaaS landing page with interactive animations and modern UI components. Built for fast performance, accessibility, and consistent user experience.',
    liveUrl: 'https://virtual-r-389.vercel.app/',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    accent: '#2f9e71',
    previewLabel: 'Web UI',
  },
  {
    title: 'Document Editor',
    summary: 'Modular document editor supporting text, images, formatting, and persistent file storage. Engineered using OOP principles and design patterns for scalability, maintainability, and extensibility.',
    liveUrl: 'https://github.com/Aditya-389/Document-Editor',
    technologies: ['C++', 'Design Patterns', 'Object-Oriented Programming'],
    accent: '#8f5cf7',
    previewLabel: 'Desktop App',
  },
]
