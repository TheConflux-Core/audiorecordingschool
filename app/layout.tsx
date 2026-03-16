import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
