import { NextRequest, NextResponse } from 'next/server';
import { i18n } from '@/lib/i18n-config';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Only redirect if it's the root path or doesn't already have a locale
    if (pathname === '/') {
      return NextResponse.redirect(
        new URL(`/${i18n.defaultLocale}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
