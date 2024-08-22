import { Link } from "react-router-dom";
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
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-lg">
      {/* Top Navigation */}
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-lg">
          TAEKWONDO ASSOCIATION OF DISTRICT ANANTNAG
        </h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8 text-purple-300"
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
          className={`hidden md:flex md:space-x-8 text-base font-semibold items-center`}
        >
          <Link
            to="/"
            className="hover:text-purple-400 transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            About
          </Link>
          <Link
            to="/members"
            className="hover:text-purple-400 transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Member
          </Link>
          <Link
            to="/contact"
            className="hover:text-purple-400 transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            Contact
          </Link>
          <Link to="/register">
            <button className="bg-purple-500 hover:bg-purple-600 transition duration-300 px-6 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg">
              Register
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white text-center py-4">
          <Link
            to="/"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/members"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Member
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-purple-400 transition duration-300"
          >
            Contact
          </Link>
          <Link to="/register">
            <button className="bg-purple-500 hover:bg-purple-600 transition duration-300 px-6 py-2 rounded-md text-white font-semibold my-2 shadow-md hover:shadow-lg">
              Register
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
