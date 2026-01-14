'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Globe } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n/request';

export function Header() {
  const t = useTranslations('nav');
  const tLang = useTranslations('langSwitch');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const navLinks = [
    { href: '#features', label: t('features'), internal: false },
    { href: '#react', label: t('components'), internal: false },
    { href: '#components', label: 'All Components', internal: false },
    { href: '#boilerplate', label: 'Boilerplates', internal: false },
    { href: '#code', label: 'Code', internal: false },
    { href: '/blog', label: t('blog'), internal: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const Component = link.internal ? Link : 'a';
              const href = link.internal ? `/${locale}${link.href}` : link.href;
              return (
                <Component
                  key={link.href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Component>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => switchLocale(locale === 'en' ? 'pt' : 'en')}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'en' ? tLang('pt') : tLang('en')}</span>
            </button>

            <a
              href="https://github.com/relevant-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>{t('github')}</span>
            </a>

            <a
              href="https://react.archbase.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {t('docs')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Component = link.internal ? Link : 'a';
                const href = link.internal ? `/${locale}${link.href}` : link.href;
                return (
                  <Component
                    key={link.href}
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Component>
                );
              })}
              <div className="h-px bg-border/50" />
              <button
                onClick={() => switchLocale(locale === 'en' ? 'pt' : 'en')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{locale === 'en' ? tLang('pt') : tLang('en')}</span>
              </button>
              <a
                href="https://github.com/relevant-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>{t('github')}</span>
              </a>
              <a
                href="https://react.archbase.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {t('docs')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
