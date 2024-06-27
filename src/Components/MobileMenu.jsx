/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ openUp, openMenu }) => {
  {
    /*const [isClose, setIsClose] = useState(false);

  const closeMenu = () => {
    setIsClose(!isClose);
  }; */
  }

  return (
    <div
      className={`${openUp} absolute left-0 top-0 flex flex-col items-center justify-center gap-28 bg-black h-screen w-full text-white px-4 lg:hidden`}
    >
      <div className="flex flex-col justify-between gap-28">
        <div className="flex items-center justify-end gap-20">
          <h1 className="text-2xl font-cursive font-semibold">inkitt.</h1>
          <button
            onClick={openMenu}
            className="border border-white w-11 h-11 flex items-center justify-center rounded-full -mr-12"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <ul className="flex flex-col items-center justify-center gap-10 space-x-4 text-3xl -mt-14 font-open font-normal">
          <li>Free Books</li>
          <li>Community</li>
          <li>Galatea</li>
          <li>Writing Contests</li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 font-open font-medium text-lg w-full">
        <button className="bg-white rounded-full text-black py-3 px-4">
          Sign In
        </button>
        <button className="bg-black rounded-full border border-white py-3 px-4">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
