import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, LanguageType, Locale } from "./i18n.config";
import { Pages, Routes } from "./components/constants";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: LanguageType[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  let locale = "";

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    locale = i18n.defaultLocale;
  }
  return locale;
}

export async function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  const currentLocale = request.url.split("/")[3] as Locale;
  const isAuth = await request.cookies.has("token");
  const isAuthPage = pathname.startsWith(`/${currentLocale}/${Routes.AUTH}`);
  const protectedRoutes = [Routes.ADMIN];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(`/${currentLocale}/${route}`),
  );
  // if user not loggedin and try to acess protected route
  if (!isAuth && isProtectedRoute) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/${Routes.AUTH}/${Pages.LOGIN}`, request.url),
    );
  }
  // if user loggedin and try to acess auth routes
  if (isAuthPage && isAuth) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/${Routes.ADMIN}`, request.url),
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo.png|robots.txt|public|fonts|sitemap.xml|favicon.png|sitemap-0.xml|google8e7f23dceea156e6.html|uploads|favicon.png).*)",
  ],
};
