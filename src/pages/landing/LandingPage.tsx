import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Security from "../../components/security/Security";

const Landingpage = () => {
  return (
    <div className="landing">
      <Header />
      <Hero />
      <Security />
    </div>
  );
};

export default Landingpage;
