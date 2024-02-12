import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiAirplaneDeparture } from "react-icons/gi";

const contries = [
  {
    name: "Canada",
    flag: "./flags/canada.png",
  },
  {
    name: "United States",
    flag: "./flags/usa.png",
  },
  {
    name: "Australia",
    flag: "./flags/australia.png",
  },
];
const ShipOrder = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">
        <span className="font-bold">Ship </span>
        personal courier
      </h1>
      <ShipmentType />
    </div>
  );
};

export default ShipOrder;

const ShipmentType = () => {
  const [type, setType] = useState("domestic");
  return (
    <>
      <div className="border border-gray-200 rounded-2xl p-1 flex justify-between text-sm">
        <button
          onClick={() => setType("domestic")}
          className={`${
            type === "domestic" ? "bg-gray-200" : ""
          } w-[49%] p-2  rounded-2xl flex justify-center items-center gap-2`}
        >
          <CiDeliveryTruck className="text-lg" /> Domestic
        </button>
        <button
          onClick={() => setType("international")}
          className={`${
            type === "international" ? "bg-gray-200" : ""
          } w-[49%] p-2  rounded-2xl flex justify-center items-center gap-2`}
        >
          <GiAirplaneDeparture className="text-lg" /> International
        </button>
      </div>
      <ShipmentForm type={type} />
    </>
  );
};

const ShipmentForm = ({ type }) => {
  return (
    <div className="space-y-2">
      <TextField label={"Enter pickup pin code"} fullWidth />
      {type === "domestic" ? (
        <TextField label={"Enter delivery pin code"} fullWidth />
      ) : (
        <FormControl fullWidth>
          <InputLabel id="select-label">Select delivery country</InputLabel>
          <Select labelId="select-label" label="Select delivery country">
            {contries.map((country) => (
              <MenuItem value={country.name} key={country.name}>
                <img src={country.flag} alt="img" className="h-7 mx-5" />
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <button className="w-full bg-black rounded-md text-white text-sm px-2 py-3">
        Get OTP & Ship Now
      </button>

      <a href="#" className="mt-10 block text-center hover:text-red-500">
        Sign up to ship as a business here
      </a>
    </div>
  );
};
