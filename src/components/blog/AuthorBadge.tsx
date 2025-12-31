import { User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

interface AuthorBadgeProps {
  author: string;
  authorAvatar?: string;
  authorTitle?: string;
  date: string;
  readTime: number;
  locale: 'en' | 'pt';
  compact?: boolean;
}

export function AuthorBadge({
  author,
  authorAvatar,
  authorTitle,
  date,
  readTime,
  locale,
  compact = false,
}: AuthorBadgeProps) {
  const dateFormat = locale === 'pt' ? 'dd/MM/yyyy' : 'MMM dd, yyyy';
  const dateLocale = locale === 'pt' ? ptBR : enUS;
  const formattedDate = format(new Date(date), dateFormat, { locale: dateLocale });
  const readTimeText = locale === 'pt' ? `${readTime} min de leitura` : `${readTime} min read`;

  if (compact) {
    return (
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>{formattedDate}</span>
        <span>•</span>
        <span>{readTimeText}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {authorAvatar ? (
        <img
          src={authorAvatar}
          alt={author}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/30"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
      <div className="flex flex-col">
        <span className="font-medium text-foreground">{author}</span>
        {authorTitle && (
          <span className="text-xs text-muted-foreground">{authorTitle}</span>
        )}
      </div>
      <div className="ml-auto text-sm text-muted-foreground">
        <span>{formattedDate}</span>
        <span className="mx-2">•</span>
        <span>{readTimeText}</span>
      </div>
    </div>
  );
}
