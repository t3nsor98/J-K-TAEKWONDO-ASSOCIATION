import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

      {/* Phone Number and Call Button */}
      <div className="mb-6 p-4 bg-gray-800 rounded-md flex items-center">
        <div className="mr-4 text-lg">
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <a
          href="tel:+11234567890"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition duration-300"
        >
          Call
        </a>
      </div>

      {/* Email Address and Send Email Button */}
      <div className="mb-6 p-4 bg-gray-800 rounded-md flex items-center">
        <div className="mr-4 text-lg">
          <p>Email: contact@organization.com</p>
        </div>
        <a
          href="mailto:contact@organization.com"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition duration-300"
        >
          Send Email
        </a>
      </div>

      {/* Address */}
      <div className="mb-6 p-4 bg-gray-800 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Our Address</h3>
        <p>
          123 Main Street, <br />
          City, State, ZIP Code <br />
          Country
        </p>
      </div>

      {/* Google Maps Location */}
      <div className="p-4 bg-gray-800 rounded-md">
        <h3 className="text-xl font-semibold mb-2">Find Us Here</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6635016739915!2d-122.41941868468172!3d37.77492927975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1c3bb773%3A0x8481aab5e78719e4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1635937026634!5m2!1sen!2sin"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
