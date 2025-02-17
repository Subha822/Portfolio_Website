import React from "react";
import { FaGithub, FaLinkedin,  FaInstagram, FaCodepen } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="text-white py-16 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Contact Info */}
       
        {/* Social Icons */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">Contact me for <span className="text-blue-400">collaboration</span></h3>
          <p className="mt-2 text-gray-400">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Subha822" className="text-gray-400 hover:text-white transition"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/subharajagopal/" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
          </div>
        </div>
      {/* Contact Form */}
      <div className="flex-1">
        <form className="bg-gray-800 p-6 rounded-xl shadow-lg" action="https://getform.io/f/bvrwrldb" method="POST">
          <div className="flex gap-4 mb-4">
            <input type="text" placeholder="Name" name="usname" className="w-1/2 p-3 rounded bg-gray-900 text-white outline-none" />
            <input type="email" placeholder="Email" name="uemail" className="w-1/2 p-3 rounded bg-gray-900 text-white outline-none" />
          </div>
          <textarea placeholder="Message" name="umessage" className="w-full p-3 rounded bg-gray-900 text-white outline-none h-24"></textarea>
          <button className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
