import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import preval from 'preval.macro';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as styles from './index.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

dayjs.extend(relativeTime);

const buildTimestamp = preval`module.exports = new Date().getTime();`;

const Footer = () => (
    <footer className={styles.container}>
        <div className="main-container">

            <div className={styles.infos}>
                <div>
                    © Copyright SSW 1990-{new Date().getFullYear()}. All Rights
                    Reserved.
                </div>
                <div>
                    <a
                        className={styles.link}
                        href="https://github.com/SSWConsulting/SSW.Rules/issues/new/choose"
                        target="_blank"
                    >
                        FEEDBACK TO SSW
                    </a>
                    <span className={styles.divider}>|</span>
                    <a
                        className={styles.link}
                        href="https://www.ssw.com.au/ssw/Standards/Forms/ConsultingOrderTermsConditions.aspx"
                    >
                        TERMS AND CONDITIONS
                    </a>
                </div>
            </div>

            <div className={styles.footersocial}>

                <a
                    className={classNames('center', styles.youtube)}
                    title="SSW on YouTube"
                    href="https://www.youtube.com/user/sswtechtalks/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon size="2x" icon={faYoutube} color="white" />
                </a>
                <a
                    className={classNames('center', styles.linkedin)}
                    title="SSW on LinkedIn"
                    href="https://www.linkedin.com/company/ssw/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon  size="2x" icon={faLinkedinIn} color="white" />
                </a>
                <a
                    className={classNames('center', styles.facebook)}
                    title="SSW on Facebook"
                    href="https://www.facebook.com/SSW.page"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon  size="2x" icon={faFacebookF} color="white" />
                </a>
                <a
                    className={classNames('center', styles.instagram)}
                    title="SSW on Instagram"
                    href="https://www.instagram.com/ssw_tv"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon  size="2x" icon={faInstagram} color="white" />
                </a>
                <a
                    className={classNames('center', styles.twitter)}
                    title="SSW on Twitter"
                    href="https://twitter.com/SSW_TV"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon  size="2x" icon={faTwitter} color="white" />
                </a>
                <a
                    className={classNames('center', styles.tiktok)}
                    title="SSW on TikTok"
                    href="https://www.tiktok.com/@ssw_tv"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon  size="2x" icon={faTiktok} color="white" />
                </a>
            </div>

            <div className={classNames('flex-between', styles.deployment)}>
                                <div>
                                    Our website is under{' '}
                                    <a
                                        className={styles.link}
                                        href="https://www.ssw.com.au/rules/rules-to-better-websites-deployment"
                                    >
                                        CONSTANT CONTINUOUS DEPLOYMENT
                                    </a>
                                    . Last deployed {dayjs(buildTimestamp).fromNow()}{' '}
                                    {process.env.GITHUB_RUN_NUMBER && (
                                        <span>
                                            (Build #{' '}
                                            <a
                                                className={classNames(
                                                    styles.link,
                                                    styles.buildLink
                                                )}
                                                href={`https://github.com/SSWConsulting/SSW.Website/actions/runs/${process.env.GITHUB_RUN_ID}`}
                                                target="_blank"
                                            >
                                                {process.env.GITHUB_RUN_NUMBER}
                                            </a>
                                            )
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <a
                                        className={styles.link}
                                        // TODO: Implementation
                                        href="https://www.ssw.com.au/ssw/MenuMap.aspx"
                                    >
                                        SITEMAP
                                    </a>
                                    <span className={styles.divider}>|</span>
                                    <a
                                        className={classNames(styles.link)}
                                        // TODO: Implementation
                                        href="https://www.ssw.com.au/ssw/HealthCheck"
                                    >
                                        HEALTH CHECK{' '}
                                        <StaticImage
                                            className={styles.healthCheck}
                                            src="../../assets/images/health-check.png"
                                            alt="health check "
                                            layout="constrained"
                                        />
                                    </a>
                                </div>
            </div>

        </div>
    </footer>
);

export default Footer;
