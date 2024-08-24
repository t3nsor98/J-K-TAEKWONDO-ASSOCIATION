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
                image: "https://randomuser.me/api/portraits/men/1.jpg",
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
                image: "https://randomuser.me/api/portraits/men/2.jpg",
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
                image: "https://randomuser.me/api/portraits/men/3.jpg",
            },
            {
                name: "Dr. Kanav Mahajan",
                designation: "Vice President (J)",
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/4.jpg",
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
                image: "https://randomuser.me/api/portraits/men/5.jpg",
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
                image: "https://randomuser.me/api/portraits/men/6.jpg",
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
                image: "https://randomuser.me/api/portraits/men/7.jpg",
            },
            {
                name: "Anuj Sharma",
                designation: "Joint Secretary (J)",
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/8.jpg",
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
                image: "https://randomuser.me/api/portraits/men/9.jpg",
            },
            {
                name: "Burhan ud Din Khan",
                designation: "Executive Member",
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/10.jpg",
            },
            {
                name: "Taranpreet Kour",
                designation: "Executive Member",
                gender: "female",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
            },
            {
                name: "Fasli Ali",
                designation: "Executive Member",
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/11.jpg",
            },
            {
                name: "Manisha Sharma",
                designation: "Executive Member",
                gender: "female",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
            },
            {
                name: "Roohi Gupta",
                designation: "Executive Member",
                gender: "female",
                image: "https://randomuser.me/api/portraits/women/3.jpg",
            },
            {
                name: "Bashir Ahmed Shiekh",
                designation: "Executive Member",
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/12.jpg",
            },
        ],
    },
];

const TreeNode = ({ name, designation, image, gender, pos }) => (
    <div className="flex flex-col text-center border border-gray-100 py-4 bg-white h-full rounded-md drop-shadow hover:shadow-md">
        <div
            className="flex flex-col gap-4 items-center text-center"
            // style={{ borderColor: colors[pos] }}
        >
            <img
                src={gender === "male" ? placeholderMale : placeholderFemale}
                // src={image}
                alt={name}
                className="w-32 rounded-full border-black border"
            />
            <div className="flex flex-col text-center">
                <p className="text-lg md:text-xl">{name}</p>
                <p className="text-xs md:text-sm text-red-600">{designation}</p>
            </div>
        </div>
    </div>
);

const TreeBranch = ({ children, color }) => (
    <div
        className="flex flex-col w-fit m-auto rounded-lg px-3 py-6 bg-gray-50 border-t-2 border-b-2"
        style={{ borderColor: color }}
    >
        <div className="flex flex-wrap justify-center gap-8 w-full">
            {children}
        </div>
    </div>
);

const Tree = () => (
    <div className="tree flex flex-col max-w-5xl m-auto overflow-x-auto p-5">
        {data.map((level, index) => (
            <>
                {/* <h2 className="text-2xl font-bold mt-6">{level.title}</h2> */}
                <span
                    className={`${!index && "hidden"} w-0.5 h-8 m-auto`}
                    style={{ backgroundColor: colors[index] }}
                ></span>
                <TreeBranch key={index} color={colors[index]}>
                    {level.data.map((person, idx) => (
                        <div key={idx} className="w-52">
                            <TreeNode {...person} pos={index} />
                        </div>
                    ))}
                </TreeBranch>
            </>
        ))}
    </div>
);

export default Tree;
