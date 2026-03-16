import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          Learn to Record Audio at Home
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Practical, beginner-friendly guides that cut through the jargon.
          No expensive gear required — just honest advice to help you capture great sound.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog/how-to-start-recording-audio-at-home"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Start Here
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
