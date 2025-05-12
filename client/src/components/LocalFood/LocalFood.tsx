import { useState } from "react";
import useHandleModal from "../../hooks/useHandleModal";
import type { LocalFoodProps } from "../../types/Town";
import "./LocalFood.css";

function LocalFood({ food }: LocalFoodProps) {
  const { handleChange } = useHandleModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="component-detail-button-container">
      <button type="button" onClick={() => handleChange(setIsOpen, isOpen)}>
        <img src="/gastronomie.png" alt="emoji plat" />
        Local food
      </button>
      {isOpen && (
        <article>
          <h3>Local food :</h3>
          <p>{food.specialties} </p>

          <p> {food.description}</p>

          <p> {food.tips}</p>
        </article>
      )}
    </main>
  );
}
export default LocalFood;
