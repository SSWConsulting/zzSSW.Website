import React from 'react';

import MVC_BACKGROUND from '../../../../assets/videos/MVC_background.mp4';
import * as commonStyles from '../../index.module.css';
import * as styles from './index.module.css';

const Booking = ({ title, subTitle }) => (
    <>
        <video
            className={commonStyles.backgroundVideo}
            playsInline
            autoPlay
            muted
            loop
        >
            <source src={MVC_BACKGROUND} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        <div className={styles.container}>
            <div className="main-container">
                <h1 className={styles.title}>{title}</h1>

                <h2 className={styles.subTitle}>{subTitle}</h2>

                <button
                    type="button"
                    className={`${styles.booking} ${commonStyles.hoverable}`}
                >
                    Book a FREE Initial Meeting
                    <div className={`${commonStyles.anim}`} />
                </button>

                <h2 className={styles.contact}>
                    or call us on +61 2 9953 3000
                </h2>

                <div className={`${styles.arrowScroll} ${styles.bounce}`}>
                    <a
                        className={`${styles.fa} ${styles.faChevronDown}`}
                        href="#more"
                    ></a>
                </div>
            </div>
        </div>
    </>
);

export default Booking;
