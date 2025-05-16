import { Outlet } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthProvider } from "./hooks/AuthContext";
import { ThemeProvider } from "./hooks/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
