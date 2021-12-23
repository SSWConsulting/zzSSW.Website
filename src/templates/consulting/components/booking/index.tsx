import React from 'react';
import { container, title, desc, contact, booking } from './index.module.css';

const Booking = () => (
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

            <div className="arrow-scroll bounce">
                <a className="fa fa-chevron-down" href="#more"></a>
            </div>
        </div>
    </div>
);

export default Booking;
