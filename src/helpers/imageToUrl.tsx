import React from "react";

const ImageToUrl = (imageKey, allImageUrls) => {
  const imageResult = allImageUrls.find((imageNode) =>
    imageNode.exactMatch.includes(imageKey)
  );

  if (imageResult) {
    return imageResult.imageUrl;
  }
  return null;
};
export default ImageToUrl;
