import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MobileNav.module.css";
import { useRef } from "react";

function MobileNav(props) {
  const nodeRef = useRef(null);
  console.log(props.navVisible);

  return (
    <>
      <div ref={nodeRef} className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles["layout-top"]}>
          <a
            href="#contacto"
            className={styles["nav-title"]}
            onClick={props.onMenuClose}
          >
            JSJ
          </a>
          {
            <FontAwesomeIcon
              icon={faClose}
              onClick={props.onMenuClose}
              className={styles["menu-close"]}
            />
          }
        </div>
        <nav>
          <ul className={styles["mobile-nav"]}>
            <li onClick={props.onMenuClose}>
              <a href="#servicios">Servicios</a>
            </li>
            <li onClick={props.onMenuClose}>
              <a href="#servicios">Proyectos</a>
            </li>
            <li onClick={props.onMenuClose}>
              <a href="#servicios">Nuestros Clientes</a>
            </li>
            <li onClick={props.onMenuClose}>
              <a href="#servicios">Sobre Nosotros</a>
            </li>
            <li onClick={props.onMenuClose}>
              <a href="#servicios">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
