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
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
      <div className="projects-container">
        <div className="project-card">
          <div className="project-url">
            <a href="https://adeip.org.ar/" target="_blank" rel="noreferrer">
              <p>{adeipInfo.url}</p>
              <FontAwesomeIcon icon={adeipInfo.linkBtn} />
            </a>
          </div>
          <div className="project-image">
            <img src={adeipInfo.image} alt="img" />
          </div>
          <div className="project-info">
            <p className="project-description">{adeipInfo.description}</p>
            <div className="project-colors-techs">
              <div className="project-colors">
                <div className="project-color project-color-green"></div>
                <div className="project-color project-color-white"></div>
              </div>
              <FontAwesomeIcon
                className="project-icon"
                icon={adeipInfo.reactIcon}
              />
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-url">
            <a href={trentoInfo.url} target="_blank" rel="noreferrer">
              <p>{trentoInfo.url}</p>
              <FontAwesomeIcon icon={trentoInfo.linkBtn} />
            </a>
          </div>
          <div className="project-image">
            <img src={trentoInfo.image} alt="img" />
          </div>
          <div className="project-info">
            <p className="project-description">{trentoInfo.description}</p>
            <div className="project-colors-techs">
              <div className="project-colors">
                <div className="project-color project-color-red"></div>
                <div className="project-color project-color-yellow"></div>
              </div>
              <div className="project-techs">
                <FontAwesomeIcon
                  className="project-icon"
                  icon={trentoInfo.sassIcon}
                />
                <FontAwesomeIcon
                  className="project-icon"
                  icon={trentoInfo.reactIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
