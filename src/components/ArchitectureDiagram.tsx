import React, { useState } from 'react';
import { Info, ArrowDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ArchNode {
  name: string;
  role: string;
  description: string;
}

interface ArchitectureDiagramProps {
  nodes?: ArchNode[];
  inViewOverride?: boolean;
  startDelay?: number;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes = [],
  inViewOverride,
  startDelay = 200,
}) => {
  const [internalRef, internalInView] = useInView<HTMLDivElement>(0.1);
  const inView = inViewOverride !== undefined ? inViewOverride : internalInView;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      ref={internalRef}
      className={`rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 space-y-4 will-fade shadow-xs ${
        inView ? 'in-view' : ''
      }`}
      style={{ transitionDelay: `${startDelay}ms` }}
    >
      <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
        <div className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider font-semibold">
          Architecture Flow
        </div>
        <div className="text-[10px] font-mono text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 px-2.5 py-0.5 rounded-full border border-[var(--accent-primary)]/20">
          Layered Pipeline
        </div>
      </div>

      <div className="flex flex-col items-center py-1">
        {nodes.map((node, i) => {
          const isHovered = hoveredIdx === i;
          const isAdjacent =
            hoveredIdx !== null && (hoveredIdx === i - 1 || hoveredIdx === i + 1);
          const nodeDelay = startDelay + 60 + i * 100;
          const lineDelay = nodeDelay + 50;

          return (
            <React.Fragment key={node.name}>
              {/* Node Card */}
              <button
                type="button"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onFocus={() => setHoveredIdx(i)}
                onBlur={() => setHoveredIdx(null)}
                className={`arch-node w-full max-w-xs text-left px-4 py-2.5 rounded-lg border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] will-rise-sm cursor-pointer ${
                  inView ? 'in-view' : ''
                } ${
                  isHovered
                    ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] shadow-xs translate-x-1 -translate-y-0.5'
                    : isAdjacent
                    ? 'border-[var(--accent-primary)]/30 bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                }`}
                style={{
                  transitionDelay: inView ? `${nodeDelay}ms` : '0ms',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium">{node.name}</span>
                  <span
                    className={`text-[10px] font-mono transition-colors ${
                      isHovered ? 'text-[var(--accent-primary)] font-semibold' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {node.role}
                  </span>
                </div>
              </button>

              {/* Connecting Line with Arrow indicator */}
              {i < nodes.length - 1 && (
                <div className="flex flex-col items-center py-0.5">
                  <div
                    className={`arch-line-draw ${inView ? 'active' : ''}`}
                    style={{
                      transitionDelay: inView ? `${lineDelay}ms` : '0ms',
                      background:
                        hoveredIdx === i || hoveredIdx === i + 1
                          ? 'var(--accent-primary)'
                          : undefined,
                      boxShadow:
                        hoveredIdx === i || hoveredIdx === i + 1
                          ? '0 0 8px rgba(59, 130, 246, 0.4)'
                          : undefined,
                    }}
                  />
                  <ArrowDown
                    className={`w-3 h-3 transition-colors duration-200 -mt-1 ${
                      hoveredIdx === i || hoveredIdx === i + 1
                        ? 'text-[var(--accent-primary)] scale-110'
                        : 'text-[var(--text-muted)]/50'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Technical Tooltip */}
      <div
        className={`min-h-[46px] flex items-start gap-2.5 rounded-lg p-3 bg-[var(--bg-secondary)] border transition-all duration-200 ${
          hoveredIdx !== null ? 'border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5' : 'border-[var(--border-color)]'
        }`}
      >
        <Info
          className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors ${
            hoveredIdx !== null ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
          }`}
        />
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed transition-opacity duration-150">
          {hoveredIdx !== null && nodes[hoveredIdx] ? (
            <>
              <strong className="text-[var(--text-primary)] font-mono font-semibold">
                {nodes[hoveredIdx].name}:
              </strong>{' '}
              {nodes[hoveredIdx].description}
            </>
          ) : (
            <span className="text-[var(--text-muted)] italic">
              Hover over an architectural layer to examine technical responsibilities
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
