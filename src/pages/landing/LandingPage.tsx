import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Security from "../../components/security/Security";
import SavingsList from "../../components/savingsList/SavingsList";

const Landingpage: React.FC = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Security />
      <SavingsList />
    </div>
  );
};

export default Landingpage;
