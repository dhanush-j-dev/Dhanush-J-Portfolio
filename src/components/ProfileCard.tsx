import React from 'react';
import profilePhoto from '../assets/profile.jpeg';

const BADGES = ['Java 17', 'Spring Boot', 'REST APIs', 'MySQL'];

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[320px] mx-auto">
      {/* Outer ambient glow & depth inspired by reference's hero-oval-glow */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/15 to-transparent blur-2xl opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero oval / geometric curved portrait frame */}
      <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xl transition-all duration-300 hover:border-[var(--border-hover)]">
        {/* Photo Container with subtle inset border */}
        <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--bg-secondary)] relative">
          <img
            src={profilePhoto}
            alt="Dhanush J — Java Developer portrait"
            className="profile-img w-full h-full object-cover object-top"
            loading="eager"
          />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bg-surface)] to-transparent opacity-60" />
        </div>

        {/* Identity strip below photo */}
        <div className="px-5 py-3.5 border-t border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[var(--text-primary)]">Dhanush J</p>
            <p className="text-xs font-mono text-[var(--accent-secondary)] mt-0.5">Java Developer</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Available
          </span>
        </div>
      </div>

      {/* 4 Technology badges appearing below */}
      <div className="mt-3.5 flex flex-wrap justify-center gap-1.5">
        {BADGES.map((badge, i) => (
          <span
            key={badge}
            className={`h-badge-${i} skill-badge`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};
