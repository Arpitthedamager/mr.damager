"use client";
import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

const Hero1: React.FC = () => {
  React.useEffect(() => {
    // Animate rotation for the outer badge indefinitely
    gsap.to(".badge-outer", {
      rotation: 360,
      duration: 5,
      repeat: -1, // Infinite loop
      ease: "linear",
    });
  }, []);

  return (
    <div className="hero-container text-white px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center  my-10 md:my-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold leading-tight">
          Your Path To{" "}
          <span className="bg-clip-text text-stroke bg-gradient-to-r from-green-400 to-blue-500">
            Marketing
          </span>{" "}
          Excellence Starts Here
        </h1>
      </motion.div>

      <div className="hero-section relative rounded-lg max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
        {/* Rotating Badge */}
        <div className="absolute -top-10 right-10 z-10 hidden lg:block">
          <div className="relative flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674e9d6f5f091e516b57c5da_Group%201171275426.png"
              alt="Badge Outer"
              className="badge-outer w-20 sm:w-24 md:w-32"
            />
            <img
              src="/Mr.damager.png"
              alt="Badge Inner"
              className="absolute ml-4 sm:ml-6 inset-0 w-8 sm:w-12 md:w-16 rounded-full"
            />
          </div>
        </div>

        {/* Tilted Div */}
        <motion.div
          className="relative text-left h-auto w-full lg:w-1/2 mb-10 lg:mb-0"
        >
          <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[8deg] w-full h-full max-w-sm bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl"></div>

          {/* Inner Black Box */}
          <div className="relative inset-1 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl">
            <h3 className="text-3xl sm:text-4xl md:text-6xl py-2 font-bold">20+</h3>
            <p className="text-xl sm:text-2xl md:text-3xl py-2 font-medium">
              Year Experience
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              With 20 Years Of Experience, We've Earned Hundreds Of Awards And
              Certificates. We've Earned Hundreds Of Awards.
            </p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center z-0 w-full lg:w-1/2"
        >
          <Image
            width={500}
            height={500}
            src="/hero1/1.png"
            alt="Hero Image"
            className="rounded-3xl w-full max-w-md md:max-w-lg lg:max-w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero1;
