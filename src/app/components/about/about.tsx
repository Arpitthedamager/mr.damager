"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero1 from "../hero1/Hero1";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Text animations for marketing excellence
    const nameText = document.querySelectorAll(".split-text span");
    gsap.to(nameText[0], {
      x: -150,
      y: -100,
      rotationZ: -45,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    gsap.to(nameText[1], {
      y: -150,
      rotationZ: -10,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });

    gsap.to(nameText[2], {
      x: 150,
      y: -100,
      rotationZ: 45,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 30%",
        end: "top 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about" className="about-section container h-screen mx-auto text-center">
      <div className="text-section">
        <h2 className="text-4xl font-bold mb-8">
          <span className="split-text inline-block">
            <span>👋 Hi,</span>
          </span>{" "}
          <span className="split-text inline-block">
            <span>I’m Mr.damager</span>
          </span>{" "}
          <span className="split-text inline-block">
            <span>(Arpit Kumar)</span>
          </span>
        </h2>

        {/* Hero Section */}
      </div>
       <Hero1/>
    </section>
  );
};

export default About;
