import { useState } from "react";
import type { GlobalBudgetProps } from "../../types/Town";

function GlobalBudgetDetail({ budget }: GlobalBudgetProps) {
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

          <p>{budget.is_expensive}</p>
          <p>
            {budget.daily_average}

            {budget.currency}
          </p>
          <p>{budget.notes}</p>
          <p>{budget.tips}</p>
        </article>
      )}
    </>
  );
}
export default GlobalBudgetDetail;
