import { useState } from "react";
import type { ObjectDetail } from "../../types/Town";

function TransportBudget({ city }: ObjectDetail) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);
  return (
    <>
      <button type="button" onClick={handleChange}>
        Different transport
      </button>
      {isOpen && (
        <article>
          <h3>Transport :</h3>
          <p>
            Les différents moyen de transport:{" "}
            {city.data.attributes.info.transport.public.types}
          </p>

          <p>
            {city.data.attributes.info.transport.public.average_ticket}{" "}
            {city.data.attributes.info.transport.public.currency}
          </p>

          <p> {city.data.attributes.info.transport.public.description}</p>
          <p> {city.data.attributes.info.transport.public.tips}</p>

          <h4>Taxi average price</h4>
          <p>
            {city.data.attributes.info.transport.taxi.average_fare}{" "}
            {city.data.attributes.info.transport.taxi.currency}
          </p>
          <p>{city.data.attributes.info.transport.taxi.description}</p>
          <p>{city.data.attributes.info.transport.taxi.tips}</p>

          <h4>Bike average price</h4>
          <p>
            {
              city.data.attributes.info.transport.bike_rental
                .average_price_per_day
            }{" "}
            {city.data.attributes.info.transport.bike_rental.currency}
          </p>
          <p>{city.data.attributes.info.transport.bike_rental.description}</p>
          <p>{city.data.attributes.info.transport.bike_rental.tips}</p>
        </article>
      )}
    </>
  );
}
export default TransportBudget;
