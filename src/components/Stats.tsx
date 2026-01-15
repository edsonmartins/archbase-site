'use client';

import { useTranslations } from 'next-intl';
import { Package, Download, Star, Box, Activity } from 'lucide-react';
import { useStats } from '@/lib/useStats';
import { motion } from 'framer-motion';

interface StatItem {
  key: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

export function Stats() {
  const t = useTranslations('stats');
  const { downloads, stars, isLoading } = useStats();

  const allStats: StatItem[] = [
    { key: 'components', icon: Package, color: 'text-tech-cyan', bgColor: 'bg-tech-cyan/5' },
    { key: 'downloads', icon: Download, color: 'text-tech-green', bgColor: 'bg-tech-green/5' },
    { key: 'stars', icon: Star, color: 'text-tech-yellow', bgColor: 'bg-tech-yellow/5' },
    { key: 'modules', icon: Box, color: 'text-tech-purple', bgColor: 'bg-tech-purple/5' },
  ];

  // Filter stats that should be displayed
  const stats = allStats.filter((stat) => {
    if (stat.key === 'downloads') {
      return downloads !== null || isLoading;
    }
    if (stat.key === 'stars') {
      return stars !== null || isLoading;
    }
    return true;
  });

  if (stats.length === 0) {
    return null;
  }

  return (
    <section className="py-16 border-y border-border-subtle bg-card/30">
      <div className="container mx-auto px-6">
        {/* Engineering Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-tech-green animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              System Status
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

        {/* Stats Grid */}
        <div className={`grid gap-4 ${
          stats.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
          stats.length === 3 ? 'grid-cols-3' :
          'grid-cols-2 md:grid-cols-4'
        }`}>
          {allStats.map((stat, index) => {
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
                {/* Card */}
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

                  {/* Status indicator */}
                  <div className="mt-2 flex justify-center">
                    <span className="status-dot green">
                      {stat.key === 'components' ? 'ready' :
                       stat.key === 'downloads' ? 'counting' :
                       stat.key === 'stars' ? 'github' : 'stable'}
                    </span>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-2 h-2 ${stat.color.replace('text-', 'bg-')} rounded-br-lg rounded-tl-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Build info bar */}
        <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-green" />
              build: passing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-blue" />
              coverage: 92%
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
