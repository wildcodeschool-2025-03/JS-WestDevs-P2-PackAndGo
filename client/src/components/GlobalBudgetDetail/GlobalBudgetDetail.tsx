import type { GlobalBudgetProps } from "../../types/Town";

function GlobalBudgetDetail({ budget }: GlobalBudgetProps) {
  return (
    <section className="town-text-detail">
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
    </section>
  );
}
export default GlobalBudgetDetail;
