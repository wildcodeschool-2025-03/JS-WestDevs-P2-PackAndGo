import { useState } from "react";
import useHandleModal from "../../hooks/useHandleModal";
import type { LocalFoodProps } from "../../types/Town";

function LocalFood({ food }: LocalFoodProps) {
  const { handleChange } = useHandleModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => handleChange(setIsOpen, isOpen)}>
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
