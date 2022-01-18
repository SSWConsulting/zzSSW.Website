import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { container, image, link } from './index.module.css';

const BuildPlatform = ({ backgroundColor = 'white' }) => (
    <section className={container} style={{ backgroundColor }}>
        <div className="main-container">
            <a
                className={classNames('center', link)}
                // TODO: Update link after implement this page
                href="https://www.ssw.com.au/ssw/Consulting/Azure.aspx"
                target="_blank"
            >
                <StaticImage
                    className={image}
                    src="../../assets/images/azure.jpeg"
                    alt="azure"
                    width={32}
                />{' '}
                BUILT ON THE MICROSOFT AZURE PLATFORM
            </a>
        </div>
    </section>
);

export default BuildPlatform;
