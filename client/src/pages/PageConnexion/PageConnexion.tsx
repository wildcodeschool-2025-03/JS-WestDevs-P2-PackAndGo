import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/AuthContext";
import "./PageConnexion.css";
import { useState } from "react";

function PageConnexion() {
  const navigate = useNavigate();

  const { isLogged, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    login();

    navigate("/countries");
  };
  if (isLogged) {
    return (
      <main className="background-page-connexion">
        <div className="form-container">
          <p className="title">Vous êtes connecté !</p>
          <button className="form-btn" type="button" onClick={logout}>
            Se déconnecter
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="background-page-connexion">
      <div className="form-container">
        <p className="title">Connexion</p>
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <p className="page-link">
            <span className="page-link-label">Mot de passe oublié ?</span>
          </p>
          <button type="submit" className="form-btn">
            Se connecter
          </button>
        </form>
        <p className="sign-up-label">
          Vous n'avez pas de compte?{" "}
          <Link to="/register" className="sign-up-link">
            Inscrivez vous
          </Link>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <img src="Boutons/icons-apple-50.png" alt="logo apple" />
            <span>Connectez-vous avec Apple</span>
          </div>
          <div className="google-login-button">
            <img src="/Boutons/icons-google-48.png" alt="logo google" />
            <span>Connectez-vous avec Google</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageConnexion;
