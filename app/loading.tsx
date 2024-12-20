import Spinner from "./components/layout/Spinner";

const LoadingPage = () => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    </>
  );
};

export default LoadingPage;
