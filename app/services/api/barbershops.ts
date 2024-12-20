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

export const getBarbershopById = async (id: string) => {
  try {
    const barbershop = await prismaClient.barbershop.findUnique({
      where: { id },
    });
    return barbershop;
  } catch (error) {
    console.error("Error fetching barbershop:", error);
    return null;
  }
};
