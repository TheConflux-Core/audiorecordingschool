import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Audio Recording School. Have a question, suggestion, or just want to say hello? We\'d love to hear from you.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Audio Recording School',
    description: 'Get in touch with Audio Recording School.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
