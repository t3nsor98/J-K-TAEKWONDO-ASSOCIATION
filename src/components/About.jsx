import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-700 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About JKTA
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Established in 1987, the JKTA has been at the forefront of promoting
          Taekwondo in Jammu and Kashmir. Our journey began with the
          organization of the first State Championship in 1993, laying the
          foundation for what would become a legacy of excellence in Taekwondo
          across the region.
        </motion.p>
      </div>

      {/* Milestones Section */}
      <div className="container mx-auto">
        <motion.h3
          className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Milestones in JKTA’s Journey
        </motion.h3>

        {/* Timeline */}
        <motion.div
          className="space-y-10 text-gray-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
        >
          {/* Foundation and Growth */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
              1. Foundation and Growth
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>1987:</strong> Establishment of the J&K Taekwondo
                Association.
              </li>
              <li>
                <strong>1993:</strong> Organized the first State Taekwondo
                Championship, marking the start of a structured Taekwondo
                culture in J&K.
              </li>
            </ul>
          </div>

          {/* The Golden Era */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
              2. The Golden Era (2008 Onwards)
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>2008:</strong> JKTA’s rise to prominence with the
                first-ever medals in the 3rd Taekwondo Poomsae National
                Championship.
              </li>
              <li>
                <strong>2009:</strong> Dominating the 4th Taekwondo Poomsae
                Championships with 4 Gold medals.
              </li>
            </ul>
          </div>

          {/* National Achievements */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
              3. Achievements on the National Stage
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>2010:</strong> The J&K team won the Overall 1st Position
                in the 2nd North Zone Taekwondo Championships and the 3rd
                Position in the National Inter-Zone Championships.
              </li>
            </ul>
          </div>

          {/* International Representation */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
              4. International Representation
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>World Championships:</strong> Participation in the 4th
                World Taekwondo Poomsae Championship in Cairo, Egypt, and the
                5th in Uzbekistan.
              </li>
              <li>
                <strong>Commonwealth Championships:</strong> Historic Bronze
                medals by J&K athletes in the 5th Commonwealth Taekwondo
                Championships held in Chennai, India.
              </li>
            </ul>
          </div>

          {/* Recent Achievements */}
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
              5. Recent Achievements
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Over the last three years, JKTA has continued to raise the bar,
                with athletes surpassing previous records and regular camps
                being organized to prepare for national and zonal championships.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
