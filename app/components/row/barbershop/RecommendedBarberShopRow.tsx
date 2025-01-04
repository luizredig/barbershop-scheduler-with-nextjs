import { fetchAllBarbershops } from "@/app/services/api/barbershops";
import { Barbershop } from "@prisma/client";
import BarbershopCard from "../../barbershop/card/BarbershopCard";

const RecommendedBarberShopRow = async () => {
  const barbershops = await fetchAllBarbershops();

  return (
    <>
      <div className="flex w-full gap-4 overflow-x-auto px-5 pb-2 [&::-webkit-scrollbar]:hidden md:[&::-webkit-scrollbar]:flex">
        {barbershops.map((barbershop: Barbershop) => (
          <BarbershopCard key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </>
  );
};

export default RecommendedBarberShopRow;
