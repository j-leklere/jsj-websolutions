import ReactDOM from "react-dom";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ScrollUpBtn from "./Components/ScrollUpBtn";
import { useState } from "react";
import MobileNav from "./Components/MobileNav";

const overlays = document.getElementById("overlays");

function App() {
  const [mobNavVisible, setMobNavVisible] = useState(false);

  const showMobileNav = () => {
    setMobNavVisible(true);
  };

  const hideMobileNav = () => {
    setMobNavVisible(false);
  };
  return (
    <>
      {mobNavVisible &&
        ReactDOM.createPortal(
          <MobileNav onMenuClose={hideMobileNav} navVisible={mobNavVisible} />,
          overlays
        )}
      <Header onMenuClick={showMobileNav} />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <AboutUs />
      <Contact />
      <ScrollUpBtn />
      <Footer />
    </>
  );
}

export default App;
