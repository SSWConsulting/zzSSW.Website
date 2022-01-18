import React from 'react';
import BuildPlatform from '../../builtPlatform';
import Clients from '../../clients';
import { container, text, link } from './index.module.css';

const Footer = () => (
    <>
        <section className={container}>
            <div className="main-container">
                <Clients />
                <p className={text}>
                    Our software developers & consultants have delivered the
                    best in the business to more than 1,400 clients in 15
                    countries.{' '}
                    <a
                        className={link}
                        // TODO: Update link after implement this page
                        href="https://www.ssw.com.au/ssw/company/AboutUs.aspx"
                        target="_blank"
                    >
                        Read more
                    </a>
                </p>
            </div>
        </section>
        <BuildPlatform backgroundColor="#f5f5f5" />
    </>
);

export default Footer;
