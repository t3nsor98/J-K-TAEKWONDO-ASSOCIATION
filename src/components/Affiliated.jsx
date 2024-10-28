import { useState } from "react";
import { motion } from "framer-motion";

// associations images
import kupwara from "/associations/KUPWARA.png";
import bandipora from "/associations/Bandipora.jpg";
import udhampur from "/associations/UDHAMPUR.jpg";
import kishtwar from "/associations/KISHTWAR.png";
import budgam from "/associations/BUDGAM.jpg";
import poonch from "/associations/POONCH.jpg";
import anantnag from "/associations/ANANTNAG.jpg";
import srinagar from "/associations/SRINAGAR.png";
import jammu from "/associations/JAMMU.png";
import kathua from "/associations/KATHUA.jpg";
import samba from "/associations/SAMBA.png";
import rajouri from "/associations/RAJOURI.jpg";
import kulgam from "/associations/NEWKULGAM.jpg";
import baramulla from "/associations/BARAMULLA.png";
import ramban from "/associations/RAMBAN.jpg";
import reasi from "/associations/REASI.png";
import ganderbal from "/associations/GANDERBAL.png";
import pulwama from "/associations/PULWAMA.png";
import shopian from "/associations/SHOPIAN.png";
import kupwara2 from "/associations/NEWKUPWARA.jpg";
import doda from "/associations/doda.jpg";

const taekwondoAssociations = [
    {
        district: "Doda",
        association: "Taekwondo Association of District Doda",
        officeBearers: ["Junaid Ali Khan", "Burhan Ud Din Khan"],
        image: doda,
        clubs: [
            {
                name: "Shield Taekwondo Academy",
                president: "Junaid Ali Khan",
                secretary: "Burhan Ud Din Khan",
                address: "Near Sports Stadium Road, Doda",
            },
            {
                name: "Bhaderwah Taekwondo Club",
                president: "Irfan Khanji",
                secretary: "Maviz Ganai",
                address: "Near Eid Gah Road, Bhaderwah",
            },
            {
                name: "Chinar Taekwondo Club",
                president: "Taseen Hashmi",
                secretary: "Tayab Hamza",
                address: "Mohalla Ghat, Doda",
            },
        ],
    },
    {
        district: "Poonch",
        association: "Taekwondo Association of District Poonch",
        officeBearers: ["Priyanka Singh", "Taranpreet Kaur"],
        image: poonch,
        clubs: [
            {
                name: "Poonch Taekwondo Club / Academy",
                president: "Makhan Lal",
                secretary: "Taranpreet Kaur",
                address: "Mohalla Kama Khan Poonch",
            },
            {
                name: "National Taekwondo Club",
                president: "Mr Haris Hadhi",
                secretary: "Mr Hasan",
                address: "Tehsil Mandi District Poonch",
            },
        ],
    },
    {
        district: "Bandipora",
        association: "Taekwondo Association of District Bandipora",
        officeBearers: ["Fasil Ali", "Shabir Ahmad Dar"],
        image: bandipora,
    },
    {
        district: "Udhampur",
        association: "Taekwondo Association of District Udhampur",
        officeBearers: ["Raj Guru", "Rasal Singh"],
        image: udhampur,
    },
    {
        district: "Kishtwar",
        association: "Taekwondo Association of District Kishtwar",
        officeBearers: ["Ghulam Qadir Mir", "Arslan Ahmed"],
        image: kishtwar,
    },
    {
        district: "Budgam",
        association: "Taekwondo Association of District Budgam",
        officeBearers: ["A.R Qureshi", "Bashir Ahmad Sheikh"],
        image: budgam,
    },

    {
        district: "Anantnag",
        association: "Taekwondo Association of District Anantnag",
        officeBearers: ["Arshad Syeed Shah", "Showket Ahmad Malik"],
        image: anantnag,
    },
    {
        district: "Srinagar",
        association: "Taekwondo Association of District Srinagar",
        officeBearers: ["Nissar Hussain", "Junaid Mayer Qasba"],
        image: srinagar,
    },
    {
        district: "Jammu",
        association: "Taekwondo Association of District Jammu",
        officeBearers: ["Ramesh Chander Sharma", "Amit Gupta"],
        image: jammu,
    },
    {
        district: "Kathua",
        association: "Taekwondo Association of District Kathua",
        officeBearers: ["Munish Sharma", "Amit Badculia"],
        image: kathua,
    },
    {
        district: "Samba",
        association: "Taekwondo Association of District Samba",
        officeBearers: ["Rajesh Pangotra", "Kanav Mahajan"],
        image: samba,
    },
    {
        district: "Rajouri",
        association: "Taekwondo Association of District Rajouri",
        officeBearers: ["Mohd Sayeed", "Showkat Hussain"],
        image: rajouri,
    },
    {
        district: "Kulgam",
        association: "Taekwondo Association of District Kulgam",
        officeBearers: ["Atta Mohd Khan", "Mashkoor Ahmad Lone"],
        image: kulgam,
    },
    {
        district: "Baramulla",
        association: "Taekwondo Association of District Baramulla",
        officeBearers: ["Adv Neelofar Masood", "H. Rameez Mehraj"],
        image: baramulla,
    },
    {
        district: "Ramban",
        association: "Taekwondo Association of District Ramban",
        officeBearers: ["Sohaib Masroor", "Yasir Ali"],
        image: ramban,
    },
    {
        district: "Reasi",
        association: "Taekwondo Association of District Reasi",
        officeBearers: ["Shiv Kumar Sharma", "Danish Sharma"],
        image: reasi,
    },
    {
        district: "Ganderbal",
        association: "Taekwondo Association of District Ganderbal",
        officeBearers: ["Ummer Farooq", "Akib Ahmad Sofi"],
        image: ganderbal,
    },
    {
        district: "Pulwama",
        association: "Taekwondo Association of District Pulwama",
        officeBearers: ["Shahid Altaf", "Syed Danish Saeed"],
        image: pulwama,
    },
    {
        district: "Shopian",
        association: "Taekwondo Association of District Shopian",
        officeBearers: ["Ahtisham Zahoor", "Kamran Ashraf"],
        image: shopian,
    },
    {
        district: "Kupwara",
        association: "Taekwondo Association of District Kupwara",
        officeBearers: ["A.R Malik", "Kehkashan Bashir"],
        image: kupwara2,
    },
].sort((a, b) => a.district.localeCompare(b.district));

