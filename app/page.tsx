import TodayUserBookingCarousel from "./components/carousel/TodayUserBookingCarousel";
import UserDate from "./components/home/UserDate";
import RecommendedBarberShopRow from "./components/row/barbershop/RecommendedBarberShopRow";
import BarbershopSearch from "./components/search/BarbershopSearch";
import Title from "./components/typograph/Title";

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

        <div className="flex h-full w-full flex-col justify-center gap-3">
          <Title title={"Bookings"} className="px-5" />

          <div className="flex w-full justify-center px-[70px]">
            <TodayUserBookingCarousel />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Title title={"Recommended"} className="px-5" />

          <RecommendedBarberShopRow />
        </div>
      </div>
    </>
  );
};

export default Home;
