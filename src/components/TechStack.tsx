// Tech stack interface
interface TechStackItem {
  name: string;
  icon: string; // URL to the official logo
  color: string;
}

// Tech stack array with official logos
const techStack: TechStackItem[] = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: 'text-orange-500'
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: 'text-blue-500'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: 'text-yellow-500'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'text-blue-600'
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'text-green-500' 
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'text-blue-400' 
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'text-blue-500' 
  },
  { 
    name: 'Java', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: 'text-red-500' 
  },
  { 
    name: 'Kotlin', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
    color: 'text-purple-500' 
  },
  { 
    name: 'C++', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    color: 'text-blue-600' 
  },
  { 
    name: 'SQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: 'text-orange-600' 
  },
  { 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'text-green-600' 
  },
  { 
    name: 'Microsoft Word', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-word-2019.png',
    color: 'text-blue-700' 
  },
  { 
    name: 'Microsoft Excel', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019.png',
    color: 'text-green-700' 
  },
  { 
    name: 'Microsoft PowerPoint', 
    icon: 'https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png',
    color: 'text-orange-700' 
  },
  { 
    name: 'Canva', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    color: 'text-blue-400' 
  },
  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: 'text-purple-600' 
  },
  { 
    name: 'Prompt Engineering', 
    icon: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png',
    color: 'text-blue-500' 
  }
];

export function TechStack() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-14 h-14" // Increased icon size
            />
          </div>
          <span className={`text-sm font-medium text-center mt-2 ${tech.color}`}>
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}