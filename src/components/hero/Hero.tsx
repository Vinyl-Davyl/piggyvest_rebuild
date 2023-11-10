import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import Investify from "../../assets/images/png/investify.png";
import Rent from "../../assets/images/png/rent.png";
import BoxBG from "../../assets/images/png/rex-bg.png";
import Woman from "../../assets/images/png/woman.png";
import Cross from "../../assets/images/svg/cross.svg";
import Circle from "../../assets/images/svg/circle.svg";
import Dot from "../../assets/images/svg/dot.svg";
import Apple from "../../assets/images/svg/apple.svg";
import Google from "../../assets/images/svg/google.svg";

const Hero = () => {
  return (
    <div className="invest">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="text">
              <h1>The Better Way to Save & Invest.</h1>
              <p>
                PiggyVest helps over 4 million customers achieve their financial
                goals by helping them save and invest with ease.
              </p>
            </div>
            <div className="box">
              <Link to={"/register"} className="btn btn-signup">
                Create free account
              </Link>
              <div className="download">
                <Link to={"/"} className="btn-download">
                  <img
                    src={Apple}
                    alt="download-apple"
                    width="18"
                    height="22"
                  />{" "}
                  Get on Iphone
                </Link>
                <Link to={"/"} className="btn-download">
                  <img
                    src={Google}
                    alt="download-apple"
                    width="24"
                    height="24"
                  />{" "}
                  Get on Android
                </Link>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="box">
              <img src={BoxBG} alt="rectangle" className="rectangle" />
              <img src={Woman} alt="woman-pic" className="womanpic" />
              <img src={Rent} alt="rest-logo" className="rent" />
              <img src={Investify} alt="gggs" className="investify" />
              <img src={Circle} alt="circle" className="circle" />
              <img src={Cross} alt="cross" className="cross" />
              <img src={Dot} alt="dot" className="dot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
