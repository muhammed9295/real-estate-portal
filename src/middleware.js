import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value;

  const loggedUserRestrictedPaths =
    request.nextUrl.pathname === "/agent-login" ||
    request.nextUrl.pathname === "/agent-register";

  if (loggedUserRestrictedPaths) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/agent-dashboard", request.url));
    }
  } else {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/agent-login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/agent-dashboard",
    "/agent-login",
    "/agent-register",
    "/agent-dashboard/all-listings",
    "/agent-dashboard/create-listing",
    "/agent-dashboard/profile/:id",
  ],
};
