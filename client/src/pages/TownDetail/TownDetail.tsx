import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Accomodation {
  average_price: number;
  description: string;
  currency: string;
  tips?: string;
}
interface AccomodationTest {
  hostel: Accomodation;
  budget_hotel: Accomodation;
  midrange_hotel: Accomodation;
  luxury_hotel: Accomodation;
  local_food: Accomodation;
}
interface Transport {
  types?: string[];
  average_ticket?: number | string;
  average_fare?: number;
  average_price_per_day?: number;
  currency: string;
  description: string;
  tips: string;
}
interface TransportAll {
  public: Transport;
  taxi: Transport;
  bike_rental: Transport;
}
interface Food {
  specialties: string[];
  description: string;
  tips: string;
}
interface Budget {
  is_expensive: boolean;
  daily_average: number;
  currency: string;
  notes: string;
  tips: string;
}
interface Culture {
  must_see: string[];
  description: string;
  tips: string;
}
interface Global {
  accommodation: AccomodationTest;
  local_food: Food;
  transport: TransportAll;
  culture: Culture;
  budget: Budget;
}
interface City {
  data: {
    id: string;
    attributes: {
      name: string;
      short_name: string;
      realimage: string;
      population?: number;
      slug: string;
      info: Global;
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
        <div>
          <p>
            For budget hotel:{" "}
            {city.data.attributes.info.accommodation.budget_hotel.average_price}{" "}
            {city.data.attributes.info.accommodation.budget_hotel.currency}
          </p>
          <p>
            {" "}
            {city.data.attributes.info.accommodation.budget_hotel.description}
          </p>
        </div>
        <br />
        <div>
          <p>
            For budget hostel classic:{" "}
            {city.data.attributes.info.accommodation.hostel.average_price}{" "}
            {city.data.attributes.info.accommodation.hostel.currency}
          </p>
          <p> {city.data.attributes.info.accommodation.hostel.description}</p>
        </div>
        <br />
        <div>
          <p>
            For midrange hotel :{" "}
            {
              city.data.attributes.info.accommodation.midrange_hotel
                .average_price
            }{" "}
            {city.data.attributes.info.accommodation.midrange_hotel.currency}
          </p>
          <p>
            {" "}
            {city.data.attributes.info.accommodation.midrange_hotel.description}
          </p>
        </div>
        <br />
        <div>
          <p>
            For luxury hotel:{" "}
            {city.data.attributes.info.accommodation.luxury_hotel.average_price}{" "}
            {city.data.attributes.info.accommodation.luxury_hotel.currency}
          </p>
          <p>
            {" "}
            {city.data.attributes.info.accommodation.luxury_hotel.description}
          </p>
        </div>
        <br />
        <div>
          <p>Local food :</p>
          <p>{city.data.attributes.info.local_food.specialties} </p>
          <br />
          <p> {city.data.attributes.info.local_food.description}</p>
          <br />

          <p> {city.data.attributes.info.local_food.tips}</p>
        </div>
        <br />
        <div>
          <p>Transport :</p>
          <p>
            Les différents moyen de transport:{" "}
            {city.data.attributes.info.transport.public.types}{" "}
          </p>
          <br />
          {/* <p> {city.data.attributes.info.transport.average_ticket}</p> */}
          <br />

          <p> {city.data.attributes.info.local_food.tips}</p>
        </div>
      </div>
    </main>
  );
}

export default TownDetail;
