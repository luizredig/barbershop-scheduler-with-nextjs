import { fetchUserBookingsForToday } from "@/app/services/api/bookings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Booking } from "@prisma/client";
import UserBookingCard from "../user/UserBookingCard";

const TodayUserBookingCarousel = async () => {
  const bookings = await fetchUserBookingsForToday("1");

  return (
    <>
      <Carousel orientation="horizontal" className="w-full">
        <CarouselContent className="w-full">
          {bookings.length === 0 ? (
            <CarouselItem className="flex justify-center">
              <div>✂️ No bookings for today.</div>
            </CarouselItem>
          ) : (
            bookings.map((booking: Booking) => (
              <CarouselItem key={booking.id}>
                <div className="flex w-full basis-full">
                  <UserBookingCard booking={booking} />
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>

        <CarouselPrevious />

        <CarouselNext />
      </Carousel>
    </>
  );
};

export default TodayUserBookingCarousel;
