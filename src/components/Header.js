import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

// Logo
import Logout from "./Logout";
//import { logout } from "../redux/actions";
const Header = ({ user }) => (
  <div>
    <section>
      <h4 className="menu-item active">
        <NavLink to="/cart">Cart</NavLink> ______
        <NavLink to="/">home</NavLink>
        <NavLink to="/logout">logout</NavLink>
      </h4>
    </section>
    {/* {user ? (
      <Logout />
    ) : (
      <div>
        <Link to="/login" className="btn btn-info m-2 float-left">
          Login
        </Link>

        <Link to="/signup" className="btn btn-success m-2 float-left">
          Signup
        </Link>
      </div>
    )} */}
  </div>
);
const mapStateToProps = ({ user }) => ({ user });
// const mapDispatchToProps = (dispatch) => ({
//   logout: () => dispatch(logout()),
// });
export default connect(mapStateToProps)(Header);
