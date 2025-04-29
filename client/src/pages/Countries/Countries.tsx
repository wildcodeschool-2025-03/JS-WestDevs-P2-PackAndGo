import { useEffect, useState } from "react";
import "./Countries.css";

interface countryProp {
  id: number;
  name: string;
  image: string;
  tagline: string;
  description: string;
}

function Countries() {
  const [countriesList, setCountriesList] = useState<countryProp[]>([]);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetch("http://localhost:3310/countries")
      .then((response) => response.json())
      .then((data) => setCountriesList(data.results));
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="countries-main-container">
      <h1>Sélectionnez vos futures destinations</h1>
      <section>
        <div className="section-banner">
          <div id="star-1">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-2">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-3">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-4">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-5">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-6">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
          <div id="star-7">
            <div className="curved-corner-star">
              <div id="curved-corner-bottomright" />
              <div id="curved-corner-bottomleft" />
            </div>
            <div className="curved-corner-star">
              <div id="curved-corner-topright" />
              <div id="curved-corner-topleft" />
            </div>
          </div>
        </div>
      </section>

      {countriesList.map((element) => (
        <div key={element.id} className="stack">
          <figure className="card">
            <figcaption>
              {element.name}
              <label htmlFor={`favorite-${element.id}`} className="container">
                <input
                  type="checkbox"
                  id={`favorite-${element.id}`}
                  name="favorite-checkbox"
                  value="favorite-button"
                  checked={favorites[element.id] || false}
                  onChange={() => toggleFavorite(element.id)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={favorites[element.id] ? "hsl(0deg 100% 50%)" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart"
                >
                  <title>Ajouter aux favoris</title>
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </label>
            </figcaption>

            <img
              className="image"
              src={element.image}
              alt={element.description}
            />
            <p>{element.tagline}</p>
          </figure>
        </div>
      ))}
    </main>
  );
}

export default Countries;
