import api from "@/app/lib/axios";

export async function fetchAllBarbershops() {
  try {
    const response = await api.get("/barbershops/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching barbershops:", error);
    throw new Error("Failed to fetch barbershops");
  }
}
