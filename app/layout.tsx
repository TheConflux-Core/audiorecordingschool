import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://audiorecordingschool.net'),
  title: {
    default: 'Audio Recording School — Learn to Record Audio at Home',
    template: '%s | Audio Recording School',
  },
  description:
    'Practical, beginner-friendly guides to recording audio at home. No jargon, no gatekeeping — just honest advice that helps you capture great sound.',
  openGraph: {
    type: 'website',
    siteName: 'Audio Recording School',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-adsense-account': 'ca-pub-9010847486693166',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9010847486693166"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
