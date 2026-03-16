import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-bold text-gray-200">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">Page Not Found</h1>
        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved
          or doesn&apos;t exist.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
