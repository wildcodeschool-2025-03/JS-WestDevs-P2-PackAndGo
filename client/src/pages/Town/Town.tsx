import "./Town.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type City from "../../types/Town";

function Town() {
  const [cities, setCities] = useState<City[]>([]);
  const { countryName } = useParams();

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
    <main>
      <h1>{countryName}</h1>
      <div className="list-cities">
        {cities.map((city) => {
          return (
            <Link
              to={`/countries/${countryName}/${city.data.attributes.slug}`}
              key={city.data.id}
              className="city-item"
            >
              <h2>{city.data.attributes.short_name}</h2>
              <img src={city.data.attributes.realimage} alt="test" />
            </Link>
          );
        })}
      </div>
      {/* Test nombre de ville, censé être 5 à chaque fois sinon, il y a une erreur. */}
      <p>{cities.length}</p>
    </main>
  );
}
export default Town;
