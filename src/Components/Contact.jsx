import styles from "./Contact.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section id="contact">
      <h2 className={styles["title"]}>Contacto</h2>
      <form action="POST">
        <label htmlFor="fullname">
          <input type="text" name="fullname" placeholder="Nombre y Apellido" />
        </label>
        <label htmlFor="email">
          <input type="text" name="email" placeholder="Email" />
        </label>
        <label htmlFor="message">
          <textarea type="text" name="message" placeholder="Mensaje" />
        </label>
      </form>
    </section>
  );
}

export default Contact;
