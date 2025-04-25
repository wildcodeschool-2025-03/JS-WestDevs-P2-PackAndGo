import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Sauvegarde from "./pages/Sauvegarde/Sauvegarde";
function App() {
  return (
    <>
      <Header />
      <Sauvegarde />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
