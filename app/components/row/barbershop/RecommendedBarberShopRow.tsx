import { fetchAllBarbershops } from "@/app/services/api/barbershops";
import { Barbershop } from "@prisma/client";
import BarbershopCard from "../../barbershop/card/BarbershopCard";

const RecommendedBarberShopRow = async () => {
  const barbershops = await fetchAllBarbershops();

  return (
    <>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop: Barbershop) => (
          <BarbershopCard key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </>
  );
};

export default RecommendedBarberShopRow;
