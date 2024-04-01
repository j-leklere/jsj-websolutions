import AdeipImg from "../Assets/projects/adeip_1.jpg";
import TrentoImg from "../Assets/projects/trento_1.jpg";
/*
import AdeipImg2 from "../Assets/projects/adeip_2.jpeg";
import AdeipImg3 from "../Assets/projects/adeip_3.jpeg";
import AdeipImg4 from "../Assets/projects/adeip_4.jpeg";
import AdeipImg5 from "../Assets/projects/adeip_5.jpeg";
import AdeipImg6 from "../Assets/projects/adeip_6.jpeg";
import OrsaiImg2 from "../Assets/projects/orsai_2.jpg";
import OrsaiImg3 from "../Assets/projects/orsai_3.jpg";
import OrsaiImg4 from "../Assets/projects/orsai_4.png";
import OrsaiImg5 from "../Assets/projects/orsai_5.jpg";
import OrsaiImg6 from "../Assets/projects/orsai_6.jpg";
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquar,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Projects.module.css";
import { faReact, faSass } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const adeipInfo = {
    url: "adeip.org.ar",
    image: AdeipImg,
    linkBtn: faUpRightFromSquare,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    reactIcon: faReact,
  };

  const trentoInfo = {
    url: "trento-insumos.com",
    image: TrentoImg,
    linkBtn: faUpRightFromSquare,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    sassIcon: faSass,
    reactIcon: faReact,
  };

  return (
    <section className="projects-section" id="projects">
      <h2>PROYECTOS</h2>
      <div className={styles["projects-container"]}>
        <div className={styles["project-card"]}>
          <div className={styles["project-url"]}>
            <a href="https://adeip.org.ar/" target="_blank" rel="noreferrer">
              <p>{adeipInfo.url}</p>
              <FontAwesomeIcon icon={adeipInfo.linkBtn} />
            </a>
          </div>
          <div className={styles["project-image"]}>
            <img src={adeipInfo.image} alt="img" />
          </div>
          <div className={styles["project-info"]}>
            <p className={styles["project-description"]}>
              {adeipInfo.description}
            </p>
            <div className={styles["project-colors-techs"]}>
              <div className={styles["project-colors"]}>
                <div
                  className={`${styles["project-color"]} ${styles["project-color-green"]}`}
                ></div>
                <div
                  className={`${styles["project-color"]} ${styles["project-color-white"]}`}
                ></div>
              </div>
              <FontAwesomeIcon
                className={styles["project-icon"]}
                icon={adeipInfo.reactIcon}
              />
            </div>
          </div>
        </div>
        <div className={styles["project-card"]}>
          <div className={styles["project-url"]}>
            <a href={trentoInfo.url} target="_blank" rel="noreferrer">
              <p>{trentoInfo.url}</p>
              <FontAwesomeIcon icon={trentoInfo.linkBtn} />
            </a>
          </div>
          <div className={styles["project-image"]}>
            <img src={trentoInfo.image} alt="img" />
          </div>
          <div className={styles["project-info"]}>
            <p className={styles["project-description"]}>
              {trentoInfo.description}
            </p>
            <div className={styles["project-colors-techs"]}>
              <div className={styles["project-colors"]}>
                <div
                  className={`${styles["project-color"]} ${styles["project-color-red"]}`}
                ></div>
                <div
                  className={`${styles["project-color"]} ${styles["project-color-yellow"]}`}
                ></div>
              </div>
              <div className={styles["project-techs"]}>
                <FontAwesomeIcon
                  className={styles["project-icon"]}
                  icon={trentoInfo.sassIcon}
                />
                <FontAwesomeIcon
                  className={styles["project-icon"]}
                  icon={trentoInfo.reactIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className={styles["first-project"]}>
      <div className={styles["first-project-text-container"]}>
      <h3>ADEIP</h3>
      <p>
      ADEIP es una Asociación de Estudio e Investigación en
      Psicodiagnóstico, fundada en 1988. El sitio web diseñado para la
      misma cumple una función principalmente informativa. Además, cuenta
            con un formulario de asociación y otro de contacto. La página fue
            desarrollada aplicando una personalidad de tipo "Minimalista/Seria",
            basándonos en las peticiones del cliente, y utilizando como
            principal tecnología ReactJS.
          </p>
          <div className="project-link">
            <a href="https://adeip.org.ar/" target="_blank" rel="noreferrer">
              Accedé a la página de ADEIP{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles["project-link-icon"]}
                />
                </a>
          </div>
          </div>
          <div className={styles["first-project-imgs-container"]}>
          <figure>
            <img src={AdeipImg1} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg2} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg3} alt="img" />
          </figure>
          <figure>
          <img src={AdeipImg4} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg5} alt="img" />
            </figure>
            <figure>
            <img src={AdeipImg6} alt="img" />
          </figure>
        </div>
      </div>

      <div className={styles["second-project"]}>
      <div className={styles["second-project-text-container"]}>
          <h3>ORSAI</h3>
          <p>
          Esta página web fue desarrollada como proyecto final del bootcamp de
            desarrollo web de "Digital House". El sitio web es un e-Commerce el
            cual cuenta con las siguientes características: crear un usuario con
            el que se puede iniciar sesión, y si el mismo tiene un rol de
            administrador puede crear/editar/borrar productos de la página. La
            página cuenta con una personalidad de tipo "Bold/Confident", e
            implementa NodeJS y ExpressJS como tecnologías principales.
          </p>
          <div className="project-link">
            <a
              href="https://orsai.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Accedé a la página de ORSAI{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="project-link-icon"
              />
            </a>
          </div>
        </div>
        <div className="second-project-imgs-container">
          <figure>
            <img src={OrsaiImg1} alt="img" />
          </figure>
          <figure>
            <img src={OrsaiImg2} alt="img" />
          </figure>
          <figure>
          <img src={OrsaiImg3} alt="img" />
          </figure>
          <figure>
            <img src={OrsaiImg4} alt="img" />
          </figure>
          <figure>
            <img src={OrsaiImg5} alt="img" />
          </figure>
          <figure>
            <img src={OrsaiImg6} alt="img" />
            </figure>
            </div>
            </div>
  */}
    </section>
  );
}

export default Projects;
