export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorAvatar?: string;
  authorTitle?: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
  featured?: boolean;
  content: string;
  locale: 'en' | 'pt';
}

export interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  authorAvatar?: string;
  authorTitle?: string;
  category: string;
  tags: string[];
  readTime: number;
  image?: string;
  featured?: boolean;
}
