import { TextField } from "@mui/material";
import GroupButtons from "../GroupButtons";
import { useState } from "react";

const TrackOrder = () => {
  const [button, setButton] = useState(0);
  const orderThroughButtons = ["Mobile", "AWB", "Order Id", "LRN"];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">
        <span className="font-bold">Track </span>
        your order through
      </h1>
      <div className="min-w-full rounded-lg shadow-lg space-y-3">
        <GroupButtons
          lables={orderThroughButtons}
          selectedButton={button}
          setButton={setButton}
        />
        {(button === 0 && (
          <TrackOrderInputMenus
            placeholder={"Enter Your Mobile Number"}
            buttonLable={"Get OTP"}
          />
        )) ||
          (button === 1 && (
            <TrackOrderInputMenus
              placeholder={"Enter Your AWB Number"}
              buttonLable={"Track Order"}
            />
          ))}
        {button === 2 && (
          <TrackOrderInputMenus
            placeholder={"Enter Your Order Id"}
            buttonLable={"Track Order"}
          />
        )}
        {button === 3 && (
          <TrackOrderInputMenus
            placeholder={"Enter Your LRN Number"}
            buttonLable={"Track Order"}
          />
        )}
      </div>
    </div>
  );
};

const TrackOrderInputMenus = ({ placeholder, buttonLable }) => {
  return (
    <div className="space-y-3">
      <TextField label={placeholder} fullWidth />
      <button className="w-full bg-black rounded-md text-white text-lg px-2 py-3">
        {buttonLable}
      </button>
    </div>
  );
};

export default TrackOrder;
