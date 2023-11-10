import React from "react";
import "./SavingsList.scss";
import { Link } from "react-router-dom";

import Image1 from "../../assets/images/png/image1.png";
import Image2 from "../../assets/images/png/image2.png";
import Image3 from "../../assets/images/png/image3.png";
import Image4 from "../../assets/images/png/image4.png";
import Svg1 from "../../assets/images/svg/forwardarrow1.svg";
import Svg2 from "../../assets/images/svg/forwardarrow2.svg";
import Svg3 from "../../assets/images/svg/forwardarrow3.svg";
import Svg4 from "../../assets/images/svg/forwardarrow4.svg";
import SavingType from "../generics/savingType/SavingType";

const SavingsList: React.FC = () => {
  return (
    <div className="savings">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="content">
              <h3>4 ways to build your savings</h3>
              <p>
                Earn 5%-15% when you save with any of these PiggyVest plans.
              </p>
              <Link to={"/"} className="btn">
                Start Saving
              </Link>
            </div>
          </div>

          <div className="right">
            <SavingType
              ImageName={Image1}
              Header={"Automated Savings"}
              Content={
                "Build a dedicated savings faster on your terms automatically or manually."
              }
              SvgName={Svg1}
              BankType={"Piggybank"}
            />
            <SavingType
              ImageName={Image2}
              Header={"Fixed Savings"}
              Content={
                "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit"
              }
              SvgName={Svg2}
              BankType={"Safelock"}
            />
            <SavingType
              ImageName={Image3}
              Header={"Goal-oriented Savings"}
              Content={
                "Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
              }
              SvgName={Svg3}
              BankType={"Target Savings"}
            />
            <SavingType
              ImageName={Image4}
              Header={"Flexible Savings"}
              Content={
                "Save, transfer, withdraw, manage and organise your money for free at any time."
              }
              SvgName={Svg4}
              BankType={"Flex Naira"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsList;
