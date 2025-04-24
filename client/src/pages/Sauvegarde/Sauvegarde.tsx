import { useState } from "react";
import "./Sauvegarde.css";

function Sauvegarde() {
  const [travels, setTravels] = useState([
    { id: 1, name: "Japon", image: "/Japon.png" },
    { id: 2, name: "Vietnam", image: "/Vietnam.png" },
    { id: 3, name: "Sénégal", image: "/Sénégal.png" },
    { id: 4, name: "Turquie", image: "/Turquie.png" },
    { id: 5, name: "Canada", image: "/Canada.png" },
    { id: 6, name: "France", image: "/France.png" },
  ]);

  const deleteTrip = (id: number) => {
    setTravels(travels.filter((v) => v.id !== id));
  };

  return (
    <main className="sauvegarde-main-container">
      <h1>Vos futurs voyages</h1>
      <div className="travels-list">
        {travels.map((travel) => (
          <figure key={travel.id} className="travel-card">
            <img
              src={travel.image}
              alt={travel.name}
              className="travel-image"
            />
            <div className="container-figcaption-btn">
              <figcaption>{travel.name}</figcaption>
              <button
                onClick={() => deleteTrip(travel.id)}
                className="btn-supprimer"
                type="button"
              >
                <img
                  src="./icone-supprimer.png"
                  alt="Supprimer"
                  className="icone-deleted"
                />
              </button>
            </div>
          </figure>
        ))}
      </div>
      <button type="button" className="button-connecter">
        Connectez-vous pour conserver vos favoris
      </button>
    </main>
  );
}

export default Sauvegarde;
