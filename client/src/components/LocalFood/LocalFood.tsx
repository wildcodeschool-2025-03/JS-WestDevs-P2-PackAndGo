import type { LocalFoodProps } from "../../types/Town";
import "./LocalFood.css";

function LocalFood({ food }: LocalFoodProps) {
  return (
    <main className="component-detail-button-container">
      <article>
        <h3>Local food :</h3>
        <p>{food.specialties} </p>

        <p> {food.description}</p>

        <p> {food.tips}</p>
      </article>
    </main>
  );
}
export default LocalFood;
