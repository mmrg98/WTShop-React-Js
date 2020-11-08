import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Logout from "./Logout";

// Logo

const Header = ({ user }) => (
  <div>
    <section>
      <h4 className="menu-item active">
        <NavLink to="/cart"> ______Cart</NavLink> ______
        <NavLink to="/">home</NavLink>
      </h4>
      {user ? (
        <Logout />
      ) : (
        <div>
          <NavLink to="/login" className="btn btn-info m-2 float-left">
            Login
          </NavLink>

          <NavLink to="/signup" className="btn btn-success m-2 float-left">
            Signup
          </NavLink>
        </div>
      )}
    </section>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Header);
