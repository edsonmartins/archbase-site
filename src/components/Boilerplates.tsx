'use client';

import { useTranslations } from 'next-intl';
import { Rocket, FileCode, Check } from 'lucide-react';

export function Boilerplates() {
  const t = useTranslations('boilerplate');

  return (
    <section id="boilerplate" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/5 mb-6">
            <Rocket className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400">Quick Start</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Boilerplates */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* React Boilerplate */}
          <div className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur hover:border-brand-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold">{t('react.title')}</h3>
              </div>

              <p className="text-muted-foreground mb-6 font-mono text-sm">
                {t('react.stack')}
              </p>

              <ul className="space-y-3">
                {t.raw('react.features').map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/relevant-solutions/archbase-react-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3 rounded-lg border border-border hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Rocket className="w-4 h-4" />
                Get Started
              </a>
            </div>
          </div>

          {/* Java Boilerplate */}
          <div className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <FileCode className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">{t('java.title')}</h3>
              </div>

              <p className="text-muted-foreground mb-6 font-mono text-sm">
                {t('java.stack')}
              </p>

              <ul className="space-y-3">
                {t.raw('java.features').map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/relevant-solutions/archbase-java-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-3 rounded-lg border border-border hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Rocket className="w-4 h-4" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
