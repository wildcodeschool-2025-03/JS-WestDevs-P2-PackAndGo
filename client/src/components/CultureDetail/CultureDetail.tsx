import { useState } from "react";
import type { ObjectDetail } from "../../types/Town";

function CultureDetail({ city }: ObjectDetail) {
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

          <p>{city.data.attributes.info.culture.must_see}</p>
          <p>{city.data.attributes.info.culture.description}</p>
          <p>{city.data.attributes.info.culture.tips}</p>
        </article>
      )}
    </>
  );
}
export default CultureDetail;
