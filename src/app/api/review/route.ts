import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";
import { reviewCode } from "../../../lib/gemini";

export async function POST(req: Request) {
//   const session = await auth();

//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

  const { code, language } = await req.json();

  if (!code || !language) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const review = await reviewCode(code, language);
  return NextResponse.json(review);
}
