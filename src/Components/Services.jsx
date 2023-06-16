import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Services.module.css";
import { faGears, faRocket, faTools } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

function Services() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  const refServiceItem = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }
      // { rootMargin: "-100px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  useEffect(() => {
    const serviceItems = ref.current.querySelectorAll("div");
    if (isIntersecting) {
      serviceItems.forEach((el) => {
        el.classList.add("slide-in");
      });
      // refServiceItem.current.classList.add("slide-in");
    } else {
      serviceItems.forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <section className={styles.services}>
      <h2>SERVICIOS</h2>
      <div className={styles["services-items"]} ref={ref}>
        <div className={styles["service-item"]} ref={refServiceItem}>
          <FontAwesomeIcon icon={faRocket} />
          <h3>
            <span>CREACIÓN</span> del sitio/aplicación
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles["service-item"]} ref={refServiceItem}>
          <FontAwesomeIcon icon={faGears} />
          <h3>
            <span>SOLUCIÓN</span>
            <br /> de problemas
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles["service-item"]} ref={refServiceItem}>
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
    </section>
  );
}

export default Services;
