'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  WifiOff,
  ShieldCheck,
  Palette,
  Boxes,
  Layout,
  Terminal,
  ArrowRight,
  Package,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  offline: WifiOff,
  validators: ShieldCheck,
  theme: Palette,
  agnostic: Boxes,
  screens: Layout,
  cli: Terminal,
};

interface PubPackage {
  name: string;
  description: string;
  url: string;
}

export function FlutterFeatures() {
  const t = useTranslations('flutter');

  const packages: PubPackage[] = [
    {
      name: 'archbase_flutter',
      description: t('packages.main'),
      url: 'https://pub.dev/packages/archbase_flutter',
    },
    {
      name: 'archbase_flutter_riverpod',
      description: t('packages.riverpod'),
      url: 'https://pub.dev/packages/archbase_flutter_riverpod',
    },
    {
      name: 'archbase_flutter_getx',
      description: t('packages.getx'),
      url: 'https://pub.dev/packages/archbase_flutter_getx',
    },
  ];

  return (
    <section id="flutter" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-blue mb-4">
            Mobile Framework
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
                  <div className="w-10 h-10 bg-tech-blue/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-tech-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-blue" />
                    <span>Flutter 3.22+</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* pub.dev Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border-subtle pt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              {t('packagesTitle')}
            </h3>
            <span className="tech-badge tech-badge-blue">3 packages on pub.dev</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg, index) => (
              <motion.a
                key={pkg.name}
                href={pkg.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group block"
              >
                <div className="metric-card h-full hover:border-tech-blue/40 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-tech-blue/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Package className="w-5 h-5 text-tech-blue" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-tech-blue transition-colors" />
                  </div>

                  <code className="text-sm font-mono text-tech-blue block mb-2 break-all">
                    {pkg.name}
                  </code>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground">pub.dev</span>
                    <span className="text-tech-blue group-hover:underline">
                      {t('viewPackage')} →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://edsonmartins.github.io/archbase-flutter-docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button terminal-button-primary"
          >
            {t('ctaDocs')}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/edsonmartins/archbase-flutter"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button"
          >
            {t('ctaSource')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
