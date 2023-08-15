import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import useInputValidation from "../Hooks/useInputValidation";
import emailjs from "@emailjs/browser";
import { Transition } from "react-transition-group";
import ToastForm from "../Components/ToastForm";

function Contact() {
  const formRef = useRef();
  const nodeRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState("");
  const [toastContent, setToastContent] = useState("");
  const closeToast = () => setShowToast(false);

  const regularExpressions = {
    fullname: /^[a-zA-ZÁ-ÿ\s]{2,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // Validacion inputs
  const {
    value: fullnameValue,
    isValid: fullnameIsValid,
    hasError: fullnameHasError,
    valueChangeHandler: fullnameChangeHandler,
    inputBlurHandler: fullnameBlurHandler,
    reset: resetFullname,
  } = useInputValidation((value) => regularExpressions.fullname.test(value));

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputValidation((value) => regularExpressions.email.test(value));

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInputValidation((value) => value !== "");

  // Validacion form
  let formIsValid = false;

  if (fullnameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    //From this point the form is validated and ready to be sent or else.
    resetFullname();
    resetEmail();
    resetMessage();

    // Sending mail
    emailjs
      .sendForm(
        "service_sm1xkvp",
        "template_llxflwx",
        formRef.current,
        "p41ZztYgmIiWIeHiS"
      )
      .then((result) => {
        console.log(result, result.text);
        setToastContent("Formulario enviado!");
        setToastColor("var(--confirmation-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        // Resetting all values to ""
        resetFullname();
        resetEmail();
        resetMessage();
      })
      .catch((err) => {
        console.log(err.text);
        setToastContent("Algo salió mal.");
        setToastColor("var(--accent-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  // Conditional classes for inputs and labels
  const fullnameClassInput = fullnameHasError
    ? `${styles["invalid-input"]}`
    : "";
  const emailClassInput = emailHasError ? `${styles["invalid-input"]}` : "";
  const messageClassInput = messageHasError ? `${styles["invalid-input"]}` : "";
  const fullnameClassLabel = fullnameHasError
    ? `${styles["invalid-label"]}`
    : "";
  const emailClassLabel = emailHasError ? `${styles["invalid-label"]}` : "";
  const messageClassLabel = messageHasError ? `${styles["invalid-label"]}` : "";

  return (
    <section className={styles["section-contact"]} id="contact">
      <Transition in={showToast} timeout={200} nodeRef={nodeRef}>
        {(state) => (
          <ToastForm
            closeFn={closeToast}
            transitionState={state}
            bgColor={toastColor}
            content={toastContent}
          />
        )}
      </Transition>
      <h2 className={styles["title"]}>Contacto</h2>
      <div className={styles["contact"]}>
        <form action="POST" ref={formRef} onSubmit={submitHandler}>
          <label htmlFor="fullname" className={fullnameClassLabel}>
            Nombre Completo
            <input
              type="text"
              name="fullname"
              placeholder="Nombre y Apellido"
              value={fullnameValue}
              onChange={fullnameChangeHandler}
              onBlur={fullnameBlurHandler}
              className={fullnameClassInput}
            />
            {fullnameHasError && (
              <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
            )}
          </label>
          <label htmlFor="email" className={emailClassLabel}>
            Email
            <input
              type="text"
              name="email"
              placeholder="ejemplo@gmail.com"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={emailClassInput}
            />
            {emailHasError && (
              <p className={styles["p-invalid"]}>
                Este campo debe ser un e-mail válido.
              </p>
            )}
          </label>
          <label htmlFor="message" className={messageClassLabel}>
            Mensaje
            <textarea
              type="text"
              name="message"
              placeholder="Mensaje"
              value={messageValue}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              className={messageClassInput}
            />
            {messageHasError && (
              <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
            )}
          </label>
          <button className="btn-style-1" disabled={!formIsValid}>
            Enviar
          </button>
        </form>
        <div className={styles["other-contact"]}>
          <div className={styles["whatsapp"]}>
            <a href="/">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <div>
              <h3>Envianos un Whatsapp</h3>
              <p>+54-11-3422-2910</p>
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
