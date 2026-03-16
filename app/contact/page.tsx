'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Contact Us</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll get back to you as soon as we can.
          </p>

          <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-vertical transition-colors"
                placeholder="What can we help you with?"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 px-6 py-3 text-sm font-semibold text-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Send Message
            </button>

            <p className="text-xs text-slate-400">
              Note: This form is a placeholder. Backend integration coming soon. In the meantime,
              you can reach us directly at{' '}
              <a href="mailto:hello@audiorecordingschool.net" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                hello@audiorecordingschool.net
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
