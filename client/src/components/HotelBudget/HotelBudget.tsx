import { useState } from "react";
import type { ObjectDetail } from "../../types/Town";

function HotelBudget({ city }: ObjectDetail) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);

  return (
    <>
      <button type="button" onClick={handleChange}>
        Budget for hotel
      </button>
      {isOpen && (
        <>
          <article>
            <h3>For budget hotel: </h3>
            <p>
              {
                city.data.attributes.info.accommodation.budget_hotel
                  .average_price
              }{" "}
              {city.data.attributes.info.accommodation.budget_hotel.currency}
            </p>
            <p>
              {city.data.attributes.info.accommodation.budget_hotel.description}
            </p>
          </article>
          <article>
            <h3>For budget hostel classic:</h3>
            <p>
              {city.data.attributes.info.accommodation.hostel.average_price}{" "}
              {city.data.attributes.info.accommodation.hostel.currency}
            </p>
            <p> {city.data.attributes.info.accommodation.hostel.description}</p>
          </article>

          <article>
            <h3>For midrange hotel :</h3>
            <p>
              {
                city.data.attributes.info.accommodation.midrange_hotel
                  .average_price
              }{" "}
              {city.data.attributes.info.accommodation.midrange_hotel.currency}
            </p>
            <p>
              {
                city.data.attributes.info.accommodation.midrange_hotel
                  .description
              }
            </p>
          </article>

          <article>
            <h3>For luxury hotel: </h3>
            <p>
              {
                city.data.attributes.info.accommodation.luxury_hotel
                  .average_price
              }{" "}
              {city.data.attributes.info.accommodation.luxury_hotel.currency}
            </p>
            <p>
              {city.data.attributes.info.accommodation.luxury_hotel.description}
            </p>
          </article>
        </>
      )}
    </>
  );
}
export default HotelBudget;
