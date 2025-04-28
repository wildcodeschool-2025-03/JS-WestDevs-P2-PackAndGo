import { useEffect, useState } from "react";
import "./Countries.css";

interface countryProp {
  id: number;
  name: string;
  image: string;
  tagline: string;
}

function Countries() {
  const [countriesList, setCountriesList] = useState<countryProp[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/countries")
      .then((response) => response.json())
      .then((data) => setCountriesList(data.results));
  }, []);

  return (
    <main className="countries-main-container">
      <section>
        <h1>Sélectionnez vos futures destinations</h1>
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
            <figcaption>{element.name}</figcaption>
            <span className="love">
              <input id={`switch-${element.id}`} type="checkbox" />
              <label className="love-heart" htmlFor={`switch-${element.id}`}>
                <i className="left" />
                <i className="right" />
                <i className="bottom" />
                <div className="round" />
              </label>
            </span>
            <img className="image" src={element.image} alt={element.name} />
            <p>{element.tagline}</p>
          </figure>
        </div>
      ))}
    </main>
  );
}

export default Countries;
