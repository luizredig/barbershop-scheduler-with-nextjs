import { prismaClient } from "@/app/lib/prisma";
import { Barbershop } from "@prisma/client";

export async function fetchAllBarbershops() {
  try {
    const barbershops: Barbershop[] = await prismaClient.barbershop.findMany(
      {},
    );

    return barbershops;
  } catch (error) {
    console.error("Error fetching barbershops:", error);
    throw new Error("Failed to fetch barbershops: Unknown error");
  }
}
