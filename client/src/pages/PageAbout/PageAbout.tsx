import "./PageAbout.css";

const membres = [
  {
    name: "Ahmed",
    avatar: "avatar-Ahmed.png",
    github: "https://github.com/AhmedFikado",
  },
  {
    name: "Leïla",
    avatar: "avatar-Leila.png",
    github: "https://github.com/yali27",
  },
  {
    name: "Bamba",
    avatar: "avatar-Bamba.png",
    github: "https://github.com/Bamba0818",
  },
  {
    name: "Cédric",
    avatar: "avatar-Cedric.png",
    github: "https://github.com/CedricGOUYON",
  },
];

function PageAbout() {
  return (
    <main className="background-page-about">
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
          <figure className="crew" key={membre.name}>
            <img src={`/Avatars/${membre.avatar}`} alt={membre.name} />
            <p className="name">{membre.name}</p>
            <a href={membre.github} target="_blank" rel="noopener noreferrer">
              <img
                src="/Avatars/Lien Github.png"
                alt={`lien github ${membre.name}`}
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
