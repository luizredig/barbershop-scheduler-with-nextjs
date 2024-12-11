import { prismaClient } from "@/app/lib/prisma";
import { Booking } from "@prisma/client";

export async function fetchUserBookingsForToday(userId: string) {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const userBookings: Booking[] = await prismaClient.booking.findMany({
      where: {
        userId,
        date: {
          gte: startOfToday,
          lt: endOfToday,
        },
      },
    });

    return userBookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings: Unknown error");
  }
}
