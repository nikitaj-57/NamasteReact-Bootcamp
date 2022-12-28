import "./style.css";
import { Link } from "react-router-dom";

const title = "Brainy Fools";

const TitleComponent = () => {
  return (
    <nav className="nav-container">
      <div className="name">
        <p>{title}</p>
      </div>
      <ul>
        <Link to="/">
          <li className="list-items">HOME</li>
        </Link>
        <Link to="/about-us">
          <li className="list-items">ABOUT</li>
        </Link>
        <Link to="/login">
          <li className="list-items">Login - username</li>
        </Link>
        <li className="list-items">Dark Mode</li>
      </ul>
    </nav>
  );
};

export default TitleComponent;
