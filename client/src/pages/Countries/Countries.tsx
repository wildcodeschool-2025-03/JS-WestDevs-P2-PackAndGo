import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Countries.css";
import useLight from "../../hooks/ThemeProvider";
import type CountryProp from "../../types/Countries";

function Countries() {
  const [countriesList, setCountriesList] = useState<CountryProp[]>([]);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});
  const { light } = useLight();
  useEffect(() => {
    fetch("http://localhost:3310/countries")
      .then((response) => response.json())
      .then((data) => setCountriesList(data.results));
  }, []);

  useEffect(() => {
    const storedFavorites = getStorage();
    if (storedFavorites) {
      const favoritesMap: Record<number, boolean> = {};

      for (const fav of storedFavorites) {
        favoritesMap[fav.id] = true;
      }

      setFavorites(favoritesMap);
    }
  }, []);

  function getStorage(): CountryProp[] {
    const actualStorage = localStorage.getItem("favoriteCountry");
    return actualStorage ? JSON.parse(actualStorage) : [];
  }

  function setStorage(favoriteCountry: CountryProp) {
    const actualStorage = getStorage();

    if (
      !actualStorage.some((fav: CountryProp) => fav.id === favoriteCountry.id)
    ) {
      actualStorage.push(favoriteCountry);
    }

    localStorage.setItem("favoriteCountry", JSON.stringify(actualStorage));
  }

  const toggleFavorite = (country: CountryProp) => {
    setFavorites((prev) => {
      const updatedFavorites = { ...prev, [country.id]: !prev[country.id] };

      if (updatedFavorites[country.id]) {
        setStorage(country);
      } else {
        const actualStorage = getStorage();
        const updatedStorage = actualStorage.filter(
          (fav) => fav.id !== country.id,
        );
        localStorage.setItem("favoriteCountry", JSON.stringify(updatedStorage));
      }

      return updatedFavorites;
    });
  };

  return (
    <main className={`countries-main-container ${light && "light"}`}>
      <h1>Sélectionnez vos futures destinations</h1>
      <section>
        <div className="section-banner" />
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
                  onChange={() => toggleFavorite(element)}
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
            <Link to={`/countries/${element.name.toLowerCase()}`}>
              <img
                className="image"
                src={element.image}
                alt={element.description}
              />
              <p>{element.tagline}</p>
            </Link>
          </figure>
        </div>
      ))}
    </main>
  );
}

export default Countries;
