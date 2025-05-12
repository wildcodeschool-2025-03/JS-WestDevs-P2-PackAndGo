import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const clearLocalStorageOnExit = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorageOnExit);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnExit);
    };
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
