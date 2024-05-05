import { NextResponse } from "next/server";
import { getSession } from "./actions";

export default async function middleware(request) {
  //   console.log(request.url, "request.url");
  console.log("middleware");

  const session = await getSession();
  console.log(Object.keys(session).length, "session");

  let isLoggedIn = Object.keys(session).length > 0 ? true : false;

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/premium"],
};
