import React from 'react';
import { FileDown } from 'lucide-react';
import { personalData } from '../data/personal';
import { useInView } from '../hooks/useInView';

export const ResumeCTA: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-16 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-7 sm:p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] will-scale shadow-xs ${
            inView ? 'in-view' : ''
          }`}
        >
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Looking for a verified candidate?</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Download my resume for an accurate breakdown of my Java & Spring Boot backend foundation, 266 unit tests, and production code.
            </p>
          </div>
          <a
            href={personalData.resumeUrl}
            download="Dhanush-J-Resume.pdf"
            className="shrink-0 btn-primary shadow-xs"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
