import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import env from '@/lib/env';

import { locales } from '../i18n/config';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

// Returns url with matching locale
const pathNameRegex = (path: string[]) =>
  RegExp(
    `^(/(${locales.join('|')}))?(${path
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i',
  );

// This function can be marked `async` if using `await` inside
const middleware = (request: NextRequest) => {
  const isAuthenticated = request.cookies.has('refresh_token');
  const { pathname } = request.nextUrl;
  const isAuthPages = pathNameRegex(['/login']).test(pathname);
  const isPublicPages = pathNameRegex(['/']).test(pathname);

  // Let user view public pages whether he is authenticated or not
  if (isPublicPages || true) {
    // temporary by pass the Authentication
    return intlMiddleware(request);
  }

  // Check whether user is authenticated
  if (isAuthenticated) {
    return intlMiddleware(request);
  }

  if (!isAuthenticated) {
    // When user is not authenticated and tries to access login/register page allow it
    if (isAuthPages) {
      return intlMiddleware(request);
    }
    // Redirect user if he is not authenticated
    return NextResponse.redirect(`${env.frontEndBaseUrl}/login`);
  }

  return intlMiddleware(request);
};

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(np|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};

export default middleware;
