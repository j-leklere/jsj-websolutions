import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles["title"]}>Comentarios de nuestros clientes</h2>
      <div className={styles["testimonial-items"]}>
        <div className={styles["testimonial-item"]}>
          <FontAwesomeIcon icon={faQuoteRight} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3>Nombre Persona</h3>
          <h4>ADEIP</h4>
        </div>
        <div className={styles["testimonial-item"]}>
          <FontAwesomeIcon icon={faQuoteRight} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3>Nombre Persona</h3>
          <h4>ADEIP</h4>
        </div>
        <div className={styles["testimonial-item"]}>
          <FontAwesomeIcon icon={faQuoteRight} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3>Nombre Persona</h3>
          <h4>ADEIP</h4>
        </div>
        <div className={styles["testimonial-item"]}>
          <FontAwesomeIcon icon={faQuoteRight} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h3>Nombre Persona</h3>
          <h4>ADEIP</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
