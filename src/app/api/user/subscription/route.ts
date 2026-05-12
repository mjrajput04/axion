import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/models/Subscriber";
import { auth } from "@/auth";

export const GET = auth(async (req) => {
  if (!req.auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const subscriber = await Subscriber.findOne({ email: req.auth.user?.email });
    
    return NextResponse.json({ 
      isSubscribed: !!subscriber && subscriber.status === 'active',
      subscriber 
    });
  } catch (error: any) {
    console.error("GET /api/user/subscription error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});
