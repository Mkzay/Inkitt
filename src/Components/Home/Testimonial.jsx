import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div className="flex flex-col pb-20 px-4 md:px-12 lg:px-8">
      <div className="flex flex-col md:items-start ">
        <h1 className="text-[3.2rem]/normal text-center font-cursive font-bold md:text-4xl/loose lg:text-8xl/loose">
          Testimonials
        </h1>
        <div className="flex items-center justify-center gap-5 md:ml-10 lg:ml-20">
          <button className="border border-black py-1 px-4 rounded-full">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="border border-black py-1 px-4 rounded-full">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Testimonial;
