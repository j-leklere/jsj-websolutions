import { useRef } from "react";

function MobileNav(props) {
  const nodeRef = useRef(null);
  console.log(props.navVisible);

  return (
    <>
      <div ref={nodeRef} className="background"></div>
      <div className="container">
        <div className="layout-top">
          <a href="#contacto" className="nav-title" onClick={props.onMenuClose}>
            JSJ
          </a>
        </div>
        <nav>
          <ul className="mobile-nav">
            <li onClick={props.onMenuClick}>
              <a href="#services">Servicios</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#projects">Proyectos</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#testimonials">Nuestros Clientes</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#about-us">Sobre Nosotros</a>
            </li>
            <li onClick={props.onMenuClick}>
              <a href="#contact" className="mobile-nav-contact">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
