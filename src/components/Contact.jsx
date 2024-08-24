import React from "react";

const Contact = () => {
    return (
      <div className="container mx-auto p-6 md:p-8 lg:p-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Us
        </h2>

        <div className="md:flex container gap-5">
          <div className="w-full">
            {/* Phone Number and Call Button */}
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black/10 rounded-md flex flex-col md:flex-row items-center transition-transform transform">
              <div className="mb-4 md:mb-0 md:mr-6 text-lg">
                <p>Phone: +91 8950644843</p>
              </div>
              <a
                href="tel:+918950644843"
                className="bg-[#D5C67A] hover:bg-[#F1A208] text-[#005377] px-4 py-2 md:px-6 md:py-3 rounded-md transition duration-300"
              >
                Call
              </a>
            </div>

            {/* Email Address and Send Email Button */}
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black/10 rounded-md flex flex-col md:flex-row items-center transition-transform transform">
              <div className="mb-4 md:mb-0 md:mr-6 text-lg">
                <p>Email: officejkta@gmail.com</p>
              </div>
              <a
                href="mailto:officejkta@gmail.com"
                className="bg-[#D5C67A] hover:bg-[#F1A208] text-[#005377] px-4 py-2 md:px-6 md:py-3 rounded-md transition duration-300"
              >
                Send Email
              </a>
            </div>

            {/* Address */}
            <div className="p-4 md:p-6 bg-black/10 rounded-md transition-transform transform">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1A208]">
                Our Address
              </h3>
              <p className="text-sm md:text-base">
                #6 Mohalla Peer Baba, Sector-6 <br />
                Channi Himmat, Jammu <br />
                J & K Pin-180015
              </p>
            </div>
          </div>

          {/* Google Maps Location */}
          <div className="bg-black/10 rounded-md transition-transform transform w-full md:mt-0 mt-2">
            <iframe
              width="100%"
              height="100%"
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6635016739915!2d-122.41941868468172!3d37.77492927975983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f1c3bb773%3A0x8481aab5e78719e4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1635937026634!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    );
};

export default Contact;
