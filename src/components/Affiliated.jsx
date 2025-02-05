import { useState } from "react";
// import { motion } from "framer-motion";

// associations images
// import kupwara from "/associations/KUPWARA.png";
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
// clubs
import shield from "/clubs/shield.jpg";
import bhaderwah from "/clubs/bhaderwah.png";
import chinar from "/clubs/chinar.png";
import ntc from "/clubs/ntc.jpg";
import poonch_club from "/clubs/poonch_club.jpg";
import warrior from "/clubs/warrior.jpg";
import pearls from "/clubs/pearls.jpg";
import power_punch from "/clubs/power_punch.jpg";
import and_edu_serv from "/clubs/and_edu_serv.jpg";
import pahalwon from "/clubs/pahalwon.jpg";
import gundAdalkote from "/clubs/gundAdalkote.jpg";
import martialArtsClubBanihal from "/clubs/martialArtsClubBanihal.jpg";
//new
import atul from "/clubs/atul.jpg";
import vishal from "/clubs/vishal.jpg";
import kic from "/clubs/kic.jpg";

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
        image: shield,
      },
      {
        name: "Bhaderwah Taekwondo Club",
        president: "Irfan Khanji",
        secretary: "Maviz Ganai",
        address: "Near Eid Gah Road, Bhaderwah",
        image: bhaderwah,
      },
      {
        name: "Chinar Taekwondo Club",
        president: "Taseen Hashmi",
        secretary: "Tayab Hamza",
        address: "Mohalla Ghat, Doda",
        image: chinar,
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
        image: poonch_club,
      },
      {
        name: "National Taekwondo Club",
        president: "Mr Haris Hadhi",
        secretary: "Mr Hasan",
        address: "Tehsil Mandi District Poonch",
        image: ntc,
      },
    ],
  },
  {
    district: "Budgam",
    association: "Taekwondo Association of District Budgam",
    officeBearers: ["A.R Qureshi", "Bashir Ahmad Sheikh"],
    image: budgam,
    clubs: [
      {
        name: "Power Punch Martial Arts Academy",
        president: "Mohammad Shafi Ganaie",
        secretary: "Abrar ul Akbar Bhat",
        address: "Kawoosa Khalisa Narbal Budgam",
        image: power_punch,
      },
      {
        name: "Pearls Taekwondo Academy",
        president: "Reyaz Ahmad",
        secretary: "Ishfaq Ahmed Wani",
        address: "Khomani Chowk Bemina Budgam",
        image: pearls,
      },
      {
        name: "Andleeb Taekwondo Academy",
        president: null,
        secretary: "Lateef Ahmad Tali",
        address: "Khag Budgam",
        image: and_edu_serv,
      },
      {
        name: "Pahalwon Sports Club",
        president: "Syed Ashiq Hussain Bukhari",
        secretary: "Bashir Ahmad Sheikh",
        address: "Soibugh Budgam",
        image: pahalwon,
      },
    ],
  },

  {
    district: "Baramulla",
    association: "Taekwondo Association of District Baramulla",
    officeBearers: ["Adv Neelofar Masood", "H. Rameez Mehraj"],
    image: baramulla,
    clubs: [
      {
        name: "Warrior's Taekwondo Academy",
        president: "Neelofar Masood",
        coach: "Mohsin Ali",
        address: "Dangiwacha Rafiabad, Baramulla",
        image: warrior,
      },
      {
        name: "Power Punch Taekwondo Academy",
        president: "Rouf Ahmad Wani",
        coach: "Aubrar Ul Akbar Bhat",
        address: "Chichlora Magam, Baramulla",
        image: power_punch,
      },
    ],
  },
  {
    district: "Ramban",
    association: "Taekwondo Association of District Ramban",
    officeBearers: ["Sohaib Masroor", "Yasir Ali"],
    image: ramban,
    clubs: [
      {
        name: "Martial Arts Club Banihal",
        president: "Sohaib Masroor",
        secretary: "Yasir Ali",
        address: "Main Market, Banihal",
        image: martialArtsClubBanihal,
      },
      {
        name: "Gund Adalkote Taekwondo Academy",
        president: "Munazar Ahmed Malik",
        secretary: "Faazil Ahmed",
        address: "Gund Adalkote, Banihal",
        image: gundAdalkote,
      },
      {
        name: "KIC TAEKWONDO RAMBAN",
        secretary: "ARVIND KUMAR SATTI",
        image: kic,
        address: "Ramban",
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
    clubs: [
      {
        name: "KIC TAEKWONDO SRINAGAR",
        secretary: "ROHIT SHARMA",
        image: kic,
        address: "Srinagar",
      },
    ],
  },
  {
    district: "Jammu",
    association: "Taekwondo Association of District Jammu",
    officeBearers: ["Ramesh Chander Sharma", "Amit Gupta"],
    image: jammu,
    clubs: [
      {
        name: "Atul International Taekwondo Academy (AITA)",
        president: "Anuj Sharma",
        secretary: "Amit Kumar",
        address: "Channi Himat Jammu",
        image: atul,
      },
      {
        name: "Vishal Academy of Taekwondo",
        president: "Ramesh Chander Sharma",
        secretary: "Amit Gupta",
        address: "Dogra Brahmin Pratinidhi Sabha Parade, Jammu",
        image: vishal,
      },
    ],
  },
  {
    district: "Kathua",
    association: "Taekwondo Association of District Kathua",
    officeBearers: ["Munish Sharma", "Amit Badculia"],
    image: kathua,
    clubs: [
      {
        name: "KIC TAEKWONDO KATHUA",
        secretary: "VISHESH THAKUR",
        image: kic,
        address: "Kathua",
      },
    ],
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
    <div className="relative py-10 container m-auto flex flex-wrap justify-around items-start gap-8 cursor-pointer select-none">
      {taekwondoAssociations.map((association, index) => (
        <div
          key={index}
          onClick={() =>
            association.clubs && toggleExpanded(association.district)
          }
          className={`rounded-xl shadow-lg p-4 w-64 transform transition-transform duration-300 border relative hover:scale-105 ${
            association.clubs ? "z-10" : "z-1"
          }`}
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
                <p key={i}>
                  {bearer} {i === 0 && "(President)"} {i === 1 && "(Secretary)"}
                </p>
              ))}
            </div>
            {expandedDistrict === association.district && (
              <div className="relative mt-2 p-4 w-full bg-gray-100 rounded-lg shadow-lg z-20">
                {association.clubs?.map((club, i) => (
                  <div key={i} className="mb-2 text-center">
                    <img
                      src={club.image}
                      alt={`${club.name} Logo`}
                      className="w-20 h-20 object-contain rounded-full m-auto"
                    />
                    <h3 className="text-[#052F5F] text-sm font-semibold">
                      {club.name}
                    </h3>
                    <p className="text-[#000000] text-sm font-medium">
                      President: {club.president}
                    </p>
                    <p className="text-[#000000] text-xs font-normal">
                      Secretary: {club.secretary}
                    </p>
                    <p className="text-[#000000] text-xs">
                      Address: {club.address}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {/* Commented by t3nsor. Will update when all the club data will be availbale. */}
            {/* {association.clubs && (
              <span className="text-xs mt-0.5 flex justify-center items-center gap-1 bg-blue-700 text-white w-fit m-auto px-2 rounded-full py-0.5">
                {expandedDistrict === association.district ? "Hide" : "Show"}{" "}
                Clubs
                {expandedDistrict === association.district ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </span>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Affiliated;
