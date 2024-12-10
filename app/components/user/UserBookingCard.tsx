import { Booking } from "@prisma/client";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";

type UserBookingCardProps = {
  booking: Booking;
};

const UserBookingCard = ({ booking }: UserBookingCardProps) => {
  return (
    <>
      <Card className="flex h-fit w-full">
        <CardContent className="flex w-full gap-0 p-0">
          <div className="flex w-full flex-col gap-2 overflow-hidden py-2 pl-2">
            <Badge
              variant={"outline"}
              className="w-fit rounded-full border-none bg-amber-400/50 text-amber-300"
            >
              Pendente
            </Badge>

            <span className="truncate">{booking.serviceId}</span>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>{booking.barbershopId[0]}</AvatarFallback>
              </Avatar>

              <span className="truncate">{booking.barbershopId}</span>
            </div>
          </div>

          <div className="flex h-full w-24 min-w-24 max-w-24 flex-col justify-center overflow-hidden border-l p-2">
            <span className="truncate">{booking.date.toString()}</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default UserBookingCard;
