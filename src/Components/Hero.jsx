function Hero() {
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="brand-logo-name brand-logo-name-mobile">
          <h1>JSJ</h1>
          <span>Web Solutions</span>
        </div>
        <h2>
          Desarrollamos sitios web <span>profesionales</span> que generan
          resultados <span>tangibles.</span>
        </h2>
        <div className="brand-logo-name brand-logo-name-desktop">
          <h1>JSJ</h1>
          <span>Web Solutions</span>
        </div>
      </div>
      <button className="btn-hero btn-style-1">
        <a href="#contact">¡Hacé tu sitio web realidad!</a>
      </button>
    </section>
  );
}

export default Hero;
