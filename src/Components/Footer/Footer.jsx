const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center text-open bg-black py-20 px-8 gap-20 text-white text-sm lg:px-14 md:h-screen md:gap-28 lg:items-start">
      <div className="flex flex-col gap-10 md:flex-row md:gap-14 lg:justify-evenly lg:gap-48">
        <ul className="flex flex-col gap-2 text-base items-center md:items-start">
          <li className="text-[#d0cfbb]">Inkitt for Authors</li>
          <li>Writing contests list</li>
          <li>Inkitt publishing</li>
          <li>Submit your story</li>
          <li>Guidelines</li>
          <li>Writing groups</li>
          <li>Author subscriptions</li>
        </ul>
        <ul className="flex flex-col gap-2 text-base items-center md:items-start">
          <li className="text-[#d0cfbb]">Inkitt for Readers</li>
          <li>Fantasy books</li>
          <li>Romance books</li>
          <li>Drama books</li>
          <li>Thriller books</li>
          <li>Mystery books</li>
          <li>Horror books</li>
        </ul>
        <ul className="flex flex-col gap-2 text-base items-center md:items-start">
          <li className="text-[#d0cfbb]">Download the app</li>
          <li>App Store</li>
          <li>Google Play</li>
        </ul>
        <ul className="flex flex-col gap-2 text-base items-center md:items-start">
          <li className="text-[#d0cfbb]">Inkitt Community</li>
          <li>X</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Join the Inkitt team</li>
        </ul>
      </div>
      <div className="flex flex-col gap-10 items-center w-full lg:gap-64 lg:px-10 lg:justify-between lg:flex-row">
        <h1 className="text-7xl font-cursive font-bold md:text-6xl/loose lg:text-9xl">
          inkitt
        </h1>
        <form className="flex flex-col gap-5 w-full lg:gap-5">
          <label className="text-sm text-center lg:text-base">
            Join Our Reader&apos;s Circle Today!
          </label>
          <input
            className="border-b bg-transparent py-2 px-1 text-lg focus:outline-none placeholder:text-lg md:placeholder:text-xl md:text-xl"
            type="email"
            placeholder="Your email here"
            required
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Footer;
