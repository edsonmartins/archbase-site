import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogFeedClient } from '@/components/blog/BlogFeedClient';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n/request';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = ((locales as readonly string[]).includes(locale) ? locale : 'en') as 'en' | 'pt';

  const title = validLocale === 'pt' ? 'Blog | Archbase' : 'Blog | Archbase';
  const description = validLocale === 'pt'
    ? 'Últimas notícias e atualizações da equipe Archbase'
    : 'Latest news and updates from the Archbase team';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const validLocale = ((locales as readonly string[]).includes(locale) ? locale : 'en') as 'en' | 'pt';
  const messages = await getMessages({ locale: validLocale });
  const blogMessages = (messages as any).components.blog;

  const posts = await getAllPosts(validLocale);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen">
        <section className="py-12 pb-24 relative">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto pb-8">
              <BlogFeedClient
                posts={posts}
                locale={validLocale}
                translations={{
                  title: blogMessages.title,
                  subtitle: blogMessages.subtitle,
                  searchPlaceholder: blogMessages.searchPlaceholder,
                  allCategories: blogMessages.allCategories,
                  featured: blogMessages.featured,
                  showingPosts: blogMessages.showingPosts,
                  noPosts: blogMessages.noPosts,
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
