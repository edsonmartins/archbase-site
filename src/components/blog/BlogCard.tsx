import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import type { BlogPost } from '@/content/types';
import { CategoryPill } from './CategoryPill';
import { AuthorBadge } from './AuthorBadge';
import { useLocale } from 'next-intl';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const locale = useLocale();

  if (featured) {
    return (
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="group block"
      >
        <article className="relative overflow-hidden rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 to-purple-500/10 backdrop-blur-sm hover:border-brand-500/50 transition-all duration-300">
          {post.image && (
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CategoryPill category={post.category} />
              {post.featured && (
                <span className="flex items-center gap-1 text-xs text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {post.description}
            </p>
            <AuthorBadge
              author={post.author}
              authorAvatar={post.authorAvatar}
              authorTitle={post.authorTitle}
              date={post.date}
              readTime={post.readTime}
              locale={post.locale}
              compact
            />
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group block"
    >
      <article className="relative flex gap-4 p-5 rounded-xl border border-border bg-card/30 backdrop-blur hover:bg-card/60 hover:border-brand-500/30 transition-all duration-300">
        {/* Timeline dot */}
        <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-brand-500/20 border-2 border-brand-500/50" />
        <div className="hidden sm:block absolute -left-[9px] top-14 w-0.5 h-full bg-gradient-to-b from-brand-500/50 to-transparent" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <CategoryPill category={post.category} />
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString(post.locale === 'pt' ? 'pt-BR' : 'en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-brand-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {post.authorAvatar ? (
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">
                    {post.author.charAt(0)}
                  </span>
                </div>
              )}
              <span className="text-xs text-muted-foreground">{post.author}</span>
            </div>

            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-brand-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground hover:text-brand-400 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
