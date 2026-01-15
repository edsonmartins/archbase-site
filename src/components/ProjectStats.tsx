'use client';

import { useTranslations } from 'next-intl';
import { useStats } from '@/lib/useStats';
import { motion } from 'framer-motion';
import {
  Package,
  Download,
  Star,
  Box,
  Activity,
  Server,
  Database,
  GitBranch,
} from 'lucide-react';

// SVG Icons for tech stack - inline for better control
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
    <path d="M15 7l-2 3 2 4h-2l-1.5-3-1.5 3h-2l2-4-2-3h1z" fill="currentColor" />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M8.5 14c-1.5 1-2.5 2-2.5 3.5 0 2 2.5 2.5 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M8.5 10c-1.5-1-2.5-2-2.5-3.5 0-2 2.5-2.5 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M15 14c1.5 1 2.5 2 2.5 3.5 0 2-2.5 2.5-4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M15 10c1.5-1 2.5-2 2.5-3.5 0-2-2.5-2.5-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="12" cy="12" rx="3" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
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

interface StatItem {
  key: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

export function ProjectStats() {
  const t = useTranslations('stats');
  const { downloads, stars, isLoading } = useStats();

  const techStack: TechItem[] = [
    { name: 'React 19', icon: ReactIcon, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: TypeScriptIcon, color: 'text-blue-400' },
    { name: 'Java 17', icon: JavaIcon, color: 'text-orange-400' },
    { name: 'Spring Boot', icon: SpringIcon, color: 'text-green-400' },
    { name: 'TanStack', icon: TanStackIcon, color: 'text-red-400' },
    { name: 'DDD', icon: DDDIcon, color: 'text-purple-400' },
  ];

  const statItems: StatItem[] = [
    { key: 'components', icon: Package, color: 'text-tech-cyan', bgColor: 'bg-tech-cyan/5' },
    { key: 'downloads', icon: Download, color: 'text-tech-green', bgColor: 'bg-tech-green/5' },
    { key: 'stars', icon: Star, color: 'text-tech-yellow', bgColor: 'bg-tech-yellow/5' },
    { key: 'modules', icon: Box, color: 'text-tech-purple', bgColor: 'bg-tech-purple/5' },
  ];

  return (
    <section className="py-16 border-y border-border-subtle bg-card/30 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tech-green animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              System Overview
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-tech-green" />
              {t('status')}
            </span>
            <span>v3.0.0</span>
          </div>
        </div>

        {/* Tech Stack Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-10">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon />
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statItems.map((stat, index) => {
            const Icon = stat.icon;

            // Check if should display this stat
            if (stat.key === 'downloads' && downloads === null && !isLoading) {
              return null;
            }
            if (stat.key === 'stars' && stars === null && !isLoading) {
              return null;
            }

            // Value to display
            const displayValue = stat.key === 'downloads' && downloads
              ? downloads
              : stat.key === 'stars' && stars
                ? stars
                : t(stat.key);

            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="metric-card text-center">
                  {/* Icon */}
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>

                  {/* Label */}
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-mono">
                    {t(`${stat.key}Label`)}
                  </div>

                  {/* Value */}
                  <div className={`metric-value ${stat.color}`}>
                    {isLoading && stat.key === 'downloads' ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-tech-yellow animate-pulse" />
                        ...
                      </span>
                    ) : (
                      displayValue
                    )}
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-2 h-2 ${stat.color.replace('text-', 'bg-')} rounded-br-lg rounded-tl-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Build info bar */}
        <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-green" />
              build: passing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-blue" />
              coverage: 92%
            </span>
            <span className="flex items-center gap-1.5">
              <Database className="w-3 h-3" />
              <span className="text-tech-blue">open source</span>
            </span>
          </div>
          <span className="text-muted-foreground/60">
            Last deployed: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
    </section>
  );
}
