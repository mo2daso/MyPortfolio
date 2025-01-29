import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  darkMode: boolean;
  onThemeToggle: () => void;
  onNavigate: (section: string) => void;
}

export function Navigation({ darkMode, onThemeToggle, onNavigate }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech-stack', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
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
  }, []);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="border-2 border-blue-600 dark:border-purple-400 rounded-full p-0.5">
              <img
                src={darkMode ? "/icon2.png" : "/icon.png"}
                alt="Portfolio Logo"
                className="w-14 h-14 object-contain rounded-full"
              />
            </div>
            <div className="border-l-2 border-blue-600 dark:border-purple-400 h-12 mx-2"></div>
            <span
              className="text-xl font-bold tracking-wide transition-all duration-300
                text-blue-600 dark:text-purple-400 hover:scale-105"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Soban's Portfolio
            </span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
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
            <div className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'tech-stack', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`capitalize text-base font-medium tracking-wide
                    transition-all duration-300 relative
                    hover:text-blue-600 dark:hover:text-purple-400
                    focus:outline-none rounded-md px-2 py-1
                    after:content-[''] after:absolute after:w-full after:h-0.5
                    after:bg-blue-600 dark:after:bg-purple-400 after:left-0 after:-bottom-1
                    after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                    after:duration-300 ${
                      activeSection === section
                        ? 'text-blue-600 dark:text-purple-400 after:scale-x-100'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg mt-2">
            <div className="flex flex-col space-y-4 p-4">
              {['home', 'about', 'tech-stack', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={`capitalize text-base font-medium tracking-wide
                    transition-all duration-300 relative
                    hover:text-blue-600 dark:hover:text-purple-400
                    focus:outline-none rounded-md px-2 py-1
                    after:content-[''] after:absolute after:w-full after:h-0.5
                    after:bg-blue-600 dark:after:bg-purple-400 after:left-0 after:-bottom-1
                    after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                    after:duration-300 ${
                      activeSection === section
                        ? 'text-blue-600 dark:text-purple-400 after:scale-x-100'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}