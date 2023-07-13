import AdeipImg from "../Assets/projects/adeip-img.jpeg";
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
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
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
            administrador puede crear/editar/borrar productos de la página.
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
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
          <figure>
            <img src={AdeipImg} alt="img" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Projects;
