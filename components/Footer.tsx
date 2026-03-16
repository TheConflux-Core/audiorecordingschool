import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-white font-bold text-lg">Audio Recording School</p>
            <p className="mt-3 text-sm leading-relaxed">
              Practical, beginner-friendly guides to recording audio at home. No jargon, no gatekeeping — just honest advice that works.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Topics</h3>
            <ul className="space-y-2">
              <li><Link href="/topics/recording-fundamentals" className="text-sm hover:text-white transition-colors">Recording Fundamentals</Link></li>
              <li><Link href="/topics/home-studio-setup" className="text-sm hover:text-white transition-colors">Home Studio Setup</Link></li>
              <li><Link href="/topics/gear-and-equipment" className="text-sm hover:text-white transition-colors">Gear & Equipment</Link></li>
              <li><Link href="/topics/podcast-and-voice-recording" className="text-sm hover:text-white transition-colors">Podcast & Voice</Link></li>
              <li><Link href="/topics/troubleshooting" className="text-sm hover:text-white transition-colors">Troubleshooting</Link></li>
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Site</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-sm hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Audio Recording School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
