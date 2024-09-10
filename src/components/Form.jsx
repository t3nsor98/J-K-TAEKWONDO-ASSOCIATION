import { useState } from "react";

const Form = () => {
  const [formType, setFormType] = useState("athlete");

  const [athleteFormData, setAthleteFormData] = useState({
    athleteName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    district: "",
    mob: "",
    email: "",
    adharNumber: "",
    address: "",
    pin: "",
    panNumber: "",
    academyName: "",
    coachName: "",
    photo: null,
    certificate: null,
    residentCertificate: null,
    adharFrontPhoto: null,
    adharBackPhoto: null,
  });

  const [coachFormData, setCoachFormData] = useState({
    playerName: "",
    fatherName: "",
    dob: "",
    gender: "",
    district: "",
    mob: "",
    email: "",
    adharNumber: "",
    address: "",
    pin: "",
    panNumber: "",
    photo: null,
    blackBeltCertificate: null,
    // birthCertificate: null,
    // residentCertificate: null,
    adharFrontPhoto: null,
    adharBackPhoto: null,
  });

  const districts = [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
  ];
  //code update to transform text to upper case in the form
  const handleAthleteChange = (e) => {
    const { name, value, files, type } = e.target;
    setAthleteFormData({
      ...athleteFormData,
      [name]: files ? files[0] : type === "text" ? value.toUpperCase() : value,
    });
  };

  const handleCoachChange = (e) => {
    const { name, value, files, type } = e.target;
    setCoachFormData({
      ...coachFormData,
      [name]: files ? files[0] : type === "text" ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "athlete") {
      console.log("Athlete Data:", athleteFormData);
    } else {
      console.log("Coach Data:", coachFormData);
    }
  };

  return (
    <div className="container my-10 mx-auto p-6 rounded-lg">
      <div className="flex gap-5 mb-6">
        <button
          onClick={() => setFormType("athlete")}
          className={`${
            formType === "athlete"
              ? "bg-[#005377] text-white"
              : "bg-white text-black"
          } font-semibold py-2 px-4 rounded-md transition duration-300 shadow-md hover:bg-red-600 hover:text-white`}
        >
          Athlete Registration
        </button>
        <button
          onClick={() => setFormType("coach")}
          className={`${
            formType === "coach"
              ? "bg-[#005377] text-white"
              : "bg-white text-black"
          } font-semibold py-2 px-4 rounded-md transition duration-300 shadow-md hover:bg-red-600 hover:text-white`}
        >
          Coach Registration
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-[#005377]">
        {formType === "athlete"
          ? "Athlete Registration Form"
          : "Coach Registration Form"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {formType === "athlete" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="athleteName">
              Athlete Name:
              <input
                type="text"
                name="athleteName"
                placeholder="Name of the Athlete"
                value={athleteFormData.athleteName}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="fatherName">
              Father's Name:
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={athleteFormData.fatherName}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="motherName">
              Mother's Name:
              <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={athleteFormData.motherName}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="dob">
              Date Of Birth:
              <input
                type="date"
                name="dob"
                value={athleteFormData.dob}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="gender">
              Gender:
              <select
                name="gender"
                value={athleteFormData.gender}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label htmlFor="district">
              District:
              <select
                name="district"
                value={athleteFormData.district}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="mob">
              Mobile Number:
              <input
                type="tel"
                name="mob"
                placeholder="Mobile Number"
                value={athleteFormData.mob}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={athleteFormData.email}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="adharNumber">
              Aadhar Number:
              <input
                type="text"
                name="adharNumber"
                placeholder="Aadhar Number"
                value={athleteFormData.adharNumber}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="address">
              Address:
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={athleteFormData.address}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="pin">
              Pincode:
              <input
                type="text"
                name="pin"
                placeholder="Pincode"
                value={athleteFormData.pin}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="panNumber">
              PAN Number (Optional):
              <input
                type="text"
                name="panNumber"
                placeholder="PAN Number (Optional)"
                value={athleteFormData.panNumber}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              />
            </label>
            <label htmlFor="academyName">
              Name of the Academy:
              <input
                type="text"
                name="academyName"
                placeholder="Name of the Academy"
                value={athleteFormData.academyName}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="coachName">
              Name of the Coach:
              <input
                type="text"
                name="coachName"
                placeholder="Name of the Coach"
                value={athleteFormData.coachName}
                onChange={handleAthleteChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">Upload Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg2.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Birth Certificate:
              </label>
              <input
                type="file"
                name="certificate"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg3.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Resident Certificate:
              </label>
              <input
                type="file"
                name="residentCertificate"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg3.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Aadhar Front Photo:
              </label>
              <input
                type="file"
                name="adharFrontPhoto"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg1.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Aadhar Back Photo:
              </label>
              <input
                type="file"
                name="adharBackPhoto"
                onChange={handleAthleteChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg1.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label htmlFor="playerName">
              Name of the Coach:
              <input
                type="text"
                name="playerName"
                placeholder="Name"
                value={coachFormData.playerName}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="fatherName">
              Father's Name:
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={coachFormData.fatherName}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={coachFormData.dob}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="gender">
              Gender:
              <select
                name="gender"
                value={coachFormData.gender}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label htmlFor="district">
              District:
              <select
                name="district"
                value={coachFormData.district}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="mob">
              Mobile Number:
              <input
                type="tel"
                name="mob"
                placeholder="Mobile Number"
                value={coachFormData.mob}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={coachFormData.email}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="adharNumber">
              Aadhar Number:
              <input
                type="text"
                name="adharNumber"
                placeholder="Aadhar Number"
                value={coachFormData.adharNumber}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="address">
              Address:
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={coachFormData.address}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="pin">
              Pincode:
              <input
                type="text"
                name="pin"
                placeholder="Pincode"
                value={coachFormData.pin}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                required
              />
            </label>
            <label htmlFor="panNumber">
              PAN Number:
              <input
                type="text"
                name="panNumber"
                placeholder="PAN Number (Optional)"
                value={coachFormData.panNumber}
                onChange={handleCoachChange}
                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
              />
            </label>
            <hr />
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">Upload Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg2.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Black Belt Certificate:
              </label>
              <input
                type="file"
                name="blackBeltCertificate"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg3.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            {/* <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Resident Certificate
              </label>
              <input
                type="file"
                name="residentCertificate"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
            </div> */}
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Aadhar Front Photo:
              </label>
              <input
                type="file"
                name="adharFrontPhoto"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg1.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
            <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
              <label className="block mb-2 font-semibold">
                Upload Aadhar Back Photo:
              </label>
              <input
                type="file"
                name="adharBackPhoto"
                onChange={handleCoachChange}
                className="border-none"
                required
              />
              {/* Instruction Image */}
              <div className="mt-3">
                <img
                  src="instructionImg1.png"
                  alt="Instruction for Aadhar Back Photo"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-[#005377] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#052F5F] transition duration-300"
        >
          Proceed to Pay Fee
        </button>
      </form>
    </div>
  );
};

export default Form;
