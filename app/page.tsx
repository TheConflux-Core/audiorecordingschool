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
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                Start Here
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {featuredArticle.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="mt-6 inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 px-6 py-3 text-sm font-semibold text-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                Read the Guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Topics grid */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Browse by Topic
          </h2>
          <TopicGrid topics={topics} />
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View all articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Audio Recording School</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We believe everyone should be able to capture great audio at home.
            Our guides are written for beginners — no engineering degree required.
            Just practical, honest advice that helps you record better starting today.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* Newsletter placeholder */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Stay in the Loop</h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              Get new recording tips, gear recommendations, and guides delivered to your inbox. No spam — just useful stuff.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:flex-1 rounded-lg px-4 py-3 text-sm bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
                disabled
              />
              <button
                type="button"
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 px-6 py-3 text-sm font-semibold text-white transition-all"
                disabled
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">Newsletter coming soon — sign up to be notified.</p>
          </div>
        </div>
      </section>
    </>
  );
}
