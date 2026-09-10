import React from 'react';
import { skillCategories } from '../data/skills';
import { useInView } from '../hooks/useInView';
import { getSkillIcon } from './TechIcons';
import { Code2, Coffee, Server, Layout, Database, Wrench } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
};

interface SkillCardProps {
  skill: string;
  delay: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay, inView }) => {
  return (
    <div
      className={`glass-card p-4 sm:p-5 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-[var(--accent-primary)]/50 hover:shadow-lg hover:-translate-y-1 will-rise-sm cursor-default ${
        inView ? 'in-view' : ''
      }`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {/* Centered Logo above name */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] group-hover:border-[var(--accent-primary)]/40 transition-all duration-300 group-hover:scale-110 mb-3 shadow-xs">
        {getSkillIcon(skill)}
      </div>

      {/* Technology Name centered below logo */}
      <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight line-clamp-1">
        {skill}
      </span>
    </div>
  );
};

export const Skills: React.FC = () => {
  const [ref, inView] = useInView<HTMLElement>(0.06);

  return (
    <section id="skills" ref={ref} className="py-24 border-b border-[var(--border-color)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className={`will-rise mb-16 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">CORE COMPETENCIES</span>
          <h2 className="section-title">Technical Skills & Expertise</h2>
          <div className="section-line" />
          <p className="text-sm text-[var(--text-muted)] mt-3 max-w-xl">
            My core technical toolset for backend systems, Java microservices, REST APIs, and database engineering.
          </p>
        </div>

        {/* Grouped by actual Java Developer Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => {
            const catIcon = category.iconName ? ICON_MAP[category.iconName] : null;

            return (
              <div
                key={category.title}
                className={`will-rise ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: inView ? `${catIdx * 80}ms` : '0ms' }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="p-2 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20 shadow-xs">
                    {catIcon}
                  </span>
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                  <div className="h-px flex-1 bg-[var(--border-color)] ml-2" />
                </div>

                {/* Skill Cards Grid: Logo above Name */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      delay={catIdx * 60 + skillIdx * 35}
                      inView={inView}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
