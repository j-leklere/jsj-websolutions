import styles from "./TestimonialItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialItem({ texto, nombre, cliente }) {
  return (
    <div className={styles["testimonial-item"]}>
      <FontAwesomeIcon icon={faQuoteRight} />
      <p>{texto}</p>
      <div>
        <h3>{nombre}</h3>
        <h4>{cliente}</h4>
      </div>
    </div>
  );
}

export default TestimonialItem;
