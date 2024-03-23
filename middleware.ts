import { NextRequest,  NextResponse } from "next/server";

export function middleware(request: NextRequest){

  const token = request.cookies.get('token')?.value;
  
  if(request.nextUrl.pathname !== '/login' && !token){
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if(request.nextUrl.pathname === '/login' && token){
    return NextResponse.redirect(new URL('/patients', request.url));
  }


}

export const config = {
  matcher: [
    //match only paths
    '/((?!.*\\.).*)'
  ],
}

