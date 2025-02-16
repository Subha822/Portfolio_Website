import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  const handleScroll = () => {
    const timelineSection = document.getElementById("timeline");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6" id="home">
      <div className="max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <div className="flex items-center space-x-2 mb-2">
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <p className="text-sm text-gray-400">Available for work</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-300">Building Scalable</span> <br />
            <span className="text-white">Modern Websites</span> <br />
            <span className="text-gray-300">for the Future</span>
          </h1>
          <div className="flex space-x-4 mt-6">
            <a
              href="/My_Resume.pdf"
              download="My_Resume.pdf"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Download CV <FaDownload className="ml-2" />
            </a>
            <button 
              onClick={handleScroll}
              className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg"
            >
              Scroll down <FaArrowDown className="ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-0 md:ml-10"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFYvFmai-bGnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1688104112532?e=1744848000&v=beta&t=0nYSwX29P67G5WV58y5MW-H0eee1c8TD9ngJHhUYqyo"
            alt="Profile"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
