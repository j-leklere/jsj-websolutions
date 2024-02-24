import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "./Services.module.css";
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
    <section className="services" id="services">
      <h2>SERVICIOS</h2>
      <div className="services-items" ref={ref}>
        <div className="service-item" ref={refServiceItem}>
          <FontAwesomeIcon icon={faRocket} />
          <h3>
            <span>CREACIÓN</span>
            <br /> del sitio web
          </h3>
          <p>
            {/* Desarrollamos sitios web personalizados que se adaptan a las
            necesidades y objetivos específicos del cliente. */}
            Desarrollamos sitios web personalizados, con una interfaz moderna y
            un back-end eficiente, ambos ajustados a las necesidades y objetivos
            del cliente.
          </p>
        </div>
        <div className="service-item" ref={refServiceItem}>
          <FontAwesomeIcon icon={faGears} />
          <h3>
            <span>SOLUCIÓN</span>
            <br /> de problemas
          </h3>
          <p>
            {/* Aplicaremos nuestros conocimientos para identificar las causas de
            los obstáculos que surjan, y encontraremos soluciones eficientes a
            los mismos. */}
            Aplicaremos nuestros conocimientos para identificar las causas de
            los obstáculos que surjan, e implementaremos soluciones eficientes
            para estos.
          </p>
        </div>
        <div className="service-item" ref={refServiceItem}>
          <FontAwesomeIcon icon={faTools} />
          <h3>
            <span>MANTENIMIENTO</span>
            <br /> del producto
          </h3>
          <p>
            {/* Nuestro servicio de mantenimiento incluye actualizaciones regulares,
            junto con la garantía de que el producto siga funcionando de manera
            óptima. */}
            Nuestro servicio de mantenimiento garantiza que el producto siga
            funcionando de manera óptima e incluye actualizaciones regulares del
            mismo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
