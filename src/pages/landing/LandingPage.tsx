import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Security from "../../components/security/Security";
import SavingsList from "../../components/savingsList/SavingsList";
import Investment from "../../components/accessInvestment/Investment";
import MonthSaver from "../../components/monthSaver/MonthSaver";

const Landingpage: React.FC = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Security />
      <SavingsList />
      <Investment />
      <MonthSaver />
    </div>
  );
};

export default Landingpage;
