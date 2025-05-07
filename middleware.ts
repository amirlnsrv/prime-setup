import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) return;

  const locales = ['en', 'ru'];
  const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`));

  if (!hasLocale) {
    const locale = 'en';
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
}