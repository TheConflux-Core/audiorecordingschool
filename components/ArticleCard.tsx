import Link from 'next/link';
import type { Article } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span>&middot;</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
        {article.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.topics.map(topic => (
          <span
            key={topic}
            className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {topic.replace(/-/g, ' ')}
          </span>
        ))}
      </div>
    </Link>
  );
}
