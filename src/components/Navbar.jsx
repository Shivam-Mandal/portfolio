import React, { useState } from 'react';
import '../index.css'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false); // Close the menu when a tab is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-cover p-4">
      <div className="container mx-auto px-4 md:px-10 flex justify-between items-center">
        <div className="text-xl font-bold flex w-20">
          <img src="/assets/logo1.png" alt="logo" />
        </div>
        {/* Hamburger Menu Button */}
        <button  
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          {menuOpen ? (
            // Cross Icon when menu is open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon when menu is closed
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
        {/* Menu Items */}
        <ul className={`flex flex-col md:flex-row space-y-2 lg:space-y-0 lg:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:flex-row md:items-center w-full md:w-auto text-white absolute md:relative top-16 md:top-0 right-0 left-0 bg-black md:bg-transparent md:text-white`}>
          <li>
            <a
              href="#home"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'home' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'about' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'skills' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'projects' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'experience' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'education' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('education')}
            >
              Education
            </a>
          </li>
         
          <li>
            <a
              href="#contact"
              className={`block md:inline-block p-2 md:py-0 hover:text-gray-400 ${activeTab === 'contact' ? 'border-b-2 border-amber-400 text-amber-400 hover:text-amber-400' : ''}`}
              onClick={() => handleTabClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
