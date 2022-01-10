import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import * as styles from './index.module.css';

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
            <div className={classNames('flex-between', styles.deployment)}>
                <div>
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
                <div>
                    <a
                        className={styles.link}
                        // TODO: Implementation
                        href="https://github.com/SSWConsulting/SSW.Website/issues/63"
                    >
                        SITEMAP
                    </a>
                    <span className={styles.divider}>|</span>
                    <a
                        className={classNames(styles.link)}
                        // TODO: Implementation
                        href="https://github.com/SSWConsulting/SSW.Website/issues/64"
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
