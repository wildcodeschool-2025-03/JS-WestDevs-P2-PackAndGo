import { useState } from "react";
import type { LocalFoodProps } from "../../types/Town";

function LocalFood({ food }: LocalFoodProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);

  return (
    <>
      <button type="button" onClick={handleChange}>
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
    </>
  );
}
export default LocalFood;
