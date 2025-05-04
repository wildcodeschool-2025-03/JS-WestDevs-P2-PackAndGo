import { useState } from "react";
import type { ObjectDetail } from "../../types/Town";

function GlobalBudgetDetail({ city }: ObjectDetail) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);
  return (
    <>
      <button type="button" onClick={handleChange}>
        Global budget
      </button>
      {isOpen && (
        <article>
          <h3>Budget : </h3>

          <p>{city.data.attributes.info.budget.is_expensive}</p>
          <p>
            {city.data.attributes.info.budget.daily_average}

            {city.data.attributes.info.budget.currency}
          </p>
          <p>{city.data.attributes.info.budget.notes}</p>
          <p>{city.data.attributes.info.budget.tips}</p>
        </article>
      )}
    </>
  );
}
export default GlobalBudgetDetail;
