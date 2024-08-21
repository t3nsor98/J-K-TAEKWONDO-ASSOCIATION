
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src="src/assets/logojk.jpeg" // Replace with the actual logo path
            alt="J & K Taekwondo Association Logo"
            className="w-16 h-16"
          />
          <h2 className="text-xl md:text-2xl font-bold">
            J & K Taekwondo Association
          </h2>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm md:text-base">
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
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 text-sm">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-purple-400 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12a10 10 0 1 0-11 9.95V14.5h-2v-3h2v-2.25c0-1.66.99-2.57 2.52-2.57.73 0 1.5.13 1.5.13v2h-1.11c-1.1 0-1.44.69-1.44 1.4V11.5h2.44l-.39 3h-2.05v7.45A10 10 0 0 0 22 12z"></path>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-purple-400 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4.93c-.77.34-1.58.57-2.43.68a4.27 4.27 0 0 0 1.86-2.36c-.8.47-1.68.82-2.62 1.01a4.24 4.24 0 0 0-7.22 3.87A12 12 0 0 1 3.17 3.87a4.23 4.23 0 0 0-.58 2.13 4.24 4.24 0 0 0 1.88 3.54 4.25 4.25 0 0 1-1.92-.53v.05a4.24 4.24 0 0 0 3.4 4.16 4.24 4.24 0 0 1-1.91.07 4.25 4.25 0 0 0 3.96 2.95A8.5 8.5 0 0 1 2 19.49a12 12 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22 4.93z"></path>
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-purple-400 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.16c3.18 0 3.56 0 4.82.07 1.17.06 1.8.25 2.22.42a4.43 4.43 0 0 1 1.62 1.05c.42.42.75.92 1.05 1.62.18.42.37 1.05.43 2.22.07 1.26.07 1.64.07 4.82s0 3.56-.07 4.82c-.06 1.17-.25 1.8-.42 2.22a4.43 4.43 0 0 1-1.05 1.62c-.42.42-.92.75-1.62 1.05-.42.18-1.05.37-2.22.43-1.26.07-1.64.07-4.82.07s-3.56 0-4.82-.07c-1.17-.06-1.8-.25-2.22-.42a4.43 4.43 0 0 1-1.62-1.05c-.42-.42-.75-.92-1.05-1.62-.18-.42-.37-1.05-.43-2.22-.07-1.26-.07-1.64-.07-4.82s0-3.56.07-4.82c.06-1.17.25-1.8.42-2.22a4.43 4.43 0 0 1 1.05-1.62c.42-.42.92-.75 1.62-1.05.42-.18 1.05-.37 2.22-.43 1.26-.07 1.64-.07 4.82-.07M12 0C8.7 0 8.31 0 7.05.07 5.81.14 4.97.35 4.24.68c-.8.34-1.47.8-2.14 1.47-.67.67-1.13 1.34-1.47 2.14-.33.73-.54 1.57-.61 2.81C.09 8.31 0 8.7 0 12s.09 3.69.07 4.95c.07 1.24.28 2.08.61 2.81.34.8.8 1.47 1.47 2.14.67.67 1.34 1.13 2.14 1.47.73.33 1.57.54 2.81.61C8.31 23.91 8.7 24 12 24s3.69-.09 4.95-.07c1.24-.07 2.08-.28 2.81-.61.8-.34 1.47-.8 2.14-1.47.67-.67 1.13-1.34 1.47-2.14.33-.73.54-1.57.61-2.81C23.91 15.69 24 15.3 24 12s-.09-3.69-.07-4.95c-.07-1.24-.28-2.08-.61-2.81-.34-.8-.8-1.47-1.47-2.14-.67-.67-1.34-1.13-2.14-1.47-.73-.33-1.57-.54-2.81-.61C15.69.09 15.3 0 12 0z"></path>
              <path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 1 0 12 5.84zm0 10.08A3.92 3.92 0 1 1 12 8.08 3.92 3.92 0 0 1 12 15.92zm7.84-10.56a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center pt-8 border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()} J & K Taekwondo Association. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
