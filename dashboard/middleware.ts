import { NextRequest, NextResponse } from 'next/server'
import { STORAGE_KEYS } from './constants/storageKeys'
import { ROUTES } from './constants/routes'

export function middleware(request: NextRequest) {
  const token = request.cookies.get(STORAGE_KEYS.ACCESS_TOKEN)?.value;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith(ROUTES.AUTH)) {
    if (token) {
      return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL(ROUTES.AUTH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
