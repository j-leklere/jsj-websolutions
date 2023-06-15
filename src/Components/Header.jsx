import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles["header-nav"]}>
        <ul>
          <h1 className={styles["brand-name"]}>JSJ</h1>
          <li>Servicios</li>
          <li>Proyectos</li>
          <li>Nuestros Clientes</li>
          <li>Sobre Nosotros</li>
        </ul>
      </nav>
      <button className={styles["btn-contact"]}>Contacto</button>
    </header>
  );
}

export default Header;
