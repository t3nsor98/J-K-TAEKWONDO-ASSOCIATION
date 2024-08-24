import placeholderMale from "../assets/Male.jpeg";
import placeholderFemale from "../assets/Female.jpeg";

const colors = [
    "#DC143C", // Crimson Red
    "#36454F", // Charcoal Gray
    "#800020", // Burgundy
    "#708090", // Slate Gray
    "#800000", // Maroon
    "#B2BEB5", // Ash Gray
    "#D62A3F", // Deep Scarlet
];

const data = [
    {
        title: "President",
        data: [
            {
                name: "Rajesh Pangotra",
                designation: "President",
                gender: "male",
            },
        ],
    },
    {
        title: "Sr Vice Presidents",
        data: [
            {
                name: "Nissar Hussain",
                designation: "Sr Vice President",
                gender: "male",
            },
        ],
    },
    {
        title: "Vice President",
        data: [
            {
                name: "Atta Mohd Khan",
                designation: "Vice President (K)",
                gender: "male",
            },
            {
                name: "Dr. Kanav Mahajan",
                designation: "Vice President (J)",
                gender: "male",
            },
        ],
    },
    {
        title: "General Secretary",
        data: [
            {
                name: "Ramesh Chander Sharma",
                designation: "General Secretary",
                gender: "male",
            },
        ],
    },
    {
        title: "Treasurer",
        data: [
            {
                name: "Amit Gupta",
                designation: "Treasurer",
                gender: "male",
            },
        ],
    },
    {
        title: "Joint Secretary",
        data: [
            {
                name: "Junaid Mayer",
                designation: "Joint Secretary (K)",
                gender: "male",
            },
            {
                name: "Anuj Sharma",
                designation: "Joint Secretary (J)",
                gender: "male",
            },
        ],
    },
    {
        title: "Members",
        data: [
            {
                name: "Amit Kumar Badculia",
                designation: "Executive Member",
                gender: "male",
            },
            {
                name: "Burhan ud Din Khan",
                designation: "Executive Member",
                gender: "male",
            },
            {
                name: "Taranpreet Kour",
                designation: "Executive Member",
                gender: "female",
            },
            {
                name: "Fasli Ali",
                designation: "Executive Member",
                gender: "male",
            },
            {
                name: "Manisha Sharma",
                designation: "Executive Member",
                gender: "female",
            },
            {
                name: "Roohi Gupta",
                designation: "Executive Member",
                gender: "female",
            },
            {
                name: "Bashir Ahmed Shiekh",
                designation: "Executive Member",
                gender: "male",
            },
        ],
    },
];

const TreeNode = ({ name, designation, gender, pos }) => (
    <div className="flex flex-col text-center py-2">
        <div
            className="flex gap-4 items-center text-center"
            // style={{ borderColor: colors[pos] }}
        >
            <img
                src={gender === "male" ? placeholderMale : placeholderFemale}
                alt={name}
                className="w-32 border-2 border-gray-300"
            />
            <div className="flex flex-col text-left">
                <p className="text-xl md:text-2xl">{name}</p>
                <p className="text-sm md:text-base text-red-600">
                    {designation}
                </p>
                <div className="flex gap-2 mt-2">
                    <a
                        href="#"
                        className="fab fa-facebook"
                    ></a>
                    <a
                        href="#"
                        className="fab fa-twitter"
                    ></a>
                </div>
            </div>
        </div>
    </div>
);

const TreeBranch = ({ children }) => (
    <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-3 w-full">{children}</div>
    </div>
);

const Tree = () => (
    <div className="tree flex flex-col max-w-5xl m-auto overflow-x-auto p-5 gap-1.5">
        {data.map((level, index) => (
            <>
                <h2 className="text-2xl font-bold mt-6">{level.title}</h2>
                <hr className="border border-black" />
                <TreeBranch key={index}>
                    {level.data.map((person, idx) => (
                        <div key={idx} className="md:w-[45%]">
                            <TreeNode {...person} pos={index} />
                        </div>
                    ))}
                </TreeBranch>
            </>
        ))}
    </div>
);

export default Tree;
