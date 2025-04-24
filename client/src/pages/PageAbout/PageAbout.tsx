import "./PageAbout.css";

const membres = [
  {
    prenom: "Ahmed",
    avatar: "avatar-Ahmed.png",
    github: "https://github.com/AhmedFikado",
  },
  {
    prenom: "Leïla",
    avatar: "avatar-Leila.png",
    github: "https://github.com/yali27",
  },
  {
    prenom: "Bamba",
    avatar: "avatar-Bamba.png",
    github: "https://github.com/Bamba0818",
  },
  {
    prenom: "Cédric",
    avatar: "avatar-Cedric.png",
    github: "https://github.com/CedricGOUYON",
  },
];

function PageAbout() {
  return (
    <main className="background">
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
      <section className="avatar">
        {membres.map((membre) => (
          <figure className="menbres" key={membre.prenom}>
            <img src={`/Avatars/${membre.avatar}`} alt={membre.prenom} />
            <p className="prenom">{membre.prenom}</p>
            <a href={membre.github} target="_blank" rel="noopener noreferrer">
              <img
                src="/Avatars/Lien Github.png"
                alt={`lien github ${membre.prenom}`}
                className="github"
              />
            </a>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default PageAbout;
