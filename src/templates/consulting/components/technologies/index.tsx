import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { container, skillContainer, skill } from './index.module.css';

const Technologies = () => (
    <section className={container}>
        <article className="main-container">
            <h1>Other technologies</h1>
            <div className="flex-wrap">
                {/* TODO: Use Row and Col instead of old bootstrap classed */}
                <div className={'col-md-6'}>
                    <article className={skill} data-aos="flip-left">
                        <figure>
                            <StaticImage
                                src="../../../../assets/images/consulting/angular-logo.png"
                                alt="angular"
                            />
                        </figure>
                        <p>
                            Angular is a Google-built and maintained Javascript
                            framework allows us to develop fast, responsive, and
                            interaction-rich applications. It has the abilities
                            to build apps for any deployment target - web,
                            mobile web, native mobile and native desktop.{' '}
                            <a href="Angular.aspx">Read more</a>
                        </p>
                    </article>
                </div>

                <div className={'col-md-6'}>
                    <article className={skill} data-aos="flip-left">
                        <StaticImage
                            src="../../../../assets/images/consulting/jquery-logo.png"
                            alt="jquery"
                        />
                        <p>
                            JQuery is a new cross-platform front-end DOM
                            manipulation JavaScript library that helps
                            developers use JavaScript on websites. It is
                            designed to make it easier to maintain the HTML
                            script at client sides. JQuery is one of the most
                            widely used JavaScript libraries in the world.
                        </p>
                    </article>
                </div>

                <div className={'col-md-6'}>
                    <article className={skill} data-aos="flip-left">
                        <StaticImage
                            src="../../../../assets/images/consulting/js-logo.png"
                            alt="javascript"
                        />
                        <p>
                            Powered by JavaScript, Node.js works as a
                            cross-platform run-time environment. It has an
                            event-driven architecture capable of asynchronous
                            I/O which helps developers build effective real-time
                            web applications. As one of the biggest open-source
                            platforms, Node.js is light and powerful.
                        </p>
                    </article>
                </div>

                <div className={'col-md-6'}>
                    <article className={skill} data-aos="flip-left">
                        <StaticImage
                            src="../../../../assets/images/consulting/net-logo.png"
                            alt=".net"
                        />
                        <p>
                            .NET 5 (was .NET Core) is a free, cross-platform,
                            open source developer platform for building many
                            different types of applications. With .NET, you can
                            use multiple languages, editors, and libraries to
                            build for web, mobile, desktop, games, and IoT.
                        </p>
                    </article>
                </div>

                <div className={`col-md-12`}>
                    <article className={skill} data-aos="flip-left">
                        <StaticImage
                            src="../../../../assets/images/consulting/react-native-logo.png"
                            alt="react-native"
                        />
                        <p>
                            React Native provides an environment where
                            developers can build native mobile applications
                            using JavaScript. Instead of keeping users waiting
                            for endless recompiling, React Native can reload
                            applications instantly, helping developers to build
                            much faster apps. Meanwhile, React Native works
                            smoothly with components written in Java,
                            Objective-C, and Swift.
                        </p>
                    </article>
                </div>
            </div>
        </article>
    </section>
);

export default Technologies;
