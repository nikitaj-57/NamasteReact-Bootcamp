import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer className="my-2">
      {/* <h1 className="text-white">Footer Component</h1> */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme}
      </button>
    </footer>
  );
};

export default Footer;
