import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { getTopicBySlug, getAllTopicSlugs, getArticlesByTopic } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTopicSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};

  return {
    title: topic.title,
    description: topic.description,
    alternates: { canonical: `/topics/${slug}` },
    openGraph: {
      title: `${topic.title} | Audio Recording School`,
      description: topic.description,
      url: `/topics/${slug}`,
    },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  const articles = getArticlesByTopic(slug);

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {topic.title}
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">{topic.description}</p>

        {articles.length > 0 ? (
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-gray-500">No articles in this topic yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
