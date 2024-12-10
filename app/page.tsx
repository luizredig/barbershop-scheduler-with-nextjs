import UserDate from "./components/home/UserDate";
import BarbershopSearch from "./components/search/BarbershopSearch";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-5 pt-5">
        <div className="px-5">
          <UserDate />
        </div>

        <div className="px-5">
          <BarbershopSearch />
        </div>
      </div>
    </>
  );
};

export default Home;
