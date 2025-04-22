import "./PageAbout.css";

function PageAbout() {
  return (
    <div className="background">
      <h2>Bienvenue chez PACK&GO !</h2>
      <p>
        Derrière chaque itinéraire soigné, chaque conseil de pro et chaque
        voyage inoubliable, il y a notre équipe : des passionné·e·s d’évasion,
        d’aventure et de belles découvertes. <br />
        <br />
        Chez nous, pas de robot au bout du fil, mais de vraies personnes qui ont
        sillonné le monde, testé les bonnes adresses et qui adorent partager
        leur amour du voyage.
      </p>
      <div className="avatar">
        {/* ------AHMED------ */}
        <figure>
          <img src="/Avatars/avatar-Ahmed.png" alt="Ahmed" />
          <p className="prenom">Ahmed</p>
          <a
            href="https://github.com/AhmedFikado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Avatars/Lien Github.png"
              alt="lien github Ahmed"
              className="github"
            />
          </a>
        </figure>
        {/* ------LEÏLA------ */}
        <figure>
          <img src="/Avatars/avatar-Leila.png" alt="Leïla" />
          <p className="prenom">Leïla</p>
          <a
            href="https://github.com/yali27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Avatars/Lien Github.png"
              alt="lien github Leïla"
              className="github"
            />
          </a>
        </figure>
        {/* ------BAMBA------ */}
        <figure>
          <img src="/Avatars/avatar-Bamba.png" alt="Bamba" />
          <p className="prenom">Bamba</p>
          <a
            href="https://github.com/Bamba0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Avatars/Lien Github.png"
              alt="lien github Bamba"
              className="github"
            />
          </a>
        </figure>
        {/* ------CEDRIC------ */}
        <figure>
          <img src="/Avatars/avatar-Cedric.png" alt="Cédric" />
          <p className="prenom">Cédric</p>
          <a
            href="https://github.com/CedricGOUYON"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Avatars/Lien Github.png"
              alt="lien github Cédric"
              className="github"
            />
          </a>
        </figure>
      </div>
    </div>
  );
}

export default PageAbout;
