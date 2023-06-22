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
            Vestibulum posuere turpis turpis, non ullamcorper ex lacinia ac.
            Quisque et consequat turpis, nec dignissim metus. Nullam quis libero
            risus.Vestibulum posuere turpis turpis, non ullamcorper ex lacinia
            ac. Quisque et consequat turpis, nec dignissim metus. Nullam quis
            libero risus.Vestibulum posuere turpis turpis, non ullamcorper ex
            lacinia ac.
          </p>
          <div className={styles["first-project-link"]}>
            <a href="https://adeip.org.ar/" target="_blank" rel="noreferrer">
              Accede a la página de Adeip{" "}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles["first-project-link-icon"]}
              />
            </a>
          </div>
        </div>
        <div className={styles["first-project-imgs-container"]}>
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
          <img src={AdeipImg} alt="img" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
