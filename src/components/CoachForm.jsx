import Form from "./Form";

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
        name: "playerName",
        label: "Coach Name",
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
        required: false,
        placeholder: "Enter your PAN number",
        maxLength: 10,
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
        name: "address",
        label: "Address",
        type: "text",
        image: null,
        required: true,
        maxLength: 50,
        placeholder: "Enter your address",
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

const DocumentDetails = [
    {
        name: "adharFrontPhoto",
        label: "Aadhar Card Front",
        type: "file",
        // image: "/instructionAadhar.png",
        required: true,
    },

    {
        name: "adharBackPhoto",
        label: "Aadhar Card Back",
        type: "file",
        // image: "instructionAadhar.png",
        required: true,
    },
    {
        name: "residentCertificate",
        label: "Residence Certificate",
        type: "file",
        // image: "instructionDocs.png",
        required: true,
    },
    {
        name: "birthCertificate",
        label: "Birth Certificate",
        type: "file",
        // image: "instructionDocs.png",
        required: true,
    },
    {
        name: "blackBeltCertificate",
        label: "Black Belt Certificate",
        type: "file",
        // image: "instructionDocs.png",
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
];

function CoachForm() {
    return (
        <Form
            fields={fields}
            DocumentDetails={DocumentDetails}
            formDesc="Please fill in the details below to register as a coach."
            fromTitle="Coach Registration Form"
            nextFormLabel="Athlete Registration Form"
            nextFormLink="/register"
            fee={"500"}
            backendPaymentUrl={"/register-coach"}
            backendPaymentVerifyUrl={"/verify-payment-coach"}
        />
    );
}

export default CoachForm;
