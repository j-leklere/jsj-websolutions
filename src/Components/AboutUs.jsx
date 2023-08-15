import AboutUsCard from "../SubComponents/AboutUsCard";
import { faGears } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles["about-us-section"]} id="about-us">
      <h2>SOBRE NOSOTROS</h2>
      <p className={styles["about-us-p"]}>
        En JSJ Web Solutions, nos apasiona diseñar y desarrollar sitios web
        únicos y atractivos que ayuden a nuestros clientes a destacarse. Nuestro
        equipo está comprometido en ofrecer soluciones personalizadas y de
        calidad que cumplan con las necesidades de cada proyecto.
      </p>
      <div className={styles["cards-container"]}>
        <AboutUsCard
          icon={faGears}
          text="Nos especializamos en diseñar interfaces personalizadas que reflejen la identidad única de cada cliente."
        />
        <AboutUsCard
          icon={faGears}
          text="Aplicamos la metodología de trabajo ágil Scrum para asegurar una entrega eficiente y de calidad."
        />
        <AboutUsCard
          icon={faGears}
          text="Nuestros valores principales son la honestidad, la disciplina y el compromiso, los cuales nos permiten brindar los mejores resultados posibles."
        />
        <AboutUsCard
          icon={faGears}
          text="Mantenemos una comunicación continua con el cliente durante todo el proceso de desarrollo."
        />
      </div>
      <div className={styles["last-card-container"]}>
        <AboutUsCard
          icon={faGears}
          text="Ponemos al cliente en el centro de nuestro enfoque, escuchando e implementando sus necesidades y deseos."
        />
      </div>

      {/* <div className={styles["flip-card"]}>
        <div className={styles["flip-card-inner"]}>
          <div className={styles["flip-card-front"]}>
            <FontAwesomeIcon
              icon={faGears}
              className={styles["about-us-card-icon"]}
            />
          </div>
          <div className={styles["flip-card-back"]}>
            <div className={styles["about-us-card-container"]}>
              <div className={styles["about-us-card-icon-container"]}>
                <FontAwesomeIcon
                  icon={faGears}
                  className={styles["about-us-card-icon"]}
                />
              </div>
              <div className={styles["about-us-card-p-container"]}>
                <p className={styles["about-us-card-p"]}>
                  Tomamos en cuenta las necesidades y deseos del cliente para un
                  desarrollo personalizado y preciso del producto
                </p>
              </div>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default AboutUs;
