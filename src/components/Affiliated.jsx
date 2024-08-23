import React from "react";
import { motion } from "framer-motion";

//associations images
import kupwara from "../../public/associations/KUPWARA.png";
import bandipora from "../../public/associations/Bandipora.jpg";

const taekwondoAssociations = [
  {
    district: "Doda",
    association: "Taekwondo Association of District Doda",
    officeBearers: ["Junaid Ali Khan", "Burhan Ud Din Khan"],
    image: kupwara,
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
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Kishtwar",
    association: "Taekwondo Association of District Kishtwar",
    officeBearers: ["Ghulam Qadir Mir", "Arslan Ahmed"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Budgam",
    association: "Taekwondo Association of District Budgam",
    officeBearers: ["A.R Qureshi", "Bashir Ahmad Sheikh"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Poonch",
    association: "Taekwondo Association of District Poonch",
    officeBearers: ["Priyanka Singh", "Taranpreet Kaur"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Anantnag",
    association: "Taekwondo Association of District Anantnag",
    officeBearers: ["Arshad Syeed Shah", "Showket Ahmad Malik"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Srinagar",
    association: "Taekwondo Association of District Srinagar",
    officeBearers: ["Nissar Hussain", "Junaid Mayer Qasba"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Jammu",
    association: "Taekwondo Association of District Jammu",
    officeBearers: ["Ramesh Chander Sharma", "Amit Gupta"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Kathua",
    association: "Taekwondo Association of District Kathua",
    officeBearers: ["Munish Sharma", "Amit Badculia"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Samba",
    association: "Taekwondo Association of District Samba",
    officeBearers: ["Rajesh Pangotra", "Kanav Mahajan"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Rajouri",
    association: "Taekwondo Association of District Rajouri",
    officeBearers: ["Mohd Sayeed", "Showkat Hussain"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Kulgam",
    association: "Taekwondo Association of District Kulgam",
    officeBearers: ["Atta Mohd Khan", "Mashkoor Ahmad Lone"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Baramulla",
    association: "Taekwondo Association of District Baramulla",
    officeBearers: ["Adv Neelofar Masood", "H. Rameez Mehraj"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Ramban",
    association: "Taekwondo Association of District Ramban",
    officeBearers: ["Sohaib Masroor", "Yasir Ali"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Reasi",
    association: "Taekwondo Association of District Reasi",
    officeBearers: ["Shiv Kumar Sharma", "Danish Sharma"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Ganderbal",
    association: "Taekwondo Association of District Ganderbal",
    officeBearers: ["Ummer Farooq", "Akib Ahmad Sofi"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Pulwama",
    association: "Taekwondo Association of District Pulwama",
    officeBearers: ["Shahid Altaf", "Syed Danish Saeed"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Shopian",
    association: "Taekwondo Association of District Shopian",
    officeBearers: ["Ahtisham Zahoor", "Kamran Ashraf"],
    image: "../../public/associations/KUPWARA.png",
  },
  {
    district: "Kupwara",
    association: "Taekwondo Association of District Kupwara",
    officeBearers: ["A.R Malik", "Kehkashan Bashir"],
    image: "../../public/associations/KUPWARA.png",
  },
];




const Affiliated = () => {
  return (
    <div className="bg-gradient-to-r from-[#005377] via-[#052F5F] to-[#06A77D] p-10 min-h-screen flex flex-wrap justify-center items-center gap-8">
      {taekwondoAssociations.map((association, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F1A208] rounded-xl shadow-lg p-4 w-64 transform transition-transform duration-300"
        >
          <img
            src={association.image}
            alt={`${association.association} Logo`}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="text-center mt-4">
            <h2 className="text-[#052F5F] text-lg font-bold">
              {association.association}
            </h2>
            <p className="text-[#D5C67A] text-sm mt-2">
              District: {association.district}
            </p>
            <div className="text-[#D5C67A] text-sm mt-2">
              {association.officeBearers.map((bearer, i) => (
                <p key={i}>{bearer}</p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Affiliated;
