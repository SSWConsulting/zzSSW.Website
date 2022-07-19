const ImageToUrl = (imageKey, allImageUrls) => {
  const imageResult = allImageUrls.find((imageNode) =>
    imageNode.exactMatch.includes(imageKey)
  );

  if (imageResult) {
    return imageResult.image;
  }
  return null;
};
export default ImageToUrl;
