import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles.css";
import ThemeContext from "./Context/ThemeContext";
import { TitleComponent, Footer } from "./Components";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <TitleComponent />
      <Outlet />
      <Footer />
    </ThemeContext.Provider>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
