function DonationPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8">
          Support JK Taekwondo Association
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Your generous donation will help us promote and develop the art of Taekwondo, support athletes, and organize community programs.
        </p>
  
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">One-Time Donation</h2>
            <p className="text-gray-600 mb-4">
              Make a one-time contribution to support our initiatives.
            </p>
            <input
              type="number"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              placeholder="Enter amount"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Donate Now
            </button>
          </div>
  
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Donation</h2>
            <p className="text-gray-600 mb-4">
              Set up a recurring monthly donation to provide ongoing support.
            </p>
            <input
              type="number"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              placeholder="Enter monthly amount"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Donate Monthly
            </button>
          </div>
        </div>
  
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            We appreciate your support! For any queries, please contact us at{" "}
            <a href="mailto:info@jkta.in" className="text-blue-600 hover:underline">
              info@jkta.in
            </a>.
          </p>
          
        </div>
      </div>
    );
  }
  
  export default DonationPage;
  