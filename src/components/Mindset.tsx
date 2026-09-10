import React from 'react';
import { personalData } from '../data/personal';
import { useInView } from '../hooks/useInView';

export const Mindset: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.1);

  return (
    <section ref={ref} className="py-12 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <h2
            className={`will-rise text-lg font-bold text-[var(--text-primary)] mb-3 ${
              inView ? 'in-view' : ''
            }`}
          >
            Build. Test. Improve.
          </h2>
          <p
            className={`will-rise text-sm text-[var(--text-muted)] leading-relaxed ${
              inView ? 'in-view' : ''
            }`}
            style={{ transitionDelay: inView ? '90ms' : '0ms' }}
          >
            {personalData.mindsetText}
          </p>
        </div>
      </div>
    </section>
  );
};
