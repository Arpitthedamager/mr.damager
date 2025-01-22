"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const zoomRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const zoomElement = zoomRef.current;
    const containerElement = containerRef.current;
    const headerElement = headerRef.current;
    const footerElement = footerRef.current;
    const textElement = textRef.current;
    const buttonElement = buttonRef.current;

    if (zoomElement && containerElement) {
      // GSAP ScrollTrigger animation for zoom effect
      gsap.to(zoomElement, {
        scale: 2000,
        duration: 1,
        scrollTrigger: {
          trigger: containerElement,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });
    }

    if (headerElement && footerElement && textElement && buttonElement) {
        // Fade out elements only on scroll
        gsap.to([headerElement, footerElement, textElement, buttonElement], {
          opacity: 0, // Fade out completely
          y: 50, // Move slightly upwards
          duration: 1, // Add duration for smoother animation
          ease: "power1.inOut", // Optional: Add easing for smoother effect
          scrollTrigger: {
            trigger: containerElement, // Trigger animation based on the Hero section
            start: "top 80%", // Start fading out when scrolling reaches 80% of the Hero section
            end: "top top", // Fully fade out when Hero section reaches the top
            scrub: 1, // Smooth transition based on scroll progress
            markers: false, // Optional: Use this to visualize trigger points during debugging
            toggleActions: "play none none none", // Optional: Play animation only on scroll, don't reverse
          },
        });
      }
      

    // Cleanup GSAP ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col overflow-hidden"
    >
      {/* Header Section */}
      <div
        ref={headerRef}
        className="w-full flex items-center justify-between px-6 md:px-16 py-6"
      >
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <div className="rounded-full bg-gray-300 w-full h-full"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="font-medium text-lg">Mr. Damager (Arpit Kumar)</p>
        </div>

        {/* Location */}
        <p className="text-gray-600 text-lg">Agra, India (2025)</p>

        {/* Let’s Talk Button */}
        <motion.a
          href="#contact"
          className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg font-semibold hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Let’s talk →
        </motion.a>
      </div>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          ref={zoomRef}
          className="text-6xl md:text-9xl font-bold"
          style={{ transformOrigin: "center" }}
        >
          Web{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Developer
          </span>
        </motion.h1>
        <p ref={textRef} className="mt-16 text-xl text-gray-600">
          Crafting seamless websites with creativity and precision.
        </p>
        <motion.a
          ref={buttonRef}
          href="#about"
          className="mt-6 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg font-semibold hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Let’s talk →
        </motion.a>
      </div>

      {/* Footer Section */}
      <div
        ref={footerRef}
        className="relative w-full flex items-center justify-between px-6 md:px-16 pb-6"
      >
        {/* Play Button */}
        <motion.div
          className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Play
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
