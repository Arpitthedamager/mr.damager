import { motion } from "framer-motion";

const Wwr = () => {
  return (
    <div className="who-we-are--section wwrcolor py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="who-layout grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Card */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="who-we-are-left-content-wrap relative">
              <div className="who-section-first-image">
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674eaa2c9f77c492b90e347c_who-we%20are-image.png"
                  alt="who-we-are"
                  className="who-we-are-image w-full rounded-lg"
                />
              </div>
              <div className="client-wrap flex  -space-x-4 mt-4">
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b7e3965221b49e82fb_client-one.png"
                  alt="client"
                  className="client-image w-16 h-16 rounded-full"
                />
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/674da4b6f29da8f7e0651eda_client-two.png"
                  alt="client"
                  className="client-image-two w-16 h-16 rounded-full"
                />
                <img
                  src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672219e4d65aa99d9cb50c1a_client-image-2.png"
                  alt="client"
                  className="client-image-two w-16 h-16 rounded-full"
                />
                <div className="client-image w-16 h-16 rounded-full border border-white  bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                  <p className="text-5xl">+</p>
                </div>
              </div>
              <h3 className="text-4xl font-semibold mt-4">
                40k+ Happy Clients
              </h3>
            </div>
          </motion.div>

          {/* Middle Card */}
          <motion.div
            className="who-we-are-middle-card text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="who-we-are-middle-content-wrap">
              <div className="tiny-button text-sm  uppercase font-semibold  mb-2">
                Who We Are
              </div>
              <h2 className="who-we-are-title text-3xl font-bold leading-snug">
                Passionate About <br />
                Growth
              </h2>
              <p className="who-we-are--text text-gray-600 mt-4">
                We are a passionate team of marketing committed to helping
                businesses thrive. With a focus on innovation, strategy, and
                results.
              </p>
              <div className="who-we-are-button-wrap mt-6">
                <a
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl text-white px-6 py-3 hover:bg-primary border-2 border-gradient-to-r "
                >
                  <button className="button font-semibold">
                    Discover More
                  </button>
                  <img
                    src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/6727128b273f00c151622b3e_button-arrow.png"
                    alt="arrow"
                    className="button-icon ml-2 w-4 h-4"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="who-we-are-last-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="https://cdn.prod.website-files.com/6721e220b6b0484ea27da807/672219e664044956c8ce0844_who-right-image.png"
              alt="right"
              className="who-we-are-right-image w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Wwr;
