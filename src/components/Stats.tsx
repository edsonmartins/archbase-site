'use client';

import { useTranslations } from 'next-intl';
import { Package, Download, Star, Box } from 'lucide-react';

export function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { key: 'components', icon: Package, color: 'text-brand-400' },
    { key: 'downloads', icon: Download, color: 'text-green-400' },
    { key: 'stars', icon: Star, color: 'text-yellow-400' },
    { key: 'modules', icon: Box, color: 'text-purple-400' },
  ];

  return (
    <section className="py-20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.key} className="text-center">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {t(`${stat.key}Label`)}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {t(stat.key)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
