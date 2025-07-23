import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:pl-10 animate-fadeIn mt-30 m-20">
      {/* Left Column - Text Content */}
      <div className="text-center md:text-left md:flex-1">
        <h2 className="text-3xl font-bold mb-4">Hello, I'm</h2>
        <h1 className="text-6xl font-bold mb-4 text-amber-400">Shivam Mandal</h1>

        {/* Typing Animation */}
        <div className="text-2xl mb-6 relative inline-block">
          <TypeAnimation
            sequence={[
              "I build innovative solutions.",
              1500,
              "I design and develop web applications.",
              1500,
              "I create seamless user experiences.",
              1500,
              "I code with passion and precision.",
              1500,
              "I develop cutting-edge web technologies.",
              1500,
              "I craft digital solutions for the modern web.",
              1500,
              "I transform ideas into reality.",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block', whiteSpace: 'nowrap', paddingRight: '5px' }}
            repeat={Infinity}
            cursor={true} // Add this line to enable the default cursor
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6 mb-6">
          <a href="https://github.com/Shivam-Mandal" className="text-blue-400 hover:text-blue-500" target='_blank' rel="noopener noreferrer">
            <img src="src/assets/github.png" alt="GitHub" className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/shivam-mandal-4a2528230/" className="text-blue-400 hover:text-blue-500" target='_blank' rel="noopener noreferrer">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a href="https://leetcode.com/u/Shivam_Mandal" className="text-blue-400 hover:text-blue-500" target='_blank' rel="noopener noreferrer">
            <img src="src/assets/coding.png" alt="LeetCode" className="w-10 h-10" />
          </a>
        </div>

        {/* Download Resume Button */}
        <div>
          <button className="border rounded-md p-4">
            <a href="/resume.pdf" className="flex items-center gap-3">
              <FaDownload /> Download My Resume
            </a>
          </button>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="flex justify-center md:justify-end mt-6 md:mt-0 mb-20">
        <img
          src="src/assets/profile-img.jpeg"
          alt="Shivam Mandal"
          className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover mb-4 animate-fadeIn"
        />
      </div>
    </div>
  );
}

export default Home;
