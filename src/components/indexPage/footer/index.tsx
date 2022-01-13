import React from 'react';
import Clients from '../../clients';
import { container, text, link } from './index.module.css';

const Footer = () => (
    <section className={container}>
        <Clients />
        <p className={text}>
            Our software developers & consultants have delivered the best in the
            business to more than 1,400 clients in 15 countries.{' '}
            <a
                className={link}
                // TODO: Update link after implement this page
                href="https://www.ssw.com.au/ssw/company/AboutUs.aspx"
                target="_blank"
            >
                Read more
            </a>
        </p>
    </section>
);

export default Footer;
