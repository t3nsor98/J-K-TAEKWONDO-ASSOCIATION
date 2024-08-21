import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    athleteName: "",
    dob: "",
    parentName: "",
    email: "",
    contactNumber: "",
    permanentAddress: "",
    presentAddress: "",
    academyName: "",
    coachName: "",
    district: "",
    beltGrade: "",
    certificateNo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Athlete Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="athleteName"
            placeholder="Name of the Athlete"
            value={formData.athleteName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="parentName"
            placeholder="Name of Parent/Guardian"
            value={formData.parentName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="permanentAddress"
            placeholder="Permanent Address"
            value={formData.permanentAddress}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="presentAddress"
            placeholder="Present Address"
            value={formData.presentAddress}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="academyName"
            placeholder="Academy/Club Name"
            value={formData.academyName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="coachName"
            placeholder="Coach Name"
            value={formData.coachName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="beltGrade"
            placeholder="Belt Grade Color"
            value={formData.beltGrade}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="certificateNo"
            placeholder="Black Belt Certificate No."
            value={formData.certificateNo}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full"
          />
        </div>

        {/* Photo and Signature Uploads */}
        <div className="mt-8 space-y-4">
          <div className="border border-gray-300 p-3 rounded-md">
            <label className="block mb-2 font-semibold">
              Upload Photo of Athlete
            </label>
            <input
              type="file"
              name="athletePhoto"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="border border-gray-300 p-3 rounded-md">
            <label className="block mb-2 font-semibold">
              Sign of Guardian/Parent
            </label>
            <input
              type="file"
              name="guardianSign"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="border border-gray-300 p-3 rounded-md">
            <label className="block mb-2 font-semibold">Sign of Athlete</label>
            <input
              type="file"
              name="athleteSign"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="border border-gray-300 p-3 rounded-md">
            <label className="block mb-2 font-semibold">Sign of Coach</label>
            <input
              type="file"
              name="coachSign"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-purple-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
