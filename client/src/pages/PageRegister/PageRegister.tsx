import { useNavigate } from "react-router";
import { Link } from "react-router";
import "./PageRegister.css";

function PageRegister() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/connexion");
  };

  return (
    <main className="page-register">
      <section>
        <p className="title">Inscription</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Confirmer votre email" />
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Confirmer votre mot de passe" />
          <button type="submit">S'inscrire</button>
        </form>

        <p className="sign-up-label">
          Vous avez déjà un compte ?{" "}
          <Link to="/connexion" className="sign-up-link">
            Connectez-vous
          </Link>
        </p>

        <div className="buttons-container">
          <a href="/" className="apple-login-button">
            <img src="Boutons/icons-apple-50.png" alt="logo apple" />
            <span>S'inscrire avec Apple</span>
          </a>
          <a href="/" className="google-login-button">
            <img src="/Boutons/icons-google-48.png" alt="logo google" />
            <span>S'inscrire avec Google</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default PageRegister;
