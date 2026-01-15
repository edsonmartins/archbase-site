'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Box,
  Database,
  Shield,
  Server,
  Wrench,
  Globe,
  ArrowRight,
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

  const packages = [
    '@archbase/core',
    '@archbase/data',
    '@archbase/components',
    '@archbase/layout',
    '@archbase/security',
    '@archbase/admin',
    '@archbase/advanced',
    '@archbase/template',
    '@archbase/tools',
    '@archbase/ssr',
  ];

  return (
    <section id="react" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-cyan mb-4">
            Frontend Components
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {t.raw('features').map((feature: any, index: number) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="metric-card h-full">
                  <div className="w-10 h-10 bg-tech-cyan/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-tech-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Technical indicator */}
                  <div className="mt-4 pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
                    <span>React 19+</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border-subtle pt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Modular Packages
            </h3>
            <span className="tech-badge tech-badge-blue">10 packages</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {packages.map((pkg) => (
              <code
                key={pkg}
                className="px-3 py-2 rounded border border-border-subtle bg-card/30 text-xs font-mono text-muted-foreground hover:text-tech-blue hover:border-tech-blue/30 transition-colors cursor-pointer"
              >
                {pkg}
              </code>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/edsonmartins/archbase-react"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button terminal-button-primary"
          >
            Explore Frontend Code
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
