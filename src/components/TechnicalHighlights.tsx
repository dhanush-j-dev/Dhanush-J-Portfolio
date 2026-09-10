import React from 'react';
import { personalData } from '../data/personal';
import { useInView } from '../hooks/useInView';

export const TechnicalHighlights: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.1);

  return (
    <section ref={ref} className="border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalData.technicalHighlights.map((item, i) => (
            <div
              key={item.id}
              className={`will-rise p-5 rounded-xl border transition-all duration-200 ${
                item.isProminent
                  ? 'border-[var(--accent-primary)]/40 bg-[var(--bg-surface)] shadow-xs hover:border-[var(--accent-primary)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]'
              } ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: inView ? `${i * 90}ms` : '0ms' }}
            >
              <div
                className={`text-xs font-mono font-semibold tracking-wider mb-2 ${
                  item.isProminent ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.badge}
              </div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">
                {item.title}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
