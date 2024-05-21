import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Logo from "../assets/icons/main-logo.png";
import "../styles/Header.css";

function Header() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const isVisible = prevScrollPos > currentScroll;
    setVisible(isVisible);
    setPrevScrollPos(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <figure className="header__figureImg">
        <img
          src={Logo}
          alt="TestImage"
          title="This is a test"
          className="header__figureImg__img"
        />
      </figure>
      <NavBar />
    </header>
  );
}

export default Header;
