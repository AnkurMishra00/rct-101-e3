import React from "react";
import { Link } from "react-router-dom";
// use react-router Link or NavLink


const Navbar = () => {
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link" >Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button to="/Login " data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;



