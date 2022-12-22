import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

import SSWLogo from '../../../assets/images/SSW-logo-Christmas.svg';
import * as styles from './index.module.css';

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoAndName}>
                <a href="/ssw/">
                    <img
                        src={SSWLogo}
                        className={styles.logo}
                        alt="SSW - Enterprise Software Development"
                    />
                </a>
                <div className={styles.name}>
                    Enterprise Software Development
                </div>
            </div>
            <div className={styles.contacts}>
                <a className={classNames('center', styles.phoneNumber)} href="tel:+61299533000">
                    <FontAwesomeIcon className={styles.phoneIcon} icon={faPhone} color="white" />
                    CALL US
                </a>
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
        </div>
    );
};

export default TopBar;
