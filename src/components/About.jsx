import { motion } from "framer-motion";
import Gallery2 from "./Gallery2";

const About = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#ffff] overflow-hidden ">
            {/* Background Circle Animation */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600 rounded-full opacity-30 blur-3xl animate-pulse delay-75" />

            {/* Heading */}
            <div className="bg-black/80 py-12 mb-12">
                <Gallery2 />
                <div className="container m-auto relative mt-8 px-4">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About JKTA - J & K Taekwondo Association
                    </motion.h2>
                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-white leading-relaxed text-justify"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Established in 1987, the JKTA has been at the forefront
                        of promoting Taekwondo in Jammu and Kashmir. Our journey
                        began with the organization of the first State
                        Championship in 1993, laying the foundation for what
                        would become a legacy of excellence in Taekwondo across
                        the region. Over the years, we have produced numerous
                        national and international champions, with athletes
                        representing J&K at various prestigious events.
                    </motion.p>
                </div>

                {/* Our Strength */}
                <div className="relative z-10 text-justify container m-auto py-8 rounded-lg px-4">
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold text-white mb-4 flex gap-2 items-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hidden md:block">Our Pride - </span>Our Strength
                        <hr className="border border-white w-1/2" />
                    </motion.h2>
                    <motion.ul
                        className="text-center text-lg md:text-xl flex flex-wrap gap-x-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <li className="rounded-full text-white px-4">
                            <i className="fa fa-check mr-2"></i>1 NIS Coach
                        </li>
                        <li className="rounded-full text-white px-4">
                            <i className="fa fa-check mr-2"></i>
                            Over 150 Black Belts
                        </li>
                        <li className="rounded-full text-white px-4">
                            <i className="fa fa-check mr-2"></i>1 International
                            Referee
                        </li>
                        <li className="rounded-full text-white px-4">
                            <i className="fa fa-check mr-2"></i>
                            10 National Referees
                        </li>
                        <li className="rounded-full text-white px-4">
                            <i className="fa fa-check mr-2"></i>7 International
                            Players
                        </li>
                    </motion.ul>
                </div>
            </div>

            {/* Milestones Section */}
            <div className="relative z-10 container mx-auto px-4 text-base md:text-xl">
                <motion.h3
                    className="text-3xl md:text-4xl font-semibold text-black mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Milestones in JKTA’s Journey
                </motion.h3>

                {/* Timeline */}
                <motion.div
                    className="space-y-10"
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
                        <h4 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                            1. Foundation and Growth
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>1987:</strong> Establishment of the J&K
                                Taekwondo Association.
                            </li>
                            <li>
                                <strong>1993:</strong> Organized the first State
                                Taekwondo Championship, marking the start of a
                                structured Taekwondo culture in J&K.
                            </li>
                        </ul>
                    </div>

                    {/* The Golden Era */}
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                            2. The Golden Era (2008 Onwards)
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>2008:</strong> JKTA’s rise to prominence
                                with the first-ever medals in the 3rd Taekwondo
                                Poomsae National Championship.
                            </li>
                            <li>
                                <strong>2009:</strong> Dominating the 4th
                                Taekwondo Poomsae Championships with 4 Gold
                                medals.
                            </li>
                        </ul>
                    </div>

                    {/* National Achievements */}
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                            3. Achievements on the National Stage
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>2010:</strong> The J&K team won the
                                Overall 1st Position in the 2nd North Zone
                                Taekwondo Championships and the 3rd Position in
                                the National Inter-Zone Championships.
                            </li>
                        </ul>
                    </div>

                    {/* International Representation */}
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                            4. International Representation
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>World Championships:</strong>{" "}
                                Participation in the 4th World Taekwondo Poomsae
                                Championship in Cairo, Egypt, and the 5th in
                                Uzbekistan.
                            </li>
                            <li>
                                <strong>Commonwealth Championships:</strong>{" "}
                                Historic Bronze medals by J&K athletes in the
                                5th Commonwealth Taekwondo Championships held in
                                Chennai, India.
                            </li>
                        </ul>
                    </div>

                    {/* Recent Achievements */}
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                            5. Recent Achievements
                        </h4>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Over the last three years, JKTA has continued to
                                raise the bar, with athletes surpassing previous
                                records and regular camps being organized to
                                prepare for national and zonal championships.
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Our Vision */}
            <div className="relative z-10 my-12 container m-auto px-4">
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-black mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Vision
                </motion.h2>
                <motion.p
                    className="leading-relaxed text-base md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    The J&K Taekwondo Association is committed to nurturing
                    talent and promoting Taekwondo at every level across Jammu
                    and Kashmir. We owe our success to the unwavering support of
                    parents, the media, and the State government. With their
                    continued support, we strive to achieve new heights and
                    bring more laurels to our region.
                    <br />
                    <br />
                    Our vision is to create a culture of Taekwondo that is
                    inclusive and accessible to all, regardless of
                    socio-economic backgrounds. By providing a platform for
                    young athletes to showcase their talent, we aim to inspire
                    the next generation of champions and leaders.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
