import { useState } from "react";
import useHandleModal from "../../hooks/useHandleModal";
import type { GlobalBudgetProps } from "../../types/Town";

function GlobalBudgetDetail({ budget }: GlobalBudgetProps) {
  const { handleChange } = useHandleModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => handleChange(setIsOpen, isOpen)}>
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
