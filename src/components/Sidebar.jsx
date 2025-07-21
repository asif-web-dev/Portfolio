
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import {
  MdHome, MdPerson, MdWork, MdContactMail, MdList, MdFolderOpen
} from "react-icons/md";
import profileImg from "../assets/WhatsApp.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClasses = "flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeLink = "bg-gray-700";

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="sm:hidden bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Asif</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white sm:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col w-64 min-h-screen p-6 fixed z-50`}
      >
        <img
          src={profileImg}
          alt="Asif"
          className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4 mx-auto"
        />
        <h1 className="text-xl font-bold mb-2 text-center">Asif</h1>

        <div className="flex justify-center space-x-4 text-xl mb-6">
          <a 
          href="https://github.com/asif-web-dev"
          target="_blank"
           rel="noopener noreferrer"
          ><FaGithub /></a>
          <a 
          href="https://www.linkedin.com/in/asif-rasool-ba4aba375/"
          target="_blank"
           rel="noopener noreferrer"
          ><FaLinkedin /></a>
        </div>

        <nav className="w-full">
          <ul className="space-y-2">
            <li><NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdHome /> <span>Home</span></NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdPerson /> <span>About</span></NavLink></li>
            <li><NavLink to="/resume" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdList /> <span>Resume</span></NavLink></li>
            <li><NavLink to="/portfolio" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdFolderOpen /> <span>Portfolio</span></NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdWork /> <span>Services</span></NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ""}`}><MdContactMail /> <span>Contact</span></NavLink></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
