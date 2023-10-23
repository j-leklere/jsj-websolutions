import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-box"]}>
        <div
          className={`${styles["brand-logo-name"]} ${styles["brand-logo-name-mobile"]}`}
        >
          <h1>JSJ</h1>
          <span>Web Solutions</span>
        </div>
        <h2>
          Desarrollamos sitios web <span>profesionales</span> que generan
          resultados <span>tangibles.</span>
        </h2>
        <div
          className={`${styles["brand-logo-name"]} ${styles["brand-logo-name-desktop"]}`}
        >
          <h1>JSJ</h1>
          <span>Web Solutions</span>
        </div>
      </div>
      <button className={`${styles["btn-hero"]} btn-style-1`}>
        <a href="#contact">¡Hacé tu sitio web realidad!</a>
      </button>
    </section>
  );
}

export default Hero;
