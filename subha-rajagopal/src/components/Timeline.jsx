import { motion } from "framer-motion";
import { FaBookReader, FaSearch,   FaBriefcase, FaBusinessTime,FaCode, FaPlus } from "react-icons/fa";
import { LuDatabaseZap } from "react-icons/lu";

const timelineData = [
  { year: "2019 -  2022", title: "Bachelor of Computer Application[BCA]", description: "Bon Secours College For Women,Thanjavur.", icon: <FaBookReader />, color: "border-rose-400 text-rose-400 bg-rose-900" },
  { year: "Feb 2021 - May 2021", title: "Data Research Analyst", description: "ACE Study Overseas", icon: <LuDatabaseZap />, color: "border-green-400 text-green-400 bg-green-900" },
  { year: "Jul 2021 - Aug 2021", title: "Content Creation and Graphic Designing", description: "Fantastiqo Education Private Limited", icon: <FaBriefcase />, color: "border-blue-400 text-blue-400 bg-blue-900" },
  { year: "Aug 2021 - Aug 2021", title: "Business Development Executive", description: "9 Career Cafe", icon: <FaBusinessTime />, color: "border-teal-400 text-teal-400 bg-teal-900" },
  { year: "May 2022 - Apr 2024", title: "Software Engineer", description: "SmartiApps Technologies", icon: <FaCode />, color: "border-orange-400 text-orange-400 bg-orange-900" },
  { year: "", title: "", description: "", icon: <FaPlus />, color: "border-gray-400 text-gray-400 bg-gray-900" },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-black min-h-screen" id="timeline">
      <h2 className="text-5xl font-bold text-white mb-12">Timeline</h2>
      
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-orange-400 via-red-400 via-green-400 via-blue-400 to-teal-400"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex w-full mb-10 relative"
          >
            {index % 2 === 0 ? (
              <div className="w-1/2 px-10 text-right">
                <h3 className="text-2xl font-extrabold text-white">{item.year}</h3>
                <p className="text-2xl font-semibold text-gray-300">{item.title}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ) : (
              <div className="w-1/2 px-10 text-left"></div>
            )}

            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className={`w-14 h-14 border-4 ${item.color} rounded-full flex items-center justify-center shadow-xl`}>
                <span className={`text-3xl ${item.color}`}>{item.icon}</span>
              </div>
            </div>

            {index % 2 !== 0 && (
              <div className="w-1/2 px-10 text-left">
                <h3 className="text-2xl font-extrabold text-white">{item.year}</h3>
                <p className="text-2xl font-semibold text-gray-300">{item.title}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
