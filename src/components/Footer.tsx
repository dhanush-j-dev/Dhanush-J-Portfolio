import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => (
  <footer className="py-10 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Dhanush J logo" className="w-5 h-5 object-contain rounded" />
            <p className="text-sm font-semibold text-[var(--text-primary)]">Dhanush J</p>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">Java Developer · Backend & Full-Stack</p>
          <p className="text-xs font-mono text-[var(--text-muted)]/80">Java 17 · Spring Boot · REST APIs · MySQL · Docker</p>
        </div>

        {/* Social / Email Links */}
        <div className="flex items-center gap-5">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalData.socials.email}`}
            className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-muted)] font-mono">
          © {new Date().getFullYear()} Dhanush J All rights reserved. Built with React & TypeScript.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </div>
  </footer>
);
