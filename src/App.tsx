import React, { useState, useEffect, useCallback } from 'react';
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  MessageCircle, 
  Users, 
  Brain, 
  Zap, 
  ChevronLeft,
  ChevronRight 
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Navigation } from './components/Navigation';
import { ProfileImage } from './components/ProfileImage';
import { TechStack } from './components/TechStack';
import { ContactForm } from './components/ContactForm';

// Keep existing interfaces
interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
}

interface Certificate {
  title: string;
  image: string;
  link: string;
  description: string;
}

function App() {
  // Keep existing state management
  const [darkMode, setDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Keep existing effects
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Keep existing projects and certificates data
  const projects: Project[] = [
    {
      title: 'Library Management System',
      description: 'This project uses Java and SQL and aims to modernize library operations, making them more accessible and user-friendly.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mo2daso/LibraryManagementSystem',
      technologies: ['Java', 'Java FX', 'SQL']
    },
    {
      title: 'Syntax Analyzer',
      description: 'Using Python and PYQT5, Syntax Analyzer (Parser) is a project designed to perform both lexical and syntactic analysis of programming code.',
      image: 'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mo2daso/SyntaxAnalyzer',
      technologies: ['Python', 'PYQT5']
    },
    {
      title: 'Digital Dictionary',
      description: 'A simple DSA focused project which implements BST using C++.',
      image: 'https://images.unsplash.com/photo-1585247226801-bc613c441316?auto=format&fit=crop&q=80&w=1000',
      github: 'https://github.com/mo2daso/DigitalDictionary',
      technologies: ['C++', 'BST']
    }
  ];

  const certificates: Certificate[] = [
    {
      title: 'Introduction to Business Analysis',
      image: '/c1.jpg',
      link: 'https://coursera.org/share/9bd4efd219ae92710f28855a833d99d8',
      description: 'Coursera - IBM'
    },
    {
      title: 'Foundations of Digital Marketing and E-commerce',
      image: '/c2.jpg',
      link: 'https://coursera.org/share/ccb9bc6ebdd51020eb4fc6336a265bd4',
      description: 'Coursera - Google'
    },
    {
      title: 'Attract and Engage Customers with Digital Marketing',
      image: '/c3.jpg',
      link: 'https://coursera.org/share/721d09116b09b93e760f865646dd9604',
      description: 'Coursera - Google'
    }
  ];

  // Keep existing handlers
  const changeProject = useCallback((direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newIndex = direction === 'next' 
      ? (currentProject + 1) % projects.length 
      : (currentProject - 1 + projects.length) % projects.length;
    
    setCurrentProject(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentProject, isTransitioning, projects.length]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      changeProject('prev');
    } else if (e.key === 'ArrowRight') {
      changeProject('next');
    }
  }, [changeProject]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <Navigation 
        darkMode={darkMode} 
        onThemeToggle={() => setDarkMode(!darkMode)} 
        onNavigate={scrollToSection}
      />

      {/* Hero Section - Updated colors */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <TypeAnimation
              sequence={[
                'Hello, I\'m a Programmer',
                2000,
                'Hello, I\'m a Developer',
                2000,
                'Hello, I\'m a Designer',
                2000,
                'Hello, I\'m a Problem Solver',
                2000,
                'Hello, I\'m a Lawyer',
                2000,
                'Hello, I\'m a Business Analyst',
                2000,
                'Hello, I\'m a Digital Marketer',
                2000
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            I am Mohammad <span className="text-blue-600 dark:text-purple-400">Soban</span>.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="bg-blue-600 dark:bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
            <a
              href="/MSCV.pdf"
              className="border border-blue-600 dark:border-purple-600 text-blue-600 dark:text-purple-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Download className="w-5 h-5 mr-2" /> Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Updated colors */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ProfileImage />
            <div className="space-y-8">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Welcome to my portfolio! 
                I'm Soban, a Computer Science student with a passion for data analysis and AI. 
                I specialize in Excel and Python, and 
                I'm currently exploring AI fundamentals to deliver data-driven solutions.
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Soft Skills</h3>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Communication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Leadership</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Teamwork</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Quick Learner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Time Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-6 h-6 text-blue-600 dark:text-purple-400" />
                    <span>Analytical Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section - Updated colors */}
      <section id="tech-stack" className="py-20 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-4xl font-bold mb-12 text-center">Tech Stack</h3>
        <TechStack />
      </section>
      
      {/* Projects Section - Updated colors */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="relative overflow-hidden">
            <div 
              className={`transition-all duration-500 ease-in-out transform ${
                isTransitioning ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
              }`}
            >
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title} 
                  className="w-full h-64 object-cover transition-all duration-500"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{projects[currentProject].title}</h3>
                    <a 
                      href={projects[currentProject].github}
                      className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-3">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentProject === index 
                      ? 'bg-blue-600 dark:bg-purple-400 w-4' 
                      : 'bg-gray-300 dark:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button
              onClick={() => changeProject('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600 dark:text-purple-400" />
            </button>
            <button
              onClick={() => changeProject('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100/80 dark:bg-gray-700/80 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-blue-600 dark:text-purple-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Certificates Section - Updated colors */}
      <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-64 object-contain p-4 bg-gray-200 dark:bg-gray-600"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{certificate.description}</p>
                  <a 
                    href={certificate.link}
                    className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <a
              href="https://www.linkedin.com/in/mohammadsoban/details/certifications/"
              className="flex items-center text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated colors */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="flex-1">
              <ContactForm />
            </div>

            <div className="flex-1 flex flex-col space-y-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-center">Favorite Quote</h3>
                <div className="text-center">
                  <p className="text-blue-600 dark:text-purple-400 italic font-serif text-xl leading-relaxed">
                    "Nothing Changes if Nothing Changes!"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium text-sm tracking-wide">
                    — Godfrey The Great
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 h-full">
                <h3 className="text-xl font-bold mb-4 text-center">Contact Me</h3>
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <Mail className="w-6 h-6 mr-4 text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                    <a href="mailto:soban.mohammad27@gmail.com" className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors">
                      soban.mohammad27@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Linkedin className="w-6 h-6 mr-4 text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                    <a href="https://www.linkedin.com/in/mohammadsoban/" className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors flex items-center">
                      LinkedIn Profile
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center group">
                    <Github className="w-6 h-6 mr-4 text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                    <a href="https://github.com/mo2daso" className="hover:text-blue-600 dark:hover:text-purple-400 transition-colors flex items-center">
                      GitHub Profile
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated colors */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mohammadsoban/" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/mo2daso" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-purple-400 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} - Portfolio Made by Mohammad Soban.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;