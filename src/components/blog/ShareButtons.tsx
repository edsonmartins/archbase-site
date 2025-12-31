'use client';

import { useState } from 'react';
import { Link2, Twitter, Linkedin, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ShareButtonsProps {
  title: string;
  slug: string;
  locale: string;
}

export function ShareButtons({ title, slug, locale }: ShareButtonsProps) {
  const t = useTranslations('components.blog');
  const [copied, setCopied] = useState(false);

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const url = `${baseUrl}/${locale}/blog/${slug}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">{t('share')}</span>

      <button
        onClick={handleCopy}
        className="p-2 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-brand-500/50 transition-all duration-300 group"
        title={t('copyLink')}
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Link2 className="w-4 h-4 text-muted-foreground group-hover:text-brand-400" />
        )}
      </button>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-blue-500/50 transition-all duration-300 group"
        title="Share on Twitter"
      >
        <Twitter className="w-4 h-4 text-muted-foreground group-hover:text-blue-400" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-blue-600/50 transition-all duration-300 group"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-blue-500" />
      </a>

      {copied && (
        <span className="text-xs text-green-500 font-medium animate-fade-in">
          {t('copied')}
        </span>
      )}
    </div>
  );
}
