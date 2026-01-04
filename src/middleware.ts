// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // const pathname = new URL(req.url).pathname;

  const sessionToken = req.cookies.get("better-auth.session_token") || req.cookies.get("__Secure-better-auth.session_token");
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-portal", "/donation"],
};
