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
      <article className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span>&middot;</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{article.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.topics.map(topic => (
                <Link
                  key={topic}
                  href={`/topics/${topic}`}
                  className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100"
                >
                  {topic.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </header>

          {/* Content */}
          <Prose>{renderContent(article.content)}</Prose>

          {/* Affiliate placeholder */}
          <aside className="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-500">
            <p className="font-medium text-gray-700 mb-1">Affiliate Disclosure</p>
            <p>
              Some links on this page may be affiliate links. If you make a purchase through them,
              we may earn a small commission at no extra cost to you. We only recommend products
              we genuinely believe in.{' '}
              <Link href="/affiliate-disclosure" className="text-blue-600 hover:underline">
                Learn more
              </Link>
              .
            </p>
          </aside>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map(ra => (
                  <Link
                    key={ra.slug}
                    href={`/blog/${ra.slug}`}
                    className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-semibold text-gray-900">{ra.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">{ra.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
