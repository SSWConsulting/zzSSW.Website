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
    faWeixin,
} from '@fortawesome/free-brands-svg-icons';

import SSWLogo from '../../../assets/images/ssw-logo.svg';
import * as styles from './index.module.css';

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoAndName}>
                <a href="/ssw/">
                    <img
                        src={SSWLogo}
                        alt="SSW - Enterprise Software Development"
                    />
                </a>
                <div className={styles.name}>
                    Enterprise Software Development
                </div>
            </div>
            <div className={styles.contacts}>
                <FontAwesomeIcon className={styles.phoneIcon} icon={faPhone} />
                <a className={styles.phoneNumber} href="tel:+61299533000">
                    +61 2 9953 3000
                </a>
                <a
                    className={classNames('whole-center', styles.youtube)}
                    title="SSW on YouTube"
                    href="https://www.youtube.com/user/sswtechtalks/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faYoutube} color="white" />
                </a>
                <a
                    className={classNames('whole-center', styles.linkedin)}
                    title="SSW on LinkedIn"
                    href="https://www.linkedin.com/company/ssw/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                </a>
                <a
                    className={classNames('whole-center', styles.facebook)}
                    title="SSW on Facebook"
                    href="https://www.facebook.com/SSW.page"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebookF} color="white" />
                </a>
                <a
                    className={classNames('whole-center', styles.instagram)}
                    title="SSW on Instagram"
                    href="https://www.instagram.com/ssw_tv"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                </a>
                <a
                    className={classNames('whole-center', styles.twitter)}
                    title="SSW on Twitter"
                    href="https://twitter.com/SSW_TV"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                </a>
                <a
                    className={classNames('whole-center', styles.wechat)}
                    title="SSW on WeChat"
                    href="https://mp.weixin.qq.com/s/jL4zEmzWM5VSTRu9DUW6-Q"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faWeixin} color="white" />
                    <span className={styles.qrCode}>
                        <img
                            src="http://www.ssw.com.au/ssw/Images/QRcode.jpg"
                            alt="SSW QR Code"
                            title="SSW WeChat QR Code"
                            width="100"
                            height="100"
                        />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default TopBar;
