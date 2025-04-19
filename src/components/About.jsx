const About = () => {
  return (
    <div
      id="About"
      className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-24"
    >
      <div className="max-w-screen-lg p-6 md:p-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 pb-2">
            About
          </p>
        </div>

        <div className="space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            {/* I'm an aspiring software engineer who is passionate about contributing
          to open-source projects, creating technology to elevate people, and
          building community. I enjoy contemplating creative solutions to
          problems. A BTech undergrad majoring in Computer Science and
          Engineering, learning and growing every day. I've learned the
          importance of applying traditional methods for futuristic projects. */}
            Hi, I’m Aanand Kumar, a B.Tech Computer Science & Engineering student at Lovely
            Professional University, specializing in Full-Stack Development. I focus on building
            scalable applications and have a solid foundation in both front-end
            and back-end development. I am committed to continuously improving
            my skills in emerging technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
