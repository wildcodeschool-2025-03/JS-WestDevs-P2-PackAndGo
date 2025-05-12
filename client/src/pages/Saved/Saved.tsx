import { useEffect, useState } from "react";
import "./Saved.css";
import { Link } from "react-router";
import type CountryProp from "../../types/Countries";

function getSavedFavorites(): CountryProp[] {
  const savedData = localStorage.getItem("favoriteCountry");
  return savedData ? JSON.parse(savedData) : [];
}

function Saved() {
  const [travels, setTravels] = useState<CountryProp[]>([]);

  useEffect(() => {
    setTravels(getSavedFavorites());
  }, []);

  const deleteTrip = (id: number) => {
    const updatedTravels = travels.filter((v) => v.id !== id);
    setTravels(updatedTravels);

    localStorage.setItem("favoriteCountry", JSON.stringify(updatedTravels));
  };

  return (
    <main className="save-main-container">
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
                className="btn-delete"
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
      <div className="connect">
        <Link to="/PageConnexion" className="connect-button">
          Connectez-vous pour conserver vos favoris
        </Link>
      </div>
    </main>
  );
}

export default Saved;
