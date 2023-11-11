import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Security from "../../components/security/Security";
import SavingsList from "../../components/savingsList/SavingsList";
import Investment from "../../components/accessInvestment/Investment";
import MonthSaver from "../../components/saverOfMonth/MonthSaver";
import Customers from "../../components/customers/Customers";
import Featured from "../../components/features/Features";
import Footer from "../../components/footer/Footer";

const Landingpage: React.FC = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Security />
      <SavingsList />
      <Investment />
      <MonthSaver />
      <Customers />
      <Featured />
      <Footer />
    </div>
  );
};

export default Landingpage;
