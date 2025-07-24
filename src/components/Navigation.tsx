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

  const navigationItems = [
    'Home',
    'About', 
    'Tech Stack',
    'Experience',
    'Projects', 
    'Certificates',
    'Contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of navigationItems.map(item => item.toLowerCase().replace(' ', '-'))) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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

  const handleNavigation = (sectionId: string) => {
    const formattedId = sectionId.toLowerCase().replace(' ', '-');
    setActiveSection(formattedId);
    onNavigate(formattedId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute left-4 text-gray-700 dark:text-gray-300"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navigationItems.map((section) => {
              const sectionId = section.toLowerCase().replace(' ', '-');
              return (
                <button
                  key={sectionId}
                  onClick={() => handleNavigation(section)}
                  className={`relative px-1 py-2 font-medium transition-colors duration-200 text-sm uppercase tracking-wider ${
                    activeSection === sectionId
                      ? 'text-blue-600 dark:text-purple-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {section}
                  {activeSection === sectionId && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 dark:bg-purple-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Theme toggle - positioned right */}
          <div className="absolute right-4">
            <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navigationItems.map((section) => {
                const sectionId = section.toLowerCase().replace(' ', '-');
                return (
                  <button
                    key={sectionId}
                    onClick={() => handleNavigation(section)}
                    className={`block px-3 py-2 rounded-md w-full text-left uppercase tracking-wider text-sm font-medium ${
                      activeSection === sectionId
                        ? 'bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-purple-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {section}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}