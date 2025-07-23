import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 md:px-0 animate-fadeIn mt-28 mb-28">
      
      {/* Greeting */}
      <h2 className="text-xl md:text-2xl font-medium mb-3 text-gray-200">Hello, I'm</h2>
      
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-amber-400">Shivam Mandal</h1>

      {/* Typing Animation */}
      <div className="text-base md:text-xl mb-6 relative inline-block max-w-xl text-gray-300">
        <TypeAnimation
          sequence={[
            "I build innovative solutions.",
            1500,
            "I design and develop web and mobile applications.",
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
          cursor={true}
        />
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-10 mt-4 mb-6">
        <a href="https://github.com/Shivam-Mandal" target='_blank' rel="noopener noreferrer">
          <img src="/assets/github.png" alt="GitHub" className="w-10 h-10 hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/shivam-mandal-4a2528230/" target='_blank' rel="noopener noreferrer">
          <img src="/assets/linkedin.png" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition" />
        </a>
        <a href="https://leetcode.com/u/Shivam_Mandal" target='_blank' rel="noopener noreferrer">
          <img src="/assets/coding.png" alt="LeetCode" className="w-10 h-10 hover:scale-110 transition" />
        </a>
      </div>

      {/* Download Resume Button */}
      <div>
        <button className="border border-white text-sm md:text-base rounded-md px-6 py-3 flex items-center gap-3 text-black hover:bg-white hover:text-black transition bg-yellow-500">
          <a href="https://drive.google.com/file/d/1BJLawwBk8M42iGJirVm7qRBIs2nAhtRi/view?usp=sharing" target='_blank' download className="flex items-center gap-2">
            <FaDownload /> Download My Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
