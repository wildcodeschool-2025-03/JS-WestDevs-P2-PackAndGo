import type { CultureDetailProps } from "../../types/Town";

function CultureDetail({ culture }: CultureDetailProps) {
  return (
    <main className="component-detail-button-container">
      <article>
        <h3>Culture : </h3>
        <h4>Pour les plus connus : </h4>
        {culture.must_see.map((item) => (
          <span key={item}>
            {" "}
            <strong>{item}</strong>
          </span>
        ))}
        <p>{culture.description}</p>
        <p>{culture.tips}</p>
      </article>
    </main>
  );
}
export default CultureDetail;
