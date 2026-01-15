'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Github, BookOpen, Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Animated cursor component - optimized
const TypingCursor = () => (
  <motion.span
    className="inline-block w-2 h-5 bg-tech-blue ml-1"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
    style={{ willChange: 'opacity' }}
  />
);

// Code snippet for the hero
const codeSnippet = `import { ArchbaseDataGrid, useArchbaseDataSource }
  from '@archbase/data-grid';

function UsersList() {
  const dataSource = useArchbaseDataSource({
    queryKey: ['users'],
    queryFn: () => api.get('/users'),
  });

  return <ArchbaseDataGrid dataSource={dataSource} />
}`;

export function Hero() {
  const t = useTranslations('hero');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const targetCode = codeSnippet;

    const typingInterval = setInterval(() => {
      if (index < targetCode.length) {
        setDisplayedCode(targetCode.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        // Wait and restart
        setTimeout(() => {
          setDisplayedCode('');
          index = 0;
          setIsTyping(true);
        }, 8000);
      }
    }, 40); // Typing speed - optimized for performance

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-tech" />

      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Version badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="tech-badge tech-badge-blue">v3.0.0</span>
              <span className="tech-badge tech-badge-green">stable</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('title')}{' '}
              <span className="text-tech-blue">{t('highlight')}</span>
              <br />
              {t('title2')}{' '}
              <span className="text-tech-purple">{t('highlight2')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="https://java.archbase.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button terminal-button-primary text-base"
              >
                <BookOpen className="w-4 h-4" />
                {t('cta.docs')}
              </Link>

              <a
                href="https://github.com/edsonmartins/archbase-react"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-button text-base"
              >
                <Github className="w-4 h-4" />
                {t('cta.github')}
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>

              <Link
                href="#code"
                className="terminal-button text-base"
              >
                <Terminal className="w-4 h-4" />
                {t('cta.example')}
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex flex-wrap gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="status-dot green">production-ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot yellow">mit licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot green">100% typescript</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="code-window glow-tech">
              {/* Window header */}
              <div className="code-window-header">
                <div className="code-window-dots">
                  <div className="code-window-dot red" />
                  <div className="code-window-dot yellow" />
                  <div className="code-window-dot green" />
                </div>
                <span className="code-window-title">UsersList.tsx</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">TypeScript</span>
                  <span className="tech-badge tech-badge-blue text-xs">React</span>
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 min-h-[320px]">
                <pre className="text-sm code-font text-muted-foreground whitespace-pre-wrap">
                  <code>
                    <span className="text-tech-purple">{'import'}{' '}</span>
                    <span className="text-foreground">{'{ ArchbaseDataGrid, useArchbaseDataSource }'}{'\n'}</span>
                    <span className="text-foreground">{'  '}</span>
                    <span className="text-tech-purple">{'from'}{' '}</span>
                    <span className="text-tech-green">{"'@archbase/data-grid'"}{';'}{'\n\n'}</span>
                    <span className="text-tech-purple">{'function'}{' '}</span>
                    <span className="text-tech-yellow">{'UsersList'}{'() {'}</span>
                    <span className="text-foreground">{'\n  '}</span>
                    <span className="text-tech-purple">{'const'}{' '}</span>
                    <span className="text-foreground">{'dataSource = '}</span>
                    <span className="text-tech-yellow">{'useArchbaseDataSource'}{'({'}{'\n'}</span>
                    <span className="text-foreground">{'    queryKey: '}</span>
                    <span className="text-tech-green">{"['users']"}</span>
                    <span className="text-foreground">{'{},'}{'\n'}</span>
                    <span className="text-foreground">{'    queryFn: () => '}</span>
                    <span className="text-tech-yellow">{'api'}</span>
                    <span className="text-foreground">{'.'}</span>
                    <span className="text-tech-yellow">{'get'}</span>
                    <span className="text-foreground">{"('/users'),"}{'\n'}</span>
                    <span className="text-foreground">{"  });"}{'\n\n'}</span>
                    <span className="text-tech-purple">{'return'}{' '}</span>
                    <span className="text-foreground">{"<ArchbaseDataGrid dataSource={dataSource} />"}{'\n'}</span>
                    <span className="text-foreground">{'}'}</span>
                    {isTyping && <TypingCursor />}
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating elements around code */}
            <motion.div
              className="absolute -top-4 -right-4 tech-badge tech-badge-green"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Type Safe
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 tech-badge tech-badge-purple"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Production Ready
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-border-medium flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        </div>
      </motion.div>
    </section>
  );
}
