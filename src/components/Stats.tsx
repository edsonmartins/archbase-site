'use client';

import { useTranslations } from 'next-intl';
import { Package, Download, Star, Box } from 'lucide-react';
import { useStats } from '@/lib/useStats';

interface StatItem {
  key: string;
  icon: React.ElementType;
  color: string;
}

export function Stats() {
  const t = useTranslations('stats');
  const { downloads, stars, isLoading } = useStats();

  const allStats: StatItem[] = [
    { key: 'components', icon: Package, color: 'text-brand-400' },
    { key: 'downloads', icon: Download, color: 'text-green-400' },
    { key: 'stars', icon: Star, color: 'text-yellow-400' },
    { key: 'modules', icon: Box, color: 'text-purple-400' },
  ];

  // Filtrar estatísticas que devem ser exibidas
  const stats = allStats.filter((stat) => {
    if (stat.key === 'downloads') {
      // Exibir se temos dados reais OU se ainda está carregando (exibe placeholder)
      return downloads !== null || isLoading;
    }
    if (stat.key === 'stars') {
      // Exibir se temos dados reais OU se ainda está carregando (exibe placeholder)
      return stars !== null || isLoading;
    }
    return true;
  });

  // Se todas as stats foram filtradas, não exibir nada ou exibir apenas as estáticas
  if (stats.length === 0) {
    return null;
  }

  return (
    <section className="py-20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className={`grid gap-8 ${stats.length === 4 ? 'grid-cols-2 md:grid-cols-4' : stats.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
          {allStats.map((stat) => {
            const Icon = stat.icon;

            // Verificar se deve exibir esta estatística
            if (stat.key === 'downloads' && downloads === null && !isLoading) {
              return null;
            }
            if (stat.key === 'stars' && stars === null && !isLoading) {
              return null;
            }

            // Valor a exibir
            const displayValue = stat.key === 'downloads' && downloads
              ? downloads
              : stat.key === 'stars' && stars
                ? stars
                : t(stat.key);

            return (
              <div key={stat.key} className="text-center">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {t(`${stat.key}Label`)}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {isLoading && stat.key === 'downloads' ? '...' : displayValue}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
