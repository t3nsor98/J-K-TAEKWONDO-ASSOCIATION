import abtimg1 from "../assets/abtimg1.webp";
import abtimg2 from "../assets/abtimg2.webp";
import abtimg3 from "../assets/abtimg3.webp";
import abtimg4 from "../assets/abtimg4.webp";
import abtimg5 from "../assets/abtimg5.webp";
import abtimg6 from "../assets/abtimg6.webp";
import abtimg7 from "../assets/abtimg7.webp";
import Marquee from "react-fast-marquee";

const Gallery2 = () => {
    // List of image URLs from local assets
    const images = [
        abtimg1,
        abtimg2,
        abtimg3,
        abtimg4,
        abtimg5,
        abtimg6,
        abtimg7,
    ];

    return (
        <div className="relative flex justify-center items-center w-full">
            <Marquee gradient={false}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`About JKTA ${index + 1}`}
                        className="h-44 md:h-96 m-1 md:m-4"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Gallery2;
