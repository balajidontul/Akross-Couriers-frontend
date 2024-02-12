import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const navlist = [
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Solutions",
    path: "/solutions",
  },
  {
    title: "Partner",
    path: "/partner",
  },
  {
    title: "Company",
    path: "/company",
  },
  {
    title: "Track",
    path: "/track",
  },
  {
    title: "Support",
    path: "/support",
  },
];
const Navbar = () => {
  const [mouseOver, setMouseOver] = useState(-1);
  return (
    <nav className="fixed z-50 top-0 w-screen bg-black h-20 flex justify-between items-center px-5 lg:px-16">
      {/* logo  */}
      <div className="flex items-center space-x-2 align-middle">
        <img src="/tyre2.png" alt="" className="h-10 animate-spin" />

        <h1 className="text-3xl font-bold text-white font-oxanium uppercase">
          AKROSS
        </h1>
      </div>
      <div className="text-white text-lg hidden lg:block">
        <ul className="flex items-center space-x-10">
          {navlist.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  onMouseOver={() => setMouseOver(index)}
                  onMouseLeave={() => setMouseOver(-1)}
                  to={item.path}
                >
                  {item.title}
                  {mouseOver === index && (
                    <div className="h-1 w-7 bg-red-500"></div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className=" hidden font-sans text-black text-lg font-semibold bg-white px-4 py-1 lg:flex justify-between items-center rounded-sm ">
        Ship Now{" "}
        <MdKeyboardArrowDown className="text-3xl text-slate-500 hover:rotate-180 duration-500" />
      </div>

      <div className="block lg:hidden">
        <SlMenu className="text-3xl text-white hover:rotate-180 duration-500" />
      </div>
    </nav>
  );
};

export default Navbar;
