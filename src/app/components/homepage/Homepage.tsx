"use client";
import React, { useEffect } from "react";
import Hero from "../hero/Hero";
// import About from "../about/About";

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
      <Hero />
      {/* <About /> */}
    </>
  );
};

export default Homepage;
