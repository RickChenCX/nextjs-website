import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  // console.log(req);
  if (req.url === "/unAuth") {
    return NextResponse.redirect("/sayHello");
  }
}
