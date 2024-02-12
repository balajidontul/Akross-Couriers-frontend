import { useState } from "react";
import TrackOrder from "./TrackOrder";
import ShipOrder from "./ShipOrder";

const OrderCard = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="w-full lg:w-[70%] h-fit bg-white rounded-md shadow-xl p-6 space-y-5">
      <ul className="flex gap-10 text-lg text-gray-500 border-b-2 border-gray-200">
        <li
          className={
            tab === 1 && "border-b-4 border-red-500 font-semibold text-black"
          }
          onClick={() => setTab(1)}
        >
          Track Order
        </li>
        <li
          className={
            tab === 2 && "border-b-4 border-red-500 font-semibold text-black"
          }
          onClick={() => setTab(2)}
        >
          Ship Order
        </li>
      </ul>

      <div>{tab === 1 ? <TrackOrder /> : <ShipOrder />}</div>
    </div>
  );
};

export default OrderCard;
