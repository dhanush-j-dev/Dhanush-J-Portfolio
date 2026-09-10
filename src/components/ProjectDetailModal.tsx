import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Shield, Server, Cloud, Layers } from 'lucide-react';
import type { Project } from '../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GithubIcon } from './SocialIcons';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handler);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-xl transition-all duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--bg-secondary)] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] z-10 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Header */}
          <div className="pr-10 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 px-2.5 py-1 rounded-full font-medium">
                {project.categories.join(' · ')}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-muted)]">{project.date}</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-sm text-[var(--accent-primary)] font-medium">{project.subtitle}</p>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3 font-semibold">Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map(t => (
                <span key={t} className="skill-badge">{t}</span>
              ))}
            </div>
          </div>

          {/* Problem / Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.problem && (
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 font-semibold">Problem</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <h3 className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-2 font-semibold">Solution</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>

          {/* 266 Tests banner */}
          {project.testing && (
            <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-[var(--text-primary)]">{project.testing.headline}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">{project.testing.description}</div>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className="text-2xl font-mono font-bold text-emerald-600 dark:text-emerald-400">{project.testing.count}</div>
                <div className="text-[10px] font-mono text-[var(--text-muted)]">tests</div>
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4 flex items-center gap-1.5 font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Key Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          {project.architecture && (
            <div>
              <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3 font-semibold">Architecture</h3>
              <ArchitectureDiagram nodes={project.architecture.nodes} inViewOverride={true} />
            </div>
          )}

          {/* Backend & Security */}
          {(project.backend || project.security) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.backend && (
                <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                  <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
                    <Server className="w-3.5 h-3.5" />
                    <span>Backend</span>
                  </h3>
                  <ul className="space-y-2">
                    {project.backend.map((b, i) => (
                      <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.security && (
                <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                  <h3 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Security</span>
                  </h3>
                  <ul className="space-y-2">
                    {project.security.map((s, i) => (
                      <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Deployment */}
          {project.deployment && (
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                <Cloud className="w-3.5 h-3.5" />
                <span>Deployment:</span>
              </div>
              {project.deployment.map(d => (
                <span key={d} className="skill-badge text-[11px]">{d}</span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[var(--border-color)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
