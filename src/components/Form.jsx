import { useEffect, useState } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import axios from "axios";
import base64ToBinary from "./base64ToBinary";
import FormField from "./FormField";
import propTypes from "prop-types";
import geeenTick from "../assets/greenTick.png";
import ClubDetails from "./ClubDetails";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const loadingTexts = [
    "Please wait while we process your registration",
    "Please wait while we validate your details",
    "Please wait while we upload your documents",
    "Please wait while we verify your documents",
    "Please wait while we process your payment",
    "Upload speed depends on your internet connection",
    "Please be patient",
    "Please wait",
    "Almost there",
];

function Form({
    fields,
    DocumentDetails,
    fee,
    fromTitle,
    formDesc,
    nextFormLabel,
    nextFormLink,
    backendPaymentUrl,
    backendPaymentVerifyUrl,
}) {
    const [athleteFormData, setAthleteFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [fakeLoadingText, setFakeLoadingText] = useState(
        "Please wait while we process your registration"
    );
    const [regSuccess, setRegSuccess] = useState(false);
    const [regData, setRegData] = useState({});
    const [academyNameOptions, setAcademyNameOptions] = useState([]);

    useEffect(() => {
        if (athleteFormData?.district) {
            ClubDetails.map((district) => {
                if (district.district === athleteFormData.district) {
                    setAcademyNameOptions(
                        district.clubs.map((club) => ({
                            value: club.clubName,
                            label: club.clubName,
                        }))
                    );
                }
            });
        }
    }, [athleteFormData]);

    useEffect(() => {
        // Function to pick a random loading text from the array
        const getRandomLoadingText = () => {
            const randomIndex = Math.floor(Math.random() * loadingTexts.length);
            return loadingTexts[randomIndex];
        };

        // Set an interval to update the fake loading text every 3 seconds (for example)
        const intervalId = setInterval(() => {
            setFakeLoadingText(getRandomLoadingText());
        }, 3000); // Change message every 3 seconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // remove errorMsg after 10 seconds
        const timeoutId = setTimeout(() => {
            setErrorMsg("");
        }, 10000);

        return () => clearTimeout(timeoutId);
    }, [errorMsg]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

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
                .post(`${BACKEND_URL}${backendPaymentUrl}`, formData, {
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
                                .post(
                                    `${BACKEND_URL}${backendPaymentVerifyUrl}`,
                                    {
                                        razorpay_order_id:
                                            response.razorpay_order_id,
                                        razorpay_payment_id:
                                            response.razorpay_payment_id,
                                        razorpay_signature:
                                            response.razorpay_signature,
                                        userId: userId,
                                    }
                                )
                                .then((verifyRes) => {
                                    console.log(verifyRes);
                                    setRegData(verifyRes);
                                    setRegSuccess(true);

                                    setLoading(false);
                                })
                                .catch((err) => {
                                    console.error(err);
                                    setErrorMsg(
                                        "An error occurred while verifying your payment. Please contact administrator."
                                    );
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
                    console.error(err);

                    setErrorMsg(
                        "An error occurred while processing your request. Please try again later."
                    );

                    setLoading(false);
                });
        } else {
            setFormErrors(errors);

            setLoading(false);
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

    if (!regSuccess)
        return (
            <div className="container px-8 m-auto mt-10 mb-16">
                <div className="flex items-center gap-2">
                    <a
                        href={nextFormLink}
                        className="text-blue-500 font-semibold px-4 py-2 rounded-md text-center ml-auto"
                        rel="noreferrer"
                    >
                        {nextFormLabel}
                        <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <div className="bg-white lg:p-8 rounded-md lg:shadow-md mt-8 lg:border">
                    <h1 className="text-3xl font-bold text-center">
                        {fromTitle}
                    </h1>
                    <p className="text-gray-800 text-sm font-semibold text-center max-w-lg m-auto">
                        {formDesc}
                    </p>
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
                                        style={field.name === "academyName" ? {textTransform: "uppercase"} : {}} // Capitalize academy name
                                        options={
                                            field.name === "academyName"
                                                ? [
                                                      {
                                                          value: "",
                                                          label: athleteFormData?.district
                                                              ? `Select Academy in ${athleteFormData?.district}`
                                                              : "Select District First",
                                                      },
                                                      ...academyNameOptions,
                                                  ]
                                                : field.options
                                        }
                                        value={
                                            athleteFormData[field.name] || ""
                                        }
                                        handleChange={handleChange}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        error={formErrors[field.name]}
                                        img={field.image}
                                        loading={loading}
                                        // charLimitText only show if field.maxLength
                                        charLimitText={
                                            field.maxLength
                                                ? `${
                                                      athleteFormData[
                                                          field.name
                                                      ]?.length || 0
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
                                        loading={loading}
                                    />
                                </span>
                                {DocumentDetails.map((field) => (
                                    <FormField
                                        name={field.name}
                                        key={field.name}
                                        label={field.label}
                                        accept={"image/*"} // Accept only images
                                        type={field.type}
                                        options={field.options}
                                        value={
                                            athleteFormData[field.name] || ""
                                        }
                                        handleChange={handleFileChange}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        error={formErrors[field.name]}
                                        img={field.image}
                                        loading={loading}
                                    />
                                ))}
                            </div>
                        }

                        <p className="text-gray-800 text-sm font-medium mt-4 flex items-center">
                            <input type="checkbox" required id="terms" />
                            <label htmlFor="terms" className="ml-2">
                                I agree that all the information provided is
                                correct and I am willing to pay the registration
                                fee. I understand that the registration fee is
                                non-refundable.
                            </label>
                        </p>
                        {!loading && (
                            <div className="text-center w-fit mt-5">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                                >
                                    <span>Proceed to Payment</span>
                                </button>
                                {fee && (
                                    <p className="text-gray-800 text-xs font-semibold mt-1">
                                        Registration fee:{" "}
                                        <span className="text-green-500">
                                            {fee}
                                        </span>
                                    </p>
                                )}
                            </div>
                        )}

                        {loading && (
                            <div className="text-center w-fit mt-5 min-w-96 flex gap-5 items-center">
                                <i className="fas fa-spinner fa-spin text-3xl text-blue-500"></i>
                                <p className="text-gray-800 text-xs font-semibold mt-1">
                                    {fakeLoadingText}
                                </p>
                            </div>
                        )}

                        {errorMsg && (
                            <div className="text-center w-fit mt-5 ml-auto">
                                <p className="bg-red-100 text-red-500 p-2 rounded-md">
                                    {errorMsg}
                                </p>
                                <p className="text-gray-800 text-xs mt-1">
                                    If issue persists, please contaact
                                    administator
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );

    if (regSuccess)
        return (
            <div className="container px-8 m-auto mt-10 mb-16" id="#success">
                <img
                    src={geeenTick}
                    alt="Success"
                    className="w-20 m-auto my-5"
                />
                <h2 className="text-3xl font-bold text-center">
                    Congratulations!
                </h2>
                <p className="text-gray-800 text-sm font-semibold text-center max-w-lg m-auto">
                    Your payment was successful.
                </p>

                {/* download ID card button  */}
                {/* <a
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 m-auto block w-fit font-medium"
                    href={regData?.data?.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fas fa-download mr-2"></i>
                    Download ID Card
                </a> */}

                <p className="text-green-600 text-sm font-semibold text-center max-w-lg m-auto mt-5">
                    Admin will verify your documents and you will receive an
                    email on {regData?.data?.email}
                </p>
                <p className="text-gray-800 text-sm font-semibold text-center max-w-lg m-auto mt-5">
                    Kindly note down the tracking ID for future reference. Same
                    has been sent to your email.
                </p>

                {regData?.data && (
                    <table className="m-auto my-5 bg-white border border-gray-200">
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    Registration Status
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-green-500 text-sm font-semibold">
                                    {regData.data.message}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    Tracking ID
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    {regData.data.regNo}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    Payment ID
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    {regData.data.paymentId}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    Name
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    {regData.data.name}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    Email
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm font-semibold">
                                    {regData.data.email}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}

                <div className="flex items-center w-fit m-auto divide-x-2 text-sm">
                    <button
                        className="text-blue-500 px-4 rounded-md text-center m-auto"
                        onClick={() => window.location.reload()}
                    >
                        <i className="fas fa-redo-alt mr-2"></i>
                        Submit New Registration
                    </button>

                    <a
                        href={nextFormLink}
                        className="text-blue-500 px-4 rounded-md text-center"
                    >
                        {nextFormLabel}
                        <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        );
}

export default Form;

Form.propTypes = {
    fields: propTypes.array.isRequired,
    DocumentDetails: propTypes.array.isRequired,
    fee: propTypes.string,
    fromTitle: propTypes.string.isRequired,
    formDesc: propTypes.string.isRequired,
    nextFormLabel: propTypes.string.isRequired,
    nextFormLink: propTypes.string.isRequired,
    backendPaymentUrl: propTypes.string.isRequired,
    backendPaymentVerifyUrl: propTypes.string.isRequired,
};
