import React from "react";
import { Link } from "react-router-dom";
// import RoutePath from "./RoutePath";
const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/register" style={{ padding: 20 }}>
          REGISTRATION
        </Link>

        <Link to="/userdetails" style={{ padding: 20 }}>
          USERDETAILS
        </Link>

        <Link to="/reports" style={{ padding: 20 }}>
          DASHBOARD
        </Link>
      </div>
     
    </>
  );
};

export default Navbar;
