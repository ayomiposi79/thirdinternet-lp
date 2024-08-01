import privyServer from "@/lib/privyServer";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("privy-token")?.value ?? "";
  try {
    // throws an error if token cant be verified
    await privyServer.verifyAuthToken(accessToken);
  } catch (error) {
    return NextResponse.redirect(new URL("/base-test", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/quiz/:path*",
};
