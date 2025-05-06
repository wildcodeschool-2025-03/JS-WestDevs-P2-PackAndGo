import { useState } from "react";
import type { HotelBudgetProps } from "../../types/Town";

function HotelBudget({
  budgetEcoHotel,
  classicHotel,
  midRangeHotel,
  luxuryHotel,
}: HotelBudgetProps) {
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
              {budgetEcoHotel.average_price} {budgetEcoHotel.currency}
            </p>
            <p>{budgetEcoHotel.description}</p>
          </article>
          <article>
            <h3>For budget hostel classic:</h3>
            <p>
              {classicHotel.average_price} {classicHotel.currency}
            </p>
            <p> {classicHotel.description}</p>
          </article>

          <article>
            <h3>For midrange hotel :</h3>
            <p>
              {midRangeHotel.average_price} {midRangeHotel.currency}
            </p>
            <p>{midRangeHotel.description}</p>
          </article>

          <article>
            <h3>For luxury hotel: </h3>
            <p>
              {luxuryHotel.average_price} {luxuryHotel.currency}
            </p>
            <p>{luxuryHotel.description}</p>
          </article>
        </>
      )}
    </>
  );
}
export default HotelBudget;
