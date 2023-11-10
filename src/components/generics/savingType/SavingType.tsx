import React from "react";
import "./SavingType.scss";
import { Link } from "react-router-dom";

interface SavingTypeProps {
  ImageName: string;
  Header: string;
  Content: string;
  SvgName: string;
  BankType: string;
}

const SavingType: React.FC<SavingTypeProps> = ({
  ImageName,
  Header,
  Content,
  SvgName,
  BankType,
}) => {
  return (
    <div className="saving-type">
      <Link to="/">
        <img src={ImageName} alt={"saving-icon"} />
        <h5>{Header}</h5>
        <p>{Content}</p>
        <div className="sub-title">
          <img src={SvgName} alt={"saving-next"} />
          {BankType}
        </div>
      </Link>
    </div>
  );
};

export default SavingType;
