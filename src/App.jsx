import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* <div className="slider-thumb"></div> */}

      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
