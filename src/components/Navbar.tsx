import React, { useState, useEffect } from 'react';
import { FileDown, Mail } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onSectionClick?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Approach', href: '#engineering', id: 'engineering' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const isActive = (id: string) => activeSection === id;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-xs'
          : 'bg-[var(--header-bg)]/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-[var(--border-color)]/60 md:border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
        {/* ROW 1: Brand Logo + Identity & (Desktop: Center Pill Nav + Socials/Theme/Resume | Mobile: Theme Toggle) */}
        <div className="flex items-center justify-between h-13 sm:h-16 lg:h-18">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg p-0.5 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Dhanush J logo"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[13px] sm:text-[15px] font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
                Dhanush J
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--accent-secondary)] mt-0.5">
                Java Developer
              </span>
            </div>
          </a>

          {/* Desktop Only: Center-Aligned Floating Pill Nav */}
          <nav
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--pill-nav-bg)] backdrop-blur-md shadow-xs"
            aria-label="Desktop main navigation"
          >
            {navLinks.map(link => {
              const active = isActive(link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => onSectionClick?.(link.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    active
                      ? 'bg-[var(--accent-primary)] text-white font-semibold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Only: Right Action Icons & Controls: Email → GitHub → LinkedIn → Theme Toggle → Resume */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={`mailto:${personalData.socials.email}`}
              aria-label="Email Dhanush"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Dark/Light Theme Toggle */}
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href={personalData.resumeUrl}
              download="Dhanush-J-Resume.pdf"
              className="btn-primary text-xs py-1.5 px-3.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Only (Row 1 Right): Theme Toggle */}
          <div className="flex md:hidden items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* ROW 2 (Mobile Only): Single-line, non-wrapping pill navigation bar with all 7 items */}
        <div className="md:hidden pb-2 pt-0.5 w-full">
          <nav
            className="w-full flex items-center justify-between flex-nowrap overflow-hidden rounded-full border border-[var(--border-color)] bg-[var(--pill-nav-bg)] px-1.5 min-[370px]:px-2 min-[412px]:px-2.5 py-1 shadow-2xs"
            aria-label="Mobile navigation"
          >
            {navLinks.map(link => {
              const active = isActive(link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => onSectionClick?.(link.id)}
                  className={`shrink-0 text-center whitespace-nowrap leading-none transition-all duration-200 select-none rounded-full ${
                    active
                      ? 'bg-[var(--accent-primary)] text-white font-semibold shadow-xs'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium'
                  } text-[9px] min-[370px]:text-[10px] min-[412px]:text-[10.5px] py-1 px-0.5 min-[370px]:px-1 min-[412px]:px-1.5 -tracking-tight`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
