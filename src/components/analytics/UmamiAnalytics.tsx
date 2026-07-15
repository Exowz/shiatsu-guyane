'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Umami (privacy-friendly, cookieless) analytics endpoint.
const UMAMI_SRC = 'https://analytics.shiatsu-guyane.com/script.js';
const UMAMI_WEBSITE_ID = 'be253ce8-b074-47a9-8a6b-fbe38cdf3c07';

/**
 * Returns true only when the visitor has granted analytics consent via the
 * cookie banner. Mirrors the values written by CookieConsentBanner.
 */
function analyticsConsentGranted(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent || consent === 'rejected') return false;

    const prefs = localStorage.getItem('cookie-preferences');
    if (!prefs) {
      // "accepted" (accept all) without a stored preference object still counts.
      return consent === 'accepted';
    }
    return JSON.parse(prefs)?.analytics === true;
  } catch {
    return false;
  }
}

/**
 * Loads the Umami tracking script only after the visitor consents to
 * analytics. Listens for `cookie-consent-changed` so acceptance takes effect
 * immediately, without a page reload.
 */
export function UmamiAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(analyticsConsentGranted());
    sync();
    window.addEventListener('cookie-consent-changed', sync);
    return () => window.removeEventListener('cookie-consent-changed', sync);
  }, []);

  if (!enabled) return null;

  return (
    <Script
      defer
      src={UMAMI_SRC}
      data-website-id={UMAMI_WEBSITE_ID}
      strategy="afterInteractive"
    />
  );
}
