import "@/app/css/scrollbar.css";

import TodayUserBookingCarousel from "./components/carousel/TodayUserBookingCarousel";
import UserDate from "./components/home/UserDate";
import RecommendedBarberShopsRow from "./components/row/barbershop/RecommendedBarberShopRow";
import BarbershopSearch from "./components/search/BarbershopSearch";
import Title from "./components/typography/Title";
import PopularBarbershopsRow from "./components/row/barbershop/PopularBarbershopsRow";

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-5 pb-12 pt-5">
        <div className="px-5">
          <UserDate />
        </div>

        <div className="px-5 py-3">
          <BarbershopSearch />
        </div>

        <div className="flex w-full flex-col justify-center gap-3">
          <Title title={"Bookings"} className="px-5" />

          <div className="flex w-full justify-center px-[70px]">
            <TodayUserBookingCarousel />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Title title={"Recommended"} className="px-5" />

          <RecommendedBarberShopsRow />
        </div>

        <div className="flex flex-col gap-3">
          <Title title={"Popular"} className="px-5" />

          <PopularBarbershopsRow />
        </div>
      </div>
    </>
  );
};

export default Home;
