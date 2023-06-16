import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Services.module.css";
import { faGears, faRocket, faTools } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles["service-item"]}>
        <FontAwesomeIcon icon={faRocket} />
        <h3>
          <span>CREACIÓN</span> del sitio/aplicación
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          elusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles["service-item"]}>
        <FontAwesomeIcon icon={faGears} />
        <h3>
          <span>SOLUCIÓN</span> de problemas
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          elusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={styles["service-item"]}>
        <FontAwesomeIcon icon={faTools} />
        <h3>
          <span>MANTENIMIENTO</span> del producto
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          elusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default Services;
