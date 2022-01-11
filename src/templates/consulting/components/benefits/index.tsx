import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import InnerHTML from '../../../../components/innerHTML';
import * as commonStyles from '../../index.module.css';
import * as styles from './index.module.css';

const Benefits = ({ title, video, descriptions, benefitList, rule }) => {
    const [videoClicked, setVideoClicked] = useState(false);

    const videoId = video?.url?.split('v=')[1] ?? '';

    return (
        <section className={styles.container}>
            <a id="more" />
            <article className="main-container">
                <InnerHTML tagName="h1" __html={title} />
                <div className={styles.videoContainer}>
                    {videoClicked ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <figure onClick={() => setVideoClicked(true)}>
                            <GatsbyImage
                                className={commonStyles.videoImage}
                                image={getImage(video.image)}
                                alt="video cover"
                            />
                            <div className={commonStyles.play}></div>
                        </figure>
                    )}
                </div>

                {descriptions?.map((desc, index) => (
                    <p className={styles.desc} key={index}>
                        {desc}
                    </p>
                ))}

                <div className="flex-wrap">
                    {benefitList?.map(
                        ({ image, title, description }, index) => (
                            <article
                                className={`col-md-6 ${styles.benefit}`}
                                key={index}
                                data-aos={
                                    index % 2 === 0 ? 'fade-left' : 'fade-right'
                                }
                            >
                                <figure>
                                    <GatsbyImage
                                        className="fl"
                                        image={getImage(image)}
                                        alt="benefit icon"
                                    />
                                </figure>
                                <h4 className={styles.benefitTitle}>{title}</h4>
                                <article className={styles.benefitDesc}>
                                    {description}
                                </article>
                            </article>
                        )
                    )}
                </div>

                {rule && (
                    <p>
                        Have a look at{' '}
                        <a className={styles.link} href={rule?.url}>
                            {rule?.name}
                        </a>
                        .
                    </p>
                )}
            </article>
        </section>
    );
};

export default Benefits;
