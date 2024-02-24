import { Squash as Hamburger } from "hamburger-react";
// import { Sling as Hamburger } from "hamburger-react";

function Header(props) {
  return (
    <header id="header">
      <h1 className="brand-name">JSJ</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#testimonials">Nuestros Clientes</a>
          </li>
          <li>
            <a href="#about-us">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>
      <button className="btn-contact btn-style-1">
        <a href="#contact">Contacto</a>
      </button>
      <div onClick={props.onMenuClick} className="burger-btn">
        <Hamburger
          toggled={props.isOpen}
          color="#fff"
          hideOutline={true}
          rounded
        />
      </div>
    </header>
  );
}

export default Header;
