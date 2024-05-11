import NavBar from "../components/NavBar";
import TestImage from "../assets/icons/test.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <figure className="header__figureImg">
        <img
          src={TestImage}
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
