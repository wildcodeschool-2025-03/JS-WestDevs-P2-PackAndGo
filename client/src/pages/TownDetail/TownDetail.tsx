import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface City {
  data: {
    id: string;
    attributes: {
      name: string;
      short_name: string;
      realimage: string;
      population?: number;
      slug: string;
      google_events_url?: string;
      // Ne marche pas, à revoir.
    };
  };
}

function TownDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City>();

  useEffect(() => {
    fetch("http://localhost:3310/api/cities")
      .then((response) => response.json())
      .then((data: City[]) => {
        const exactCity = data.find(
          (city) => city.data.attributes.slug === slug,
        );
        setCity(exactCity);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement:", error);
      });
  }, [slug]);

  if (!city) return <h1>Ville non trouvée</h1>;

  return (
    <main className="town-detail-main">
      <h1>{city.data.attributes.name}</h1>
      <img
        src={city.data.attributes.realimage}
        alt={city.data.attributes.name}
        className="town-detail-image"
      />
      <div className="town-detail-info">
        <h2>Informations</h2>
        {city.data.attributes.population && (
          <p>Population : {city.data.attributes.population}</p>
        )}
        {/* {city.data.attributes.google_event_url && (
          <a href={city.data.attributes.google_event_url}>test</a>
        )} */}
      </div>
    </main>
  );
}

export default TownDetail;
