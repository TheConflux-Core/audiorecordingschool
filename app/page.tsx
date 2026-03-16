import Link from 'next/link';
import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import TopicGrid from '@/components/TopicGrid';
import { getAllArticles, getAllTopics } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Recording School — Learn to Record Audio at Home',
  description:
    'Practical, beginner-friendly guides to recording audio at home. No jargon, no gatekeeping — just honest advice.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Audio Recording School — Learn to Record Audio at Home',
    description:
      'Practical, beginner-friendly guides to recording audio at home. No jargon, no gatekeeping — just honest advice.',
    url: '/',
  },
};

export default function HomePage() {
  const articles = getAllArticles();
  const topics = getAllTopics();
  const featuredArticle = articles[0];

  return (
    <>
      <Hero />

      {/* Start Here feature */}
      {featuredArticle && (
        <section className="py-12 sm:py-16 lg:py-24 bg-white border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Start Here
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {featuredArticle.title}
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Read the Guide &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* Topics grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Browse by Topic
          </h2>
          <TopicGrid topics={topics} />
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Audio Recording School</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe everyone should be able to capture great audio at home.
            Our guides are written for beginners — no engineering degree required.
            Just practical, honest advice that helps you record better starting today.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* Newsletter placeholder */}
      <section className="py-12 sm:py-16 lg:py-24 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Stay in the Loop</h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            Get new recording tips, gear recommendations, and guides delivered to your inbox. No spam — just useful stuff.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400"
              disabled
            />
            <button
              type="button"
              className="w-full sm:w-auto rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
              disabled
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-blue-200">Newsletter coming soon — sign up to be notified.</p>
        </div>
      </section>
    </>
  );
}
