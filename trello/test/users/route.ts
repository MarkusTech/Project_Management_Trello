import { NextResponse } from "next/server";

// route handler
export function GET() {
  return NextResponse.json({
    hello: "Trello",
  });
}

export function POST() {
  return NextResponse.json({
    hello: "Trello",
  });
}

export function PATCH() {
  return NextResponse.json({
    hello: "Trello",
  });
}
