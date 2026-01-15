'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Package,
  Zap,
  Layers,
  Shield,
  TrendingUp,
  Code2,
} from 'lucide-react';

interface ProductivityCard {
  icon: React.ElementType;
  title: string;
  metric: string;
  description: string;
  color: string;
  bgColor: string;
  badge?: string;
}

export function ProductivityCards() {
  const t = useTranslations('productivity');

  const cards: ProductivityCard[] = [
    {
      icon: Package,
      title: t('cards.boilerplate.title'),
      metric: t('cards.boilerplate.metric'),
      description: t('cards.boilerplate.description'),
      color: 'text-tech-blue',
      bgColor: 'bg-tech-blue/5',
      badge: '-70%',
    },
    {
      icon: Zap,
      title: t('cards.timeToFeature.title'),
      metric: t('cards.timeToFeature.metric'),
      description: t('cards.timeToFeature.description'),
      color: 'text-tech-green',
      bgColor: 'bg-tech-green/5',
      badge: '2d → 2h',
    },
    {
      icon: Layers,
      title: t('cards.patterns.title'),
      metric: t('cards.patterns.metric'),
      description: t('cards.patterns.description'),
      color: 'text-tech-purple',
      bgColor: 'bg-tech-purple/5',
      badge: 'DDD',
    },
    {
      icon: Shield,
      title: t('cards.typeSafety.title'),
      metric: t('cards.typeSafety.metric'),
      description: t('cards.typeSafety.description'),
      color: 'text-tech-orange',
      bgColor: 'bg-tech-orange/5',
      badge: 'E2E',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-green mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="metric-card group"
              >
                {/* Icon with background */}
                <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${card.color}`} />
                </div>

                {/* Badge */}
                {card.badge && (
                  <div className={`inline-block px-2 py-1 ${card.bgColor} ${card.color} rounded text-xs font-mono font-bold mb-2`}>
                    {card.badge}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-1">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>

                {/* Visual indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <div className={`h-1 flex-1 ${card.bgColor} rounded-full overflow-hidden`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      className={`h-full ${card.color.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-border-subtle rounded-xl bg-card/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-tech-blue" />
                <span className="text-2xl font-bold font-mono">10k+</span>
              </div>
              <p className="text-sm text-muted-foreground">Lines of code saved per project</p>
            </div>

            <div className="text-center p-6 border border-border-subtle rounded-xl bg-card/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-tech-green" />
                <span className="text-2xl font-bold font-mono">3x</span>
              </div>
              <p className="text-sm text-muted-foreground">Faster development cycle</p>
            </div>

            <div className="text-center p-6 border border-border-subtle rounded-xl bg-card/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-tech-purple" />
                <span className="text-2xl font-bold font-mono">0</span>
              </div>
              <p className="text-sm text-muted-foreground">Runtime type errors</p>
            </div>
          </div>
        </motion.div>

        {/* Developer testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <blockquote className="text-lg text-muted-foreground italic">
            "{t('testimonial')}"
          </blockquote>
          <p className="mt-4 text-sm font-mono text-tech-blue">
            — {t('testimonialAuthor')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
