import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Audio Recording School is a free educational resource dedicated to helping beginners record great audio at home without expensive gear or confusing jargon.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Audio Recording School',
    description:
      'Audio Recording School is a free educational resource dedicated to helping beginners record great audio at home.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">About Audio Recording School</h1>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              Audio Recording School was created to fill a gap in the recording education landscape.
              Most online resources assume you already know the basics, or they push expensive gear
              as the solution to every problem. We take a different approach.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Our Mission</h2>
            <p>
              We believe that great audio recordings start with knowledge, not gear. Our guides are
              written for beginners who want to record music, podcasts, voiceovers, or any other
              audio at home. We focus on what actually matters — technique, room acoustics, signal
              flow, and practical problem-solving — rather than getting lost in gear reviews and
              spec sheets.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">What We Cover</h2>
            <p>
              Our content spans the full journey of home recording, from setting up your first
              microphone to understanding compression and EQ. We organize our guides into five
              core topics: Recording Fundamentals, Home Studio Setup, Gear & Equipment, Podcast
              & Voice Recording, and Troubleshooting.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Our Approach</h2>
            <p>
              Every guide on Audio Recording School is written with three principles in mind:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Practical over theoretical.</strong> We focus on what you can do today,
                not abstract concepts you don&apos;t need yet.
              </li>
              <li>
                <strong className="text-white">Budget-conscious.</strong> We recommend gear at multiple price points and
                always prioritize technique over expensive equipment.
              </li>
              <li>
                <strong className="text-white">Honest and transparent.</strong> If we recommend a product, we explain
                exactly why and disclose any affiliate relationships. Our editorial content is
                never influenced by sponsorships.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Who We&apos;re For</h2>
            <p>
              Whether you&apos;re starting your first podcast, learning to record vocals, setting up a
              home studio for music production, or just trying to get better-sounding audio from
              your existing setup, Audio Recording School is for you. Our guides assume no prior
              knowledge and build your understanding step by step.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Get Started</h2>
            <p>
              New to recording? Start with our{' '}
              <a href="/blog/how-to-start-recording-audio-at-home" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                beginner&apos;s guide
              </a>{' '}
              to get up and running. Already recording but running into problems? Check out our{' '}
              <a href="/topics/troubleshooting" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                troubleshooting guides
              </a>{' '}
              to diagnose and fix common issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
