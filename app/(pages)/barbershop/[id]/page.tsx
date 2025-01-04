import { notFound } from "next/navigation";
import { getBarbershopById } from "@/app/services/api/barbershops";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BarbershopPage({ params }: any) {
  const { id } = params;

  if (!id) {
    notFound();
  }

  const barbershop = await getBarbershopById(id);

  if (!barbershop) {
    notFound();
  }

  return <div className="flex flex-1 flex-col"></div>;
}
