import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Countries from "./pages/Countries/Countries";

function App() {
  return (
    <>
      <Header />
      <Countries />
      <Outlet />
    </>
  );
}

export default App;
