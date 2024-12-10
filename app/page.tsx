import TodayUserBookingCarousel from "./components/carousel/TodayUserBookingCarousel";
import UserDate from "./components/home/UserDate";
import BarbershopSearch from "./components/search/BarbershopSearch";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-5 pt-5">
        <div className="px-5">
          <UserDate />
        </div>

        <div className="px-5 py-3">
          <BarbershopSearch />
        </div>

        <div className="flex h-full w-full flex-col justify-center gap-2">
          <span className="px-5 font-semibold uppercase text-muted-foreground">
            Bookings
          </span>

          <div className="flex w-full justify-center px-[70px]">
            <TodayUserBookingCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
