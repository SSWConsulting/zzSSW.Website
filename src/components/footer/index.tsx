import React from 'react';
import * as styles from './index.module.css';

const Footer = () => {
    return (
        <>
            {/* TODO: Do we need this? */}
            {/* <div
                className="py-2 text-center bg-grey-translucent text-sm"
                style={{ backgroundColor: 'white' }}
            >
                <section className="main-container">
                    We{' '}
                    <FontAwesomeIcon icon={faHeart} className="text-ssw-red" />{' '}
                    open source. Powered by{' '}
                    <a
                        className="action-button-label footer-greybar-link"
                        href="https://github.com/SSWConsulting/SSW.Rules"
                    >
                        GitHub <FontAwesomeIcon icon={faGithub} />
                    </a>
                </section>
            </div> */}
            <footer className={styles.container}>
                <div className="main-container">
                    <div className={styles.infos}>
                        <div>
                            © Copyright SSW 1990-{new Date().getFullYear()}. All
                            Rights Reserved.
                        </div>
                        <div>
                            <a
                                className={styles.link}
                                href="https://github.com/SSWConsulting/SSW.Rules/issues"
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
                    <hr />
                    <div className={styles.deployment}>
                        Our website is under{' '}
                        <a
                            className={styles.link}
                            href="https://www.ssw.com.au/rules/rules-to-better-websites-deployment"
                        >
                            CONSTANT CONTINUOUS DEPLOYMENT
                        </a>
                        . The latest deployment is listed{' '}
                        <a
                            className={styles.link}
                            href="https://github.com/SSWConsulting/SSW.Website/actions/workflows/production-deploy-gatsby-site.yml"
                        >
                            HERE
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

//TODO: Fix getLastDeploymentTime
const getLastDeployTime = () => {
    // const lastDeployDuration = moment.duration(Date.now() - buildTimestamp);
    // let delta = Math.abs(lastDeployDuration) / 1000;

    // const days = Math.floor(delta / 86400);
    // delta -= days * 86400;

    // var hours = Math.floor(delta / 3600) % 24;
    // delta -= hours * 3600;

    // var minutes = Math.floor(delta / 60) % 60;
    // delta -= minutes * 60;

    // return days !== 0
    //   ? `${days} day(s)`
    //   : ' ' + hours !== 0
    //   ? `${hours} hour(s)`
    //   : ' ' + minutes > 1
    //   ? `${minutes} minutes`
    //   : '1 minute';
    return `1 minute`;
};

Footer.propTypes = {};

export default Footer;
