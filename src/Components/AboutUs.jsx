import AboutUsCard from "../SubComponents/AboutUsCard";
import { faGears } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles["about-us-section"]} id="about-us">
      <h2>SOBRE NOSOTROS</h2>
      <p className={styles["about-us-p"]}>
        ¡Bienvenido a nuestra página web! En JSJ Web Solutions, nos apasiona
        diseñar y desarrollar sitios web únicos y atractivos que ayuden a
        nuestros clientes a destacarse en línea. Nuestro equipo de expertos en
        diseño web está comprometido en ofrecer soluciones personalizadas y de
        calidad que satisfagan las necesidades de cada proyecto.
      </p>
      <div className={styles["cards-container"]}>
        <AboutUsCard
          icon={faGears}
          text="Tomamos en cuenta las necesidades y deseos del cliente para un
        desarrollo personalizado y preciso del producto"
        />
        <AboutUsCard
          icon={faGears}
          text="Tomamos en cuenta las necesidades y deseos del cliente para un
        desarrollo personalizado y preciso del producto"
        />
        <AboutUsCard
          icon={faGears}
          text="Tomamos en cuenta las necesidades y deseos del cliente para un
        desarrollo personalizado y preciso del producto"
        />
        <AboutUsCard
          icon={faGears}
          text="Tomamos en cuenta las necesidades y deseos del cliente para un
        desarrollo personalizado y preciso del producto "
        />
      </div>
      <div className={styles["last-card-container"]}>
        <AboutUsCard
          icon={faGears}
          text="Tomamos en cuenta las necesidades y deseos del cliente para un
        desarrollo personalizado y preciso del producto"
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