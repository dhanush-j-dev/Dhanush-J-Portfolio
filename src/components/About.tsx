import React from 'react';
import { useInView } from '../hooks/useInView';
import { FileDown, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';

const CORE_SKILLS = [
  'Java',
  'Spring Boot',
  'Spring MVC',
  'Spring Security',
  'REST APIs',
  'SQL',
  'MySQL',
  'JDBC',
  'OOP',
  'React',
  'JavaScript',
  'Git',
  'GitHub',
  'Maven',
  'Docker',
  'Postman',
];

export const About: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.06);

  return (
    <section id="about" ref={ref} className="py-24 border-b border-[var(--border-color)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className={`will-rise text-center mb-14 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">BACKGROUND & OBJECTIVE</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Structured Story Card */}
        <div
          className={`glass-card p-6 sm:p-10 space-y-8 will-rise ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: inView ? '140ms' : '0ms' }}
        >
          {/* Paragraph 1: Academic & Focus */}
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)]">
            I am a B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in Java, Spring Boot, REST APIs, SQL, MySQL, and full-stack application development. I enjoy building practical software solutions and working across backend development, database integration, API design, authentication, and testing.
          </p>

          {/* Paragraph 2: Internship */}
          <div className="p-4 sm:p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold">
              Industry Experience
            </h3>
            <p className="text-[14px] sm:text-[15px] leading-relaxed text-[var(--text-secondary)]">
              During my Java Development internship at SV Code Tech Solutions, I developed Java applications including a Library Management System and a Banking System, applying OOP, exception handling, file handling, and Java Collections.
            </p>
          </div>

          {/* Paragraph 3: CareerForge Flagship */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-secondary)] font-semibold">
              Full-Stack Application Development
            </h3>
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)]">
              I have also built independent full-stack projects using Java and Spring Boot. My recent project, <strong className="text-[var(--text-primary)]">CareerForge</strong>, is a career and recruitment management platform built with Java 17, Spring Boot, Spring Security, JWT, MySQL, React, and Docker. It includes secure REST APIs, authentication, role-based authorization, validation, automated unit and integration testing, and database-driven workflows.
            </p>
          </div>

          {/* Paragraph 4: Code Tracker */}
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)]">
            Another project, <strong className="text-[var(--text-primary)]">Code Tracker</strong>, is a coding practice and progress tracking application built using Java, Spring Boot, JDBC, MySQL, and React, featuring CRUD operations, analytics, progress reports, and persistent data storage.
          </p>

          {/* Paragraph 5: Meeting Summarizer */}
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)]">
            I also have experience with Python, React, TypeScript, FastAPI, WebRTC, MediaPipe, and AI-based application development through my <strong className="text-[var(--text-primary)]">Meeting Summarizer</strong> project.
          </p>

          {/* Core Skills Chips/Tags */}
          <div className="pt-4 border-t border-[var(--border-color)] space-y-3.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-primary)]">
                CORE SKILLS
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CORE_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]/50 hover:text-[var(--accent-primary)] transition-colors shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Paragraph 6: Final Career Objective */}
          <div className="pt-4 border-t border-[var(--border-color)] space-y-5">
            <p className="text-[15px] sm:text-base leading-relaxed text-[var(--text-secondary)] font-medium">
              I am actively seeking entry-level opportunities as a <strong className="text-[var(--text-primary)]">Java Developer, Backend Developer, Software Developer, or Java Full Stack Developer</strong>, where I can contribute to real-world applications and continue growing as a software engineer.
            </p>

            <div>
              <a
                href={personalData.resumeUrl}
                download="Dhanush-J-Resume.pdf"
                className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-2.5"
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
