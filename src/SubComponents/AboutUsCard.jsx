import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AboutUsCard.module.css";

function AboutUsCard(props) {
  return (
    <div className={styles["about-us-card-container"]}>
      <div className={styles["about-us-card-icon-container"]}>
        <FontAwesomeIcon
          icon={props.icon}
          className={styles["about-us-card-icon"]}
        />
      </div>
      <div className={styles["about-us-card-p-container"]}>
        <p className={styles["about-us-card-p"]}>{props.text}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