const Affiliated = () => {
    const [expandedDistrict, setExpandedDistrict] = useState(null);

    const toggleExpanded = (district) => {
        setExpandedDistrict((prev) => (prev === district ? null : district));
    };

    return (
        <div className="relative py-10 container m-auto flex flex-wrap justify-around items-center gap-8 cursor-pointer select-none">
            {taekwondoAssociations.map((association, index) => (
                <div
                    key={index}
                    onClick={() =>
                        (association.district === "Doda" ||
                            association.district === "Poonch") &&
                        toggleExpanded(association.district)
                    }
                    className={`rounded-xl shadow-lg p-4 w-64 transform transition-transform duration-300 border relative hover:scale-105 ${
                        association.clubs ? "z-10" : "z-1"
                    }`}
                >
                    {/* <motion.div
                    key={index}
                    whileHover={{
                        scale: 1.05,
                        zIndex: association.clubs ? 10 : 1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                        (association.district === "Doda" ||
                            association.district === "Poonch") &&
                        toggleExpanded(association.district)
                    }
                    className="rounded-xl shadow-lg p-4 w-64 transform transition-transform duration-300 border relative"
                > */}

                    <img
                        src={association.image}
                        alt={`${association.association} Logo`}
                        className="w-full h-36 object-contain rounded-t-lg"
                    />
                    <div className="text-center mt-1">
                        <h2 className="text-[#052F5F] text-lg font-bold leading-tight">
                            {association.association}
                        </h2>
                        <p className="text-[#000000] text-sm">
                            District: {association.district}
                        </p>
                        <div className="text-[#000000] text-sm">
                            {association.officeBearers.map((bearer, i) => (
                                <p key={i}>
                                    {bearer} {i === 0 && "(President)"}{" "}
                                    {i === 1 && "(Secretary)"}
                                </p>
                            ))}
                        </div>
                        {/* Dropdown content only for Doda and Poonch */}
                        {expandedDistrict === association.district && (
                            <div className="absolute top-full left-0 mt-2 p-8 w-full bg-gray-100 rounded-lg shadow-lg">
                                {association.clubs?.map((club, i) => (
                                    <div key={i} className="mb-2">
                                        <h3 className="text-[#052F5F] text-sm font-semibold">
                                            {club.name}
                                        </h3>
                                        <p className="text-[#000000] text-xs">
                                            President: {club.president}
                                        </p>
                                        <p className="text-[#000000] text-xs">
                                            Secretary: {club.secretary}
                                        </p>
                                        <p className="text-[#000000] text-xs">
                                            Address: {club.address}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {association.clubs && (
                            <span className="text-xs mt-0.5 flex justify-center items-center gap-1 bg-blue-700 text-white w-fit m-auto px-2 rounded-full py-0.5">
                                {expandedDistrict ? "Hide" : "Show"} Clubs
                                {expandedDistrict ? (
                                    <i className="fa-solid fa-chevron-up"></i>
                                ) : (
                                    <i className="fa-solid fa-chevron-down"></i>
                                )}
                            </span>
                        )}
                    </div>
                    {/* </motion.div> */}
                </div>
            ))}
        </div>
    );
};

export default Affiliated;
