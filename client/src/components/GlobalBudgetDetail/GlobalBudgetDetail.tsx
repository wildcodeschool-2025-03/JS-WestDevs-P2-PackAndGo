import type { GlobalBudgetProps } from "../../types/Town";
import "./GlobalBudgetDetail.css";

function GlobalBudgetDetail({ budget }: GlobalBudgetProps) {
  return (
    <section className="town-text-detail global-budget">
      <h3>Budget : </h3>
      <p>{budget.is_expensive}</p>
      <p>
        {budget.daily_average}

        {budget.currency}
      </p>
      <p>{budget.notes}</p>
      <p>{budget.tips}</p>
    </section>
  );
}
export default GlobalBudgetDetail;
