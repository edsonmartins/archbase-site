'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import type { BlogPost } from '@/content/types';
import { BlogCard } from './BlogCard';
import { getCategoryColor } from '@/lib/blog-utils';

interface BlogFeedClientProps {
  posts: BlogPost[];
  locale: 'en' | 'pt';
  translations: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    featured: string;
    showingPosts: string;
    noPosts: string;
  };
}

export function BlogFeedClient({ posts, locale, translations }: BlogFeedClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map(post => post.category));
    return Array.from(cats);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 relative border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-3xl">
          {/* Logo */}
          <div className="mb-6">
            <img
              src="/images/logo_sem_texto_archbase_tema_dark.png"
              alt="Archbase Blog"
              className="h-8 w-auto"
            />
          </div>
          <span className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/5 text-brand-400 text-sm mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {translations.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {translations.subtitle}
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={translations.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card/50 focus:outline-none focus:border-brand-500/50 transition-colors text-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-brand-500 text-white'
                : 'bg-card/30 border border-border hover:bg-card/60'
            }`}
          >
            {translations.allCategories}
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${getCategoryColor(category)} text-white`
                  : 'bg-card/30 border border-border hover:bg-card/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-muted-foreground">
        {translations.showingPosts.replace('{count}', String(filteredPosts.length))}
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-amber-400">⭐</span> {translations.featured}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map(post => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
        </div>
        </div>
      )}

      {/* Regular Posts - Timeline */}
      {regularPosts.length > 0 && (
        <div className="space-y-4">
          {regularPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* No results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{translations.noPosts}</p>
        </div>
      )}
    </>
  );
}
