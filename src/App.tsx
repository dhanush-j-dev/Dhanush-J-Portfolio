import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalHighlights } from './components/TechnicalHighlights';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EngineeringApproach } from './components/EngineeringApproach';
import { Mindset } from './components/Mindset';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { InteractiveBackground } from './components/InteractiveBackground';

interface SectionMeta {
  id: string;
  label: string;
}

const SECTIONS: SectionMeta[] = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'engineering', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
];

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const clickLockRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    clickLockRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = window.setTimeout(() => {
      clickLockRef.current = false;
    }, 850);
  };

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
      }

      if (clickLockRef.current) return;

      const scrollY = window.scrollY + 140;

      // Detect bottom of page -> contact section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200 relative">
      {/* Dynamic 2D canvas particle constellation depth */}
      <InteractiveBackground />

      {/* Top Global Scroll Progress Beam */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-primary)] via-sky-400 to-[var(--accent-secondary)] z-50 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Navbar activeSection={activeSection} onSectionClick={handleSectionClick} />

      {/* Floating Section Continuity Rail (Desktop) */}
      <nav
        aria-label="Section progression"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-3 z-40 pointer-events-auto"
      >
        <div className="relative flex flex-col items-center gap-4 py-2">
          {SECTIONS.map(s => {
            const isActive = activeSection === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => handleSectionClick(s.id)}
                aria-label={`Jump to ${s.label}`}
                className="group flex items-center gap-2.5 py-1 focus:outline-none"
              >
                <span
                  className={`text-[10px] font-mono transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                    isActive ? 'opacity-100 text-[var(--accent-primary)] font-semibold' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-[var(--accent-primary)] ring-4 ring-[var(--accent-primary)]/20 shadow-xs'
                      : 'w-1.5 h-1.5 bg-[var(--text-muted)]/40 hover:bg-[var(--text-secondary)] group-hover:scale-125'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </nav>

      {/* Main Content Progression */}
      <main className="relative z-10">
        <Hero />
        <TechnicalHighlights />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EngineeringApproach />
        <Mindset />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
