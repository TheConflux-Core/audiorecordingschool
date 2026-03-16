import Link from 'next/link';
import type { Article } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block glass-card p-6 glow-hover hover:border-cyan-400/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span>&middot;</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200 font-[family-name:var(--font-space-grotesk)]">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
        {article.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.topics.map(topic => (
          <span
            key={topic}
            className="inline-block rounded-full bg-gradient-to-r from-cyan-400/10 to-violet-500/10 border border-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-300"
          >
            {topic.replace(/-/g, ' ')}
          </span>
        ))}
      </div>
    </Link>
  );
}
