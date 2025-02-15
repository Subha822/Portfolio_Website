import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Keeper App",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: [ "To-Do-List", "Development"],
    link: "https://angelaswebdev-production.up.railway.app/",
  },
  {
    title: "Free stock photo app",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: ["API", "SPA"],
    link: "#",
  },
  {
    title: "Recipe app",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: ["Development", "API"],
    link: "#",
  },
  {
    title: "Real estate website",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: ["Frontend", "Design"],
    link: "#",
  },
  {
    title: "eCommerce website",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: ["Shopify", "Development"],
    link: "#",
  },
  {
    title: "vCard Personal portfolio",
    image: "https://screenshots.codesandbox.io/cqqz39/0.png",
    tags: ["Portfolio", "Minimal UI"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="text-white py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Portfolio Highlights</h2>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              {/* External Link */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="mt-4 flex items-center justify-end text-blue-400">
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
