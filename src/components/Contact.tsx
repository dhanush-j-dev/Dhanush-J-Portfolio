import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useInView } from '../hooks/useInView';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView<HTMLElement>(0.08);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-20 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className={`will-rise mb-12 ${inView ? 'in-view' : ''}`}>
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <div className="section-line" />
          <p
            className="text-sm text-[var(--text-secondary)] mt-4 max-w-xl"
          >
            I'm actively seeking an entry-level opportunity in Java development, backend engineering, software engineering, or full-stack roles. Feel free to send a message or connect directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left — Contact info with slide right */}
          <div
            className={`lg:col-span-4 space-y-6 will-slide-right ${
              inView ? 'in-view' : ''
            }`}
            style={{ transitionDelay: inView ? '200ms' : '0ms' }}
          >
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1 font-semibold">Location</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                  <span>{personalData.location}</span>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1 font-semibold">Email</p>
                <a
                  href={`mailto:${personalData.socials.email}`}
                  className="flex items-center gap-2 text-sm text-[var(--accent-primary)] hover:underline transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{personalData.socials.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2 font-semibold">Profiles</p>
                <div className="space-y-2">
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Dhanush-j-dev</span>
                  </a>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-500" />
                    <span>jdhanush</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form with slide left */}
          <div
            className={`lg:col-span-8 will-slide-left ${
              inView ? 'in-view' : ''
            }`}
            style={{ transitionDelay: inView ? '260ms' : '0ms' }}
          >
            {sent ? (
              <div className="p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] text-center space-y-3 shadow-xs">
                <div className="text-2xl">📬</div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">Thanks for reaching out!</h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-sm mx-auto">
                  Email integration isn't configured yet — please reach me directly at{' '}
                  <a
                    href={`mailto:${personalData.socials.email}`}
                    className="text-[var(--accent-primary)] hover:underline font-medium"
                  >
                    {personalData.socials.email}
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline transition-colors cursor-pointer"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-[var(--text-muted)] font-medium">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-[var(--text-muted)] font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-[var(--text-muted)] font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Hi Dhanush, I have a Java Developer opportunity I'd like to discuss..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/50 transition-colors resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">
                    Note: form submission is not connected to a backend email provider yet.
                  </p>
                  <button
                    type="submit"
                    className="btn-primary shrink-0 self-start sm:self-auto"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
