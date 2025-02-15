import React from "react";
import { FaFigma, FaNodeJs, FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "Figma", icon: <FaFigma />, desc: "Design tool" },
  { name: "CSS", icon: <FaCss3Alt />, desc: "User Interface" },
  { name: "JavaScript", icon: <FaJs />, desc: "Interaction" },
  { name: "NodeJS", icon: <FaNodeJs />, desc: "Web Server" },
  { name: "ExpressJS", icon: <SiExpress />, desc: "Node Framework" },
  { name: "MongoDB", icon: <SiMongodb />, desc: "Database" },
  { name: "React", icon: <FaReact />, desc: "Framework" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, desc: "User Interface" },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-gray-300">Essential</span>{" "}
        <span className="text-white">Tools</span> I use
      </h2>
      <p className="text-gray-400 mb-6">
        Discover the powerful tools and technologies I use to create
        exceptional, high-performing websites & applications.
      </p>
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3 shadow-md"
          >
            <span className="text-xl text-blue-400">{skill.icon}</span>
            <div>
              <h4 className="font-semibold">{skill.name}</h4>
              <p className="text-xs text-gray-400">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
