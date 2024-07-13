// import React from 'react'

import Consulting from "./servicesItems/Consulting";
import DesignUiUx from "./servicesItems/DesignUiUx";
import MobileSection from "./servicesItems/MobileSection";
import Optimization from "./servicesItems/Optimization";
import System from "./servicesItems/System";

const Services = () => {
  return (
    <section id="services">
      <MobileSection />
      <System />
      <DesignUiUx />
      <Optimization />
      <Consulting />
    </section>
  );
};

export default Services;
