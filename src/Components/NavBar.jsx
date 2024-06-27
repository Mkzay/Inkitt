import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const openUp = isOpen
    ? "-translate-x-[100%] duration-500 ease-out"
    : "translate-x-0 duration-500 ease-in";

  return (
    <div className="flex items-center justify-between py-10 px-4 fixed w-full top-0 lg:px-8 lg:py-5">
      <button
        onClick={openMenu}
        className="border border-black w-11 h-11 flex items-center justify-center rounded-full lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div>
        <h1 className="text-3xl font-cursive font-semibold">inkitt.</h1>
      </div>
      <ul className="items-center justify-between gap-6 space-x-4 bg-white text-black text-sm py-2.5 pl-10 pr-3 rounded-full font-semibold hidden lg:flex">
        <li>Free Books</li>
        <li>Community</li>
        <li>Galatea</li>
        <li>Writing Contests</li>
        <li>Sign In</li>
        <li className="bg-black rounded-full text-white py-2 px-4">Sign Up</li>
      </ul>
      <button className="border border-black w-11 h-11 flex items-center justify-center rounded-full">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <MobileMenu openMenu={openMenu} openUp={openUp} />
    </div>
  );
};

export default NavBar;
