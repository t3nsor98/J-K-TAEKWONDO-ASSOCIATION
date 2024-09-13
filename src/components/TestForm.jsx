import { useState } from "react";
import demoImg from "../assets/abtimg1.webp";
import axios from "axios";

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
        photo: null, // Assuming this will be set by file input later
        certificate: null, // Assuming this will be set by file input later
        residentCertificate: null, // Assuming this will be set by file input later
        adharFrontPhoto: null, // Assuming this will be set by file input later
        adharBackPhoto: null, // Assuming this will be set by file input later
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
        birthCertificate: null,
        residentCertificate: null,
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

    const handleAthleteChange = (e) => {
        const { name, value, files } = e.target;
        setAthleteFormData({
            ...athleteFormData,
            [name]: files ? files[0] : value,
        });
    };

    const handleCoachChange = (e) => {
        const { name, value, files } = e.target;
        setCoachFormData({
            ...coachFormData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`VITE_KEY_RAZORPAY: ${import.meta.env.VITE_KEY_RAZORPAY}`);

        if (formType === "athlete") {
            // Athlete form submission
            const formData = new FormData();

            // Append all fields from athleteFormData to formData (handles file uploads)
            Object.keys(athleteFormData).forEach((key) => {
                if (athleteFormData[key] instanceof File) {
                    formData.append(key, athleteFormData[key]);
                } else {
                    formData.append(key, athleteFormData[key]);
                }
            });

            // Step 1: Send form data to backend to create a user and generate a Razorpay order
            axios
                .post(
                    "https://jkta-backend.onrender.com/register-user",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                .then((res) => {
                    // Step 2: After receiving the response, call Razorpay with the generated order ID
                    const { orderId, amount, currency, userId } = res.data;

                    const options = {
                        key: import.meta.env.VITE_KEY_RAZORPAY, // Replace with your Razorpay API key
                        amount: amount,
                        currency: currency,
                        order_id: orderId,
                        handler: function (response) {
                            axios
                                .post(
                                    "https://jkta-backend.onrender.com/verify-payment",
                                    {
                                        razorpay_order_id:
                                            response.razorpay_order_id,
                                        razorpay_payment_id:
                                            response.razorpay_payment_id,
                                        razorpay_signature:
                                            response.razorpay_signature,
                                        userId: userId, // Send userId to the backend to get user details for ID cards
                                    }
                                )
                                .then((verifyRes) => {
                                    console.log(
                                        "Payment Verified:",
                                        verifyRes.data
                                    );
                                    alert("Payment successful and verified!");
                                })
                                .catch((err) => {
                                    console.log(
                                        "Payment verification failed:",
                                        err
                                    );
                                    alert("Payment verification failed");
                                });
                        },
                        prefill: {
                            name: athleteFormData.athleteName, // Pre-fill form details (if available)
                            email: athleteFormData.email,
                            contact: athleteFormData.mob,
                        },
                        notes: {
                            address: athleteFormData.address, // Optional field
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };

                    const rzp1 = new Razorpay(options);
                    rzp1.open();
                })
                .catch((err) => {
                    console.log(err);
                    alert(
                        "Error in form submission or Razorpay order creation."
                    );
                });
        } else if (formType === "coach") {
            // Coach form submission logic (adjusted to handle file uploads)
            const formData = new FormData();

            // Append all fields from coachFormData to formData (handles file uploads)
            Object.keys(coachFormData).forEach((key) => {
                if (coachFormData[key] instanceof File) {
                    formData.append(key, coachFormData[key]);
                } else {
                    formData.append(key, coachFormData[key]);
                }
            });

            // Step 1: Send form data to backend to create a coach and generate a Razorpay order
            axios
                .post(
                    "https://jkta-backend.onrender.com/register-coach",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                .then((res) => {
                    // Step 2: After receiving the response, call Razorpay with the generated order ID
                    const { orderId, amount, currency, userId } = res.data;

                    const options = {
                        key: import.meta.env.VITE_KEY_RAZORPAY, // Replace with your Razorpay API key
                        amount: amount,
                        currency: currency,
                        order_id: orderId,
                        handler: function (response) {
                            axios
                                .post(
                                    "https://jkta-backend.onrender.com/verify-payment-coach",
                                    {
                                        razorpay_order_id:
                                            response.razorpay_order_id,
                                        razorpay_payment_id:
                                            response.razorpay_payment_id,
                                        razorpay_signature:
                                            response.razorpay_signature,
                                        userId: userId, // Send coachId to the backend for verification
                                    }
                                )
                                .then((verifyRes) => {
                                    console.log(
                                        "Payment Verified:",
                                        verifyRes.data
                                    );
                                    alert("Payment successful and verified!");
                                })
                                .catch((err) => {
                                    console.log(
                                        "Payment verification failed:",
                                        err
                                    );
                                    alert("Payment verification failed");
                                });
                        },
                        prefill: {
                            name: coachFormData.playerName, // Pre-fill form details (if available)
                            email: coachFormData.email,
                            contact: coachFormData.mob,
                        },
                        notes: {
                            address: coachFormData.address, // Optional field
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };

                    const rzp1 = new Razorpay(options);
                    rzp1.open();
                })
                .catch((err) => {
                    console.log(err);
                    alert(
                        "Error in coach form submission or Razorpay order creation."
                    );
                });
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
                        <input
                            type="text"
                            name="athleteName"
                            placeholder="Name of the Athlete"
                            value={athleteFormData.athleteName}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="fatherName"
                            placeholder="Father's Name"
                            value={athleteFormData.fatherName}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="motherName"
                            placeholder="Mother's Name"
                            value={athleteFormData.motherName}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <label>
                            Date Of Birth
                            <input
                                type="date"
                                name="dob"
                                value={athleteFormData.dob}
                                onChange={handleAthleteChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
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
                        <input
                            type="tel"
                            name="mob"
                            placeholder="Mobile Number"
                            value={athleteFormData.mob}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={athleteFormData.email}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="adharNumber"
                            placeholder="Aadhar Number"
                            value={athleteFormData.adharNumber}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={athleteFormData.address}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="pin"
                            placeholder="Pincode"
                            value={athleteFormData.pin}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="panNumber"
                            placeholder="PAN Number (Optional)"
                            value={athleteFormData.panNumber}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                        />
                        <input
                            type="text"
                            name="academyName"
                            placeholder="Name of the Academy"
                            value={athleteFormData.academyName}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="coachName"
                            placeholder="Name of the Coach"
                            value={athleteFormData.coachName}
                            onChange={handleAthleteChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Photo
                            </label>
                            <input
                                type="file"
                                name="photo"
                                onChange={handleAthleteChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Birth Certificate
                            </label>
                            <input
                                type="file"
                                name="certificate"
                                onChange={handleAthleteChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Resident Certificate
                            </label>
                            <input
                                type="file"
                                name="residentCertificate"
                                onChange={handleAthleteChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Aadhar Front Photo
                            </label>
                            <input
                                type="file"
                                name="adharFrontPhoto"
                                onChange={handleAthleteChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Aadhar Back Photo
                            </label>
                            <input
                                type="file"
                                name="adharBackPhoto"
                                onChange={handleAthleteChange}
                                className="border-none"
                                required
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="playerName"
                            placeholder="Name"
                            value={coachFormData.playerName}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="fatherName"
                            placeholder="Father's Name"
                            value={coachFormData.fatherName}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <label>
                            Date of Birth
                            <input
                                type="date"
                                name="dob"
                                value={coachFormData.dob}
                                onChange={handleCoachChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
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
                        <input
                            type="tel"
                            name="mob"
                            placeholder="Mobile Number"
                            value={coachFormData.mob}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={coachFormData.email}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="adharNumber"
                            placeholder="Aadhar Number"
                            value={coachFormData.adharNumber}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={coachFormData.address}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="pin"
                            placeholder="Pincode"
                            value={coachFormData.pin}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            required
                        />
                        <input
                            type="text"
                            name="panNumber"
                            placeholder="PAN Number (Optional)"
                            value={coachFormData.panNumber}
                            onChange={handleCoachChange}
                            className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                        />
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Photo
                            </label>
                            <input
                                type="file"
                                name="photo"
                                onChange={handleCoachChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Black Belt Certificate
                            </label>
                            <input
                                type="file"
                                name="blackBeltCertificate"
                                onChange={handleCoachChange}
                                className="border-none"
                                required
                            />
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
                                Upload Aadhar Front Photo
                            </label>
                            <input
                                type="file"
                                name="adharFrontPhoto"
                                onChange={handleCoachChange}
                                className="border-none"
                                required
                            />
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label className="block mb-2 font-semibold">
                                Upload Aadhar Back Photo
                            </label>
                            <input
                                type="file"
                                name="adharBackPhoto"
                                onChange={handleCoachChange}
                                className="border-none"
                                required
                            />
                        </div>
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-[#005377] text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#052F5F] transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
