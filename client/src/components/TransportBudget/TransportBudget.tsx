import { useState } from "react";
import type { TransportBudgetProps } from "../../types/Town";

function TransportBudget({
  publicTransport,
  taxi,
  bikeRental,
}: TransportBudgetProps) {
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
          <p>Les différents moyen de transport: {publicTransport.types}</p>

          <p>
            {publicTransport.average_ticket} {publicTransport.currency}
          </p>

          <p> {publicTransport.description}</p>
          <p> {publicTransport.tips}</p>

          <h4>Taxi average price</h4>
          <p>
            {taxi.average_fare} {taxi.currency}
          </p>
          <p>{taxi.description}</p>
          <p>{taxi.tips}</p>

          <h4>Bike average price</h4>
          <p>
            {bikeRental.average_price_per_day} {bikeRental.currency}
          </p>
          <p>{bikeRental.description}</p>
          <p>{bikeRental.tips}</p>
        </article>
      )}
    </>
  );
}
export default TransportBudget;
