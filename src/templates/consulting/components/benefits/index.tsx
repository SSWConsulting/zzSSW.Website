import React, { useState } from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import * as commonStyles from '../../index.module.css';
import * as styles from './index.module.css';

const Benefits = ({ title, video, descriptions, benefitList, rule }) => {
    const [videoClicked, setVideoClicked] = useState(false);

    const videoId = video?.url?.split('v=')[1] ?? '';

    return (
        <div className={styles.container}>
            <a id="more" />
            <div className="main-container">
                <h1
                    dangerouslySetInnerHTML={{
                        __html: title,
                    }}
                />
                <div className={styles.videoContainer}>
                    {videoClicked ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div onClick={() => setVideoClicked(true)}>
                            <GatsbyImage
                                className={commonStyles.videoImage}
                                image={getImage(video.image)}
                                alt="video cover"
                            />
                            <div className={commonStyles.play}></div>
                        </div>
                    )}
                </div>

                {descriptions?.map((desc) => (
                    <h5 className={styles.desc}>{desc}</h5>
                ))}

                <div className="flex-wrap">
                    {benefitList?.map(
                        ({ image, title, description }, index) => (
                            <div
                                className={`col-md-6 ${styles.benefit}`}
                                data-aos={
                                    index % 2 === 0 ? 'fade-left' : 'fade-right'
                                }
                            >
                                <GatsbyImage
                                    className="fl"
                                    image={getImage(image)}
                                    alt="benefit icon"
                                />
                                <div>
                                    <h4 className={styles.benefitTitle}>
                                        {title}
                                    </h4>
                                    <p className={styles.benefitDesc}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {rule && (
                    <h5>
                        Have a look at{' '}
                        <a className={styles.link} href={rule?.url}>
                            {rule?.name}
                        </a>
                        .
                    </h5>
                )}
            </div>
        </div>
    );
};

export default Benefits;
