import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import chatapp from "../assets/chatapp.png"
import jobportal from "../assets/jobportal.png"
import chatbot from "../assets/chatbot.png"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "ChatApp",
      description: "Real-time chat application with Socket.IO, featuring instant messaging, user authentication, and room-based conversations.",
      image: chatapp,
      github: "http://github.com/aanandmrh222",
      demo: "http://github.com/aanandmrh222",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT auth"]
    },
    {
      id: 2,
      title: "Job Portal",
      description: "Full-stack job listing platform with advanced search, user profiles, recruiters profiles, and application tracking system.",
      image: jobportal,
      github: "http://github.com/aanandmrh222",
      demo: "http://github.com/aanandmrh222",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT auth"]
    },
    {
      id: 3,
      title: "AI Chatbot",
      description: "Intelligent chatbot powered by Gemini API, featuring natural language processing and context awareness.",
      image: chatbot,
      github: "http://github.com/aanandmrh222",
      demo: "http://github.com/aanandmrh222",
      tech: ["Python", "API", "Streamlit"]
    }
  ]

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
    { id: "ai", name: "AI/ML" }
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div id="Projects" className="bg-gradient-to-b from-gray-900 to-black w-full text-white py-24">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, github, demo, tech }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.map((item, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

