import { useEffect, useState } from "react";
import MenuHamburguer from "../assets/icons/menu-hamburguer.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => setMenuOpen(!menuOpen);

  const scrollY = window.scrollY;

  useEffect(() => {
    setMenuOpen(false);
  }, [scrollY]);

  return (
    <nav className="header__nav">
      <figure className="header__nav__containerMenu">
        <img
          className="header__nav__containerMenu__menu"
          src={MenuHamburguer}
          alt="Menu Image"
          onClick={handleOpen}
        />
      </figure>
      {menuOpen && (
        <ul className="header__nav__ul">
          <li className="header__nav__ul__li">
            <a href="#home">inicio</a>
          </li>
          <li className="header__nav__ul__li">
            <a href="#about">sobre mi</a>
          </li>
          <li className="header__nav__ul__li">
            <a href="#projects">proyectos</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
