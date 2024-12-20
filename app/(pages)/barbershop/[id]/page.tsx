import { notFound } from "next/navigation";
import { getBarbershopById } from "@/app/services/api/barbershops";
import { NavigationType } from "@/app/types/navigation";

export default async function BarbershopPage({ params }: NavigationType) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  const barbershop = await getBarbershopById(id);

  if (!barbershop) {
    notFound();
  }

  return <div className="flex flex-1 flex-col"></div>;
}
