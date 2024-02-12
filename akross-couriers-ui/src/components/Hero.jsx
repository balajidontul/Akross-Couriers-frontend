import OrderCard from "./OrderCard/OrderCard";

const Hero = () => {
  return (
    <main className="lg:max-h-screen overflow-hidden mt-20 lg:mt-24 lg:mx-5 relative ">
      <img
        src="/main.jpg"
        alt=""
        className="top-0 left-0 w-full h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-10" />

      <div className="absolute top-0 left-0 z-20   h-full w-full flex flex-col md:flex-row md:p-5">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold tracking-wide p-5">
            We are India&rsquo;s largest fully integrated
            <span className="text-red-500"> logistics services</span> provider
          </h1>
        </div>
        <div className=" w-full h-full p-5 flex justify-center items-center">
          <OrderCard />
        </div>
      </div>
    </main>
  );
};

export default Hero;
