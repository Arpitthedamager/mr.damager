'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-6 md:px-16 py-6">
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

        {/* Let's Talk Button */}
        <motion.a
          href="#contact"
          className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg font-semibold hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Let’s talk →
        </motion.a>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold">
          Webflow{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Developer
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Crafting seamless websites with creativity and precision.
        </p>

        {/* Animated Text Icons */}
        <div className="relative mt-12 w-full max-w-screen-md">
          {/* Example 1: Curly Brace */}
          <motion.p
            className="absolute -top-10 left-0 text-3xl text-gray-400 italic transform rotate-[-15deg] cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1 }}
          >
            {'{'}
          </motion.p>

          {/* Example 2: Code Tag */}
          <motion.p
            className="absolute bottom-0 right-0 text-3xl text-gray-400 italic transform rotate-[15deg] cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2 }}
          >
            {'</>'}
          </motion.p>

          <p className="text-gray-600 text-lg animate-bounce mt-12">
            Scroll down...
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative w-full flex items-center justify-between px-6 md:px-16 pb-6">
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
}
