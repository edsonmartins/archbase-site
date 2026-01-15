'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Rocket, FileCode, Terminal, ArrowRight } from 'lucide-react';

export function Boilerplates() {
  const t = useTranslations('boilerplate');

  const boilerplates = [
    {
      key: 'react',
      title: t('react.title'),
      stack: t('react.stack'),
      features: t.raw('react.features'),
      color: 'tech-cyan',
      gradient: 'from-tech-cyan/5 to-tech-blue/5',
      href: 'https://github.com/edsonmartins/archbase-react-boilerplate',
    },
    {
      key: 'java',
      title: t('java.title'),
      stack: t('java.stack'),
      features: t.raw('java.features'),
      color: 'tech-orange',
      gradient: 'from-tech-orange/5 to-tech-yellow/5',
      href: 'https://github.com/edsonmartins/archbase-java-boilerplate',
    },
  ];

  return (
    <section id="boilerplate" className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-green mb-4">
            Quick Start
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Boilerplates */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {boilerplates.map((bp, index) => (
            <motion.div
              key={bp.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="metric-card h-full p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${bp.color}/5 flex items-center justify-center`}>
                    <FileCode className={`w-5 h-5 text-${bp.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-mono">{bp.title}</h3>
                    <p className={`text-xs text-${bp.color} font-mono mt-0.5`}>
                      {bp.stack}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {bp.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Terminal className={`w-3.5 h-3.5 text-${bp.color} flex-shrink-0`} />
                      <span className="text-muted-foreground font-mono">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={bp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button w-full justify-center text-sm"
                >
                  <Rocket className="w-4 h-4" />
                  Clone Repository
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Command hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 border border-border-subtle rounded-lg bg-card/50">
            <span className="text-sm text-muted-foreground">Or run:</span>
            <code className="text-sm font-mono text-tech-green">
              npx create-archbase-app@latest
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
