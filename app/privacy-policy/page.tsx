import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Audio Recording School — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Audio Recording School',
    description: 'Privacy Policy for Audio Recording School.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-400">Last updated: March 1, 2026</p>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
          <p>
            Audio Recording School (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
            audiorecordingschool.net (the &quot;Site&quot;). This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our Site.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-white">Personal Data:</strong> When you voluntarily provide it — such as when you
              subscribe to our newsletter, fill out a contact form, or leave a comment — we may
              collect your name, email address, and any other information you choose to provide.
            </li>
            <li>
              <strong className="text-white">Usage Data:</strong> We automatically collect certain information when you
              visit the Site, including your IP address, browser type, operating system, referring
              URLs, pages viewed, and the dates/times of your visits.
            </li>
            <li>
              <strong className="text-white">Cookies and Tracking:</strong> We use cookies and similar tracking technologies
              to enhance your experience and analyze site usage. You can control cookies through
              your browser settings.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our Site</li>
            <li>Send you newsletters and marketing communications (with your consent)</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Analyze usage patterns and improve our Site</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Third-Party Services</h2>
          <p>
            We may use third-party service providers to help us operate the Site, including
            analytics services, email marketing platforms, and hosting providers. These third
            parties have access to your personal information only to perform specific tasks on
            our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Affiliate Links</h2>
          <p>
            Our Site contains affiliate links. When you click on these links and make a purchase,
            we may receive a commission. These links do not affect the price you pay. For more
            information, see our{' '}
            <a href="/affiliate-disclosure" className="text-blue-600 hover:underline">
              Affiliate Disclosure
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information. However, no method of transmission over the Internet is 100% secure, and
            we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, including
            the right to access, correct, delete, or restrict processing of your data. To exercise
            these rights, contact us at{' '}
            <a href="mailto:privacy@audiorecordingschool.net" className="text-blue-600 hover:underline">
              privacy@audiorecordingschool.net
            </a>
            .
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Children&apos;s Privacy</h2>
          <p>
            Our Site is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@audiorecordingschool.net" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              privacy@audiorecordingschool.net
            </a>
            .
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
