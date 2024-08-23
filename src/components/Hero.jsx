import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <section className="bg-gradient-to-r from-[#005377] via-[#052F5F] to-[#005377] text-white py-12 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Main Heading with conditional Typewriter Effect */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 whitespace-normal"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#F1A208]">{text}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed text-[#D5C67A] max-w-screen-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          The J&K Taekwondo Association (JKTA) is proudly affiliated with the
          Taekwondo Federation of India and the J&K Sports Council. The
          Taekwondo Federation of India is recognized by the Indian Olympic
          Association (IOA) and the Ministry of Youth Affairs and Sports,
          Government of India.
        </motion.p>

        {/* Closing Note */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl italic text-[#D5C67A] max-w-screen-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Thank you for visiting our website. Together, let’s continue the
          legacy of excellence in Taekwondo.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
