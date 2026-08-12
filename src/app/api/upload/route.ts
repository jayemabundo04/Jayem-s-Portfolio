import { NextResponse } from "next/server";

export function POST() {
  return NextResponse.json(
    { message: "Uploads are reserved for a later admin phase." },
    { status: 501 }
  );
}
