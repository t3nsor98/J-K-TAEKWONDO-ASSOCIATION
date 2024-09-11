import React, { useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../cropImage"; // The function to get the cropped image

const ImageCrop = ({ imageSrc, onComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    onComplete(croppedImage);
  };

  return (
    <div>
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1} // For square crop
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    </div>
  );
};

export default ImageCrop;
