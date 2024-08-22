import { useState } from "react";
import logoJKTA from "../assets/logojk.jpeg"; // Replace with actual logo path
import logoTFI from "../assets/logojk.jpeg"; // Replace with actual logo path
import img1 from "../assets/logojk.jpeg"; // Replace with actual image paths
import img2 from "../assets/logojk.jpeg";
import img3 from "../assets/logojk.jpeg";
import img4 from "../assets/logojk.jpeg";
import img5 from "../assets/logojk.jpeg";
import img6 from "../assets/logojk.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      {/* Top Navigation */}
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl font-bold tracking-wider">
          TAEKWONDO ASSOCIATION OF DISTRICT ANANTNAG
        </h1>
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

        {/* Main Navigation */}
        <nav
          className={`hidden md:flex md:space-x-6 text-base font-medium items-center`}
        >
          <a
            href="#home"
            className="hover:text-purple-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#affiliated"
            className="hover:text-purple-400 transition duration-300"
          >
            Affiliated
          </a>
          <a
            href="#member"
            className="hover:text-purple-400 transition duration-300"
          >
            Member
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
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white text-center py-4">
          <a
            href="#home"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#affiliated"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Affiliated
          </a>
          <a
            href="#member"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Member
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

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center justify-center text-center py-12">
        <div className="flex items-center justify-between w-full md:w-2/3">
          {/* Left Logo */}
          <img src={logoJKTA} alt="JKTA Logo" className="w-20 md:w-28" />

          {/* Affiliations */}
          <div className="text-sm md:text-lg font-semibold text-white">
            <p className="leading-relaxed">
              AFFILIATED TO: <br />
              J & K TAEKWONDO ASSOCIATION (REGD)
              <br />
              WHICH IS AFFILIATED WITH:
              <br />
              TAEKWONDO FEDERATION OF INDIA (TFI) & J&K SPORTS COUNCIL (JKSC)
              <br />
              RECOGNISED BY:
              <br /> INDIAN OLYMPIC ASSOCIATION (IOA)
              <br /> MINISTRY OF YOUTH AFFAIRS & SPORTS, GOVT. OF INDIA
            </p>
          </div>

          {/* Right Logo */}
          <img src={logoTFI} alt="TFI Logo" className="w-20 md:w-28" />
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center space-x-4 py-8 overflow-x-auto w-full">
          <img src={img1} alt="Image 1" className="w-20 md:w-32" />
          <img src={img2} alt="Image 2" className="w-20 md:w-32" />
          <img src={img3} alt="Image 3" className="w-20 md:w-32" />
          <img src={img4} alt="Image 4" className="w-20 md:w-32" />
          <img src={img5} alt="Image 5" className="w-20 md:w-32" />
          <img src={img6} alt="Image 6" className="w-20 md:w-32" />
        </div>
      </div>
    </header>
  );
};

export default Header;
