'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import {
  Server,
  Database,
  GitBranch,
  Layers,
  Cpu,
  HardDrive,
  MessageSquare,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { motion } from 'framer-motion';

// Particle component for data flow animation - optimized
const DataParticle = ({ delay }: { delay: number }) => (
  <motion.div
    className="particle"
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [-60, 60],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: 'linear',
      repeatType: 'loop',
    }}
    style={{
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      willChange: 'transform, opacity',
    }}
  />
);

interface LayerItem {
  name: string;
  icon: React.ElementType;
  description: string;
}

const presentationItems: LayerItem[] = [
  { name: 'React v3', icon: Server, description: 'UI Components' },
  { name: 'Next.js', icon: Server, description: 'SSR/SSG' },
  { name: 'TanStack Query', icon: Database, description: 'Data Fetching' },
];

const applicationItems: LayerItem[] = [
  { name: 'CQRS', icon: GitBranch, description: 'Command/Query' },
  { name: 'Workflows', icon: Layers, description: 'Process Engine' },
  { name: 'Event Bus', icon: MessageSquare, description: 'Event Driven' },
];

const domainItems: LayerItem[] = [
  { name: 'Entities', icon: Layers, description: 'Core Models' },
  { name: 'Aggregates', icon: GitBranch, description: 'Consistency' },
  { name: 'Value Objects', icon: Cpu, description: 'Immutable' },
];

const infrastructureItems: LayerItem[] = [
  { name: 'JPA/Hibernate', icon: Database, description: 'ORM' },
  { name: 'Redis', icon: HardDrive, description: 'Cache' },
  { name: 'Message Broker', icon: MessageSquare, description: 'Async' },
];

export function ArchitectureDiagram() {
  const t = useTranslations('architecture');
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-tech opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tech-badge tech-badge-purple mb-4">{t('title')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('subtitle')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-4xl mx-auto">
          {/* Presentation Layer */}
          <motion.div
            className="arch-layer mb-8"
            data-label={t('layers.presentation')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHoveredLayer('presentation')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="grid grid-cols-3 gap-4">
              {presentationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="bg-card/50 border border-border-subtle rounded-lg p-4 text-center transition-all duration-300 hover:border-tech-cyan hover:bg-card"
                  >
                    <Icon className="w-6 h-6 text-tech-cyan mx-auto mb-2" />
                    <div className="font-mono text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Expanded info on hover */}
            {hoveredLayer === 'presentation' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-tech-cyan/5 border border-tech-cyan/20 rounded-lg"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-tech-cyan font-mono">HTTP/REST</span> API endpoints,
                  React components with hooks, server-side rendering with Next.js
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Connector with particles */}
          <div className="relative h-16 flex items-center justify-center">
            <div className="arch-connector h-8" />
            <DataParticle delay={0} />
            <span className="absolute bg-background px-3 text-xs font-mono text-tech-blue">
              HTTP/REST
            </span>
          </div>

          {/* Application Layer */}
          <motion.div
            className="arch-layer mb-8"
            data-label={t('layers.application')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={() => setHoveredLayer('application')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="grid grid-cols-3 gap-4">
              {applicationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="bg-card/50 border border-border-subtle rounded-lg p-4 text-center transition-all duration-300 hover:border-tech-blue hover:bg-card"
                  >
                    <Icon className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                    <div className="font-mono text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                );
              })}
            </div>

            {hoveredLayer === 'application' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-tech-blue/5 border border-tech-blue/20 rounded-lg"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-tech-blue font-mono">Commands/Queries</span> orchestration,
                  workflow engine for complex processes, event-driven messaging
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Connector with particles */}
          <div className="relative h-16 flex items-center justify-center">
            <div className="arch-connector h-8" />
            <DataParticle delay={0.5} />
            <span className="absolute bg-background px-3 text-xs font-mono text-tech-purple">
              Domain Events
            </span>
          </div>

          {/* Domain Layer */}
          <motion.div
            className="arch-layer mb-8 border-tech-purple/30"
            data-label={t('layers.domain')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredLayer('domain')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="grid grid-cols-3 gap-4">
              {domainItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="bg-card/50 border border-border-subtle rounded-lg p-4 text-center transition-all duration-300 hover:border-tech-purple hover:bg-card"
                  >
                    <Icon className="w-6 h-6 text-tech-purple mx-auto mb-2" />
                    <div className="font-mono text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                );
              })}
            </div>

            {hoveredLayer === 'domain' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-tech-purple/5 border border-tech-purple/20 rounded-lg"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-tech-purple font-mono">DDD</span> core domain logic,
                  business rules invariants, ubiquitous language
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Connector with particles */}
          <div className="relative h-16 flex items-center justify-center">
            <div className="arch-connector h-8" />
            <DataParticle delay={1} />
            <span className="absolute bg-background px-3 text-xs font-mono text-tech-green">
              Repositories
            </span>
          </div>

          {/* Infrastructure Layer */}
          <motion.div
            className="arch-layer"
            data-label={t('layers.infrastructure')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setHoveredLayer('infrastructure')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="grid grid-cols-3 gap-4">
              {infrastructureItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="bg-card/50 border border-border-subtle rounded-lg p-4 text-center transition-all duration-300 hover:border-tech-green hover:bg-card"
                  >
                    <Icon className="w-6 h-6 text-tech-green mx-auto mb-2" />
                    <div className="font-mono text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                  </div>
                );
              })}
            </div>

            {hoveredLayer === 'infrastructure' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-tech-green/5 border border-tech-green/20 rounded-lg"
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-tech-green font-mono">Persistence</span>, caching,
                  messaging, external integrations
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-tech-cyan" />
            <span className="text-muted-foreground">Presentation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-tech-blue" />
            <span className="text-muted-foreground">Application</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-tech-purple" />
            <span className="text-muted-foreground">Domain</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-tech-green" />
            <span className="text-muted-foreground">Infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
