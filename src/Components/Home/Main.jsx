import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="bg-[#d0cfbb] pt-[120px] pb-20 flex flex-col items-center justify-center gap-10 px-4 z-0 lg:pt-[116px] lg:px-8">
      <div className="flex lg:relative">
        <h1 className="text-[3.2rem]/normal text-center font-cursive font-bold uppercase md:text-6xl/loose lg:text-8xl/loose">
          Book Journey Begins
        </h1>
        <button className="absolute bottom-10 left-[75%] bg-white border border-black p-2 w-2/12 text-black rounded-full text-base hidden items-center justify-center gap-2 lg:flex">
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="bg-white rounded-xl flex items-center justify-center w-[21rem] h-[14rem] md:w-[35rem] md:h-[20rem] lg:w-[55rem] lg:h-[28rem]">
          <img
            className="rounded-xl w-full h-full"
            src="/books.jpg"
            alt="books"
          />
        </div>
        <button className="bg-black border border-white w-full p-3 text-white rounded-full text-lg flex items-center justify-center md:w-7/12 lg:hidden">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Main;
