import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ProjectFilter } from './ProjectFilter';
import type { FilterCategory } from './ProjectFilter';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { useInView } from '../hooks/useInView';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const [ref, inView] = useInView<HTMLElement>(0.06);

  const filtered = useMemo(() =>
    filter === 'All'
      ? projectsData
      : projectsData.filter(p => p.categories.includes(filter)),
    [filter]
  );

  const featured = filtered.find(p => p.featured);
  const secondary = filtered.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-20 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-10">
        {/* Section Heading matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className={`will-rise mb-4 ${inView ? 'in-view' : ''}`}>
              <span className="section-subtitle">INNOVATION SHOWN IN CODE</span>
              <h2 className="section-title">Featured Projects</h2>
              <div className="section-line" />
            </div>
            <p
              className={`will-rise text-sm text-[var(--text-muted)] mt-2 max-w-xl ${
                inView ? 'in-view' : ''
              }`}
              style={{ transitionDelay: inView ? '160ms' : '0ms' }}
            >
              Real applications built with Java, Spring Boot, REST APIs, and modern web architectures with verified test coverage.
            </p>
          </div>

          <div
            className={`will-rise ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: inView ? '200ms' : '0ms' }}
          >
            <ProjectFilter active={filter} onChange={setFilter} />
          </div>
        </div>

        {/* Projects list */}
        <div className="space-y-6">
          {featured && (
            <ProjectCard project={featured} onSelect={setSelected} />
          )}
          {secondary.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {secondary.map((p, idx) => (
                <ProjectCard key={p.id} project={p} onSelect={setSelected} index={idx} />
              ))}
            </div>
          )}
          {filtered.length === 0 && (
            <p className="text-center py-16 text-[var(--text-muted)] text-sm font-mono will-fade in-view">
              No projects match this filter.
            </p>
          )}
        </div>
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
