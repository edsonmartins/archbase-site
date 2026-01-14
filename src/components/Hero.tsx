'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Github, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useTranslations('nav');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/images/logo_com_texto_archbase_tema_light.png"
              alt="Archbase Logo"
              className="h-24 mx-auto dark:hidden"
            />
            <img
              src="/images/logo_com_texto_archbase_tema_dark.png"
              alt="Archbase Logo"
              className="h-24 mx-auto hidden dark:block"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/5 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-brand-400">Open Source Framework</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in animation-delay-100">
            {t('title')}{' '}
            <span className="gradient-text">{t('highlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            {t('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Link
              href="#features"
              className="group px-8 py-4 bg-gradient-to-r from-brand-600 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 glow-sm"
            >
              {t('cta.primary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com/relevant-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              {t('cta.secondary')}
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 animate-fade-in animation-delay-400">
            {['React 19', 'TypeScript', 'Next.js', 'Java 17', 'Spring Boot', 'DDD'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Code Window Preview */}
        <div className="mt-20 max-w-3xl mx-auto animate-fade-in">
          <div className="rounded-xl border border-border bg-card/50 backdrop-blur overflow-hidden glow-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">UserService.java</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">
                <code>
                  <span className="text-purple-400">@Service</span>
                  <span className="text-foreground">
{'\n'}
                  </span>
                  <span className="text-purple-400">public class</span>
                  <span className="text-green-400"> UserService</span>
                  <span className="text-foreground"> {'{'}{'\n'}</span>
                  <span className="text-foreground">  </span>
                  <span className="text-purple-400">public</span>
                  <span className="text-foreground"> User </span>
                  <span className="text-blue-400">create</span>
                  <span className="text-foreground">(</span>
                  <span className="text-green-400">CreateUserCommand</span>
                  <span className="text-foreground"> cmd) {'{'}{'\n'}</span>
                  <span className="text-foreground">    </span>
                  <span className="text-green-400">User</span>
                  <span className="text-foreground"> user = </span>
                  <span className="text-green-400">User</span>
                  <span className="text-foreground">.create(cmd);{'\n'}</span>
                  <span className="text-foreground">    </span>
                  <span className="text-purple-400">return</span>
                  <span className="text-foreground"> repository.save(user);{'\n'}</span>
                  <span className="text-foreground">  </span>
                  <span className="text-white">{'}'}</span>
                  <span className="text-foreground">{'\n'}</span>
                  <span className="text-white">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-border/50 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
