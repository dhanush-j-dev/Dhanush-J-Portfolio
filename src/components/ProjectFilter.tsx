import React from 'react';

export type FilterCategory = 'All' | 'Java' | 'Spring Boot' | 'Full Stack' | 'AI';

const FILTERS: FilterCategory[] = ['All', 'Java', 'Spring Boot', 'Full Stack', 'AI'];

interface ProjectFilterProps {
  active: FilterCategory;
  onChange: (f: FilterCategory) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({ active, onChange }) => (
  <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
    {FILTERS.map(f => (
      <button
        key={f}
        type="button"
        onClick={() => onChange(f)}
        aria-pressed={active === f}
        className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer ${
          active === f
            ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 font-semibold shadow-xs'
            : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
        }`}
      >
        {f}
      </button>
    ))}
  </div>
);
