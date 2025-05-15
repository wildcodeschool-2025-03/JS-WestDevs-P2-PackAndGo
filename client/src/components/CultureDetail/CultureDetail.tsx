import type { CultureDetailProps } from "../../types/Town";
import "./CultureDetail.css";

function CultureDetail({ culture }: CultureDetailProps) {
  return (
    <section className="town-text-detail culture-detail">
      <h3>Culture : </h3>
      {culture.must_see.map((item) => (
        <span key={item}>
          <strong> {item}</strong>
        </span>
      ))}
      <p>{culture.description}</p>
      <p>{culture.tips}</p>
    </section>
  );
}
export default CultureDetail;
