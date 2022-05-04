import React from "react";
import { videoContainer, video } from "./index.module.css";

const VideoBackground = ({ src }) => {
  return (
    <video className={video} playsInline autoPlay muted loop>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoBackground;
