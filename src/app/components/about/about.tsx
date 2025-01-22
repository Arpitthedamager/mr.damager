import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Select the text spans
    const nameText = document.querySelectorAll('.split-text span');
    
    // Initial animation to make the text appear
    gsap.fromTo(
      nameText,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, // Delay for each letter to animate in
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 50%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Split and tilt text when scrolling
    gsap.to(nameText, {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 30%',
        end: 'bottom 0%',
        scrub: true,
        pin: true, // Keep the text pinned in the center
      },
      x: (i) => i * 10, // Space each span more as we scroll
      rotationZ: 10, // Rotate each span
      y: (i) => i * 10, // Adjust y-axis position to create spacing
      opacity: 0.5, // Fade out the text as it splits
      stagger: 0.1,
    });

    // Final state when the text goes out of view
    gsap.to(nameText, {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'bottom bottom',
        scrub: true,
      },
      opacity: 0,
      x: (i) => i * 20,
      rotationZ: 45,
    });
  }, []);

  return (
    <section id="about" className="about-section container h-screen mx-auto p-8 text-center">
      <div className="text-section">
        <h2 className="text-4xl font-bold mb-8">
          <span className="split-text inline-block transform transition-all duration-300">👋 Hi,</span>
          <span className="split-text inline-block transform transition-all duration-300">I’m Mr.damager</span>
          <span className="split-text inline-block transform transition-all duration-300">(Arpit Kumar)</span>
        </h2>
      </div>
    </section>
  );
};

export default About;
