import { motion } from "framer-motion";

// associations images
import kupwara from "../../public/associations/KUPWARA.png";
import bandipora from "../../public/associations/Bandipora.jpg";
import udhampur from "../../public/associations/UDHAMPUR.jpg";
import kishtwar from "../../public/associations/KISHTWAR.png";
import budgam from "../../public/associations/BUDGAM.jpg";
import poonch from "../../public/associations/POONCH.jpg";
import anantnag from "../../public/associations/ANANTNAG.jpg";
import srinagar from "../../public/associations/SRINAGAR.png";
import jammu from "../../public/associations/JAMMU.png";
import kathua from "../../public/associations/KATHUA.jpg";
import samba from "../../public/associations/SAMBA.png";
import rajouri from "../../public/associations/RAJOURI.jpg";
import kulgam from "../../public/associations/NEWKULGAM.jpg";
import baramulla from "../../public/associations/BARAMULLA.png";
import ramban from "../../public/associations/RAMBAN.jpg";
import reasi from "../../public/associations/REASI.png";
import ganderbal from "../../public/associations/GANDERBAL.png";
import pulwama from "../../public/associations/PULWAMA.png";
import shopian from "../../public/associations/SHOPIAN.png";
import kupwara2 from "../../public/associations/NEWKUPWARA.jpg";

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
    district: "Poonch",
    association: "Taekwondo Association of District Poonch",
    officeBearers: ["Priyanka Singh", "Taranpreet Kaur"],
    image: poonch,
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
].sort((a, b) => a.district.localeCompare(b.district)); // Sorting by district name

const Affiliated = () => {
  return (
    <div className="py-10 container m-auto flex flex-wrap justify-around items-center gap-8">
      {taekwondoAssociations.map((association, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" rounded-xl shadow-lg p-4 w-64 transform transition-transform duration-300 border"
        >
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
