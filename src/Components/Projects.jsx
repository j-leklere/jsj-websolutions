import AdeipImg1 from "../Assets/projects/adeip_1.jpeg";
import AdeipImg2 from "../Assets/projects/adeip_2.jpeg";
import AdeipImg3 from "../Assets/projects/adeip_3.jpeg";
import AdeipImg4 from "../Assets/projects/adeip_4.jpeg";
import AdeipImg5 from "../Assets/projects/adeip_5.jpeg";
import AdeipImg6 from "../Assets/projects/adeip_6.jpeg";

import OrsaiImg1 from "../Assets/projects/orsai_1.jpg";
import OrsaiImg2 from "../Assets/projects/orsai_2.jpg";
import OrsaiImg3 from "../Assets/projects/orsai_3.jpg";
import OrsaiImg4 from "../Assets/projects/orsai_4.png";
import OrsaiImg5 from "../Assets/projects/orsai_5.jpg";
import OrsaiImg6 from "../Assets/projects/orsai_6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles["projects-section"]} id="projects">
      <h2>PROYECTOS</h2>

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
          <div className={styles["project-link"]}>
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
          <div className={styles["project-link"]}>
            <a
              href="https://orsai.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Accedé a la página de ORSAI{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles["project-link-icon"]}
              />
            </a>
          </div>
        </div>
        <div className={styles["second-project-imgs-container"]}>
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
    </section>
  );
}

export default Projects;
