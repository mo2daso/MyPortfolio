import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`w-6 h-6 absolute transition-all duration-300 ${
            darkMode
              ? 'opacity-0 rotate-180 scale-50'
              : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`w-6 h-6 absolute transition-all duration-300 ${
            darkMode
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-180 scale-50'
          }`}
        />
      </div>
    </button>
  );
}