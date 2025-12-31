import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogPost } from '@/components/blog/BlogPost';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/request';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = ((locales as readonly string[]).includes(locale) ? locale : 'en') as 'en' | 'pt';
  const post = await getPostBySlug(slug, validLocale);

  if (!post) {
    return {
      title: 'Post Not Found | Archbase',
    };
  }

  return {
    title: `${post.title} | Archbase Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const posts = await getAllPosts(locale as 'en' | 'pt');
    for (const post of posts) {
      paths.push({
        locale: locale as string,
        slug: post.slug,
      });
    }
  }

  return paths;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const validLocale = ((locales as readonly string[]).includes(locale) ? locale : 'en') as 'en' | 'pt';

  const post = await getPostBySlug(slug, validLocale);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, validLocale, 3);

  // Get blog translations
  const messages = await getMessages({ locale: validLocale });
  const blogMessages = (messages as any).components.blog;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        <article className="py-12 relative">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <BlogPost
              post={post}
              relatedPosts={relatedPosts}
              locale={validLocale}
              translations={{
                backToBlog: blogMessages.backToBlog,
                relatedPosts: blogMessages.relatedPosts,
                share: blogMessages.share,
              }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
