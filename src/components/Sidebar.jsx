// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdHome, MdPerson, MdWork, MdContactMail, MdList, MdFolderOpen } from "react-icons/md";
import profileImg from '../assets/WhatsApp.jpg';

const Sidebar = () => {
  const linkClasses = "flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-700 transition duration-200";
  const activeLink = "bg-gray-700";

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col items-center fixed">
      <img
        src={profileImg}
        alt="Asif"
        className="w-32 h-32 rounded-full object-cover border-4 border-white mb-4"
      />
      <h1 className="text-xl font-bold mb-2">Asif</h1>

      {/* Social Icons */}
      <div className="flex space-x-4 text-xl mb-6">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaLinkedin /></a>
      </div>

      {/* Navigation */}
      <nav className="w-full">
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdHome /> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdPerson /> <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdList /> <span>Resume</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdFolderOpen /> <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdWork /> <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `${linkClasses} ${isActive ? activeLink : ''}`}>
              <MdContactMail /> <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
