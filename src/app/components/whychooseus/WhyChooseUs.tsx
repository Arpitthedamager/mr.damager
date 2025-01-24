import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhyChooseUs = () => {
  const rightCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rightCardsRef.current) {
      const cards = rightCardsRef.current.querySelectorAll(
        ".choose-us-right-card"
      );
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        // scrollTrigger: {
        //   trigger: rightCardsRef.current,
        //   start: "top center",
        //   end: "bottom center",
        //   scrub: true,
        // },
      });
    }
  }, []);

  return (
    <section className="py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 md:sticky top-16 self-start"
          >
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider uppercase bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                Why Choose Us
              </div>
              <h2 className="text-5xl font-bold mb-6">Why work with us?</h2>
              <p className="text-gray-500 mb-6 text-xl">
                We deliver results through innovative strategies, transparent
                communication, and a client-focused approach tailored to your
                business success.
              </p>
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6763bb0fea6538644281e363_choose%20image%20(1).png"
                alt="choose us"
                className="mx-auto md:mx-0 w-full"
              />
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="w-full md:w-1/2" ref={rightCardsRef}>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Client-Centric Approach",
                  content:
                    "We prioritize your goals, crafting personalized strategies that focus on delivering exceptional value and driving long-term success.",
                },
                {
                  title: "Expertise Across Industries",
                  content:
                    "With experience in diverse industries, we deliver tailored solutions that drive success across every sector we serve.",
                },
                {
                  title: "Transparent Communication",
                  content:
                    "We prioritize clear, open communication, keeping you informed and involved throughout every step of the journey.",
                },
                {
                  title: "Innovative Solutions",
                  content:
                    "We craft groundbreaking strategies and solutions, combining creativity and technology to provide impactful results tailored specifically to your business needs.",
                },
                {
                  title: "Proven Track Record",
                  content:
                    "Our extensive experience and consistent success in delivering high-quality projects across various industries make us a trusted partner for your business.",
                },
                {
                  title: "Data-Driven Strategies",
                  content:
                    "Leverage actionable insights and in-depth analytics to implement strategies that boost efficiency, improve performance, and drive measurable outcomes.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="choose-us-right-card bg-wwrcolor rounded-2xl p-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-500">{card.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
