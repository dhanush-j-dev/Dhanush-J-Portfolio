import React from 'react';
import { experienceData } from '../data/experience';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.08);

  return (
    <section id="experience" ref={ref} className="py-24 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Heading matching reference */}
        <div className={`will-rise mb-16 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">CAREER MILESTONE</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line" />
        </div>

        {/* Experience Timeline */}
        <div className="relative pl-6 sm:pl-8 max-w-4xl">
          {/* Animated Timeline Spine */}
          <div className={`timeline-spine ${inView ? 'in-view' : ''}`} />

          <div className="space-y-12">
            {experienceData.map((item, i) => (
              <div
                key={i}
                className={`relative will-slide-right ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: inView ? `${160 + i * 120}ms` : '0ms' }}
              >
                {/* Timeline node marker with pulse */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-2 border-[var(--bg-primary)] shadow-md flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-75" />
                </div>

                {/* Glass Card inspired by reference */}
                <div className="glass-card p-6 sm:p-8 space-y-6">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[var(--border-color)] pb-5">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 mb-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                        <Calendar className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        Remote
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities Bullets */}
                  <ul className="space-y-3">
                    {item.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills Row */}
                  <div className="pt-2 border-t border-[var(--border-color)]">
                    <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider block mb-2 font-semibold">
                      Core Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map(t => (
                        <span key={t} className="skill-badge text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
