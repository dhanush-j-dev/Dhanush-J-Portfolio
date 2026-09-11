import React from 'react';
import { ArrowRight, FileDown, Mail } from 'lucide-react';
import { personalData } from '../data/personal';
import { ProfileCard } from './ProfileCard';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Radial depth light behind Hero */}
      <div
        className="h-bg-glow absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-[var(--accent-primary)]/10 via-[var(--accent-secondary)]/5 to-transparent blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 w-full">

            {/* 1. JAVA DEVELOPER badge */}
            <div className="h-eyebrow flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/25 px-3 py-1.5 rounded-full uppercase shadow-xs">
                Java Developer
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 px-2.5 py-1.5 rounded-full">
                Backend & Full-Stack
              </span>
            </div>

            {/* 2. Hi, I'm Dhanush J */}
            <h1 className="h-name text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[var(--accent-primary)] via-sky-400 to-[var(--accent-secondary)] bg-clip-text text-transparent drop-shadow-xs">
                Dhanush J
              </span>
            </h1>

            {/* 3. Main headline */}
            <p className="h-tagline text-xl sm:text-2xl font-semibold text-[var(--text-primary)] leading-snug max-w-xl">
              Building reliable software with Java, Spring Boot & modern web technologies.
            </p>

            {/* 4. Supporting text */}
            <p className="h-body text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I'm an entry-level Java Developer focused on backend and full-stack development. I build secure REST APIs, database-driven applications, and practical software solutions using Java, Spring Boot, MySQL, React, and Docker.
            </p>

            {/* 5. Availability Status Indicator */}
            <div className="h-status flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span>Open to Entry-Level Software Development Opportunities</span>
              </div>
            </div>

            {/* 6. CTA Action Buttons */}
            <div className="h-ctas flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="btn-primary group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={personalData.resumeUrl}
                download="Dhanush-J-Resume.pdf"
                className="btn-secondary"
              >
                <FileDown className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* 7. Social Buttons inspired by reference (🐙 GitHub, 💼 LinkedIn, 📧 Email) */}
            <div className="h-socials flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                aria-label="Send Email"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photograph in Curved Geometric Frame */}
          <div className="h-photo lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>

        </div>
      </div>
    </section>
  );
};
