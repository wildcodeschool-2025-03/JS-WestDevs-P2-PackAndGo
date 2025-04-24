import "./PageRegister.css";

function PageRegister() {
  return (
    <div className="pageRegister">
      <section>
        <p className="title">Inscripton</p>
        <form>
          <input type="text" placeholder="Nom utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="email" placeholder="Comdirmer votre email" />
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Confimer votre mot de passe" />
          {/* <p className="page-link">
            <span className="page-link-label">Mot de passe oublié ?</span>
          </p> */}
          <button type="submit">S'inscrire</button>
        </form>
        <p className="sign-up-label">
          Vous avez deja un compte?{" "}
          <span className="sign-up-link">Connectez vous</span>
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
      </section>
    </div>
  );
}

export default PageRegister;
