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
      <nav className="navbar">
        <div>
          <img src="./Logo.png" alt="logo" className="logo-site" />
        </div>

        <div className="test">
          <img src="./icone connexion.png" alt="icone" className="icone" />

          <div
            className="navbar-burger"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
          >
            ☰
          </div>
          <ul className={`navbar-list ${isMenuOpen ? "show" : ""}`}>
            <li className="navbar-item">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" onClick={toggleMenu}>
                Destinations
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" onClick={toggleMenu}>
                Mes Favoris
              </Link>
            </li>
            <li className="navbar-item">
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
