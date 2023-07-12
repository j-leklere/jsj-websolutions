import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header id="header">
      <h1 className={styles["brand-name"]}>JSJ</h1>
      <nav className={styles["header-nav"]}>
        <ul>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
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
      <FontAwesomeIcon
        icon={faBars}
        className={styles["mobile-menu-bars"]}
        onClick={props.onMenuClick}
      />
    </header>
  );
}

export default Header;
