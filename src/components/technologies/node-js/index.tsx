import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { skill } from './index.module.css';

const NodeJsTech = () => {
    return (
        <div className={'col-md-6'}>
            <article className={skill} data-aos="flip-left">
                <figure>
                    <StaticImage
                        src="../../../assets/images/consulting/js-logo.png"
                        alt="Node JS"
                    />
                </figure>
                <p>
                    Powered by JavaScript, Node.js works as a cross-platform run-time environment. It has an event-driven architecture capable of asynchronous I/O which helps developers build effective real-time web applications. As one of the biggest open-source platforms, Node.js is light and powerful.
                </p>
            </article>
        </div>
    );
};

export default NodeJsTech;
