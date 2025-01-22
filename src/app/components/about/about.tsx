"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Card stacking animation  
    const cards = document.querySelectorAll('.card-wrapper');
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: index * -30, // Stagger the cards vertically
        zIndex: cards.length - index, // Ensure proper stacking
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }); 
    });

    // Animate the text split as before
    const nameText = document.querySelectorAll('.split-text span');
    gsap.to(nameText[0], {
      x: -150,
      y: -100,
      rotationZ: -45,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });

    gsap.to(nameText[1], {
      y: -150,
      rotationZ: -20,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });

    gsap.to(nameText[2], {
      x: 150,
      y: -100,
      rotationZ: 45,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 30%',
        end: 'top 10%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about" className="about-section container h-screen mx-auto p-8 text-center">
      <div className="text-section ">
        {/* Main text */}
        <h2 className="text-4xl py-10 font-bold mb-8">
          <span className="split-text inline-block">
            <span>👋 Hi,</span>
          </span>{' '}
          <span className="split-text inline-block">
            <span>I’m Mr.damager</span>
          </span>{' '}
          <span className="split-text inline-block">
            <span>(Arpit Kumar)</span>
          </span>
        </h2>

        {/* Cards section */}
        <div className=" relative about-cards-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="left-column">
            <div className="card-wrapper  p-4 shadow-lg">
              <div className="card-content">
                <p>
                  Web Developer and{' '}
                  <a
                    href="https://webflow.com/@antonastakhov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Certified Webflow Partner
                  </a>
                  . I specialize in creating websites with engaging interactions and immersive
                  animations.
                  <br />
                  Collaborating with clients from the US, EU, and Canada. Available worldwide,
                  except for Russia and Belarus.
                </p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="card-wrapper  p-4 shadow-lg">
              <div className="card-content">
                <div className="number text-2xl font-bold">1</div>
                <p>Freelancer to do it all in Webflow</p>
              </div>
            </div>
            <div className="card-wrapper  p-4 shadow-lg">
              <div className="card-content">
                <div className="number text-2xl font-bold">2</div>
                <p>Concepts to choose from</p>
              </div>
            </div>
            <div className="card-wrapper p-4 shadow-lg">
              <div className="card-content">
                <div className="number text-2xl font-bold">3</div>
                <p>Rounds of revisions</p>
              </div>
            </div>
            <div className="card-wrapper  p-4 shadow-lg">
              <div className="card-content">
                <div className="number text-2xl font-bold">4</div>
                <p>
                  Weeks of fast development
                  <br />
                  (typical range is 2–8 weeks)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
