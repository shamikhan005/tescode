import { NextResponse, type NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/api/getUserProblemInteractions', '/api/problemInteractions'],
};


