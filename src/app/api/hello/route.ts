import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: "Hello" })

}