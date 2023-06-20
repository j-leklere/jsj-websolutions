import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles["footer-container"]}>
        <div className={styles["first-column"]}>
          <h1>JSJ</h1>
          <h2>Web Solutions</h2>
        </div>
        <div className={styles["sections-column"]}>
          <a href="#">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#">Proyectos </a>
        </div>
        <div className={styles["sections-column"]}>
          <a href="#testimonials">Comentarios de Clientes</a>
          <a href="#about-us">Sobre Nosotros</a>
          <a href="#contact">Contacto</a>
        </div>
        <p className={styles["copyright"]}>
          Copyright © 2023 | JSJ Web Solutions
        </p>
      </div>
    </footer>
  );
}

export default Footer;
