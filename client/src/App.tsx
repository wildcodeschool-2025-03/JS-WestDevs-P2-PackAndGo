import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Town from "./pages/Town/Town";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Town />
      <Footer />
    </>
  );
}

export default App;
