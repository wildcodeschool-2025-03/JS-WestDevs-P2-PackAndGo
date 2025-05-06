import { useState } from "react";
import type { CultureDetailProps } from "../../types/Town";

function CultureDetail({ culture }: CultureDetailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = () => setIsOpen(!isOpen);
  return (
    <>
      <button type="button" onClick={handleChange}>
        Culture
      </button>
      {isOpen && (
        <article>
          <h3>Culture : </h3>

          <p>{culture.must_see}</p>
          <p>{culture.description}</p>
          <p>{culture.tips}</p>
        </article>
      )}
    </>
  );
}
export default CultureDetail;
