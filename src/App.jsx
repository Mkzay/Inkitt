/*import { useState, useEffect } from "react"; */
import NavBar from "./Components/Navigation/NavBar.jsx";
/*import FilterBar from "./Components/Navigation/FilterBar.jsx";*/
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Page/Home";

export default function App() {
  return (
    <div>
      {/*{showFilterBar ? <FilterBar /> : <NavBar />}*/}
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

/*const [showFilterBar, setShowFilterBar] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const thresholdToShowFilterBar = 1680; // Point to switch to FilterBar
    const thresholdToShowNavBar = 0; // Point to switch back to NavBar

    // Check against both thresholds
    if (currentScrollY > thresholdToShowFilterBar) {
      setShowFilterBar(true);
    } else if (currentScrollY <= thresholdToShowNavBar) {
      setShowFilterBar(false);
    }
    // No else clause needed, as we want to maintain the current state between the two thresholds
  };

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Clean up
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []); */
