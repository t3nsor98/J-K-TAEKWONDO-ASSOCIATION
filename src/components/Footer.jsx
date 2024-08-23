import logo from "../assets/logojk.jpeg"; // Ensure correct path to logo
import { Link } from "react-router-dom";

const footerLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Affiliated",
        href: "/affiliated",
    },
    {
        name: "Members",
        href: "/members",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

const Footer = () => {
    return (
        <footer className="footer-bg text-white py-8 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 p-4 md:p-6">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="J & K Taekwondo Association Logo"
                        className="w-24 h-24 shadow-md rounded-full border-4 border-white transition-transform duration-300 transform hover:scale-105"
                    />
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold">
                            J & K Taekwondo Association of India
                        </h2>
                        <p className="text-sm md:text-base">
                            Affiliated with: Taekwondo Federation of India &
                            Indian Olympic Association
                        </p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-base">
                    {footerLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="transition duration-300 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-white before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 font-bold"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/register">
                        <button className="bg-white transition-all duration-300 px-6 py-2 rounded-md text-black hover:bg-white/80 font-semibold shadow-md hover:shadow-lg">
                            Register
                        </button>
                    </Link>
                </nav>

                {/* Social Media Icons */}
                <div className="flex space-x-6 text-sm">
                    <a
                        href="#"
                        aria-label="Facebook"
                        className="transition duration-300"
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
                        className="transition duration-300"
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
                        className="transition duration-300"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 2.16c3.18 0 3.56 0 4.82.07 1.17.06 1.8.25 2.22.42a4.43 4.43 0 0 1 1.62 1.05c.42.42.75.92 1.05 1.62.18.42.37 1.05.43 2.22.07 1.26.07 1.64.07 4.82s0 3.56-.07 4.82c-.06 1.17-.25 1.8-.42 2.22a4.43 4.43 0 0 1-1.05 1.62c-.42.42-.92.75-1.62 1.05-.42.18-1.05.37-2.22.43-1.26.07-1.64.07-4.82.07s-3.56 0-4.82-.07c-1.17-.06-1.8-.25-2.22-.42a4.43 4.43 0 0 1-1.62-1.05c-.42-.42-.75-.92-1.05-1.62-.18-.42-.37-1.05-.43-2.22-.07-1.26-.07-1.64-.07-4.82s0-3.56.07-4.82c.06-1.17.25-1.8.42-2.22a4.43 4.43 0 0 1 1.05-1.62c.42-.42.92-.75 1.62-1.05.42-.18 1.05-.37 2.22-.43 1.26-.07 1.64-.07 4.82-.07M12 0C8.7 0 8.31 0 7.05.07 5.81.14 4.97.35 4.24.68c-.8.34-1.47.8-2.14 1.47-.67.67-1.13 1.34-1.47 2.14-.33.73-.54 1.57-.61 2.81C.09 8.31 0 8.7 0 12s.09 3.69.07 4.95c.07 1.24.28 2.08.61 2.81.34.8.8 1.47 1.47 2.14.67.67 1.34 1.13 2.14 1.47.73.33 1.57.54 2.81.61 1.26.07 1.64.07 4.95.07s3.69 0 4.95-.07c1.24-.07 2.08-.28 2.81-.61.8-.34 1.47-.8 2.14-1.47.67-.67 1.13-1.34 1.47-2.14.33-.73.54-1.57.61-2.81.07-1.26.07-1.64.07-4.95s0-3.69-.07-4.95c-.07-1.24-.28-2.08-.61-2.81a4.44 4.44 0 0 0-1.47-2.14c-.67-.67-1.34-1.13-2.14-1.47-.73-.33-1.57-.54-2.81-.61C15.69.09 15.3 0 12 0zm0 5.91c-3.36 0-6.09 2.73-6.09 6.09s2.73 6.09 6.09 6.09 6.09-2.73 6.09-6.09-2.73-6.09-6.09-6.09zm0 10.93c-2.66 0-4.8-2.14-4.8-4.8s2.14-4.8 4.8-4.8 4.8 2.14 4.8 4.8-2.14 4.8-4.8 4.8zm4.44-9.87a1.4 1.4 0 1 0-2.81 0 1.4 1.4 0 0 0 2.81 0z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="text-center mt-8 text-xs md:text-sm text-white font-bold">
                <p>
                    &copy; 2024 J & K Taekwondo Association of India. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
