"use client";
import React, { useEffect } from "react";
import Hero from "../hero/Hero";
import About from "../about/about";
import Wwr from "../wwr/Wwr";
import ServicesSection from "../servicesection/servicesection";
import FeatureSection from "../feature/Feature";
// import DataAnalize from "../dataanalize/DataAnalize";

const Homepage: React.FC = () => {
  useEffect(() => {
    // Dynamically import LocomotiveScroll on the client
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;

      const scrollContainer = document.querySelector("[data-scroll-container]");

      if (scrollContainer) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollContainer as HTMLElement, // Type assertion to ensure TypeScript knows it's not null
          smooth: true,
        });

        // Cleanup on unmount
        return () => {
          locomotiveScroll.destroy();
        };
      }
    });
  }, []);
  return (
    <>
      {/* <div className="bg-primery-color"> */}

      <Hero />
      <About />
      <Wwr />
      <ServicesSection/>
      <FeatureSection/>
      {/* <DataAnalize/> */}
      {/* </div> */}
    </>
  );
};

export default Homepage;
