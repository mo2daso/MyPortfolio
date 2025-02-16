import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  darkMode: boolean;
  onThemeToggle: () => void;
  onNavigate: (section: string) => void;
}

export function Navigation({ darkMode, onThemeToggle, onNavigate }: NavigationProps) {
  // State
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Constants
  const navigationItems = [
    'home',
    'about', 
    'tech-stack', 
    'projects', 
    'certificates',
    'contact'
  ];

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navigationItems) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  // Handlers
  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  // UI Classes
  const buttonBaseClasses = `
    capitalize text-base font-medium tracking-wide
    transition-all duration-300 relative px-3 py-2 rounded-lg
    hover:text-blue-400 dark:hover:text-purple-400
    focus:outline-none group
  `;

  const activeButtonClasses = (section: string) => `
    ${buttonBaseClasses}
    ${activeSection === section
      ? 'text-blue-500 dark:text-purple-400'
      : 'text-gray-700 dark:text-gray-300'
    }
  `;

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex justify-center items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute left-4 lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6">
            {navigationItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={activeButtonClasses(section)}
              >
                <span className="relative z-10">
                  {section.replace('-', ' ')}
                </span>
                <div className={`
                  absolute inset-0 rounded-lg transition-all duration-300
                  group-hover:bg-blue-500/10 dark:group-hover:bg-purple-500/10
                  group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                  dark:group-hover:shadow-[0_0_15px_rgba(167,139,250,0.5)]
                  ${activeSection === section
                    ? 'bg-blue-500/10 dark:bg-purple-500/10 shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(167,139,250,0.5)]'
                    : 'opacity-0'
                  }
                `} />
              </button>
            ))}
            <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg mt-2">
            <div className="flex flex-col space-y-4 p-4">
              {navigationItems.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={activeButtonClasses(section)}
                >
                  <span className="relative z-10">
                    {section.replace('-', ' ')}
                  </span>
                  <div className={`
                    absolute inset-0 rounded-lg transition-all duration-300
                    group-hover:bg-blue-500/10 dark:group-hover:bg-purple-500/10
                    group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                    dark:group-hover:shadow-[0_0_15px_rgba(167,139,250,0.5)]
                    ${activeSection === section
                      ? 'bg-blue-500/10 dark:bg-purple-500/10 shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_15px_rgba(167,139,250,0.5)]'
                      : 'opacity-0'
                    }
                  `} />
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}