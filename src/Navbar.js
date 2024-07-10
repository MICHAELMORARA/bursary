import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';
import image1 from "./Components/Images/image1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-700 p-4 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={image1} className="w-20 rounded-full" alt="Logo" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="text-sm lg:flex-grow md:text-end text-start lg:flex lg:justify-end">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/">Home Page</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/student-register">Student Register</Link> {/* Updated link */}
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/student-login">Student Login</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              <Link to="/admin-login">Admin Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
