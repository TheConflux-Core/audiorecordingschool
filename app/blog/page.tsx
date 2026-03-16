import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getAllArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Browse all articles from Audio Recording School — guides on home recording, microphones, studio setup, and more.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Audio Recording School',
    description:
      'Browse all articles from Audio Recording School — guides on home recording, microphones, studio setup, and more.',
    url: '/blog',
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">All Articles</h1>
        <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl">
          Practical guides on home recording, gear, techniques, and troubleshooting.
          Written for beginners — no engineering degree required.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
