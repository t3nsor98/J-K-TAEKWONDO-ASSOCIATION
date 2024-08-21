import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-800 to-purple-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Official Website of the J&K Taekwondo Association
          (JKTA)
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-8 leading-relaxed"
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

        {/* Our Strength */}
        <div className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-purple-200 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Strength
          </motion.h2>
          <motion.ul
            className="list-disc list-inside text-lg md:text-xl space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <li>1 NIS Coach</li>
            <li>Over 150 Black Belts</li>
            <li>1 International Referee</li>
            <li>10 National Referees</li>
            <li>7 International Players</li>
          </motion.ul>
        </div>

        {/* Our Vision */}
        <div className="mb-12">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-purple-200 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            The J&K Taekwondo Association is committed to nurturing talent and
            promoting Taekwondo at every level across Jammu and Kashmir. We owe
            our success to the unwavering support of parents, the media, and the
            State government. With their continued support, we strive to achieve
            new heights and bring more laurels to our region.
          </motion.p>
        </div>

        {/* Closing Note */}
        <motion.p
          className="text-lg md:text-xl italic"
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
