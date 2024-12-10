import { prismaClient } from "@/app/lib/prisma";
import { Booking } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RequestBody = {
  userId: string;
};

export async function POST(request: NextRequest) {
  try {
    const { userId } = (await request.json()) as RequestBody;

    if (!userId) {
      return NextResponse.json({ status: 400, message: "User ID is required" });
    }

    const userBookings: Booking[] = await prismaClient.booking.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(userBookings);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    }
  }
}
