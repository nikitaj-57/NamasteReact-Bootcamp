import React from "react";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  return (
    <div>
      <Link to="/search">
        <button>Search Team Members</button>
      </Link>
      <Link to="/search-github-users">
        <button>Search Github Users</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default BodyComponent;
