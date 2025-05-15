import type { TransportBudgetProps } from "../../types/Town";
import "./TransportBudget.css";

function TransportBudget({
  publicTransport,
  taxi,
  bikeRental,
}: TransportBudgetProps) {
  return (
    <section className="town-text-detail transport-budget">
      <h3>Transports</h3>
      <p>
        Les différents moyen de transport:{" "}
        {publicTransport.types?.map((el) => (
          <span key={el}> {el}</span>
        ))}
      </p>
      <p>
        {publicTransport.average_ticket} {publicTransport.currency}
      </p>
      <p> {publicTransport.description}</p>
      <p> {publicTransport.tips}</p>
      <h4>Taxi</h4>
      <p>
        {taxi.average_fare} {taxi.currency}
      </p>
      <p>{taxi.description}</p>
      <p>{taxi.tips}</p>
      <h4>Vélo</h4>
      <p>
        {bikeRental.average_price_per_day} {bikeRental.currency}
      </p>
      <p>{bikeRental.description}</p>
      <p>{bikeRental.tips}</p>
    </section>
  );
}
export default TransportBudget;
