// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);
//   return NextResponse.redirect(new URL("/about", request.url));
// }

//the auth also help us a middleware
import { auth } from "@/app/_lib/auth";
export const middleware = auth;
//when we want to run the middleware
export const config = {
  matcher: ["/account"],
};
