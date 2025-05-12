import { useEffect } from "react";
import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthProvider } from "./hooks/AuthContext";

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
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
