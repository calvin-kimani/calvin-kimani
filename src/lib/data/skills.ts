export interface Skill {
    name: string;
    icon: string;
    level: number;
    category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: 'devicon-react-original', level: 90, category: 'frontend' },
    { name: 'Svelte', icon: 'devicon-svelte-plain', level: 85, category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', level: 95, category: 'frontend' },
    { name: 'Next.js', icon: 'devicon-nextjs-original', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 88, category: 'backend' },
    { name: 'Python', icon: 'devicon-python-plain', level: 85, category: 'backend' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', level: 80, category: 'backend' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 75, category: 'backend' },
    { name: 'GraphQL', icon: 'devicon-graphql-plain', level: 80, category: 'backend' },
    
    // DevOps
    { name: 'Docker', icon: 'devicon-docker-plain', level: 85, category: 'devops' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', level: 75, category: 'devops' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-original', level: 80, category: 'devops' },
    { name: 'GitHub Actions', icon: 'devicon-github-original', level: 85, category: 'devops' },
    
    // Tools
    { name: 'Git', icon: 'devicon-git-plain', level: 90, category: 'tools' },
    { name: 'VS Code', icon: 'devicon-vscode-plain', level: 95, category: 'tools' },
    { name: 'Figma', icon: 'devicon-figma-plain', level: 80, category: 'tools' },
    { name: 'Jest', icon: 'devicon-jest-plain', level: 85, category: 'tools' },
];
