import placeholderMale from "../assets/Male.jpeg";
import placeholderFemale from "../assets/Female.jpeg";

const data = [
    [
        {
            name: "Rajesh Pangotra",
            designation: "President",
            gender: "male",
        },
    ],
    [
        {
            name: "Nissar Hussain",
            designation: "Sr Vice President",
            gender: "male",
        },
    ],
    [
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
    [
        {
            name: "Ramesh Chander Sharma",
            designation: "General Secretary",
            gender: "male",
        },
    ],
    [
        {
            name: "Amit Gupta",
            designation: "Treasurer",
            gender: "male",
        },
    ],
    [
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
    [
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
];

const TreeNode = ({ name, designation, gender }) => (
    <div className="flex flex-col items-center text-center py-2">
        <div className="w-full h-0.5 bg-gray-300 rounded-full"></div>
        <div className="w-0.5 h-5 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col items-center text-center px-5">
            <img
                src={gender === "male" ? placeholderMale : placeholderFemale}
                alt={name}
                className="w-16 h-16 rounded-full border-2 border-gray-300"
            />
            <p className="mt-2 text-sm font-medium">{name}</p>
            <p className="text-xs text-gray-500">{designation}</p>
        </div>
    </div>
);

const TreeBranch = ({ children }) => (
    <div className="flex flex-col items-center">
        <div className="flex justify-between">{children}</div>
    </div>
);

const Tree = () => (
    <div className="tree flex flex-col items-center container m-auto overflow-x-auto p-5">
        {data.map((level, index) => (
            <TreeBranch key={index}>
                {level.map((person, idx) => (
                    <div key={idx} className="relative">
                        <TreeNode {...person} />
                    </div>
                ))}
            </TreeBranch>
        ))}
    </div>
);

export default Tree;
