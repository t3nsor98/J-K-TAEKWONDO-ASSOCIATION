import placeholderImg from "../assets/Male.jpeg";

const membersData = [
  [{ name: "Rajesh Pangotra", designation: "President", img: placeholderImg }],
  [
    {
      name: "Nissar Hussain",
      designation: "Sr Vice President",
      img: placeholderImg,
    },
  ],
  [
    {
      name: "Atta Mohd Khan",
      designation: "Vice President (K)",
      img: placeholderImg,
    },
    {
      name: "Dr. Kanav Mahajan",
      designation: "Vice President (J)",
      img: placeholderImg,
    },
  ],
  [
    {
      name: "Ramesh Chander Sharma",
      designation: "General Secretary",
      img: placeholderImg,
    },
  ],
  [{ name: "Amit Gupta", designation: "Treasurer", img: placeholderImg }],
  [
    {
      name: "Junaid Mayer",
      designation: "Joint Secretary (K)",
      img: placeholderImg,
    },
    {
      name: "Anuj Sharma",
      designation: "Joint Secretary (J)",
      img: placeholderImg,
    },
  ],
  [
    {
      name: "Amit Kumar Badculia",
      designation: "Executive Member",
      img: placeholderImg,
    },
    {
      name: "Burhan ud Din Khan",
      designation: "Executive Member",
      img: placeholderImg,
    },
    {
      name: "Taranpreet Kour",
      designation: "Executive Member",
      img: placeholderImg,
    },
    { name: "Fasli Ali", designation: "Executive Member", img: placeholderImg },
    {
      name: "Manisha Sharma",
      designation: "Executive Member",
      img: placeholderImg,
    },
    {
      name: "Roohi Gupta",
      designation: "Executive Member",
      img: placeholderImg,
    },
    {
      name: "Bashir Ahmed Shiekh",
      designation: "Executive Member",
      img: placeholderImg,
    },
  ],
];

const Members = () => {
  return (
    <section className="relative container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Members</h2>
      <div className="relative space-y-16">
        {membersData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`relative flex ${
              row.length > 1 ? "flex-wrap justify-center" : "justify-center"
            } ${rowIndex === membersData.length - 1 ? "overflow-x-auto" : ""}`}
          >
            {row.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-4 text-center mx-2 my-2"
                style={{ minWidth: "150px" }} // Ensure a minimum width for proper alignment
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
                {rowIndex < membersData.length - 1 && (
                  <div className="absolute -bottom-4 w-full flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-600"></div>
                  </div>
                )}
              </div>
            ))}
            {rowIndex < membersData.length - 1 && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                <div className="w-0.5 h-8 bg-gray-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
