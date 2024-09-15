import { useState } from "react";
import PropTypes from "prop-types";
import ProfilePictureUpload from "./ProfilePictureUpload";
import axios from "axios";
import base64ToBinary from "./base64ToBinary";
// import Razorpay from "razorpay";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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

const PersonalDetails = [
    {
        name: "athleteName",
        label: "Athlete Name",
        type: "text",
        image: null,
        required: true,
        placeholder: "Enter your name",
        maxLength: 30,
        validation: {
            pattern: {
                value: /^[A-Za-z\s]{1,30}$/,
                message:
                    "Athlete name can only contain letters and spaces, up to 30 characters",
            },
        },
    },
    {
        name: "fatherName",
        label: "Father Name",
        type: "text",
        image: null,
        required: true,
        placeholder: "Enter your father's name",
        maxLength: 30,
        validation: {
            pattern: {
                value: /^[A-Za-z\s]{1,30}$/,
                message:
                    "Father's name can only contain letters and spaces, up to 30 characters",
            },
        },
    },
    {
        name: "motherName",
        label: "Mother Name",
        type: "text",
        image: null,
        required: true,
        placeholder: "Enter your mother's name",
        maxLength: 30,
        validation: {
            pattern: {
                value: /^[A-Za-z\s]{1,30}$/,
                message:
                    "Mother's name can only contain letters and spaces, up to 30 characters",
            },
        },
    },
    {
        name: "dob",
        label: "Date of Birth",
        type: "date",
        image: null,
        required: true,
    },
    {
        name: "gender",
        label: "Gender",
        type: "dropdown",
        options: [
            { value: "", label: "Select Your Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
        ],
        required: true,
    },
    {
        name: "adharNumber",
        label: "Aadhar Number",
        type: "number",
        image: null,
        required: true,
        placeholder: "Enter your Aadhar number",
        maxLength: 12,
        validation: {
            pattern: {
                value: /^\d{12}$/,
                message: "Aadhar number must be exactly 12 digits",
            },
        },
    },
    {
        name: "panNumber",
        label: "PAN Number",
        type: "text",
        image: null,
        required: true,
        placeholder: "Enter your PAN number",
        maxLength: 10,
        validation: {
            pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                message: "PAN must be in the format AAAAA0000A",
            },
        },
    },
];

const ContactDetails = [
    {
        name: "mob",
        label: "Mobile Number",
        type: "tel",
        image: null,
        required: true,
        maxLength: 10,
        validation: {
            pattern: {
                value: /^[6-9]\d{9}$/,
                message:
                    "Mobile number must be exactly 10 digits starting with 6-9",
            },
        },
    },
    {
        name: "email",
        label: "Email Address",
        type: "email",
        image: null,
        required: true,
        validation: {
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please enter a valid email address",
            },
        },
    },
    {
        name: "address-line1",
        label: "Address Line 1",
        type: "text",
        image: null,
        required: true,
        maxLength: 50,
        placeholder: "Enter your address",
    },
    {
        name: "address-line2",
        label: "Address Line 2",
        type: "text",
        image: null,
        required: false,
        maxLength: 50,
        placeholder: "Enter your address (optional)",
    },
    {
        name: "district",
        label: "District",
        type: "dropdown",
        options: [
            { value: "", label: "Select Your District" },
            ...districts.map((district) => ({
                value: district,
                label: district,
            })),
        ],
        image: null,
        required: true,
    },
    {
        name: "pin",
        label: "PIN Code",
        type: "text",
        image: null,
        required: true,
        maxLength: 6,
        validation: {
            pattern: {
                value: /^\d{6}$/,
                message: "PIN code must be exactly 6 digits",
            },
        },
    },
];

const AcademyDetails = [
    {
        name: "academyName",
        label: "Academy Name",
        type: "text",
        image: null,
        required: true,
        maxLength: 50,
        placeholder: "Enter the academy name",
    },
    {
        name: "coachName",
        label: "Coach Name",
        type: "text",
        image: null,
        required: true,
        maxLength: 30,
        placeholder: "Enter the coach's name",
        validation: {
            pattern: {
                value: /^[A-Za-z\s]{1,30}$/,
                message:
                    "Coach name can only contain letters and spaces, up to 30 characters",
            },
        },
    },
];

const DocumentDetails = [
    {
        name: "adharFrontPhoto",
        label: "Aadhar Card Front",
        type: "file",
        image: null,
        required: true,
    },

    {
        name: "adharBackPhoto",
        label: "Aadhar Card Back",
        type: "file",
        image: null,
        required: true,
    },
    {
        name: "residentCertificate",
        label: "Residence Certificate",
        type: "file",
        image: null,
        required: true,
    },
    {
        name: "certificate",
        label: "Birth Certificate",
        type: "file",
        image: null,
        required: true,
    },
];

const fields = [
    {
        label: "Personal Details",
        fields: PersonalDetails,
    },
    {
        label: "Contact Details",
        fields: ContactDetails,
    },
    {
        label: "Academy Details",
        fields: AcademyDetails,
    },
];

