import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Button from "../button/Button";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "SEO Audits & Reports",
    description:
      "SEO Audit is a comprehensive analysis of a website's current search engine performance.",
    frontIcon: "/path/to/seo-icon.png",
    hoverImage: "/servises/1.png",
    link: "/service-collection/seo-audits-reports",
    hoverTitle: "Optimize Your SEO",
  },
  {
    title: "Market Insight",
    description:
      "Gain insights, identify opportunities, and outperform competitors with strategic actions.",
    frontIcon: "/path/to/market-icon.png",
    hoverImage:
      "https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67222d3fa316129ee25bf031_blackbg.png",
    link: "/service-collection/market-insight",
    hoverTitle: "Market Strategies",
  },
  {
    title: "Brand Positioning",
    description:
      "Define your unique value—stand out, connect with customers, and build brand loyalty!",
    frontIcon: "/path/to/brand-icon.png",
    hoverImage: "/path/to/brand-hover-image.jpg",
    link: "/service-collection/brand-positioning",
    hoverTitle: "Build Your Brand",
  },
  {
    title: "Paid Advertising",
    description:
      "Maximize growth with targeted paid ads—drive traffic, increase conversions, and boost sales!",
    frontIcon: "/path/to/ads-icon.png",
    hoverImage: "/path/to/ads-hover-image.jpg",
    link: "/service-collection/paid-advertising",
    hoverTitle: "Grow With Ads",
  },
  {
    title: "Podcast Marketing",
    description:
      "Leverage podcasting to build authority, connect with audiences, and expand your reach.",
    frontIcon: "/path/to/podcast-icon.png",
    hoverImage: "/path/to/podcast-hover-image.jpg",
    link: "/service-collection/podcast-marketing",
    hoverTitle: "Podcast Success",
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      const cards = section.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 text-white ">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row mb-12  text-center md:text-start justify-between">
          <div className="mb-6 md:mb-0 flex-col">
            <div className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Our Services
            </div>
            <h2 className="text-xl md:text-5xl font-bold">
              Our Services Are Business-Shaped Solutions
            </h2>
          </div>
          <div className="flex items-center justify-center md:mt-6 md:justify-start">
            <Button
              text="Discover More"
              href="/about"
              icon="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6727128b273f00c151622b3e_button-arrow.png"
              hoverColor="#0a0a0a"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-2 md:gap-8  grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              className="service-card relative overflow-hidden group"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67222d3fa316129ee25bf031_blackbg.png"
                alt={service.title}
                className="absolute inset-0 w-full h-full "
              />

              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={service.hoverImage}
                  alt={service.hoverTitle}
                  className="w-full h-full "
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl">
                  <img
                    src={service.frontIcon}
                    alt={service.title}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                <a
                  href={service.link}
                  className="inline-flex items-center mt-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-colors"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>

              {/* Hover Title */}
              <div className="absolute bottom-7 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-2xl font-bold">{service.hoverTitle}</h4>
              </div>

              {/* Icon at Bottom Left */}
              <div className="absolute bottom-0 right-5 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                  <Link href={service.link}>
                    <p
                      // src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672224a6102865735013bbc7_service-arrow-icon.png"
                      // alt={service.title}
                      className="text-3xl tect-center"
                    >
                      ↗
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
