import type { Project } from '$lib/types/project';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered Code Assistant',
    description: 'A sophisticated code assistant that helps developers write better code faster using advanced AI techniques.',
    technologies: ['Python', 'TypeScript', 'React', 'FastAPI', 'Docker'],
    featured: true,
    githubUrl: 'https://github.com/yourusername/ai-code-assistant'
  },
  {
    id: 'project-2',
    title: 'Real-time Collaboration Platform',
    description: 'A real-time collaboration platform for remote teams with features like live editing, video calls, and project management.',
    technologies: ['Svelte', 'Node.js', 'WebRTC', 'Socket.io', 'PostgreSQL'],
    featured: true,
    liveUrl: 'https://collab-platform.demo'
  },
  {
    id: 'project-3',
    title: 'E-commerce Backend API',
    description: 'A scalable e-commerce backend API built with Laravel, featuring product management, user authentication, and order processing.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Docker'],
    featured: false,
    githubUrl: 'https://github.com/yourusername/ecommerce-api'
  }
];
