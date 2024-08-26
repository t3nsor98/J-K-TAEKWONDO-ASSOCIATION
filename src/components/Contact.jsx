import React, { useState, useEffect } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.getDay(); // Sunday - Saturday : 0 - 6
      const hour = now.getHours();
      const isWeekday = day >= 1 && day <= 6; // Monday - Saturday
      const isWorkingHour = hour >= 10 && hour < 18; // 10 AM - 6 PM

      setIsOpen(isWeekday && isWorkingHour);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Us
      </h2>

      <div className="md:flex container gap-5">
        <div className="w-full">
          {/* Phone Number and Call Button */}

          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black/10 rounded-md items-center transition-transform transform grid md:grid-cols-2">
            <div>
              <div className="mb-4 md:mb-0 md:mr-6 text-lg text-center">
                <p>Phone (1): +91 895 064 4843</p>
              </div>
              <a
                href="tel:+918950644843"
                className="block text-center font-bold mx-auto text-red-600 px-4 mb-3 md:px-6 rounded-md transition duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </div>

            <div>
              <div className="mb-4 md:mb-0 md:mr-6 text-lg text-center">
                <p>Phone (2): +91 600 596 7575</p>
              </div>
              <a
                href="tel:+916005967575"
                className="block text-center font-bold mx-auto text-red-600 px-4 mb-3 md:px-6 rounded-md transition duration-300"
              >
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </div>
          </div>

          {/* Email Address and Send Email Button */}
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black/10 rounded-md items-center transition-transform transform grid md:grid-cols-2">
            <div>
              <div className="mb-4 md:mb-0 md:mr-6 text-lg text-center">
                <p>Email: officejkta@gmail.com</p>
              </div>
              <a
                href="mailto:officejkta@gmail.com"
                className="block text-center font-bold mx-auto text-red-600 px-4 mb-3 md:px-6 rounded-md transition duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </a>
            </div>

            <div>
              <div className="mb-4 md:mb-0 md:mr-6 text-lg text-center">
                <p>Email: jktkdsecretary@gmail.com</p>
              </div>
              <a
                href="mailto:jktkdsecretary@gmail.com"
                className="block text-center font-bold mx-auto text-red-600 px-4 mb-3 md:px-6 rounded-md transition duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Send Email
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="p-4 md:p-6 bg-black/10 rounded-md transition-transform transform text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-600">
              Our Address
            </h3>
            <p className="text-sm md:text-base">
              #6 Mohalla Peer Baba, Sector-6 <br />
              Channi Himmat, Jammu <br />J & K Pin-180015
            </p>
          </div>

          {/* Our Timings */}
          <div className="mt-6 p-4 md:p-6 bg-black/10 rounded-md transition-transform transform text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-600">
              Our Timings
            </h3>
            <p className="text-sm md:text-base mb-4">
              Monday to Saturday: 10 AM to 6 PM
            </p>
            <div className="flex items-center justify-center">
              <div
                className={`h-4 w-4 rounded-full animate-pulse ${
                  isOpen ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="ml-2 text-sm md:text-base">
                {isOpen ? "We are Open" : "We are Closed"}
              </span>
            </div>
          </div>
        </div>

        {/* Google Maps Location */}
        <div className="bg-black/10 rounded-md transition-transform transform w-full md:mt-0 mt-2">
          <iframe
            width="100%"
            height="100%"
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d296.80345058471477!2d74.90159476601933!3d32.68743569932674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQxJzE0LjkiTiA3NMKwNTQnMDUuOSJF!5e0!3m2!1sen!2sin!4v1724692676548!5m2!1sen!2sin"
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
