import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <main className="home-main-container">
      <section>
        <h1>Prépare ton sac, on t'emmène en voyage !</h1>
        <article>
          <p>
            Découvrez 20 pays fascinants et plongez dans 5 villes emblématiques
            par destination. <br />
            <br />
            Laissez-vous guider vers des aventures inoubliables. Votre escapade
            commence ici !
          </p>
          <Link to="/countries">Explorer</Link>
        </article>
      </section>
    </main>
  );
}

export default Home;
