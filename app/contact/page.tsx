'use client';

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
          Fill out the form below and we&apos;ll get back to you as soon as we can.
        </p>

        <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-vertical"
              placeholder="What can we help you with?"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-500">
            Note: This form is a placeholder. Backend integration coming soon. In the meantime,
            you can reach us directly at{' '}
            <a href="mailto:hello@audiorecordingschool.net" className="text-blue-600 hover:underline">
              hello@audiorecordingschool.net
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
