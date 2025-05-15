import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TownDetail.css";
import CultureDetail from "../../components/CultureDetail/CultureDetail";
import GlobalBudgetDetail from "../../components/GlobalBudgetDetail/GlobalBudgetDetail";
import HotelBudget from "../../components/HotelBudget/HotelBudget";
import LocalFood from "../../components/LocalFood/LocalFood";
import TransportBudget from "../../components/TransportBudget/TransportBudget";
import type { City } from "../../types/Town";
import "../button.css";
import { Link } from "react-router";

function TownDetail() {
  const { slug, countryName } = useParams<{
    slug: string;
    countryName: string;
  }>();

  const [city, setCity] = useState<City>();
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      <Link to={`/countries/${countryName}`}>
        <button type="button" className="btn-town">
          <strong>PRECEDENT</strong>
          <div id="container-stars">
            <div id="stars" />
          </div>
          <div id="glow">
            <div className="circle" />
            <div className="circle" />
          </div>
        </button>
      </Link>

      <section className="town-detail-title-img">
        <h1>{city.data.attributes.name}</h1>
        <img
          src={city.data.attributes.realimage}
          alt={city.data.attributes.name}
          className="town-detail-image"
        />
      </section>
      <section className="town-detail-info">
        <div className="buttons-column">
          <button
            type="button"
            onClick={() => {
              setActiveSection("food");
            }}
            className={activeSection === "food" ? "active" : ""}
          >
            🍽 Local Food
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveSection("hotel");
            }}
            className={activeSection === "hotel" ? "active" : ""}
          >
            🏨 Hotel Budget
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveSection("transport");
            }}
            className={activeSection === "transport" ? "active" : ""}
          >
            🚕 Transport
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveSection("culture");
            }}
            className={activeSection === "culture" ? "active" : ""}
          >
            🏛️ Culture
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveSection("global");
            }}
            className={activeSection === "global" ? "active" : ""}
          >
            💰 Budget jour
          </button>
        </div>

        <section className="text-display">
          {activeSection === "hotel" && (
            <HotelBudget
              budgetEcoHotel={accommodation.budget_hotel}
              classicHotel={accommodation.hostel}
              midRangeHotel={accommodation.midrange_hotel}
              luxuryHotel={accommodation.luxury_hotel}
            />
          )}
          {activeSection === "food" && <LocalFood food={local_food} />}
          {activeSection === "transport" && (
            <TransportBudget
              publicTransport={transport.public}
              taxi={transport.taxi}
              bikeRental={transport.bike_rental}
            />
          )}
          {activeSection === "culture" && <CultureDetail culture={culture} />}
          {activeSection === "global" && <GlobalBudgetDetail budget={budget} />}
        </section>
      </section>
    </main>
  );
}

export default TownDetail;
