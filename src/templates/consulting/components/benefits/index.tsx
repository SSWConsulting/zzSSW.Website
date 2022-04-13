import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import InnerHTML from '../../../../components/innerHTML';
import * as commonStyles from '../../index.module.css';
import * as styles from './index.module.css';

const Benefits = ({ benefits, markdownContent }) => {
    const [videoClicked, setVideoClicked] = useState(false);
    console.log('LOGGING');
    console.log(benefits);
    const { title, video, descriptions, benefitList, rule } = benefits;
    const videoId = video?.url?.split('v=')[1] ?? '';

    return (
        <section className={styles.container}>
            <a id="more" />
            <article className="main-container">
                <MDXRenderer>
                    {markdownContent}
                </MDXRenderer>

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
                                    {/* what do I put here */}
                                    {/* <a className={styles.link} href={linkURL}>
                                        {linkName}
                                    </a> */}
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
