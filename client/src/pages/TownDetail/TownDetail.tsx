import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TownDetail.css";
import CultureDetail from "../../components/CultureDetail/CultureDetail";
import GlobalBudgetDetail from "../../components/GlobalBudgetDetail/GlobalBudgetDetail";
import HotelBudget from "../../components/HotelBudget/HotelBudget";
import LocalFood from "../../components/LocalFood/LocalFood";
import TransportBudget from "../../components/TransportBudget/TransportBudget";
import Weather from "../../components/Weather/Weather";
import type { City } from "../../types/Town";

function TownDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City>();

  useEffect(() => {
    fetch(`http://localhost:3310/api/cities/${slug}`)
      .then((res) => res.json())
      .then((data) => setCity(data));
  }, [slug]);

  if (!city) return <h1>Ville non trouvée</h1>;

  const { accommodation, transport, budget, culture, local_food } =
    city.data.attributes.info;

  return (
    <main className="town-detail-main">
      <h1>{city.data.attributes.name}</h1>
      <img
        src={city.data.attributes.realimage}
        alt={city.data.attributes.name}
        className="town-detail-image"
      />
      <section className="town-detail-info">
        <h2>Informations</h2>
        {city.data.attributes.population && (
          <p>Population : {city.data.attributes.population}</p>
        )}
        <HotelBudget
          budgetEcoHotel={accommodation.budget_hotel}
          classicHotel={accommodation.hostel}
          midRangeHotel={accommodation.midrange_hotel}
          luxuryHotel={accommodation.luxury_hotel}
        />
        <LocalFood food={local_food} />
        <TransportBudget
          publicTransport={transport.public}
          taxi={transport.taxi}
          bikeRental={transport.bike_rental}
        />
        <CultureDetail culture={culture} />
        <GlobalBudgetDetail budget={budget} />
        <Weather
          lat={city.data.attributes.latitude}
          lon={city.data.attributes.longitude}
        />
      </section>
    </main>
  );
}

export default TownDetail;
