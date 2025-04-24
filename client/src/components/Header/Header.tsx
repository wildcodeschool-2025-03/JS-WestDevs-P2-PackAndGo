import "./Header.css";
import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <figure>
          <img src="./Logo.png" alt="logo" className="logo-site" />
        </figure>

        <div className="header-icone-container">
          <img
            src="./icone-header-connexion.png"
            alt="icone"
            className="icone"
          />

          <button onClick={toggleMenu} type="button">
            ☰
          </button>
          <ul className={`navbar-list ${isMenuOpen ? "show" : ""}`}>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Mes favoris
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
