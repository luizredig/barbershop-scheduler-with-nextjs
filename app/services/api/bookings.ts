import api from "@/app/lib/axios";

export async function fetchUserBookingsForToday(userId: string) {
  try {
    const response = await api.post("/bookings/user-today", { userId });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings");
  }
}
