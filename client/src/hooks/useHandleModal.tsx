import type { Dispatch, SetStateAction } from "react";

function useHandleModal() {
  const handleChange = (
    setter: Dispatch<SetStateAction<boolean>>,
    variable: boolean,
  ) => setter(!variable);

  return { handleChange };
}

export default useHandleModal;
