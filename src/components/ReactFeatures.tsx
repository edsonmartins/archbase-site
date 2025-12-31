'use client';

import { useTranslations } from 'next-intl';
import {
  Box,
  Database,
  Shield,
  Server,
  Wrench,
  Globe
} from 'lucide-react';

const iconMap = {
  component: Box,
  database: Database,
  shield: Shield,
  server: Server,
  tool: Wrench,
  globe: Globe,
};

export function ReactFeatures() {
  const t = useTranslations('react');

  return (
    <section id="react" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Gradient background */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm mb-6">
            Frontend Components
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
                className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:bg-card/80 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            Modular Packages
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '@archbase/core',
              '@archbase/data',
              '@archbase/components',
              '@archbase/layout',
              '@archbase/security',
              '@archbase/admin',
              '@archbase/advanced',
              '@archbase/template',
              '@archbase/tools',
              '@archbase/ssr'
            ].map((pkg) => (
              <span
                key={pkg}
                className="px-4 py-2 rounded-lg border border-border bg-secondary/50 text-sm font-mono hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
