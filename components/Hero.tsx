import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 gradient-mesh overflow-hidden">
      {/* Extra gradient blob for depth */}
      <div className="gradient-mesh-extra" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight gradient-text animate-fade-up font-[family-name:var(--font-space-grotesk)]">
          Learn to Record Audio at Home
        </h1>
        <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Practical, beginner-friendly guides that cut through the jargon.
          No expensive gear required — just honest advice to help you capture great sound.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Link
            href="/blog/how-to-start-recording-audio-at-home"
            className="group relative rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-105"
          >
            <span className="relative z-10">Start Here</span>
          </Link>
          <Link
            href="/blog"
            className="glass-card px-8 py-4 text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          >
            Browse All Articles
          </Link>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-violet-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-violet-500 rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }} />
    </section>
  );
}
