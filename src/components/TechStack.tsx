import React from 'react';

interface TechStackItem {
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools';
}

const techStack: TechStackItem[] = [
  // Frontend Technologies
  { 
    name: 'Tailwind CSS', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    color: 'text-teal-500',
    category: 'frontend'
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'text-blue-400',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'text-yellow-500',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'text-blue-600',
    category: 'frontend'
  },


  
  // Backend Technologies
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'text-green-500',
    category: 'backend'
  },
  { 
    name: 'ASP.NET', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    color: 'text-blue-700',
    category: 'backend'
  },
  { 
    name: 'SQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'text-orange-600',
    category: 'backend'
  },

  // Programming Languages
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'text-blue-500',
    category: 'languages'
  },
  { 
    name: 'Java', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'text-red-500',
    category: 'languages'
  },
  { 
    name: 'C++', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    color: 'text-blue-600',
    category: 'languages'
  },
  { 
    name: 'C#', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: 'text-purple-600',
    category: 'languages'
  },

  // Tools
  { 
    name: 'Word', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-word-2019.png',
    color: 'text-blue-700',
    category: 'tools'
  },
  { 
    name: 'Excel', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019.png',
    color: 'text-green-700',
    category: 'tools'
  },
  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: 'text-purple-600',
    category: 'tools'
  },
  { 
    name: 'Canva', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    color: 'text-blue-400',
    category: 'tools'
  }
];

export function TechStack() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group"
          >
            {/* Icon Container */}
            <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center 
                          shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110
                          border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-purple-500
                          group-hover:rotate-6">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            {/* Tech Name */}
            <span className={`text-sm font-medium text-center mt-2 ${tech.color} opacity-90 group-hover:opacity-100`}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}