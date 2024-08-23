import { useState } from "react";
import logoJKTA from "../assets/logojk.jpeg"; // Replace with actual logo path
import logoTFI from "../assets/doda.png"; // Replace with actual logo path
import img1 from "../assets/Asset1.png"; // Replace with actual image paths
import img2 from "../assets/Asset2.png";
import img3 from "../assets/Asset3.png";
import img4 from "../assets/Asset4.png";
import img5 from "../assets/Asset5.png";
import img6 from "../assets/Asset6.png";
import { Navbar } from "./Navbar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative">
            <>
                <div className="container mx-auto flex gap-2 items-center justify-around p-4 md:p-6">
                    {/* Left Logo */}
                    <img
                        src={logoJKTA}
                        alt="JKTA Logo"
                        className="w-20 md:w-48 rounded-full transition-transform duration-300 transform"
                    />

                    {/* Title */}
                    <div className="">
                        <h1 className="text-lg md:text-5xl font-extrabold tracking-wide md:text-center uppercase text-red-600 leading-tight">
                            J&K TAEKWONDO ASSOCIATION OF INDIA
                        </h1>
                        {/* Affiliated Section */}
                        <div className="container mx-auto md:text-center">
                            <p className="text-xs md:text-2xl capitalize">
                                Affiliated with: Taekwondo Federation of India &
                                Indian Olympic Association
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="container mx-auto  justify-center items-center divide-x-2 hidden md:flex">
                            {[img1, img2, img3, img4, img5, img6].map(
                                (img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Image ${index + 1}`}
                                        className="w-12 md:w-28 h-auto px-1 md:px-5 transition-transform duration-300 transform"
                                    />
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Logo */}
                    <img
                        src={logoTFI}
                        alt="TFI Logo"
                        className="w-14 md:w-48 rounded-full transition-transform duration-300 transform order-2 absolute md:relative right-3 bottom-3"
                    />
                </div>
            </>
            {/* Image Section */}
            <div className="container mx-auto  justify-center items-center divide-x-2 md:hidden flex pb-4">
                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="w-12 md:w-28 h-auto px-1 md:px-5 transition-transform duration-300 transform"
                    />
                ))}
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
