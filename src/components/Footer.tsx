'use client';

import { useTranslations } from 'next-intl';
import { Github, BookOpen, Terminal, Star, GitFork, Package, CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useStats } from '@/lib/useStats';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const { stars, forks, version, isLoading } = useStats();

  const productLinks = [
    { href: 'https://github.com/edsonmartins/archbase-app-framework', label: t('framework') },
    { href: 'https://github.com/edsonmartins/archbase-react', label: t('react') },
    { href: 'https://github.com/relevant-solutions/archbase-react-boilerplate', label: t('reactBoilerplate') },
    { href: 'https://github.com/relevant-solutions/archbase-java-boilerplate', label: t('javaBoilerplate') },
  ];

  const resourceLinks = [
    { href: 'https://java.archbase.dev', label: t('documentation') },
    { href: `/${locale}/blog`, label: t('blog') },
  ];

  const quickActions = [
    { href: 'https://java.archbase.dev', label: t('cta.docs'), icon: BookOpen, primary: true },
    { href: 'https://github.com/edsonmartins/archbase-react-boilerplate', label: t('cta.clone'), icon: Terminal },
    { href: 'https://github.com/edsonmartins/archbase-react', label: t('cta.star'), icon: Star },
  ];

  // Dados dinâmicos do GitHub/NPM ou fallback
  const displayStars = stars || (isLoading ? '...' : null);
  const displayForks = forks || (isLoading ? '...' : null);
  const displayVersion = version || '3.0.0';

  return (
    <footer className="border-t border-border-subtle pt-16 pb-8 bg-card/30">
      <div className="container mx-auto px-6">
        {/* GitHub Stats Dashboard - Dados Reais */}
        <div className="mb-12 p-6 border border-border-subtle rounded-lg bg-card/50 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-muted-foreground" />
              <span className="font-mono text-sm text-muted-foreground">github.com/edsonmartins/archbase-react</span>
            </div>
            <a
              href="https://github.com/edsonmartins/archbase-react"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-tech-blue hover:underline flex items-center gap-1"
            >
              View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-tech-yellow" />
              <span className="text-muted-foreground">stars:</span>
              <span className="text-tech-yellow">{displayStars || '—'}</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="w-4 h-4 text-tech-cyan" />
              <span className="text-muted-foreground">forks:</span>
              <span className="text-tech-cyan">{displayForks || '—'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-tech-purple" />
              <span className="text-muted-foreground">version:</span>
              <span className="text-tech-purple">v{displayVersion}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-tech-green" />
              <span className="text-muted-foreground">build:</span>
              <span className="text-tech-green">passing</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border-subtle flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-green" />
              open source
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tech-blue" />
              MIT License
            </span>
            <a
              href="https://github.com/relevant-solutions/archbase/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-yellow hover:underline flex items-center gap-1.5"
            >
              <Star className="w-3 h-3" />
              {t('cta.star')}
            </a>
          </div>
        </div>

        {/* Quick CTAs */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`terminal-button text-sm ${
                    action.primary ? 'terminal-button-primary' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo_sem_texto_archbase_tema_light.png"
                alt="Archbase"
                className="h-8 w-auto dark:hidden"
              />
              <img
                src="/images/logo_sem_texto_archbase_tema_dark.png"
                alt="Archbase"
                className="h-8 w-auto hidden dark:block"
              />
              <span className="font-semibold text-lg">Archbase</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('description')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/relevant-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t('products')}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-tech-blue" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t('resources')}
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-tech-purple" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
              {t('legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/edsonmartins/archbase-react/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {t('license')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Archbase. MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            {t('by')}{' '}
            <a
              href="https://relevant.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-blue hover:text-tech-cyan transition-colors"
            >
              Relevant Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
