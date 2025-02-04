import { db } from "../../lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Get user IP & User-Agent
    const ip = req.headers.get("x-forwarded-for") || "Unknown IP";
    const userAgent = req.headers.get("user-agent") || "Unknown User-Agent";

    // Save to Firestore
    await db.collection("inquiries").add({
      name,
      email,
      message,
      ip,
      userAgent,
      timestamp: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.error("Firestore Error:", error);
    return NextResponse.json(
      { error: "Failed to save message." },
      { status: 500 }
    );
  }
}
