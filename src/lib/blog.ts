import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { BlogPost, BlogPostMetadata } from '@/content/types';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

// Cores para categorias
export const categoryColors: Record<string, string> = {
  'Release': 'from-green-500 to-emerald-600',
  'Lançamento': 'from-green-500 to-emerald-600',
  'Tutorial': 'from-blue-500 to-indigo-600',
  'News': 'from-purple-500 to-pink-600',
  'Notícias': 'from-purple-500 to-pink-600',
  'Features': 'from-cyan-500 to-blue-600',
  'Recursos': 'from-cyan-500-to-blue-600',
  'Community': 'from-orange-500 to-red-600',
  'Comunidade': 'from-orange-500 to-red-600',
  'default': 'from-gray-500 to-gray-600',
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] || categoryColors['default'];
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(content);
  return result.toString();
}

export async function getAllPosts(locale: 'en' | 'pt'): Promise<BlogPost[]> {
  const localeDir = path.join(CONTENT_DIR, locale);

  if (!fs.existsSync(localeDir)) {
    return [];
  }

  const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.md'));

  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(localeDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const metadata = data as BlogPostMetadata;

    // Extract slug from filename (remove date prefix and .md extension)
    const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '');

    const htmlContent = await processMarkdown(content);

    posts.push({
      slug,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      author: metadata.author,
      authorAvatar: metadata.authorAvatar,
      authorTitle: metadata.authorTitle,
      category: metadata.category,
      tags: metadata.tags || [],
      readTime: metadata.readTime || 5,
      image: metadata.image,
      featured: metadata.featured || false,
      content: htmlContent,
      locale,
    });
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string, locale: 'en' | 'pt'): Promise<BlogPost | null> {
  const posts = await getAllPosts(locale);
  return posts.find(post => post.slug === slug) || null;
}

export async function getFeaturedPosts(locale: 'en' | 'pt'): Promise<BlogPost[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.featured);
}

export async function getPostsByCategory(category: string, locale: 'en' | 'pt'): Promise<BlogPost[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.category === category);
}

export async function getPostsByTag(tag: string, locale: 'en' | 'pt'): Promise<BlogPost[]> {
  const posts = await getAllPosts(locale);
  return posts.filter(post => post.tags.includes(tag));
}

export async function getCategories(locale: 'en' | 'pt'): Promise<string[]> {
  const posts = await getAllPosts(locale);
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export async function getTags(locale: 'en' | 'pt'): Promise<string[]> {
  const posts = await getAllPosts(locale);
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags).sort();
}

export async function getRelatedPosts(
  currentSlug: string,
  locale: 'en' | 'pt',
  limit: number = 3
): Promise<BlogPost[]> {
  const posts = await getAllPosts(locale);
  const currentPost = posts.find(p => p.slug === currentSlug);

  if (!currentPost) {
    return [];
  }

  // Filter posts that share at least one tag or category
  const related = posts.filter(post => {
    if (post.slug === currentSlug) return false;
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag));
    return sharedTags.length > 0 || post.category === currentPost.category;
  });

  // Sort by relevance (number of shared tags) then by date
  related.sort((a, b) => {
    const aSharedTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
    const bSharedTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
    if (aSharedTags !== bSharedTags) {
      return bSharedTags - aSharedTags;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return related.slice(0, limit);
}
