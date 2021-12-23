import React from 'react';

import MVC_BACKGROUND from '../../../../assets/videos/MVC_background.mp4';
import { backgroundVideo } from '../../index.module.css';
import {
    container,
    title,
    desc,
    contact,
    booking,
    arrowScroll,
    bounce,
    fa,
    faChevronDown,
} from './index.module.css';

const Booking = () => (
    <>
        <video className={backgroundVideo} playsInline autoPlay muted loop>
            <source src={MVC_BACKGROUND} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className={container}>
            <div className="main-container">
                <h1 className={title}>
                    Want to build your web application in{' '}
                    <span className="red">React</span>?
                </h1>

                <h2 className={desc}>
                    Easy to learn, easy to use and easy to be awesome
                </h2>

                {/* TODO: Add button animation */}
                <button type="button" className={booking}>
                    <div className="anim"></div>
                    Book a FREE Initial Meeting
                </button>

                <h2 className={contact}>or call us on +61 2 9953 3000</h2>

                {/* TODO: Enhance arrow down animation */}
                <div className={`${arrowScroll} ${bounce}`}>
                    <a className={`${fa} ${faChevronDown}`} href="#more"></a>
                </div>
            </div>
        </div>
    </>
);

export default Booking;
