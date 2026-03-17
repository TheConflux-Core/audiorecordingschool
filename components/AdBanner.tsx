'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  responsive?: boolean;
}

/**
 * Google AdSense Ad Unit Placeholder
 *
 * Usage:
 *   <AdBanner slot="1234567890" />
 *   <AdBanner slot="1234567890" format="rectangle" />
 *
 * To activate: Replace the placeholder with your AdSense ad unit code.
 * Until a real `slot` ID is provided, this component renders nothing.
 */
export default function AdBanner({
  slot,
  format = 'auto',
  className = '',
  responsive = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const isConfigured = slot && slot.length >= 10;

  useEffect(() => {
    if (!isConfigured) return;
    try {
      // @ts-ignore — adsbygoogle is loaded via Script in layout
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Silently fail if AdSense script isn't loaded yet
    }
  }, [isConfigured]);

  if (!isConfigured) {
    // Renders nothing until a real slot ID is configured
    return null;
  }

  return (
    <div className={`ad-container my-6 ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9010847486693166"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
