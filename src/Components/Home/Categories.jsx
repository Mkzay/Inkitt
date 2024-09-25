const Categories = () => {
  return (
    <div className="flex justify-center flex-col gap-28 text-open bg-black py-20 px-4 text-[#d0cfbb] text-3xl md:text-4xl lg:py-0 lg:pt-0 lg:px-8 lg:h-screen">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-evenly lg:px-8 lg:gap-0">
        <ul className="flex flex-col items-center justify-center gap-8 md:items-start">
          <li className="hover:text-white cursor-pointer">Adventure</li>
          <li className="hover:text-white cursor-pointer">Mystery</li>
          <li className="hover:text-white cursor-pointer">Action</li>
          <li className="hover:text-white cursor-pointer">Fantasy</li>
        </ul>
        <ul className="flex flex-col items-center justify-center gap-8 md:items-start">
          <li className="hover:text-white cursor-pointer">Thriller</li>
          <li className="hover:text-white cursor-pointer">Romance</li>
          <li className="hover:text-white cursor-pointer">Children</li>
          <li className="hover:text-white cursor-pointer">Drama</li>
        </ul>
        <ul className="flex flex-col items-center justify-center gap-8 md:items-start">
          <li className="hover:text-white cursor-pointer">Horror</li>
          <li className="hover:text-white cursor-pointer">Humor</li>
          <li className="hover:text-white cursor-pointer">Erotica</li>
          <li className="hover:text-white cursor-pointer">Poetry</li>
        </ul>
      </div>
      <div className="flex justify-center font-cursive md:justify-end">
        <h1 className="text-center md:text-6xl md:pr-5 lg:text-7xl lg:w-3/12">Browse genres</h1>
      </div>
    </div>
  );
};

export default Categories;
