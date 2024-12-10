import { prismaClient } from "@/app/lib/prisma";
import { Barbershop } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const barbershops: Barbershop[] = await prismaClient.barbershop.findMany(
      {},
    );

    return NextResponse.json(barbershops);
  } catch (error) {
    if (!(error instanceof Error)) {
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 },
      );
    }
  }
}
