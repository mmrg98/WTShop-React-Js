import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import Logout from "./Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ user }) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
          <NavLink to="/">
            <a className="navbar-brand" href="">
              <img src="icofodr.ico" className="fodr" />
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
              <li class="nav-item ">
                <NavLink to="/cart">
                  <a className="nav-link" href="#">
                    {element}
                    <span className="sr-only">(current)</span>
                  </a>
                </NavLink>
              </li>

              {user ? (
                <>
                  <NavLink to="/profile">
                    <a class="nav-link" href="">
                      Profile
                    </a>
                  </NavLink>
                  <NavLink to="/Orders">
                    <a class="nav-link" href="">
                      Orders History
                    </a>
                  </NavLink>

                  <a class="nav-link" href="">
                    <Logout />
                  </a>
                  {/* </div> */}
                </>
              ) : (
                <>
                  <li class="nav-item text-Black">
                    <NavLink to="/signup">
                      <button className="btn btn-outline-success btn-sm m-1 text-Black">
                        Sign Up
                      </button>
                    </NavLink>
                  </li>
                  <li class="nav-item text-White">
                    <button className="btn btn-outline-primary btn-sm ml-2 m-1 text-White ">
                      <NavLink to="/login">Log In</NavLink>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = ({ user }) => ({ user });
export default connect(mapStateToProps)(Header);
