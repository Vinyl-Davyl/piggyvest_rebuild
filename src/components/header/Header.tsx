import React, { useState } from "react";
import "./Header.scss";
import PiggyLogo from "../../assets/images/svg/piggyvest-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleClick = () => {
    setResponsive(!responsive);
  };

  return (
    <div className={responsive ? "headerpage active" : "headerpage"}>
      <header className={responsive ? "header active" : "header"}>
        <div className="header-container">
          <img src={PiggyLogo} alt="Logo" />

          <div
            className={responsive ? "hamburger active" : "hamburger"}
            onClick={handleClick}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <div className="navBtn">
            <ul className="header-link">
              <li>
                <Link to={"/"}>Save</Link>
              </li>
              <li>
                <Link to={"/"}>Invest</Link>
              </li>
              <li>
                <Link to={"/"}>Stories</Link>
              </li>
              <li>
                <Link to={"/"}>FAQs</Link>
              </li>
              <li>
                <Link to={"/"}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className="nav-link-box">
            <ul className="nav-link">
              <li>
                <Link to={"/login"} className="btn btn-login">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to={"/register"} className="btn btn-signup">
                  Create free account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
