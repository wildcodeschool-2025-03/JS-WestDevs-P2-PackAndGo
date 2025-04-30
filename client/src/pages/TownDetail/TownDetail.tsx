import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./TownDetail.css";
import type { City } from "../../types/Town";

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
          <p>
            {" "}
            {city.data.attributes.info.transport.public.average_ticket}{" "}
            {city.data.attributes.info.transport.public.currency}
          </p>
          <br />

          <p> {city.data.attributes.info.transport.public.description}</p>
          <p> {city.data.attributes.info.transport.public.tips}</p>
          <br />
          <p>taxi average price</p>
          <p>
            {city.data.attributes.info.transport.taxi.average_fare}{" "}
            {city.data.attributes.info.transport.taxi.currency}
            <br />
            <p>{city.data.attributes.info.transport.taxi.description}</p>
            <p>{city.data.attributes.info.transport.taxi.tips}</p>
          </p>
          <br />
          <p>taxi average price</p>
          <p>
            {
              city.data.attributes.info.transport.bike_rental
                .average_price_per_day
            }{" "}
            {city.data.attributes.info.transport.bike_rental.currency}
            <br />
            <p>{city.data.attributes.info.transport.bike_rental.description}</p>
            <p>{city.data.attributes.info.transport.bike_rental.tips}</p>
          </p>
        </div>
        <br />
        <br />
        <div>
          <p>Culture : </p>
          <br />
          <p>{city.data.attributes.info.culture.must_see}</p>
          <p>{city.data.attributes.info.culture.description}</p>
          <p>{city.data.attributes.info.culture.tips}</p>
        </div>
        <br />
        <br />
        <div>
          <p>Budget : </p>
          <br />
          <p>{city.data.attributes.info.budget.is_expensive}</p>
          <p>
            {city.data.attributes.info.budget.daily_average}

            {city.data.attributes.info.budget.currency}
          </p>
          <p>{city.data.attributes.info.budget.notes}</p>
          <p>{city.data.attributes.info.budget.tips}</p>
        </div>
      </div>
    </main>
  );
}

export default TownDetail;
