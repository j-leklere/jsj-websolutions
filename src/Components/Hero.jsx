import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-box"]}>
        <h2>
          Desarrollamos sitios web <span>profesionales</span> que generan
          resultados <span>tangibles.</span>
        </h2>
        <div className={styles["brand-logo-name"]}>
          <h1>JSJ</h1>
          <span>Web Solutions</span>
        </div>
      </div>
      <button>Hacé tu sitio web realidad!</button>
    </section>
  );
}

export default Hero;
