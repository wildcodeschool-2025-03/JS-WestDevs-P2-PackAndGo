import { useState } from "react";
import useHandleModal from "../../hooks/useHandleModal";
import type { CultureDetailProps } from "../../types/Town";

function CultureDetail({ culture }: CultureDetailProps) {
  const { handleChange } = useHandleModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => handleChange(setIsOpen, isOpen)}>
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
