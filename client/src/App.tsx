import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthProvider } from "./hooks/AuthContext";
import Weather from "./pages/Weather/Weather";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Weather />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
