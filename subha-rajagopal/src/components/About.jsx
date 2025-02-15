import React from "react";

const About = () => {
  return (
    <section id="about" className="text-white py-20 px-8 max-w-5xl mx-auto">
      {/* About Info */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <p className="text-lg">
          Welcome! I'm <strong>Henry</strong>, a professional web developer with a knack
          for crafting visually stunning and highly functional websites.
          Combining creativity and technical expertise, I transform your vision
          into a digital masterpiece that excels in both appearance and
          performance.
        </p>
        {/* Project and Experience Stats */}
        <div className="flex justify-start space-x-8 mt-6 text-2xl font-semibold">
          <div>
            <span className="text-blue-400">45+</span>
            <p className="text-gray-400 text-sm">Projects done</p>
          </div>
          <div>
            <span className="text-green-400">10+</span>
            <p className="text-gray-400 text-sm">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
