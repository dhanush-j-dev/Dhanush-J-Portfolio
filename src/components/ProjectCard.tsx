import React from 'react';
import { ArrowRight, ExternalLink, BarChart3, Video, Bot, Flame, FileText, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GithubIcon } from './SocialIcons';
import { useInView } from '../hooks/useInView';

interface Props {
  project: Project;
  onSelect: (p: Project) => void;
  index?: number;
}

// ── Abstract preview for Code Tracker ──
const CodeTrackerPreview: React.FC<{ inView: boolean }> = ({ inView }) => (
  <div
    className={`ct-preview mt-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 font-mono text-xs space-y-3 will-rise-sm ${
      inView ? 'in-view' : ''
    }`}
    style={{ transitionDelay: inView ? '220ms' : '0ms' }}
  >
    <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
      <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
        <BarChart3 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
        <span>Practice Dashboard</span>
      </div>
      <span className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
        <Flame className="w-3 h-3" />
        <span>Streak Active</span>
      </span>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {[['Solved', 'Catalog'], ['Arch', 'OOP/JDBC'], ['Storage', 'MySQL']].map(([label, val]) => (
        <div key={label} className="p-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)]">
          <div className="text-[10px] text-[var(--text-muted)]">{label}</div>
          <div className="text-xs font-semibold text-[var(--text-primary)] mt-0.5">{val}</div>
        </div>
      ))}
    </div>
    <div className="space-y-1 text-[11px] text-[var(--text-muted)]">
      <div className="flex justify-between"><span>CRUD:</span><span className="text-[var(--text-secondary)]">Enabled</span></div>
      <div className="flex justify-between"><span>Reports:</span><span className="text-[var(--text-secondary)]">Weekly Progress</span></div>
    </div>
  </div>
);

// ── Abstract preview for Meeting Summarizer ──
const MeetingSummarizerPreview: React.FC<{ inView: boolean }> = ({ inView }) => (
  <div
    className={`ms-preview mt-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 font-mono text-xs space-y-2.5 will-rise-sm ${
      inView ? 'in-view' : ''
    }`}
    style={{ transitionDelay: inView ? '220ms' : '0ms' }}
  >
    <div className="flex items-center justify-between pb-2 border-b border-[var(--border-color)]">
      <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
        <Video className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
        <span>WebRTC Pipeline</span>
      </div>
      <span className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400">
        <Bot className="w-3 h-3" />
        <span>Gemini AI</span>
      </span>
    </div>
    <div className="space-y-1.5 text-[11px] text-[var(--text-secondary)]">
      <div className="ms-row flex justify-between p-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)]">
        <span>Diarization:</span>
        <span className="text-[var(--accent-primary)]">Speaker ID Tracking</span>
      </div>
      <div className="ms-row flex justify-between p-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)]">
        <span>Telemetry:</span>
        <span className="text-purple-500 dark:text-purple-400">MediaPipe Multi-Modal</span>
      </div>
      <div className="ms-row flex justify-between p-2 rounded bg-[var(--bg-surface)] border border-[var(--border-color)]">
        <span>Export:</span>
        <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
          <FileText className="w-3.5 h-3.5" /> PDF Minutes
        </span>
      </div>
    </div>
  </div>
);

export const ProjectCard: React.FC<Props> = ({ project, onSelect, index = 0 }) => {
  const [cardRef, inView] = useInView<HTMLElement>(0.08);

  // ── FEATURED (CareerForge) — 8-step controlled choreography ──
  if (project.featured) {
    return (
      <article
        ref={cardRef}
        className={`card-featured rounded-2xl p-6 sm:p-8 overflow-hidden will-rise ${
          inView ? 'in-view' : ''
        }`}
      >
        {/* Label + date */}
        <div
          className={`flex flex-wrap items-center gap-2 mb-5 will-rise-sm ${
            inView ? 'in-view' : ''
          }`}
          style={{ transitionDelay: inView ? '60ms' : '0ms' }}
        >
          <span className="text-[11px] font-mono text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            Featured Application
          </span>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">{project.date}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details & Tech */}
          <div className="lg:col-span-6 space-y-5">
            {/* 1. Project Title reveals */}
            <div
              className={`will-rise ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: inView ? '120ms' : '0ms' }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--accent-primary)] mt-1 font-medium">{project.subtitle}</p>
            </div>

            {/* 2. Description follows */}
            <p
              className={`text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed will-rise ${
                inView ? 'in-view' : ''
              }`}
              style={{ transitionDelay: inView ? '200ms' : '0ms' }}
            >
              {project.description}
            </p>

            {/* 3. Technology badges appear */}
            <div
              className={`space-y-2 will-rise ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: inView ? '280ms' : '0ms' }}
            >
              <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, ti) => (
                  <span
                    key={t}
                    className={`skill-badge will-rise-sm ${inView ? 'in-view' : ''}`}
                    style={{
                      transitionDelay: inView ? `${320 + ti * 35}ms` : '0ms',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Feature list reveals progressively */}
            <div
              className={`space-y-2 pt-1 will-rise ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: inView ? '450ms' : '0ms' }}
            >
              <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                Core Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                {project.features.slice(0, 4).map((f, fi) => (
                  <div key={fi} className="flex items-start gap-2">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. 266 Tests appears prominently as strong visual element */}
            {project.testing && (
              <div
                className={`flex items-center gap-3.5 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 shadow-xs will-scale ${
                  inView ? 'in-view' : ''
                }`}
                style={{ transitionDelay: inView ? '560ms' : '0ms' }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wide">
                    Automated Verification
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {project.testing.description}
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-2xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400 leading-none">
                    {project.testing.count}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">Tests Passed</div>
                </div>
              </div>
            )}

            {/* 8. GitHub / Live Demo / CTA buttons appear */}
            <div
              className={`flex flex-wrap items-center gap-3 pt-2 will-rise ${
                inView ? 'in-view' : ''
              }`}
              style={{ transitionDelay: inView ? '640ms' : '0ms' }}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-3.5 py-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs px-3.5 py-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1.5 ml-auto text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-color)] hover:border-[var(--border-hover)] px-3.5 py-2 rounded-lg cursor-pointer bg-[var(--bg-surface)]"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 & 6 Architecture Diagram builds progressively */}
          <div className="lg:col-span-6">
            {project.architecture && (
              <ArchitectureDiagram
                nodes={project.architecture.nodes}
                inViewOverride={inView}
                startDelay={340}
              />
            )}
          </div>
        </div>
      </article>
    );
  }

  // ── Regular project cards (Code Tracker, Meeting Summarizer) ──
  return (
    <article
      ref={cardRef}
      className={`card-secondary flex flex-col rounded-xl p-5 sm:p-6 group will-rise ${
        inView ? 'in-view' : ''
      }`}
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
    >
      <div className="space-y-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] border border-[var(--border-color)] px-2.5 py-1 rounded">
            {project.categories.join(' · ')}
          </span>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">{project.date}</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">{project.subtitle}</p>
        </div>

        {/* Abstract preview with subtle shift on hover */}
        {project.id === 'code-tracker' && <CodeTrackerPreview inView={inView} />}
        {project.id === 'meeting-summarizer' && <MeetingSummarizerPreview inView={inView} />}

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map(t => (
            <span key={t} className="skill-badge text-[11px]">{t}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="skill-badge text-[11px] text-[var(--text-muted)]">+{project.technologies.length - 5}</span>
          )}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-primary)] hover:underline transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live</span>
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <span>Details</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
};
