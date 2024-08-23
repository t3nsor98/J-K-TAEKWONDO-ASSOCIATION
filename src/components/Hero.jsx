import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import assetImg from "../assets/images/vector/asset1.png";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText =
        "Welcome to the Official Website of the J&K Taekwondo Association (JKTA)";

    useEffect(() => {
        const isSmallScreen = window.innerWidth < 768;

        if (!isSmallScreen) {
            // Typewriter effect for larger screens
            let index = 0;
            const timer = setInterval(() => {
                setText(fullText.substring(0, index + 1));
                index += 1;
                if (index === fullText.length) {
                    clearInterval(timer);
                }
            }, 50); // Adjust typing speed here

            return () => clearInterval(timer);
        } else {
            // Directly set the full text for small screens
            setText(fullText);
        }
    }, [fullText]);

    return (
        <section className="py-12 sm:px-8 md:px-16 lg:px-24">
            {/* Main Heading with conditional Typewriter Effect */}
            <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 whitespace-normal text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <span className="text-red-600">{text}</span>
            </motion.h1>
            <div className="md:flex container m-auto">
                <img
                    src={assetImg}
                    alt="Taekwondo"
                    className="object-contain aspect-auto h-auto "
                />
                <div className="mx-auto text-justify">
                    {/* Description */}
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed  mx-auto px-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        The J&K Taekwondo Association (JKTA) is proudly
                        affiliated with the Taekwondo Federation of India and
                        the J&K Sports Council. The Taekwondo Federation of
                        India is recognized by the Indian Olympic Association
                        (IOA) and the Ministry of Youth Affairs and Sports,
                        Government of India.
                        <br />
                        <br />
                        The JKTA is the well-recognized body for Taekwondo in
                        the Union Territory of Jammu and Kashmir. The
                        association is committed to promoting the sport of
                        Taekwondo and developing the skills of its athletes. The
                        JKTA has a long history of producing national and
                        international level athletes who have brought laurels to
                        the state and the country. The association is dedicated
                        to providing quality training and opportunities to its
                        athletes to excel at the national and international
                        level.
                    </motion.p>
                </div>
            </div>
            {/* Closing Note */}
            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl italic text-red-600 mx-auto text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                Thank you for visiting our website. Together, let’s continue the
                legacy of excellence in Taekwondo.
            </motion.p>
        </section>
    );
};

export default Hero;
