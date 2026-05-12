import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscription from "@/models/Subscription";
import { auth } from "@/auth";

// GET all subscriptions
export const GET = auth(async (req) => {
  if (!req.auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await dbConnect();
    const subscriptions = await Subscription.find({}).sort({ createdAt: -1 });
    return NextResponse.json(subscriptions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

// POST new subscription
export const POST = auth(async (req) => {
  if (!req.auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { email, plan, status } = await req.json();
    await dbConnect();
    const newSubscription = await Subscription.create({ email, plan, status });
    return NextResponse.json(newSubscription, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});
