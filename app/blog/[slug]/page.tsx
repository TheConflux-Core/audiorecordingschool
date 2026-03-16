import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Prose from '@/components/Prose';
import { getArticleBySlug, getAllArticleSlugs, getArticleBySlug as getArticle } from '@/lib/content';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      url: `/blog/${slug}`,
    },
  };
}

function renderContent(content: Article['content']) {
  return content.map((block, i) => {
    switch (block.type) {
      case 'intro':
        return <p key={i} className="text-xl text-gray-600 leading-relaxed">{block.text}</p>;
      case 'h2':
        return <h2 key={i}>{block.text}</h2>;
      case 'h3':
        return <h3 key={i}>{block.text}</h3>;
      case 'p':
        return <p key={i}>{block.text}</p>;
      case 'ul':
        return (
          <ul key={i}>
            {block.items?.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        );
      case 'ol':
        return (
          <ol key={i}>
            {block.items?.map((item, j) => <li key={j}>{item}</li>)}
          </ol>
        );
      default:
        return null;
    }
  });
}

import type { Article } from '@/lib/content';

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = article.relatedArticles
    .map(s => getArticle(s))
    .filter(Boolean) as Article[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'Audio Recording School',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Audio Recording School',
      url: 'https://audiorecordingschool.net',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://audiorecordingschool.net/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
            {/* Header */}
            <header className="mb-8 sm:mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>&middot;</span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {article.title}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-300 leading-relaxed">{article.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.topics.map(topic => (
                  <Link
                    key={topic}
                    href={`/topics/${topic}`}
                    className="inline-block rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-500/10 border border-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-300 hover:border-cyan-400/40 transition-colors"
                  >
                    {topic.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
            </header>

            {/* Content */}
            <Prose>{renderContent(article.content)}</Prose>

            {/* Affiliate placeholder */}
            <aside className="my-8 rounded-lg border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="font-medium text-white mb-1">Affiliate Disclosure</p>
              <p>
                Some links on this page may be affiliate links. If you make a purchase through them,
                we may earn a small commission at no extra cost to you. We only recommend products
                we genuinely believe in.{' '}
                <Link href="/affiliate-disclosure" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more
                </Link>
                .
              </p>
            </aside>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-12 pt-8 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {relatedArticles.map(ra => (
                    <Link
                      key={ra.slug}
                      href={`/blog/${ra.slug}`}
                      className="rounded-lg border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all"
                    >
                      <h3 className="text-sm font-semibold text-white">{ra.title}</h3>
                      <p className="mt-1 text-xs text-slate-400">{ra.readTime}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
