import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutUsCard(props) {
  return (
    <div className="about-us-card-container">
      <div className="about-us-card-icon-container">
        <FontAwesomeIcon icon={props.icon} className="about-us-card-icon" />
      </div>
      <div className="about-us-card-p-container">
        <p className="about-us-card-p">{props.text}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
