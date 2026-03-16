import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for Audio Recording School — the rules and guidelines for using our website.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms & Conditions | Audio Recording School',
    description: 'Terms and Conditions for Audio Recording School.',
    url: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-400">Last updated: March 1, 2026</p>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed">
          <p>
            Welcome to Audio Recording School. By accessing or using our website
            audiorecordingschool.net (the &quot;Site&quot;), you agree to be bound by these Terms and
            Conditions. If you do not agree with any part of these terms, please do not use the
            Site.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Use of the Site</h2>
          <p>
            The content on this Site is provided for general educational and informational
            purposes only. You may browse, read, and share our content for personal,
            non-commercial purposes. You may not reproduce, distribute, modify, or create
            derivative works from our content without our prior written consent.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, logos, images, and software —
            is the property of Audio Recording School or its content creators and is protected by
            copyright, trademark, and other intellectual property laws. Unauthorized use of any
            content may violate applicable laws.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">User-Generated Content</h2>
          <p>
            If you submit content to the Site (such as comments, reviews, or contact form
            messages), you grant us a non-exclusive, royalty-free, perpetual license to use,
            reproduce, modify, and distribute that content in connection with the Site. You are
            solely responsible for the content you submit and must not submit anything unlawful,
            defamatory, or infringing on the rights of others.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Disclaimer of Warranties</h2>
          <p>
            The Site and its content are provided &quot;as is&quot; and &quot;as available&quot; without any
            warranties of any kind, either express or implied. We do not warrant that the Site
            will be uninterrupted, secure, or error-free, or that the information on the Site
            is accurate, complete, or current.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Audio Recording School shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages arising
            from your use of or inability to use the Site, including but not limited to damages
            for loss of profits, data, or goodwill.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services that are not owned or
            controlled by us. We have no control over and assume no responsibility for the
            content, privacy policies, or practices of any third-party sites. We strongly advise
            you to read the terms and conditions and privacy policy of any third-party site you
            visit.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Affiliate Relationships</h2>
          <p>
            Some links on the Site are affiliate links. We may earn a commission when you
            purchase products through these links. For more information, see our{' '}
            <a href="/affiliate-disclosure" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Affiliate Disclosure
            </a>
            .
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Audio Recording School and its owners,
            operators, and contributors from any claims, damages, liabilities, and expenses
            arising from your use of the Site or your violation of these Terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the Site. Your continued use of the Site after any
            changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            United States, without regard to conflict of law provisions.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-white pt-4">Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <a href="mailto:legal@audiorecordingschool.net" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              legal@audiorecordingschool.net
            </a>
            .
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
