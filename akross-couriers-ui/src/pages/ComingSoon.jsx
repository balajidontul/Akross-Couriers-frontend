import { useState, useEffect } from "react";
import { formatTime } from "../utils/formatTime"; // assuming you have a utility function to format time

const ComingSoon = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = new Date("2024-03-01T23:59:59"); // Change this to your target date

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-screen h-screen fixed -z-10 ">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full left-0 top-0 object-cover"
        >
          <source src="./roads.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 text-gray-300 font-serif">
        <div className="text-center space-y-20 ">
          <h1 className="text-6xl lg:text-8xl font-bold mb-4 uppercase lg:tracking-widest">
            We&rsquo;re Coming Soon
          </h1>
          <div className="flex justify-center items-center space-x-5 lg:space-x-20">
            <div className="mx-2 flex flex-col space-y-2">
              <span className="text-6xl font-bold">
                {formatTime(countdown.days)}
              </span>
              <span className="text-xl">Days</span>
            </div>
            <div className="mx-2 flex flex-col space-y-2">
              <span className="text-6xl font-bold">
                {formatTime(countdown.hours)}
              </span>
              <span className="text-xl">Hours</span>
            </div>
            <div className="mx-2 flex flex-col space-y-2">
              <span className="text-6xl font-bold">
                {formatTime(countdown.minutes)}
              </span>
              <span className="text-xl">Minutes</span>
            </div>
            <div className="mx-2 flex flex-col space-y-2">
              <span className="text-6xl font-bold">
                {formatTime(countdown.seconds)}
              </span>
              <span className="text-xl">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
