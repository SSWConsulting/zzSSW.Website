import React from 'react';
import { video } from './index.module.css';

const VideoBackground = ({ src }) => (
    <video className={video} playsInline autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support HTML5 video.
    </video>
);

export default VideoBackground;
