import type { Dispatch, SetStateAction } from "react";

let activeModal: Dispatch<SetStateAction<boolean>> | null = null;

function useHandleModal() {
  const handleChange = (
    setter: Dispatch<SetStateAction<boolean>>,
    variable: boolean,
  ) => {
    if (activeModal && activeModal !== setter) {
      activeModal(false);
    }
    activeModal = setter;
    setter(!variable);
  };

  return { handleChange };
}

export default useHandleModal;
