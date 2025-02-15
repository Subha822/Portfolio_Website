import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg flex items-center space-x-6 transition-all duration-300 ${isScrolled ? "scale-90 opacity-80" : "scale-100 opacity-100"}`}
    >
      <a href="#home" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">Home</a>
      <a href="#about" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">About</a>
      <a href="#work" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">Work</a>
      <a href="#reviews" className="text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">Reviews</a>
      <a
        href="#contact"
        className="ml-auto bg-white/20 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-white hover:text-black transition"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;