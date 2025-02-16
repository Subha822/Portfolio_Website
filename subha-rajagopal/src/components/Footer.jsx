import { FaGithub, FaLinkedin,  FaInstagram, FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Call to Action */}
        <div>
          <h3 className="text-2xl font-bold text-white">Let's work together today!</h3>
          <a 
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Start Project →
          </a>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-lg font-semibold text-white">Sitemap</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#timeline" className="hover:text-white">Timeline</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white">Socials</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="https://github.com/Subha822" className="hover:text-white flex items-center"><FaGithub className="mr-2" /> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/subharajagopal/" className="hover:text-white flex items-center"><FaLinkedin className="mr-2" /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
