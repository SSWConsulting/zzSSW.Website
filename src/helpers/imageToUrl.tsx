import React from "react";

const ImageToUrl = (imageKey, allImageUrls) => {
  const imageResult = allImageUrls.find((imageNode) =>
    imageNode.exactMatch.includes(imageKey)
  );

  if (imageResult) {
    console.log("imageResult.image", imageResult.image);
    return imageResult.image;
  }
  return null;
};
export default ImageToUrl;
