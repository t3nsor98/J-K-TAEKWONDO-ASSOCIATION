import { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProfilePictureUpload({ setAthleteFormData }) {
    const [image, setImage] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const cropperRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setModalIsOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current?.cropper;
            if (cropper) {
                const croppedCanvas = cropper.getCroppedCanvas({
                    width: 300,
                    height: 300,
                    imageSmoothingQuality: "high",
                });
                const croppedImageDataUrl =
                    croppedCanvas.toDataURL("image/png");
                setCroppedImage(croppedImageDataUrl);
                setAthleteFormData((prev) => ({
                    ...prev,
                    photo: croppedImageDataUrl,
                }));
                setModalIsOpen(false);
            } else {
                console.error("Cropper instance is not available");
            }
        }
    };

    return (
        <div className="mx-auto flex justify-between items-center">
            <div>
                <h2 className="font-bold mb-4">Upload Profile Picture</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm w-full"
                    required
                />
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Crop Image"
                className="fixed inset-0 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-xl font-bold mb-4">Crop Image</h2>
                    <Cropper
                        src={image}
                        style={{ height: 400, width: "100%" }}
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides={false}
                        ref={cropperRef}
                        
                    />
                    <div className="mt-4 flex justify-between">
                        <button
                            onClick={handleCrop}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
                        >
                            Crop
                        </button>
                        <button
                            onClick={() => setModalIsOpen(false)}
                            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>

            <div className="mt-4 text-center">
                <img
                    src={croppedImage || "https://www.anelto.com/wp-content/uploads/2021/08/placeholder-image.png"}
                    alt="Cropped"
                    className="max-w-[150px] m-auto h-auto mb-4 rounded-full overflow-hidden border-2 border-red-500 aspect-square object-cover"
                />

                <p className="text-sm text-gray-500">
                    This image will appear on your ID card.
                </p>
            </div>
        </div>
    );
}

export default ProfilePictureUpload;
