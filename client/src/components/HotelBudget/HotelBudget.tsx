import type { HotelBudgetProps } from "../../types/Town";
import "./HotelBudget.css";

function HotelBudget({
  budgetEcoHotel,
  classicHotel,
  midRangeHotel,
  luxuryHotel,
}: HotelBudgetProps) {
  return (
    <section className="town-text-detail hotel-budget">
      <h3>Hôtel economique </h3>
      <p>
        {budgetEcoHotel.average_price} {budgetEcoHotel.currency}
      </p>
      <p>{budgetEcoHotel.description}</p>

      <h3>Auberge de jeunesse</h3>
      <p>
        {classicHotel.average_price} {classicHotel.currency}
      </p>
      <p> {classicHotel.description}</p>

      <h3>Hôtel milieu de gamme</h3>
      <p>
        {midRangeHotel.average_price} {midRangeHotel.currency}
      </p>
      <p>{midRangeHotel.description}</p>

      <h3>Hôtel de luxe</h3>
      <p>
        {luxuryHotel.average_price} {luxuryHotel.currency}
      </p>
      <p>{luxuryHotel.description}</p>
    </section>
  );
}
export default HotelBudget;
