import { motion } from "framer-motion";
import { FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, icon: <FaHtml5 size={40} />, title: "HTML", level: 95 },
    { id: 2, icon: <FaCss3 size={40} />, title: "CSS", level: 95 },
    { id: 3, icon: <FaJs size={40} />, title: "JavaScript", level: 90 },
    { id: 4, icon: <FaReact size={40} />, title: "React.js", level: 90 },
    { id: 5, icon: <SiTailwindcss size={40} />, title: "Tailwind", level: 95 },
    { id: 6, icon: <FaNode size={40} />, title: "Node.js", level: 85 },
    { id: 7, icon: <SiExpress size={40} />, title: "Express", level: 85 },
    { id: 8, icon: <FaPython size={40} />, title: "Python", level: 80 },
    { id: 9, icon: <FaJava size={40} />, title: "Java", level: 90 },
    { id: 10, icon: <SiCplusplus size={40} />, title: "C++", level: 80 },
    { id: 11, icon: <SiMongodb size={40} />, title: "MongoDB", level: 85 },
    { id: 12, icon: <SiMysql size={40} />, title: "MySQL", level: 80 },
    { id: 13, icon: <FaGitAlt size={40} />, title: "Git", level: 90 },
    { id: 14, icon: <FaGithub size={40} />, title: "GitHub", level: 90 }
  ];

  return (
    <div id="Skills" className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-24">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <div className="pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-6 text-gray-300"
          >
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4"
            >
              <div className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                {skill.icon}
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-medium text-gray-300">{skill.title}</p>
                <p className="text-sm text-blue-400">{skill.level}%</p>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

