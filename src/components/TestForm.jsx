import { useState } from "react";
import axios from "axios";
import ImageCrop from "./ImageCrop";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

console.log(`BACKEND_URL: ${BACKEND_URL}`);

const Form = () => {
    const [formType, setFormType] = useState("athlete");
    const [tempPhoto, setTempPhoto] = useState(null);
    const [showCropper, setShowCropper] = useState(false);

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
                .post(`${BACKEND_URL}/register-user`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
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
                                .post(`${BACKEND_URL}/verify-payment`, {
                                    razorpay_order_id:
                                        response.razorpay_order_id,
                                    razorpay_payment_id:
                                        response.razorpay_payment_id,
                                    razorpay_signature:
                                        response.razorpay_signature,
                                    userId: userId, // Send userId to the backend to get user details for ID cards
                                })
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
                .post(`${BACKEND_URL}/register-coach`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
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
                                .post(`${BACKEND_URL}/verify-payment-coach`, {
                                    razorpay_order_id:
                                        response.razorpay_order_id,
                                    razorpay_payment_id:
                                        response.razorpay_payment_id,
                                    razorpay_signature:
                                        response.razorpay_signature,
                                    userId: userId, // Send coachId to the backend for verification
                                })
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

    //code update to transform text to upper case in the form
    const handleAthleteChange = (e) => {
        const { name, value, files, type } = e.target;
        setAthleteFormData({
            ...athleteFormData,
            [name]: files
                ? files[0]
                : type === "text"
                ? value.toUpperCase()
                : value,
        });
    };

    const handleCoachChange = (e) => {
        const { name, value, files, type } = e.target;
        setCoachFormData({
            ...coachFormData,
            [name]: files
                ? files[0]
                : type === "text"
                ? value.toUpperCase()
                : value,
        });
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setTempPhoto(reader.result);
                setShowCropper(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCroppedImage = async (croppedImg) => {
        // Convert base64 to Blob
        const blob = dataURItoBlob(croppedImg);

        // Convert the blob to PNG
        try {
            const pngBlob = await blobToPNG(blob);
            if (formType === "athlete") {
                setAthleteFormData({ ...athleteFormData, photo: pngBlob });
            } else {
                setCoachFormData({ ...coachFormData, photo: pngBlob });
            }
        } catch (error) {
            console.error("Failed to convert image to PNG:", error);
        }

        setShowCropper(false);
        setTempPhoto(null);
    };

    // Utility function to convert base64 to Blob
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(",")[1]);
        const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    };

    const blobToPNG = (blob) => {
        return new Promise((resolve, reject) => {
            // Create an image element
            const img = new Image();

            // Create a FileReader to read the blob
            const reader = new FileReader();

            // When the image is loaded, draw it on a canvas and convert to PNG
            reader.onload = () => {
                img.src = reader.result;
            };

            // Handle image loading error
            img.onerror = (err) => reject(err);

            // Once the image is loaded into the DOM, draw it on a canvas
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                // Convert canvas content to PNG Blob
                canvas.toBlob((pngBlob) => {
                    if (pngBlob) {
                        resolve(pngBlob);
                    } else {
                        reject(new Error("Failed to convert blob to PNG."));
                    }
                }, "image/png");
            };

            // Read the blob as a data URL
            reader.readAsDataURL(blob);
        });
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
                                id="athleteName"
                                name="athleteName"
                                placeholder="Name of the Athlete"
                                value={athleteFormData.athleteName}
                                onChange={handleAthleteChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
                        <label htmlFor="fatherName">
                            Father&apos;s Name:
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                placeholder="Father's Name"
                                value={athleteFormData.fatherName}
                                onChange={handleAthleteChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
                        <label htmlFor="motherName">
                            Mother&apos;s Name:
                            <input
                                type="text"
                                id="motherName"
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
                                id="dob"
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
                                id="gender"
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
                                id="district"
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
                                id="mob"
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
                                id="email"
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
                                id="adharNumber"
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
                                id="address"
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
                                id="pin"
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
                                id="panNumber"
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
                                id="academyName"
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
                                id="coachName"
                                name="coachName"
                                placeholder="Name of the Coach"
                                value={athleteFormData.coachName}
                                onChange={handleAthleteChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label
                                htmlFor="photo"
                                className="block mb-2 font-semibold"
                            >
                                Upload Photo:
                            </label>
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                onChange={handlePhotoUpload}
                                className="border-none"
                                required
                            />
                            {athleteFormData.photo && (
                                <img
                                    src={athleteFormData.photo}
                                    alt="Cropped athlete photo"
                                    className="mt-2 w-32 h-32 object-cover rounded-md"
                                />
                            )}
                            {/* Instruction Image */}
                            <div className="mt-3">
                                <img
                                    src="instructionImg2.png"
                                    alt="Instruction for Athlete Photo"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label
                                htmlFor="certificate"
                                className="block mb-2 font-semibold"
                            >
                                Upload Birth Certificate:
                            </label>
                            <input
                                type="file"
                                id="certificate"
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
                            <label
                                htmlFor="residentCertificate"
                                className="block mb-2 font-semibold"
                            >
                                Upload Resident Certificate:
                            </label>
                            <input
                                type="file"
                                id="residentCertificate"
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
                            <label
                                htmlFor="adharFrontPhoto"
                                className="block mb-2 font-semibold"
                            >
                                Upload Aadhar Front Photo:
                            </label>
                            <input
                                type="file"
                                name="adharFrontPhoto"
                                id="adharFrontPhoto"
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
                            <label
                                htmlFor="adharBackPhoto"
                                className="block mb-2 font-semibold"
                            >
                                Upload Aadhar Back Photo:
                            </label>
                            <input
                                type="file"
                                id="adharBackPhoto"
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
                                id="playerName"
                                name="playerName"
                                placeholder="Name"
                                value={coachFormData.playerName}
                                onChange={handleCoachChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
                        <label htmlFor="fatherName">
                            Father&apos;s Name:
                            <input
                                type="text"
                                id="fatherName"
                                name="fatherName"
                                placeholder="Father's Name"
                                value={coachFormData.fatherName}
                                onChange={handleCoachChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                                required
                            />
                        </label>
                        <label htmlFor="dob">
                            Date of Birth:
                            <input
                                type="date"
                                id="dob"
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
                                id="gender"
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
                                id="district"
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
                                id="mob"
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
                                id="email"
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
                                id="adharNumber"
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
                                id="address"
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
                                id="pin"
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
                                id="panNumber"
                                name="panNumber"
                                placeholder="PAN Number (Optional)"
                                value={coachFormData.panNumber}
                                onChange={handleCoachChange}
                                className="border border-[#06A77D] p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#F1A208]"
                            />
                        </label>
                        <hr />
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label
                                htmlFor="photo"
                                className="block mb-2 font-semibold"
                            >
                                Upload Photo:
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                onChange={handlePhotoUpload}
                                className="border-none"
                                required
                            />
                            {coachFormData.photo && (
                                <img
                                    src={coachFormData.photo}
                                    alt="Cropped coach photo"
                                    className="mt-2 w-32 h-32 object-cover rounded-md"
                                />
                            )}
                            {/* Instruction Image */}
                            <div className="mt-3">
                                <img
                                    src="instructionImg2.png"
                                    alt="Instruction for Coach Photo"
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        </div>
                        <div className="border border-[#06A77D] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F1A208]">
                            <label
                                htmlFor="blackBeltCertificate"
                                className="block mb-2 font-semibold"
                            >
                                Upload Black Belt Certificate:
                            </label>
                            <input
                                type="file"
                                id="blackBeltCertificate"
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
                            <label
                                htmlFor="adharFrontPhoto"
                                className="block mb-2 font-semibold"
                            >
                                Upload Aadhar Front Photo:
                            </label>
                            <input
                                type="file"
                                name="adharFrontPhoto"
                                id="adharFrontPhoto"
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
                            <label
                                htmlFor="adharBackPhoto"
                                className="block mb-2 font-semibold"
                            >
                                Upload Aadhar Back Photo:
                            </label>
                            <input
                                type="file"
                                id="adharBackPhoto"
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

            {showCropper && tempPhoto && (
                <ImageCrop
                    imageSrc={tempPhoto}
                    onComplete={handleCroppedImage}
                    aspect={1}
                />
            )}
        </div>
    );
};

export default Form;
