import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles["header-nav"]}>
        <ul>
          <h1 className={styles["brand-name"]}>JSJ</h1>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#services">Proyectos</a>
          </li>
          <li>
            <a href="#testimonials">Nuestros Clientes</a>
          </li>
          <li>
            <a href="#about-us">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>
      <button className={`${styles["btn-contact"]} btn-style-1`}>
        <a href="#contact">Contacto</a>
      </button>
    </header>
  );
}

export default Header;
