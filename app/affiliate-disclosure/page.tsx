import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'Affiliate Disclosure for Audio Recording School — how affiliate links work on our site and what they mean for you.',
  alternates: { canonical: '/affiliate-disclosure' },
  openGraph: {
    title: 'Affiliate Disclosure | Audio Recording School',
    description: 'Affiliate Disclosure for Audio Recording School.',
    url: '/affiliate-disclosure',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Affiliate Disclosure
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: March 1, 2026</p>

        <div className="mt-8 space-y-6 text-gray-600 leading-relaxed">
          <p>
            Audio Recording School is reader-supported. Some of the links on this website are
            affiliate links, meaning we may earn a small commission if you make a purchase
            through them — at no additional cost to you. This disclosure explains how affiliate
            relationships work on our site.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">What Are Affiliate Links?</h2>
          <p>
            Affiliate links are special URLs that track referrals from our site to a
            retailer&apos;s site. When you click on an affiliate link and make a purchase, the
            retailer pays us a small commission. This does not increase the price you pay — you
            pay the same price whether you use our link or go directly to the retailer.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Our Affiliate Programs</h2>
          <p>
            We participate in several affiliate programs, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Amazon Associates</li>
            <li>Sweetwater affiliate program</li>
            <li>B&H Photo affiliate program</li>
            <li>Other music and audio equipment retailers</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Our Commitment to You</h2>
          <p>
            Our editorial integrity is not for sale. We want to be completely transparent about
            how we earn money and how it affects (or doesn&apos;t affect) our recommendations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>We only recommend products we believe in.</strong> Every product we
              mention or link to is something we would recommend to a friend. We do not
              recommend products solely because they have an affiliate program.
            </li>
            <li>
              <strong>Our reviews are honest.</strong> If a product has flaws, we say so. Our
              affiliate relationships do not influence our editorial content.
            </li>
            <li>
              <strong>We recommend at multiple price points.</strong> We believe great recording
              is possible on any budget. Our guides always include options at different price
              levels, including free and low-cost alternatives.
            </li>
            <li>
              <strong>We disclose affiliate links.</strong> Any page containing affiliate links
              includes a disclosure notice. We want you to always know when a link is an
              affiliate link.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">How You Can Help</h2>
          <p>
            If you find our content helpful and want to support Audio Recording School, the
            best way is to use our affiliate links when making purchases. It costs you nothing
            extra and helps us continue creating free educational content for beginners.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or editorial policies,
            please{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              contact us
            </a>
            . We&apos;re happy to be transparent about how we operate.
          </p>
        </div>
      </div>
    </div>
  );
}
