'use client';

import { useTranslations } from 'next-intl';
import {
  Layers,
  Building2,
  Zap,
  GitBranch,
  Search,
  Cpu
} from 'lucide-react';

const iconMap = {
  domain: Layers,
  building: Building2,
  zap: Zap,
  workflow: GitBranch,
  search: Search,
  spring: Cpu,
};

export function FrameworkFeatures() {
  const t = useTranslations('framework');

  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/5 text-brand-400 text-sm mb-6">
            Backend Framework
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.raw('features').map((feature: any, index: number) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:bg-card/80 hover:border-brand-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
