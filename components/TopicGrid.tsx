import Link from 'next/link';
import type { Topic } from '@/lib/content';

export default function TopicGrid({ topics }: { topics: Topic[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {topics.map(topic => (
        <Link
          key={topic.slug}
          href={`/topics/${topic.slug}`}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-base font-semibold text-gray-900">{topic.title}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{topic.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-blue-600">
            Browse articles &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}
