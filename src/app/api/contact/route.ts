import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json(
    { message: "Contact message storage is reserved for the database phase." },
    { status: 501 }
  );
}
