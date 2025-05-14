import type { CultureDetailProps } from "../../types/Town";

function CultureDetail({ culture }: CultureDetailProps) {
  return (
    <section className="town-text-detail">
      <article>
        <h3>Culture : </h3>
        {culture.must_see.map((item) => (
          <span key={item}>
            {" "}
            <strong>{item}</strong>
          </span>
        ))}
        <p>{culture.description}</p>
        <p>{culture.tips}</p>
      </article>
    </section>
  );
}
export default CultureDetail;
