import { useState } from "react";
import logo from "../assets/logojk.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <img
            src={logo}
            alt="J & K Taekwondo Association Logo"
            className="w-16 h-16 md:w-24 md:h-24"
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
            J & K Taekwondo Association
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a
            href="#community"
            className="hover:text-purple-400 transition duration-300"
          >
            Community
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#support"
            className="hover:text-purple-400 transition duration-300"
          >
            Support
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
          <button className="bg-purple-500 hover:bg-purple-600 transition duration-300 px-4 py-2 rounded-md text-white font-semibold shadow-sm">
            Register
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white text-center py-4">
          <a
            href="#community"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Community
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#support"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Support
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
          <button className="bg-purple-500 hover:bg-purple-600 transition duration-300 px-6 py-2 rounded-md text-white font-semibold my-2 shadow-sm">
            Register
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
