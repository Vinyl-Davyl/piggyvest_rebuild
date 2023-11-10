import React from "react";
import "./Security.scss";
import { Link } from "react-router-dom";
import Shield from "../../assets/images/png/shield.png";

const Security = () => {
  return (
    <div className="security">
      <div className="container">
        <div className="row">
          <div className="left">
            <img src={Shield} alt="security-icon" />
          </div>

          <div className="right">
            <h4>Your security is our priority</h4>
            <p>
              PiggyVest uses the highest level of Internet Security and it is
              secured by 256 bits SSL security encryption to ensure that your
              information is comepletely protected from fraud.
            </p>
            <Link to="/">Learn more {">"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
