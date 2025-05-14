import "./Town.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { City } from "../../types/Town";
import "../button.css";
function Town() {
  const [cities, setCities] = useState<City[]>([]);
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3310/api/cities")
      .then((response) => {
        return response.json();
      })
      .then((data: City[]) => {
        console.log("Données reçues:", data);
        // Pour le moment, le changement se fait manuellement au niveau des pays.
        const filteredCountry = data.filter((city) =>
          city.data.attributes.name
            .toLowerCase()
            .includes(countryName?.toLowerCase() || ""),
        );
        setCities(filteredCountry);
      })
      .catch((error) => {
        console.error("Erreur détaillée:", error);
      });
  }, [countryName]);

  return (
    <main className="town-main">
      <h1>{countryName}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => navigate("/countries")}
      >
        <strong>PRECEDENT</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
      <div className="list-cities">
        {cities.map((city) => {
          return (
            <Link
              to={`/countries/${countryName}/${city.data.attributes.slug}`}
              key={city.data.id}
              className="city-item"
            >
              <img src={city.data.attributes.realimage} alt="test" />
              <h2>{city.data.attributes.short_name}</h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
export default Town;
