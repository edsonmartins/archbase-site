'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Layers,
  Building2,
  Zap,
  GitBranch,
  Search,
  Cpu,
  ArrowRight,
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
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-orange mb-4">
            Backend Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <div className="w-10 h-10 bg-tech-orange/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-tech-orange" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Technical indicator */}
                  <div className="mt-4 pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-orange" />
                    <span>Java 17+</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/edsonmartins/archbase-app-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button terminal-button-primary"
          >
            Explore Backend Code
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
