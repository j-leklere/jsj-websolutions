import styles from "./TestimonialItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialItem() {
  return (
    <div className={styles["testimonial-item"]}>
      <FontAwesomeIcon icon={faQuoteRight} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod
        ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <h3>Nombre Persona</h3>
      <h4>ADEIP</h4>
    </div>
  );
}

export default TestimonialItem;
