import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Placeholder middleware for rate limiting and admin route protection
// TODO: Implement proper authentication and rate limiting when backend is added

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin route protection placeholder
  // TODO: When authentication is implemented, check for valid session/token
  // if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
  //   const isAuthenticated = checkAdminAuth(request)
  //   if (!isAuthenticated) {
  //     return NextResponse.redirect(new URL("/admin/login", request.url))
  //   }
  // }

  // Rate limiting placeholder
  // TODO: Implement actual rate limiting using Upstash Redis or Vercel Edge Config
  // const rateLimitResult = await checkRateLimit(identifier, limit, window)
  // if (!rateLimitResult.success) {
  //   return NextResponse.json(
  //     { error: "Too many requests" },
  //     { status: 429 }
  //   )
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
