// import { auth } from "@/app/_lib/auth";
// import { NextResponse } from "next/server";

// export const proxy = auth((req) => {
//   if (!req.auth && req.nextUrl.pathname !== "/about") {
//     const newUrl = new URL("/about", req.nextUrl.href);
//     return NextResponse.redirect(newUrl);
//   }
// });

export { auth as proxy } from "@/app/_lib/auth";

export const config = {
  matcher: ["/account"], // These are the protected routes
};
