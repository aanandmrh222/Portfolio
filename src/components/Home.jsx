import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ak1 from "../assets/ak1.jpg";
import Aanand_Resume from "../assets/Aanand_Resume.pdf";

const Home = () => {
  return (
    <div
      id="Home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-900 pt-24 pb-16 md:h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full md:pr-8 mb-12 md:mb-0"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I am Aanand Kumar 
          </h2>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'UI/UX Designer',
              1000,
              'Software Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-blue-400"
            repeat={Infinity}
          />
          <p className="text-gray-400 text-lg max-w-md my-8">
            I am a B.tech Computer Science & Engineering Student at Lovely Professional University, specializing in Full-Stack Development. I focus on building scalable applications and have a solid foundation in both front-end and back-end development.
          </p>

          <div className="flex gap-4">
            <a
              href={Aanand_Resume}
              download="Aanand_Resume.pdf"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Download CV
              <span className="ml-2 group-hover:rotate-90 duration-300">
                <FaDownload size={18} />
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1VWxs203KNdt9coymmxJ-ezPwwBP5xxRP/view?usp=sharing"
              target="_blank"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-300"
            >
              Video CV
              <span className="ml-2 group-hover:rotate-90 duration-300">
                <FaDownload size={18} />
              </span>
            </a>
            <div className="flex gap-4 py-4">
              <a
                href="https://github.com/aanandmrh222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/aanandmrh222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://x.com/aanand5440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={ak1}
              alt="my profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
