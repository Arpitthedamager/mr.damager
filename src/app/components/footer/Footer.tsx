// components/Footer.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Footer: React.FC = () => {
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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="footer-left">
          <motion.a
            href="/"
            className="footer-logo-wrap block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="bg-clip-text text-4xl sm:text-5xl font-bold leading-tight text-stroke bg-gradient-to-r from-green-400 to-blue-500">
              Mr.Damager
            </h1>
          </motion.a>
          <p className="footer-text text-sm text-gray-300 leading-relaxed">
            Maxorin is a cutting-edge Webflow HTML template designed for dark
            marketing and bold brand strategies. Elevate your online presence
            with its sleek design and responsive layouts.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/login">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67230583aa50560b1ec0407c_facebook.png"
                alt="Facebook"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67230583f7d854cfbe929443_instagrame.png"
                alt="Instagram"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://twitter.com/login">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/67230589c62ec938ebe75b53_twitter.png"
                alt="Twitter"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://www.linkedin.com/login">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672305835fc516fb03950998_linked-in.png"
                alt="LinkedIn"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle flex justify-center">
        <div className="absolute z-10 block">
            <div className="relative flex justify-center items-center">
              <img
                src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674e9d6f5f091e516b57c5da_Group%201171275426.png"
                alt="Badge Outer"
                className="badge-outer w-20 sm:w-24 md:w-32"
              />
              <img
                src="/Mr.damager.png"
                alt="Badge Inner"
                className="absolute ml-5 mt-5 sm:ml-8 md:mt-8 inset-0 w-10 sm:w-12 md:w-16 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right grid grid-cols-2 gap-0">
          <div>
            <h3 className="text-lg font-semibold mb-3">Pages</h3>
            <a href="/" className="block text-sm text-gray-300 hover:underline">
              Home
            </a>
            <a
              href="/about"
              className="block text-sm text-gray-300 hover:underline"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block text-sm text-gray-300 hover:underline"
            >
              Contact
            </a>
            <a href="/blog" className="block text-sm text-gray-300 hover:underline">
              Blog
            </a>
            <a
              href="/services"
              className="block text-sm text-gray-300 hover:underline"
            >
              Services
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Utility</h3>
            <a
              href="/utility-page/licenses"
              className="block text-sm text-gray-300 hover:underline"
            >
              Licenses
            </a>
            <a
              href="/utility-page/style-guide"
              className="block text-sm text-gray-300 hover:underline"
            >
              Style Guide
            </a>
            <a
              href="/utility-page/changelog"
              className="block text-sm text-gray-300 hover:underline"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            ©2024 All Rights Reserved, Powered By{" "}
            <a href="http://www.webflow.com" className="text-blue-400 hover:underline">
              Webflow
            </a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/utility-page/licenses" className="hover:underline">
              Licenses
            </a>
            <a href="/utility-page/style-guide" className="hover:underline">
              Style Guide
            </a>
            <a href="/utility-page/changelog" className="hover:underline">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
