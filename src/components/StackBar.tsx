'use client';

import { useTranslations } from 'next-intl';

// SVG Icons for tech stack - inline for better control and performance
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M11 17V7h2v10h-2z" fill="currentColor" />
    <path d="M15 7l-2 3 2 4h-2l-1.5-3-1.5 3h-2l2-4-2-3h2l1.5 2.5L14 7h1z" fill="currentColor" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M8.5 14c-1.5 1-2.5 2-2.5 3.5 0 2 2.5 2.5 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M8.5 10c-1.5-1-2.5-2-2.5-3.5 0-2 2.5-2.5 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M15 14c1.5 1 2.5 2 2.5 3.5 0 2-2.5 2.5-4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M15 10c1.5-1 2.5-2 2.5-3.5 0-2-2.5-2.5-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="12" cy="12" rx="3" ry="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6v12M9 9c1.5 0 3 1 3 3s-1.5 3-3 3M15 9c-1.5 0-3 1-3 3s1.5 3 3 3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const SpringIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M12 6c-4 0-6 3-6 6s2 6 6 6 6-3 6-6-2-6-6-6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 8c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 10c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M4 12h2M18 12h2M12 4v2M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TanStackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="3" y="8" width="4" height="12" rx="1" fill="currentColor" />
    <rect x="10" y="4" width="4" height="16" rx="1" fill="currentColor" />
    <rect x="17" y="12" width="4" height="8" rx="1" fill="currentColor" />
  </svg>
);

const DDDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M10 12h4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
  </svg>
);

interface TechItem {
  name: string;
  icon: React.ComponentType;
  color: string;
}

export function StackBar() {
  const t = useTranslations('stack');

  const techStack: TechItem[] = [
    { name: 'React 19', icon: ReactIcon, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-400' },
    { name: 'Java 17', icon: JavaIcon, color: 'text-orange-400' },
    { name: 'Spring Boot', icon: SpringIcon, color: 'text-green-400' },
    { name: 'TanStack', icon: TanStackIcon, color: 'text-red-400' },
    { name: 'DDD', icon: DDDIcon, color: 'text-purple-400' },
  ];

  const metrics = [
    { value: '100+', label: t('metrics.components') },
    { value: '20+', label: t('metrics.modules') },
    { value: '50+', label: t('metrics.patterns') },
    { value: '10x', label: t('metrics.faster') },
  ];

  return (
    <section className="py-16 border-y border-border-subtle relative">
      <div className="absolute inset-0 grid-tech opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tech-badge tech-badge-blue mb-4">{t('title')}</span>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-16">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-3"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon />
                </div>
                <span className="text-xs md:text-sm font-mono text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Engineering Metrics Dashboard */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="metric-card text-center group"
              >
                <div className={`metric-value ${index === 3 ? 'text-tech-green' : 'text-tech-blue'}`}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>

                {/* Status indicator */}
                <div className="mt-3 flex justify-center">
                  <span className={`status-dot ${index === 3 ? 'green' : 'yellow'}`}>
                    {index === 3 ? 'optimized' : 'stable'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Version badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <span className="tech-badge tech-badge-purple">v3.0.0 stable</span>
          <span className="tech-badge tech-badge-green">passing build</span>
          <span className="tech-badge tech-badge-blue">open source</span>
        </div>
      </div>
    </section>
  );
}
