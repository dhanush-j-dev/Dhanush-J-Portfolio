import React, { useState } from 'react';
import { engineeringStages } from '../data/engineering';
import { useInView } from '../hooks/useInView';

export const EngineeringApproach: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [ref, inView] = useInView<HTMLElement>(0.08);

  return (
    <section id="engineering" ref={ref} className="py-20 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`will-rise mb-12 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">DEVELOPMENT LIFECYCLE</span>
          <h2 className="section-title">How I Build Software</h2>
          <div className="section-line" />
        </div>

        {/* Desktop: horizontal row with staggered entrances */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {engineeringStages.map((stage, i) => (
            <button
              key={stage.step}
              type="button"
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className={`eng-step will-rise text-left p-4 rounded-xl border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
                inView ? 'in-view' : ''
              } ${
                activeIdx === i
                  ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 shadow-xs'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)]'
              }`}
              style={{ transitionDelay: inView ? `${140 + i * 70}ms` : '0ms' }}
            >
              <div
                className={`text-lg font-mono font-bold mb-2 transition-colors ${
                  activeIdx === i ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
                }`}
              >
                {stage.step}
              </div>
              <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">{stage.title}</div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{stage.description}</p>
            </button>
          ))}
        </div>

        {/* Expanded detail — desktop with smooth reveal */}
        {activeIdx !== null && (
          <div className="hidden lg:block mt-4 p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] will-fade in-view animate-[hFadeUp_0.3s_var(--ease-expo)_forwards] shadow-xs">
            <div className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-2.5 font-semibold">
              Phase {engineeringStages[activeIdx].step} Deep Dive
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {engineeringStages[activeIdx].details?.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mobile: vertical list with staggered reveal */}
        <div className="lg:hidden space-y-4">
          {engineeringStages.map((stage, i) => (
            <div
              key={stage.step}
              className={`flex gap-4 will-slide-right ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: inView ? `${120 + i * 80}ms` : '0ms' }}
            >
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-center text-[11px] font-mono font-bold text-[var(--text-muted)]">
                  {stage.step}
                </div>
                {i < engineeringStages.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border-color)] mt-2" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{stage.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
