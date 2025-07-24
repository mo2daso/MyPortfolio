import React from 'react';

interface TechStackItem {
  name: string;
  icon: string;
  category: 'languages' | 'frontend' | 'backend' | 'data-tools';
}

// Category → Tailwind color mapping
const categoryColors: Record<string, string> = {
  languages: 'text-blue-500',
  frontend: 'text-cyan-400',
  backend: 'text-green-500',
  'data-tools': 'text-red-500'
};

// Tech Stack Data
const techStack: TechStackItem[] = [
  // Languages
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'languages'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'languages'
  },

  // Frontend
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'frontend'
  },

  // Backend
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'backend'
  },

  // Data Tools
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    category: 'data-tools'
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    category: 'data-tools'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'data-tools'
  },
  {
    name: 'Excel',
    icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png',
    category: 'data-tools'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'data-tools'
  },
  {
    name: 'Jira',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    category: 'data-tools'
  },
  {
    name: 'Trello',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
    category: 'data-tools'
  }
].sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

export function TechStack() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map((tech, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div
              className={`w-24 h-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center
                          shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-110
                          border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500
                          ${tech.name === 'GitHub' ? 'dark:bg-white' : ''}`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className={`mt-3 text-sm font-semibold text-center ${categoryColors[tech.category]} opacity-90 group-hover:opacity-100`}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Category Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Legend color="bg-blue-500" label="Languages" />
        <Legend color="bg-cyan-400" label="Frontend" />
        <Legend color="bg-green-500" label="Backend" />
        <Legend color="bg-red-500" label="Data Tools" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center">
      <div className={`w-3 h-3 rounded-full mr-2 ${color}`}></div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default TechStack;
