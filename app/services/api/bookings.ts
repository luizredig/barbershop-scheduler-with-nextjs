import api from "@/app/lib/axios";

export async function fetchUserBookingsForToday(userId: string) {
  try {
    const response = await api.post("/api/bookings/user-today", { userId });
    console.log("Bookings fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings");
  }
}
