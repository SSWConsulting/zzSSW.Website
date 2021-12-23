import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { videoImage, play } from '../../index.module.css';
import {
    container,
    section,
    videoContainer,
    title,
    description,
} from './index.module.css';

const About = () => {
    const [videoClicked, setVideoClicked] = useState(false);

    return (
        <div className={container}>
            <div className="main-container">
                <h1 className={title}>
                    Why should you choose <span className="red">SSW</span>?
                </h1>
                <div className="flex-wrap">
                    <div className={`col-md-6 ${section}`}>
                        <div className={videoContainer}>
                            {videoClicked ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/Jveq6VFjWTA?autoplay=1"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div onClick={() => setVideoClicked(true)}>
                                    <StaticImage
                                        className={videoImage}
                                        src="../../../../assets/images/consulting/why-should-you-choose-ssw.jpeg"
                                        alt="why should you choose ssw"
                                    />
                                    <div className={play}></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`col-md-6 ${section}`}>
                        <p className={description} data-aos="fade-up">
                            SSW's Consulting Services have delivered best of
                            breed Microsoft solutions for more than 1,000
                            clients in 15 countries. With 40+ consultants in
                            five countries, SSW's developers are some of the
                            best in the business. We have many Microsoft
                            Certifications, three MVPs, and a Microsoft Regional
                            Director.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
