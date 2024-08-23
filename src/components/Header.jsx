import { useState } from "react";
import { Link } from "react-router-dom";
import logoJKTA from "../assets/logojk.jpeg"; // Replace with actual logo path
import logoTFI from "../assets/doda.png"; // Replace with actual logo path
import img1 from "../assets/Asset1.png"; // Replace with actual image paths
import img2 from "../assets/Asset2.png";
import img3 from "../assets/Asset3.png";
import img4 from "../assets/Asset4.png";
import img5 from "../assets/Asset5.png";
import img6 from "../assets/Asset6.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-lg">
      {/* Top Navigation */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
        {/* Left Logo */}
        <img
          src={logoJKTA}
          alt="JKTA Logo"
          className="w-24 h-24 md:w-48 md:h-48 shadow-md rounded-full border-4 border-purple-500 transition-transform duration-300 transform hover:scale-105"
        />

        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-wide text-center uppercase">
          J&K TAEKWONDO ASSOCIATION OF INDIA
        </h1>

        {/* Right Logo */}
        <img
          src={logoTFI}
          alt="TFI Logo"
          className="w-24 h-24 md:w-48 md:h-48 shadow-md rounded-full border-4 border-purple-500 transition-transform duration-300 transform hover:scale-105"
        />

        {/* Hamburger Menu Button for Mobile */}
        <button
          className="md:hidden focus:outline-none mt-4"
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
      </div>

      {/* Affiliated Section */}
      <div className="container mx-auto text-center py-4">
        <p className="text-lg md:text-2xl font-semibold capitalize">
          Affiliated with: Taekwondo Federation of India & Indian Olympic
          Association
        </p>
      </div>

      {/* Image Section */}
      <div className="container mx-auto flex justify-center items-center space-x-4 py-8 overflow-x-auto">
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-12 md:w-32 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        ))}
      </div>

      {/* Main Navigation for Desktop */}
      <nav
        className={`hidden md:flex justify-center space-x-8 text-base font-semibold items-center relative py-4`}
      >
        <Link
          to="/"
          className="hover:text-purple-400 transition-all duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-purple-400 transition-all duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          About
        </Link>
        <Link
          to="/affiliated"
          className="hover:text-purple-400 transition-all duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          Affiliated
        </Link>
        <Link
          to="/members"
          className="hover:text-purple-400 transition-all duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          Member
        </Link>
        <Link
          to="/contact"
          className="hover:text-purple-400 transition-all duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-purple-500 before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
        >
          Contact
        </Link>
        <Link to="/register">
          <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 px-6 py-2 rounded-md text-white font-semibold shadow-md hover:shadow-lg">
            Register
          </button>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white text-center py-4 transition-transform duration-300 transform translate-y-0">
          <Link
            to="/"
            className="block py-2 hover:text-purple-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 hover:text-purple-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/affiliated"
            className="block py-2 hover:text-purple-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Affiliated
          </Link>
          <Link
            to="/members"
            className="block py-2 hover:text-purple-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Member
          </Link>
          <Link
            to="/contact"
            className="block py-2 hover:text-purple-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link to="/register">
            <button className="bg-purple-500 hover:bg-purple-600 transition-all duration-300 px-6 py-2 rounded-md text-white font-semibold my-2 shadow-md hover:shadow-lg">
              Register
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
