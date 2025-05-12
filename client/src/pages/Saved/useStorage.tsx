import type CountryProp from "../../types/Countries";

function useStorage() {
  function getStorage(): CountryProp[] {
    const actualStorage = localStorage.getItem("favoriteCountry");
    return actualStorage ? JSON.parse(actualStorage) : [];
  }
  return { getStorage };
}

export default useStorage;
