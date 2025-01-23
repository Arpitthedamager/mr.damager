"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "../button/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
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
      const mm = gsap.matchMedia();

      mm.add(
        {
          // Mobile view
          isMobile: "(max-width: 768px)",
          // Desktop view
          isDesktop: "(min-width: 769px)",
        },
        (context: gsap.Context) => {
          // Check if context.conditions is defined
          const { isMobile, isDesktop } = context.conditions || {};

          // Zoom animation
          gsap.to(zoomElement, {
            scale: isMobile ? 40 : isDesktop ? 2000 : 20,
            duration: 1,
            scrollTrigger: {
              trigger: containerElement,
              start: "top top",
              end: "bottom top",
              scrub: 1,
              pin: true,
            },
          });

          // Fade-out and fade-in animations for multiple elements
          gsap.fromTo(
            [headerElement, footerElement, textElement, buttonElement],
            {
              opacity: 1, // Start visible
              y: 0, // Start in original position
            },
            {
              opacity: 0, // Fade out
              y: -50, // Move up
              scrollTrigger: {
                trigger: containerElement,
                start: "top 20%",
                end: "bottom 10%",
                scrub: 1,
                toggleActions: "play reverse play reverse", // Ensure reverse effect when scrolling back up
              },
            }
          );
        }
      );

      // Cleanup GSAP ScrollTrigger and matchMedia
      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col overflow-hidden text-white"
    >
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        className="w-full flex items-center justify-between px-6 md:px-16 py-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12">
            <Image
              alt="logo(Mr.damagerimage)"
              src="/Mr.damager.jpg"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="font-medium text-lg">Mr. Damager (Arpit Kumar)</p>
        </div>

        {/* Location */}
        <p className="text-gray-400 text-lg">Agra, India (2025)</p>

        {/* Contact Button */}
        <Button
          text="Let’s talk →"
          href="/contact"
          className="px-6 py-2"
          hoverColor="#0a0a0a"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          ref={zoomRef}
          className="text-6xl md:text-9xl font-bold leading-tight"
          style={{ transformOrigin: "center" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Web{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Developer
          </span>
        </motion.h1>
        <motion.p
          ref={textRef}
          className="mt-8 mb-8 text-lg md:text-xl text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Crafting seamless websites with creativity and precision.
        </motion.p>
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            text="Let’s talk →"
            href="/contact"
            className="px-6 py-2"
            hoverColor="#0a0a0a"
          />
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        ref={footerRef}
        className="relative w-full flex items-center justify-between px-6 md:px-16 pb-6 mt-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {/* Play Button */}
        <motion.div
          className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          Play
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