function AthleteForm() {
    const [athleteFormData, setAthleteFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(athleteFormData);
    
        const errors = {};
    
        fields.forEach((fieldGroup) => {
            fieldGroup.fields.forEach((field) => {
                const value = athleteFormData[field.name];
    
                if (field.required && !value) {
                    errors[field.name] = `${field.label} is required`;
                } else if (field.validation?.pattern) {
                    const isValid = field.validation.pattern.value.test(value);
                    if (!isValid) {
                        errors[field.name] = field.validation.pattern.message;
                    }
                }
            });
        });
    
        if (Object.keys(errors).length === 0) {
            const formData = new FormData();
    
            // Append all fields from athleteFormData to formData (handles file uploads)
            Object.keys(athleteFormData).forEach((key) => {
                if (athleteFormData[key] instanceof File) {
                    formData.append(key, athleteFormData[key]);
                } else if (
                    typeof athleteFormData[key] === "string" &&
                    athleteFormData[key].startsWith("data:image")
                ) {
                    // Convert base64 image data to binary Blob
                    const binaryBlob = base64ToBinary(athleteFormData[key]);
                    formData.append(key, binaryBlob);
                } else {
                    formData.append(key, athleteFormData[key]);
                }
            });
    
            axios
                .post(`${BACKEND_URL}/register-user`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    const { orderId, amount, currency, userId } = res.data;
    
                    const options = {
                        key: import.meta.env.VITE_KEY_RAZORPAY,
                        amount: amount,
                        currency: currency,
                        order_id: orderId,
                        handler: function (response) {
                            axios
                                .post(`${BACKEND_URL}/verify-payment`, {
                                    razorpay_order_id: response.razorpay_order_id,
                                    razorpay_payment_id: response.razorpay_payment_id,
                                    razorpay_signature: response.razorpay_signature,
                                    userId: userId,
                                })
                                .then((verifyRes) => {
                                    alert("Payment successful and verified!");
                                })
                                .catch((err) => {
                                    alert("Payment verification failed");
                                });
                        },
                        prefill: {
                            name: athleteFormData.athleteName,
                            email: athleteFormData.email,
                            contact: athleteFormData.mob,
                        },
                        notes: {
                            address: athleteFormData.address,
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };
    
                    const rzp1 = new Razorpay(options);
                    rzp1.open();
                })
                .catch((err) => {
                    alert("Error in form submission or Razorpay order creation.");
                });
        } else {
            setFormErrors(errors);
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        const field = fields
            .flatMap((fieldGroup) => fieldGroup.fields)
            .find((f) => f.name === name);

        if (field.maxLength && value.length > field.maxLength) {
            return;
        }

        // Update the form data
        setAthleteFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        // Validate the field
        let error = "";

        if (field) {
            if (field.required && !value) {
                error = `${field.label} is required`;
            } else if (field.validation?.pattern) {
                const isValid = field.validation.pattern.value.test(value);
                if (!isValid) {
                    error = field.validation.pattern.message;
                }
            }
        }

        // Update the form errors state
        setFormErrors((prevState) => ({
            ...prevState,
            [name]: error,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;

        if (files.length > 0) {
            const file = files[0];

            // Assuming you need to convert file to base64
            const reader = new FileReader();
            reader.onloadend = () => {
                setAthleteFormData((prevState) => ({
                    ...prevState,
                    [name]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setAthleteFormData((prevState) => ({
                ...prevState,
                [name]: null,
            }));
        }
    };

    return (
        <div className="container px-8">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Athlete Registration Form
            </h1>
            <form onSubmit={handleSubmit}>
                {fields.map((fieldGroup) => (
                    <div
                        key={fieldGroup.label}
                        className="grid lg:grid-cols-2 gap-4"
                    >
                        <h2 className="text-xl font-semibold mt-4 lg:col-span-2">
                            {fieldGroup.label}
                        </h2>
                        <hr className="lg:col-span-2 border-gray-500" />
                        {fieldGroup.fields.map((field) => (
                            <FormField
                                name={field.name}
                                key={field.name}
                                label={field.label}
                                type={field.type}
                                options={field.options}
                                value={athleteFormData[field.name] || ""}
                                handleChange={handleChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                error={formErrors[field.name]}
                                // charLimitText only show if field.maxLength
                                charLimitText={
                                    field.maxLength
                                        ? `${
                                              athleteFormData[field.name]
                                                  ?.length || 0
                                          }/${field.maxLength}`
                                        : ""
                                }
                            />
                        ))}
                    </div>
                ))}
                {
                    <div className="grid lg:grid-cols-2 gap-4">
                        <h2 className="text-xl font-semibold mt-4 lg:col-span-2">
                            Document Details
                        </h2>
                        <hr className="lg:col-span-2 border-gray-500" />
                        <span className="lg:col-span-2">
                            <ProfilePictureUpload
                                setAthleteFormData={setAthleteFormData}
                            />
                        </span>
                        {DocumentDetails.map((field) => (
                            <FormField
                                name={field.name}
                                key={field.name}
                                label={field.label}
                                type={field.type}
                                options={field.options}
                                value={athleteFormData[field.name] || ""}
                                handleChange={handleFileChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                error={formErrors[field.name]}
                            />
                        ))}
                    </div>
                }
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AthleteForm;

const FormField = ({
    name,
    label,
    type,
    options = [],
    value,
    handleChange,
    placeholder = "",
    required = false,
    error = "",
    charLimitText = "",
}) => {
    return (
        <div className="">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                {label}
                {required && <span className="text-red-500"> *</span>}
            </label>
            {type === "text" ||
            type === "email" ||
            type === "tel" ||
            type === "number" ||
            type === "date" ? (
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={required}
                    className={`mt-1 p-2 border outline-none ${
                        error ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm`}
                />
            ) : type === "dropdown" ? (
                <select
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    className="mt-1 p-2 border outline-none bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : type === "file" ? (
                <input
                    id={name}
                    name={name}
                    type={type}
                    accept="image/*"
                    onChange={handleChange}
                    className="mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                />
            ) : null}

            <p className="flex justify-between">
                {error ? (
                    <span className="text-red-500 text-sm mt-1">{error}</span>
                ) : (
                    <span className="text-gray-500 text-sm mt-1"></span>
                )}
                {charLimitText && (
                    <span className="text-gray-500 text-sm mt-1 text-right">
                        {charLimitText}
                    </span>
                )}
            </p>
        </div>
    );
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string,
    charLimitText: PropTypes.string,
};
