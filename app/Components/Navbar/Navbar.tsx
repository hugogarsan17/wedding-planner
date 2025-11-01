import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="nav-inner">
        <a className="brand" href="#home">
          Luna &amp; Co.
        </a>
        <a href="#servicios">Servicios</a>
        <a href="#experiencias">Experiencias</a>
        <a href="#metodo">Nuestro Método</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}
