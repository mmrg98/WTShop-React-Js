import React from "react";
import { NavLink } from "react-router-dom";

// Logo


const Header = () => (
  <div>
    <section>
      <h4 className="menu-item active">
        <NavLink to="/cart">Cart</NavLink> ______
        <NavLink to="/">home</NavLink>
      </h4>
    </section>
  </div>
);

export default Header;
