import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <h2 className={styles["title"]}>Contacto</h2>
      <div className={styles["contact"]}>
        <form action="POST">
          <label htmlFor="fullname">
            Nombre Completo
            <input
              type="text"
              name="fullname"
              placeholder="Nombre y Apellido"
            />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" name="email" placeholder="ejemplo@gmail.com" />
          </label>
          <label htmlFor="message">
            Mensaje
            <textarea type="text" name="message" placeholder="Mensaje" />
          </label>
          <button>Enviar</button>
        </form>
        <div className={styles["other-contact"]}>
          <div className={styles["whatsapp"]}>
            <a href="/">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <div>
              <h3>Envianos un Whatsapp</h3>
              <p>+54 11 1111-2222</p>
            </div>
          </div>
          <div className={styles["email"]}>
            <a href="/">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div>
              <h3>Envianos un Mail</h3>
              <p>jsjsolutions@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
