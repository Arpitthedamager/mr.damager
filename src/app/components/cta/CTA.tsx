import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../button/Button";

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section py-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="cta-layout flex flex-col lg:flex-row items-center justify-between bg-wwrcolor p-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Section */}
          <div className="cta-text-wrap text-center lg:text-left space-y-6 lg:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready To Work With Us And Grow Your Business
            </h2>
            <div className="cta-button-wrap flex justify-center lg:justify-start space-x-4">
              <a
                href="/contact"
                className="button-large-with-icon border border-purple-500 text-white py-3 px-6 rounded-3xl flex items-center hover:bg-purple-500 transition"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="ml-2 w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                  />
                </svg>
              </a>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  text="Let’s talk →"
                  href="/contact"
                  className="px-6 py-2"
                  hoverColor="#242629"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Section */}
          <motion.div
            className="cta-right-wrap bg-primary text-white p-6 group rounded-lg lg:w-1/3 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h6 className="text-lg font-semibold">
              Subscribe To Our Newsletter
            </h6>
            <p className="text-sm text-gray-400">
              Stay Updated With Exclusive Tips, Insights, And Special Offers
              Today!
            </p>
            <form className="form mt-4 flex items-center space-x-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="cta-input-field flex-1 border border-gray-600 bg-gray-800 text-white px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <motion.div className=" bottom-0 right-1 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
                <Link href="/about">
                <div className="flex items-center justify-center w-10 h-10 bg-wwrcolor group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 rounded-full transition-all duration-300">
                <p className="text-3xl text-center text-white">↗</p>
                  </div>
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
