import { Calendar, Clock, User } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import type { BlogPost } from '@/content/types';
import { CategoryPill } from './CategoryPill';
import { ShareButtons } from './ShareButtons';

interface BlogPostProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
  locale: 'en' | 'pt';
  translations?: {
    backToBlog: string;
    relatedPosts: string;
    share: string;
  };
}

export function BlogPost({ post, relatedPosts = [], locale, translations }: BlogPostProps) {
  const t = translations || {
    backToBlog: locale === 'pt' ? 'Voltar para o Blog' : 'Back to Blog',
    relatedPosts: locale === 'pt' ? 'Posts Relacionados' : 'Related Posts',
    share: locale === 'pt' ? 'Compartilhar este post' : 'Share this post',
  };

  const dateLocale = locale === 'pt' ? ptBR : enUS;
  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy', { locale: dateLocale });
  const readTimeText = locale === 'pt' ? `${post.readTime} min de leitura` : `${post.readTime} min read`;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        {/* Logo */}
        <div className="mb-6">
          <a href={`/${locale}/blog`} className="inline-block">
            <img
              src="/images/logo_sem_texto_archbase_tema_dark.png"
              alt="Archbase"
              className="h-8 dark:h-8 h-auto w-auto"
            />
          </a>
        </div>

        {/* Back button */}
        <a
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          ← {t.backToBlog}
        </a>

        {/* Category */}
        <div className="mb-4">
          <CategoryPill category={post.category} />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-6">
          {post.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-brand-500/30"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{post.author}</span>
              {post.authorTitle && (
                <span className="text-xs">{post.authorTitle}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTimeText}</span>
          </div>
        </div>

        {/* Share buttons */}
        <ShareButtons title={post.title} slug={post.slug} locale={locale} />

        {/* Cover image */}
        {post.image && (
          <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs bg-card/50 border border-border text-muted-foreground hover:text-brand-400 hover:border-brand-500/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-foreground
          prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
          prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-brand-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-code:text-brand-400 prose-code:bg-brand-500/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-card/50 prose-pre:border prose-pre:border-border
          prose-blockquote:border-l-brand-500 prose-blockquote:bg-brand-500/5
          prose-ul:text-muted-foreground
          prose-ol:text-muted-foreground
          prose-li:text-muted-foreground
          prose-hr:border-border"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Author section */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-start gap-4">
          {post.authorAvatar ? (
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-500/30"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
          )}
          <div>
            <h3 className="font-semibold text-foreground text-lg">{post.author}</h3>
            {post.authorTitle && (
              <p className="text-sm text-muted-foreground mb-2">{post.authorTitle}</p>
            )}
            <p className="text-sm text-muted-foreground">
              {locale === 'pt'
                ? `${post.author} é desenvolvedor core do Archbase e contribui ativamente para o ecossistema.`
                : `${post.author} is a core developer of Archbase and actively contributes to the ecosystem.`
              }
            </p>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">{t.relatedPosts}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <a
                key={relatedPost.slug}
                href={`/${locale}/blog/${relatedPost.slug}`}
                className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card/60 hover:border-brand-500/30 transition-all duration-300"
              >
                <CategoryPill category={relatedPost.category} className="mb-3" />
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand-400 transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {relatedPost.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
