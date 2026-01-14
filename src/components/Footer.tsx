'use client';

import { useTranslations } from 'next-intl';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const productLinks = [
    { href: 'https://github.com/relevant-solutions/archbase-app-framework', label: t('framework') },
    { href: 'https://github.com/relevant-solutions/archbase-react-v3', label: t('react') },
    { href: 'https://github.com/relevant-solutions/archbase-react-boilerplate', label: t('reactBoilerplate') },
    { href: 'https://github.com/relevant-solutions/archbase-java-boilerplate', label: t('javaBoilerplate') },
  ];

  const resourceLinks = [
    { href: 'https://react.archbase.dev', label: t('documentation') },
    { href: 'https://github.com/relevant-solutions/archbase-react-v3/blob/main/examples', label: t('examples') },
    { href: `/${locale}/blog`, label: t('blog') },
  ];

  const legalLinks = [
    { href: '#', label: t('privacy') },
    { href: '#', label: t('terms') },
    { href: '#', label: t('license') },
  ];

  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
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
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t('products')}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">{t('resources')}</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Archbase. {t('license')}
          </p>
          <p className="text-sm text-muted-foreground">
            {t('madeWith')} <span className="text-red-500">❤</span> {t('by')}{' '}
            <a
              href="https://relevant.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              Relevant Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
