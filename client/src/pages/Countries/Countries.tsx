import { useState } from "react";
import "./Countries.css";

function Countries() {
  const [countriesList] = useState([
    {
      id: 1,
      name: "France",
      image:
        "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_1280.jpg",
      tagline:
        "Laissez-vous captiver par la richesse culturelle et la beauté intemporelle de la France, un mélange de romantisme et de gastronomie.",
    },
    {
      id: 2,
      name: "Sénégal",
      image:
        "https://cdn.pixabay.com/photo/2020/11/30/17/43/salt-5791696_1280.jpg",
      tagline:
        "Découvrez le Sénégal, la terre de la Teranga, où l’hospitalité et les paysages vibrants séduisent les âmes en quête de sérénité.",
    },
  ]);
  return (
    <main className="countries-main-container">
      <h1>Sélectionnez vots futures destinations</h1>
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
            <img
              className="image"
              src={element.image}
              alt="Femme sénégalaise récoltant du sel"
            />
            <p>{element.tagline}</p>
          </figure>
        </div>
      ))}
    </main>
  );
}

export default Countries;
