import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import {
    container,
    title,
    videoContainer,
    video,
    play,
    benefit,
    link,
} from './index.module.css';

const Benefits = () => (
    <div className={container}>
        <div className="main-container">
            <h1 className={title}>
                The benefits of building your{' '}
                <span className="red">UI in React</span> with SSW
            </h1>
            {/* TODO: */}
            <div className={videoContainer}>
                <div className={video}>
                    <StaticImage src="../../../../images/consulting/maxresdefault.jpeg" />
                    {/* TODO: Show video after clicking */}
                    <div className={play}></div>
                </div>
            </div>
            <h5>
                React is a JavaScript library that combines the speed of
                JavaScript with new ways of rendering web pages, making them
                highly dynamic and responsive to user input. This technology
                significantly changed Facebook approach to development. After
                the library was released as an open-source tool, it became
                extremely popular due to its revolutionary approach to
                programming user interfaces.
            </h5>
            <h5>
                React encourages the creation of reusable UI components which
                present data that changes over time.
            </h5>
            <h5>
                React can also render on the server using Node.js, and it can
                power native mobile apps using React Native.
            </h5>

            <div className="flex-wrap">
                <div className={`col-md-6 ${benefit}`} data-aos="fade-left">
                    <StaticImage
                        className="fl"
                        src="../../../../images/consulting/Look-into-the-Future.png"
                    />
                    <div>
                        <h4>The Ecosystem</h4>
                        <p>
                            As a free open source JavaScript library, React is
                            free to use. Even better, the internet is full of
                            high-quality content that you can learn from.
                        </p>
                    </div>
                </div>
                <div className={`col-md-6 ${benefit}`} data-aos="fade-right">
                    <StaticImage
                        className="fl"
                        src="../../../../images/consulting/crm-integration.png"
                    />
                    <div>
                        <h4>Reusable Components</h4>

                        <p>
                            Powered by JavaScript, React can help you create
                            reusable UI components and implement a consistent
                            look across the whole project.
                        </p>
                    </div>
                </div>
                <div className={`col-md-6 ${benefit}`} data-aos="fade-left">
                    <StaticImage
                        className="fl"
                        src="../../../../images/consulting/Virtual-DOM.png"
                    />
                    <div>
                        <h4>The Virtual DOM</h4>
                        <p>
                            Having a virtual DOM is not just a performance
                            enhancement, it also adds additional functionality.
                            <br /> When rendering a JSX element, every single
                            virtual DOM object will get updated.
                        </p>
                    </div>
                </div>
                <div className={`col-md-6 ${benefit}`} data-aos="fade-right">
                    <StaticImage
                        className="fl"
                        src="../../../../images/consulting/Stable.png"
                    />
                    <div>
                        <h4>Stable code, stable project</h4>
                        <p>
                            React uses downward data binding to ensure that
                            changes in child structures will not affect their
                            parents.
                        </p>
                    </div>
                </div>
            </div>

            <h5>
                Have a look at{' '}
                <a
                    className={link}
                    href="https://rules.ssw.com.au/rules-to-better-react"
                >
                    SSW Rules to Better React
                </a>
                .
            </h5>
        </div>
    </div>
);

export default Benefits;
