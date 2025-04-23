import "./PageConnexion.css";

function PageConnexion() {
  return (
    <div className="background">
      <div className="form-container">
        <p className="title">Connexion</p>
        <form className="form">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link">
            <span className="page-link-label">Mot de passe oublié ?</span>
          </p>
          <button type="submit" className="form-btn">
            Se connecter
          </button>
        </form>
        <p className="sign-up-label">
          Vous n'avez pas de compte?{" "}
          <span className="sign-up-link">Inscrivez vous</span>
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
    </div>
  );
}

export default PageConnexion;
