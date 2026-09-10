import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Mail } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onSectionClick?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg p-1 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="Dhanush J logo"
              className="w-7 h-7 object-contain rounded-md transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
                Dhanush J
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent-secondary)]">
                Java Developer
              </span>
            </div>
          </a>

          {/* Center-Aligned Floating Pill Nav (Inspired by reference) */}
          <nav
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--pill-nav-bg)] backdrop-blur-md shadow-xs"
            aria-label="Main navigation"
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

          {/* Right Action Icons & Controls: Email → GitHub → LinkedIn → Theme Toggle → Resume */}
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

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] shadow-md animate-[hFadeUp_0.2s_var(--ease-expo)_forwards]">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(link => {
              const active = isActive(link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    onSectionClick?.(link.id);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? 'text-[var(--accent-primary)] bg-[var(--bg-secondary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="mt-3 pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={`mailto:${personalData.socials.email}`}
                  aria-label="Email Dhanush"
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <a
                href={personalData.resumeUrl}
                download="Dhanush-J-Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="btn-primary text-xs py-1.5 px-3.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
