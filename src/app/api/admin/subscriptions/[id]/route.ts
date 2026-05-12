import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscription from "@/models/Subscription";
import { auth } from "@/auth";

// PATCH update subscription
export const PATCH = auth(async (req) => {
  if (!req.auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const id = req.nextUrl.pathname.split('/').pop();
    const { status, plan } = await req.json();
    await dbConnect();
    const updated = await Subscription.findByIdAndUpdate(id, { status, plan }, { new: true });
    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

// DELETE subscription
export const DELETE = auth(async (req) => {
  if (!req.auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const id = req.nextUrl.pathname.split('/').pop();
    await dbConnect();
    await Subscription.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});
