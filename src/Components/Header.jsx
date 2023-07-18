import styles from "./Header.module.css";
import { Squash as Hamburger } from "hamburger-react";
// import { Sling as Hamburger } from "hamburger-react";

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
      <div onClick={props.onMenuClick} className={styles["burger-btn"]}>
        <Hamburger
          toggled={props.isOpen}
          color="#fff"
          hideOutline={true}
          rounded
        />
      </div>
    </header>
  );
}

export default Header;
