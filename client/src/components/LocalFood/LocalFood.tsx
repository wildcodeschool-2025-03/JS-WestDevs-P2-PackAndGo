import { useState } from "react";
import type { ObjectDetail } from "../../types/Town";

function LocalFood({ city }: ObjectDetail) {
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
          <p>{city.data.attributes.info.local_food.specialties} </p>

          <p> {city.data.attributes.info.local_food.description}</p>

          <p> {city.data.attributes.info.local_food.tips}</p>
        </article>
      )}
    </>
  );
}
export default LocalFood;
