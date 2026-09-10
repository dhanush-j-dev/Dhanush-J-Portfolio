import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Current mode: ${isDark ? 'Dark' : 'Light'}. Click to switch to ${isDark ? 'Light' : 'Dark'} mode.`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
        isDark
          ? 'bg-[var(--bg-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
          : 'bg-[var(--bg-elevated)] border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] shadow-xs'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100 text-sky-400" />
        ) : (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100 text-amber-500" />
        )}
      </div>
    </button>
  );
};
