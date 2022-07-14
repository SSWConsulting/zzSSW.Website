import SSW_LOGO from "../../assets/images/ssw-logo.svg";
import React, { useState } from "react";
const ImageWithFallbacks = ({ url }) => {
  const imageFallbacks = [".png", ".jpg", SSW_LOGO];
  let fallBackIndex = 0;
  const [imageUrl, setImageUrl] = useState(
    url + `${imageFallbacks[fallBackIndex]}`
  );

  //   console.log("imageUrl", imageUrl);
  //Image Fallback strategy

  //   console.log("IMAGE_FALLBACKS", imageFallbacks);
  //   console.log("imageFallbacks.length-1", imageFallbacks.length - 1);

  const onImageNotFound = () => {
    fallBackIndex = fallBackIndex + 1;
    console.log("fallBackIndex", fallBackIndex);
    if (fallBackIndex === imageFallbacks.length - 1) {
      setImageUrl(SSW_LOGO);
    } else {
      console.log("indise else");
      setImageUrl(url + `${imageFallbacks[fallBackIndex]}`);
    }

    console.log("Error - img 404");
  };

  return (
    <>
      <img src={imageUrl} onError={() => onImageNotFound()}></img>
    </>
  );
};
export default ImageWithFallbacks;
