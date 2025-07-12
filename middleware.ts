import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Compatível com Edge

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verifica o token
    await jwtVerify(token, SECRET);
    return NextResponse.next(); // Token é válido
  } catch (error) {
    // Token inválido ou expirado
    console.error("Token inválido ou expirado:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/account/:path*", "/checkout/:path*"],
};
