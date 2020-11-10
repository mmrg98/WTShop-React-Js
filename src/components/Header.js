import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Logout from "./Logout";

// Logo

const Header = ({ user }) => (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <NavLink to="/">
          <a className="navbar-brand" href="">
            LOGO
          </a>
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <NavLink to="/cart">
                <a className="nav-link" href="#">
                  Cart <span className="sr-only">(current)</span>
                </a>
              </NavLink>
            </li>

            {/* <li class="nav-item">
          <a class="nav-link" href="{% url 'previous-event'  %}">previous event</a>
        </li> */}
            {user ? (
              <>
                {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> */}
                <NavLink to="/profile">
                  <a class="nav-link" href="">
                    Profile
                  </a>
                </NavLink>

                <a class="nav-link" href="">
                  Order History
                </a>
                <a class="nav-link" href="">
                  <Logout />
                </a>
                {/* </div> */}
              </>
            ) : (
              <>
                <li class="nav-item">
                  <NavLink
                    to="/signup"
                    className="btn btn-success m-2 float-left"
                  >
                    <a class="nav-link" href="{% url 'signup' %}">
                      Sign Up
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/login" className="btn btn-info m-2 float-left">
                    <a class="nav-link" href="{% url 'login' %}">
                      Log In
                    </a>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  </>
);

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Header);
