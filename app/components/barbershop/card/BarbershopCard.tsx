import { Barbershop } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

type BarbershopCardProps = {
  barbershop: Barbershop;
};

const BarbershopCard = ({ barbershop }: BarbershopCardProps) => {
  return (
    <>
      <Card className="h-72 w-40 min-w-40 max-w-40 rounded-2xl">
        <CardContent className="flex h-full w-full flex-col p-0">
          <div className="max-h-1/2 flex h-1/2">
            <Image
              src={barbershop.imageUrl}
              width={0}
              height={0}
              alt={barbershop.name}
              className="min-h-full w-full rounded-3xl object-cover p-1"
              sizes="100vw"
            />
          </div>

          <div className="min-h-1/2 g flex h-1/2 flex-col justify-between p-3 pt-0">
            <div className="flex flex-col gap-2">
              <span className="truncate text-lg">{barbershop.name}</span>

              <span className="text-sm text-muted-foreground">
                {barbershop.address}
              </span>
            </div>

            <Link href={`/barbershop/${barbershop.id}`} className="flex w-full">
              <Button className="w-full bg-muted font-semibold">Book</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BarbershopCard;
