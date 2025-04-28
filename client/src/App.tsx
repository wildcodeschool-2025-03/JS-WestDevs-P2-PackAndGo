import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Countries from "./pages/Countries/Countries";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Countries />
      <Footer />
    </>
  );
}

export default App;
