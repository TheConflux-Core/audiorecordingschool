import Link from 'next/link';
import type { Topic } from '@/lib/content';

export default function TopicGrid({ topics }: { topics: Topic[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {topics.map((topic, index) => (
        <Link
          key={topic.slug}
          href={`/topics/${topic.slug}`}
          className="group glass-card p-6 glow-hover hover:border-cyan-400/30 transition-all duration-300 animate-fade-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Gradient accent */}
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-4" />
          
          <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200 font-[family-name:var(--font-space-grotesk)]">
            {topic.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {topic.description}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
            Browse articles &rarr;
          </span>
        </Link>
      ))}
    </div>
  );
}
