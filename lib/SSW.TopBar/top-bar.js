import React from 'react'
import SSWLogo from './images/SSWLogo.svg'
import { 
    logoTagLine,
    tagLine,
    topBar,
    salesLink
} from './top-bar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWeixin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const TopBar = () => {
    return(
        <div className='container-flex' id={topBar}>
            <div className='row justify-content-between align-items-center'>
                <div id={logoTagLine} className='col-sm-12 col-md-6'>
                    <a href="/ssw/" id="SSWLogo">
                        <img src={SSWLogo} alt="SSW - Enterprise Software Development"/>
                    </a>
                    <span id={tagLine}>Enterprise Software Development</span>
                </div>
                <div className='col-md-6 d-md-block d-none'>
                    <span style={{float:'right'}}>
                        <FontAwesomeIcon icon={faPhone}/>
                        <a  className={salesLink} href="tel:+61299533000"> +61 2 9953 3000</a>                    
                        <a
                            className="unstyled social-media-icon"
                            id="youtube-icon"
                            title="SSW on YouTube"
                            href="https://www.youtube.com/user/sswtechtalks/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                        <a
                            className="unstyled social-media-icon"
                            id="linkedin-icon"
                            title="SSW on LinkedIn"
                            href="https://www.linkedin.com/company/ssw/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a
                            className="unstyled social-media-icon"
                            id="twitter-icon"
                            title="SSW on Twitter"
                            href="https://twitter.com/SSW_TV"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a
                            className="unstyled social-media-icon"
                            id="instagram-icon"
                            title="SSW on Instagram"
                            href="https://www.instagram.com/ssw_tv"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            className="unstyled social-media-icon"
                            id="facebook-icon"
                            title="SSW on Facebook"
                            href="https://www.facebook.com/SSW.page"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a
                            className="unstyled social-media-icon"
                            id="wechat-icon"
                            title="SSW on WeChat"
                            href="https://mp.weixin.qq.com/s/jL4zEmzWM5VSTRu9DUW6-Q"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faWeixin} size="lg" />
                            <span id="qr-code">
                            <img
                                src="http://www.ssw.com.au/ssw/Images/QRcode.jpg"
                                alt="SSW QR Code"
                                width="100"
                                title="SSW WeChat QR Code"
                                height="100"
                            />
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TopBar