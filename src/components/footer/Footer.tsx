import React from "react";
import "./Footer.scss";
import PiggyVestLogo from "../../assets/images/svg/piggyvest-logo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="image-container">
            <img src={PiggyVestLogo} alt="PiggyVest Logo" />
          </div>
          <div className="works">
            <p>Products</p>
            <Link to={"/"}>Piggybank</Link>
            <Link to={"/"}>Invest</Link>
            <Link to={"/"}>Safelock</Link>
            <Link to={"/"}>Target Savings</Link>
            <Link to={"/"}>Flex Naira</Link>
          </div>
          <div className="works">
            <p>Company</p>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>FAQs</Link>
            <Link to={"/"}>Blog</Link>
          </div>
          <div className="works legal">
            <p>Legal</p>
            <Link to={"/"}>Terms</Link>
            <Link to={"/"}>Privacy</Link>
            <Link to={"/"}>Security</Link>
          </div>
          <div className="connect">
            <div className="socials">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-square-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <Link to={"/"}>
              Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
              Nigeria.
            </Link>
            <Link to={"/"}>contact@piggyvest.com</Link>
            <Link to={"/"}>+234 700 933 933 933</Link>
          </div>
        </div>
        <div className="about">
          <p>
            Piggyvest (formerly piggybank.ng) is the leading online savings &
            investing platform in Nigeria. For over 6 years, our customers have
            saved and invested billions of Naira that they would normally be
            tempted to spend.
          </p>
          <p className="primary">
            2016 - 2022 PiggyTech Global Limited - RC 1405222
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
