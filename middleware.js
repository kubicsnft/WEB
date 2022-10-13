// middleware.js

import { NextResponse } from 'next/server';

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = 'CN';

// Trigger this middleware to run on the `/dragonKeeper` route
export const config = {
  matcher: '/dragonKeeper',
};

export function middleware(req) {
  // Extract country. Default to US if not found.
  const country = (req.geo && req.geo.country) || 'US';

  console.log(`Visitor from ${country}`);

  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = '/blocked';
  } else {
    req.nextUrl.pathname = `/dragonKeeper`;
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
}


