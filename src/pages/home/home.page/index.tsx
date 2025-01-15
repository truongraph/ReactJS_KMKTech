import { useEffect, useState } from "react";
import Clients from "./clients";
import Contact from "./contact";
import Introduce from "./introduce";
import Navbar from "../menu/nav";
import Platform from "./platform";
import Products from "./products";
import Services from "./services";
import DotCursor from "./animatedCursor";


const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
     
      {loading ? (
        <div className="loader-container bg-white">
          <div>
            <img
              src={"/images/logo/kmk/long-logo.png"}
              alt="Logo"
              className="block m-auto w-100"
            />
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <>
        
          <Navbar />
          <Introduce />
          <Products />
          <Platform />
          <Services />
          <Clients />
          <Contact />
        </>
      )}
      {showButton && (
        <svg
          className="back-to-top"
          onClick={scrollToTop}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      )}
       <DotCursor />
    </>
    
  );
};

export default HomePage;
