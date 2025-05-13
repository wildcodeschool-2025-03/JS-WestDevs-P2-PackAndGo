import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TownDetail.css";
import CultureDetail from "../../components/CultureDetail/CultureDetail";
import GlobalBudgetDetail from "../../components/GlobalBudgetDetail/GlobalBudgetDetail";
import HotelBudget from "../../components/HotelBudget/HotelBudget";
import LocalFood from "../../components/LocalFood/LocalFood";
import TransportBudget from "../../components/TransportBudget/TransportBudget";
import type { City } from "../../types/Town";

function TownDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [city, setCity] = useState<City>();
  const [activeSection, setActiveSection] = useState<string | null>(null);
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
      <section className="town-detail-info">
        <div className="buttons-column">
          <button
            type="button"
            onClick={() => setActiveSection("food")}
            className={activeSection === "food" ? "active" : ""}
          >
            🍽 Local Food
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("hotel")}
            className={activeSection === "hotel" ? "active" : ""}
          >
            🏨 Hotel Budget
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("transport")}
            className={activeSection === "transport" ? "active" : ""}
          >
            🚕 Transport
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("culture")}
            className={activeSection === "culture" ? "active" : ""}
          >
            🏛️ Culture
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("global")}
            className={activeSection === "global" ? "active" : ""}
          >
            💰 Budget jour
          </button>
        </div>

        <article className="text-display">
          {activeSection === "hotel" && (
            <HotelBudget
              budgetEcoHotel={
                city.data.attributes.info.accommodation.budget_hotel
              }
              classicHotel={city.data.attributes.info.accommodation.hostel}
              midRangeHotel={
                city.data.attributes.info.accommodation.midrange_hotel
              }
              luxuryHotel={city.data.attributes.info.accommodation.luxury_hotel}
            />
          )}
          {activeSection === "food" && (
            <LocalFood food={city.data.attributes.info.local_food} />
          )}
          {activeSection === "transport" && (
            <TransportBudget
              publicTransport={city.data.attributes.info.transport.public}
              taxi={city.data.attributes.info.transport.taxi}
              bikeRental={city.data.attributes.info.transport.bike_rental}
            />
          )}
          {activeSection === "culture" && (
            <CultureDetail culture={city.data.attributes.info.culture} />
          )}
          {activeSection === "global" && (
            <GlobalBudgetDetail budget={city.data.attributes.info.budget} />
          )}
        </article>
      </section>
    </main>
  );
}

export default TownDetail;
