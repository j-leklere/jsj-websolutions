import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ScrollUpBtn() {
  const [btnUp, setBtnUp] = useState(false);

  useEffect(() => {
    const obsOptions = {
      root: null,
      rootMargin: "70px",
      threshold: 1,
    };

    const obsCallback = ([entry]) => {
      if (!entry.isIntersecting) {
        setBtnUp(true);
      } else {
        setBtnUp(false);
      }
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    const target = document.getElementById("header");

    observer.observe(target);
  }, []);

  return (
    <>
      {btnUp && (
        <a href="#root" className="scroll-up-btn-container">
          <FontAwesomeIcon icon={faChevronUp} className="scroll-up-btn" />
        </a>
      )}
    </>
  );
}

export default ScrollUpBtn;
