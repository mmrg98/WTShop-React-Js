import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhoneAlt,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
const FooterPage = () => {
  const element = <FontAwesomeIcon icon={faLocationArrow} />;
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
  const email = <FontAwesomeIcon icon={faInbox} />;
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      {" "}
      {/* <hr></hr> */}
      <p>
        ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
      </p>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title text-white">
              <span className="text-danger">{element}</span> Riyadh, Saudi
              Arabia,
            </h5>
            <p className="title text-white">
              2803 Prince Muhammad Bin Abdulaziz Rd · In Localizer Mall.
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className="title text-white">Contact US:</h5> */}
            <ul>
              <li className="list-unstyled">
                <p className="text-white">
                  <span className="text-danger">{phone}</span> +966 54 300 5555
                </p>
              </li>
              <li className="list-unstyled">
                <p className="text-white">
                  {" "}
                  <span className="text-danger">{email}</span> FODR@fodr.com
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
          <span className="text-danger">FODR.com</span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
