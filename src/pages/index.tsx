import Clients from "./home/clients";
import Contact from "./home/contact";
import Introduce from "./home/introduce";
import Platform from "./home/platform";
import Products from "./home/products";
import Services from "./home/services";
import Navbar from "./menu/nav";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Introduce />
      <Products />
      <Platform />
      <Services />
      <Clients />
      <Contact />
    </>
  );
};

export default HomePage;
