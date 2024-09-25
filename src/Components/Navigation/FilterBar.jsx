import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import FilterMenu from "./FilterMenu";
import { useState } from "react";

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openFilterMenu = () => {
    setIsOpen(!isOpen);
  };

  const openUp = isOpen
    ? "-translate-x-[100%] duration-500 ease-out"
    : "translate-x-0 duration-500 ease-in";

  return (
    <div className="flex items-center justify-between py-10 px-4 fixed w-full top-0 z-10 lg:px-8 lg:py-5">
      <div>
        <h1 className="text-3xl font-cursive font-semibold">inkitt.</h1>
      </div>

      <button
        onClick={openFilterMenu}
        className="bg-white rounded-full text-black py-2 px-4 flex items-center gap-2"
      >
        All Filters{" "}
        <span className="bg-black rounded-full text-white h-9 w-9 flex items-center justify-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
      <button className="border border-black w-11 h-11 flex items-center justify-center rounded-full">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <FilterMenu openFilterMenu={openFilterMenu} openUp={openUp} />
    </div>
  );
};

export default FilterBar;
