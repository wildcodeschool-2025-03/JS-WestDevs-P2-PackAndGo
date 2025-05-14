import type { TransportBudgetProps } from "../../types/Town";

function TransportBudget({
  publicTransport,
  taxi,
  bikeRental,
}: TransportBudgetProps) {
  return (
    <main className="component-detail-button-container">
      <article>
        <h3>Transports</h3>
        <p>Les différents moyen de transport: {publicTransport.types}</p>

        <p>
          {publicTransport.average_ticket} {publicTransport.currency}
        </p>

        <p> {publicTransport.description}</p>
        <p> {publicTransport.tips}</p>
      </article>
      <article>
        <h4>Taxi</h4>
        <p>
          {taxi.average_fare} {taxi.currency}
        </p>
        <p>{taxi.description}</p>
        <p>{taxi.tips}</p>
      </article>
      <article>
        <h4>Vélo</h4>
        <p>
          {bikeRental.average_price_per_day} {bikeRental.currency}
        </p>
        <p>{bikeRental.description}</p>
        <p>{bikeRental.tips}</p>
      </article>
    </main>
  );
}
export default TransportBudget;
