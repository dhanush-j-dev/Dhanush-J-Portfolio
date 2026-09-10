import React from 'react';
import { useInView } from '../hooks/useInView';
import { FileDown, User, Coffee, MapPin, Zap } from 'lucide-react';
import { personalData } from '../data/personal';
import profilePhoto from '../assets/profile.jpeg';

export const About: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.08);

  const infoPills = [
    { icon: <User className="w-4 h-4 text-[var(--accent-primary)]" />, label: 'Dhanush J' },
    { icon: <Coffee className="w-4 h-4 text-amber-500" />, label: 'Java & Spring Boot' },
    { icon: <MapPin className="w-4 h-4 text-[var(--accent-secondary)]" />, label: 'Chennai, Tamil Nadu' },
    { icon: <Zap className="w-4 h-4 text-emerald-500" />, label: 'Available for Work' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 border-b border-[var(--border-color)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header with Center Alignment */}
        <div className={`will-rise text-center mb-16 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">GET TO KNOW ME</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line mx-auto" />
        </div>

        {/* 2-Column Grid inspired by the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Framed Card Portrait Photo */}
          <div
            className={`lg:col-span-5 flex justify-center will-slide-right ${
              inView ? 'in-view' : ''
            }`}
            style={{ transitionDelay: inView ? '140ms' : '0ms' }}
          >
            <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xl group">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--bg-secondary)]">
                <img
                  src={profilePhoto}
                  alt="Dhanush J formal portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-surface)] text-center">
                <p className="text-sm font-bold text-[var(--text-primary)]">Dhanush J</p>
                <p className="text-xs font-mono text-[var(--accent-secondary)] mt-0.5">Java Developer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & 4 Quick Info Pills */}
          <div
            className={`lg:col-span-7 space-y-6 will-slide-left ${
              inView ? 'in-view' : ''
            }`}
            style={{ transitionDelay: inView ? '180ms' : '0ms' }}
          >
            <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                I am an entry-level Java Developer with hands-on experience building backend and full-stack applications. My primary focus is <strong>Java and Spring Boot</strong>, with practical experience in <strong>REST APIs, Spring Security, JWT authentication, SQL/MySQL, JDBC, React, and Docker</strong>.
              </p>
              <p>
                I enjoy building applications from the backend architecture and database layer through API development and frontend integration. I also value <strong>secure development, clean OOP design, validation, exception handling, and automated testing</strong>.
              </p>
              <p>
                I am currently looking for an entry-level software development opportunity where I can contribute to real-world applications and continue growing as a backend/full-stack engineer.
              </p>
            </div>

            {/* 4 Quick Info Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {infoPills.map((pill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs hover:border-[var(--border-hover)] transition-all"
                >
                  <span className="shrink-0">{pill.icon}</span>
                  <span className="text-xs font-medium text-[var(--text-primary)] truncate">{pill.label}</span>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="pt-2">
              <a
                href={personalData.resumeUrl}
                download="Dhanush-J-Resume.pdf"
                className="btn-primary"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
