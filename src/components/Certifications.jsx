import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import javaCert from '../assets/java.png';
import webCert from '../assets/web.png';
import dsaCert from '../assets/dsa.png';

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "Java Programming",
      image: javaCert,
      alt: "Java Certification",
      link: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/aanandmrh222%40gmail.com_Core%20Java" 
    },
    {
      id: 2,
      title: "Web Development",
      image: webCert,
      alt: "Web Development Certification",
      link: "https://www.linkedin.com/learning/certificates/d446d2a7029ea9c64b93a79e5cd8e713ba2f869aa10258fd739db8b811ebbc6c" 
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      image: dsaCert,
      alt: "Data Structures and Algorithms Certification",
      link: "https://drive.google.com/file/d/1Y64wl393id9CoxSlsJDe2Lz1ENe-NDms/view?usp=sharing" 
    }
  ];

  return (
    <div id="Certifications" className="bg-gradient-to-b from-black to-gray-900 w-full text-white py-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certifications</p>
          <p className="py-6 text-gray-300">Check out my certifications right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certificates.map(({ id, title, image, alt, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 hover:scale-105 duration-500"
            >
              <div className="p-4">
                <img 
                  src={image} 
                  alt={alt}
                  className="rounded-md w-full object-cover"
                />
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-bold text-blue-400">{title}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`View ${title} certification`}
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications; 