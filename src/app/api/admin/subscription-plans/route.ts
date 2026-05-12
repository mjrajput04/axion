import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import SubscriptionPlan from "@/models/SubscriptionPlan";
import { auth } from "@/auth";

export const GET = auth(async (req) => {
  if (!req.auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const plans = await SubscriptionPlan.find({}).sort({ monthlyPrice: 1 });
    return NextResponse.json(plans);
  } catch (error: any) {
    console.error("GET /api/admin/subscription-plans error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

export const POST = auth(async (req) => {
  if (!req.auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    
    // Ensure tier is lowercase
    if (data.tier) {
      data.tier = data.tier.toLowerCase().trim();
    }

    await dbConnect();
    const plan = await SubscriptionPlan.create(data);
    return NextResponse.json(plan, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/admin/subscription-plans error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});
