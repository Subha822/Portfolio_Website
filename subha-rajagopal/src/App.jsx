import React from "react";
import { motion } from "framer-motion";
import { Button } from "../src/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
     <Projects />

      {/* Reviews Section */}
    <Reviews />

      {/* Contact Section */}
    <Contact />

      {/* Social Media Links */}
    <Footer />
    </div>
  );
};

export default Portfolio;
