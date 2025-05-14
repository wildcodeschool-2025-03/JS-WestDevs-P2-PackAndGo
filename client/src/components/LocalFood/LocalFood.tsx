import type { LocalFoodProps } from "../../types/Town";
import "./LocalFood.css";

function LocalFood({ food }: LocalFoodProps) {
  return (
    <section className="town-text-detail">
      <h3>Local food :</h3>
      {food.specialties.map((food) => (
        <span key={food}> {food}</span>
      ))}
      <p> {food.description}</p>

      <p> {food.tips}</p>
    </section>
  );
}
export default LocalFood;
