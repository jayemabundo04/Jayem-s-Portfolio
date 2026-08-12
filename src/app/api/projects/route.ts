import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { message: "Projects API is reserved for the database phase." },
    { status: 501 }
  );
}

export function POST() {
  return NextResponse.json(
    { message: "Project creation is reserved for the admin phase." },
    { status: 501 }
  );
}
