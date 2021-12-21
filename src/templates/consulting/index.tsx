import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
import MVC_BACKGROUND from '../../videos/MVC_background.mp4';
import './index.css';

const Consulting = ({ data: { title } }) => {
    const data = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Services',
            path: '/consulting',
        },
        {
            name: `${title} | SSW Consulting - Sydney, Brisbane, Melbourne`,
        },
    ];

    return (
        <Layout pageTitle={title}>
            <>
                <Breadcrumb data={data} />

                <div className="Consulting-Hero employement-video">
                    <div className="container hero">
                        <h1>
                            Want to build your web application in{' '}
                            <span className="red">React</span>?
                        </h1>
                        <h2>
                            Easy to learn, easy to use and easy to be awesome
                        </h2>

                        <button
                            type="button"
                            className="button raised hoverable"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            <div className="anim"></div>
                            Book a FREE Initial Meeting
                        </button>
                        <h2>or call us on +61 2 9953 3000</h2>
                    </div>

                    <div className="arrow-scroll bounce">
                        <a className="fa fa-chevron-down" href="#more"></a>
                    </div>
                </div>

                <div id="videocontainer">
                    <video autoPlay muted loop>
                        <source src={MVC_BACKGROUND} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div>

                <div className="benefits-section MVC-benefits-background">
                    <div className="container">
                        {/* TODO: */}
                        {/* <a name="more"></a> */}
                        <h1>
                            The benefits of building your{' '}
                            <span className="red">UI in React</span> with SSW
                        </h1>
                        <div className="eric-video">
                            <div
                                className="video-player"
                                data-id="3K4Gb54BFMo"
                            ></div>
                        </div>
                        <h5>
                            React is a JavaScript library that combines the
                            speed of JavaScript with new ways of rendering web
                            pages, making them highly dynamic and responsive to
                            user input. This technology significantly changed
                            Facebook approach to development. After the library
                            was released as an open-source tool, it became
                            extremely popular due to its revolutionary approach
                            to programming user interfaces.
                        </h5>
                        <h5>
                            React encourages the creation of reusable UI
                            components which present data that changes over
                            time.
                        </h5>
                        <h5>
                            React can also render on the server using Node.js,
                            and it can power native mobile apps using React
                            Native.
                        </h5>

                        <div className="row">
                            <div
                                className="col-md-6 benefitsBox noCorruptionBx"
                                data-aos="fade-left"
                            >
                                <StaticImage src="../../images/consulting/Look-into-the-Future.png" />
                                <h4>The Ecosystem</h4>
                                <p>
                                    As a free open source JavaScript library,
                                    React is free to use. Even better, the
                                    internet is full of high-quality content
                                    that you can learn from.
                                </p>
                            </div>
                            <div
                                className="col-md-6 benefitsBox speedUpBx"
                                data-aos="fade-right"
                            >
                                <StaticImage src="../../images/consulting/crm-integration.png" />
                                <h4>Reusable Components</h4>
                                <p>
                                    Powered by JavaScript, React can help you
                                    create reusable UI components and implement
                                    a consistent look across the whole project.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-md-6 benefitsBox reportsBx"
                                data-aos="fade-left"
                            >
                                <StaticImage src="../../images/consulting/Virtual-DOM.png" />
                                <h4>The Virtual DOM</h4>
                                <p>
                                    Having a virtual DOM is not just a
                                    performance enhancement, it also adds
                                    additional functionality.
                                    <br /> When rendering a JSX element, every
                                    single virtual DOM object will get updated.
                                </p>
                            </div>
                            <div
                                className="col-md-6 benefitsBox fasterAccessBx"
                                data-aos="fade-right"
                            >
                                <StaticImage src="../../images/consulting/Stable.png" />
                                <h4>Stable code, stable project</h4>
                                <p>
                                    React uses downward data binding to ensure
                                    that changes in child structures will not
                                    affect their parents.
                                </p>
                            </div>
                        </div>

                        <h5>
                            Have a look at{' '}
                            <a href="https://rules.ssw.com.au/rules-to-better-react">
                                SSW Rules to Better React
                            </a>
                            .
                        </h5>
                    </div>
                </div>

                <div className="testimonials-section">
                    <div className="container">
                        <div className="col-md-4 testimonialCol">
                            <div
                                className="callout top-left"
                                data-aos="flip-right"
                            >
                                <p>
                                    It was a pleasure to have you in the office
                                    again.
                                </p>
                                <p>
                                    I continue to be impressed by the quality of
                                    work and advice you provide.
                                </p>
                            </div>
                            <StaticImage src="../../images/consulting/mark_p.jpg" />
                            <div className="tName"> Mark Pigram</div>
                            <div className="tCompany">Contracts Online</div>
                        </div>

                        <div className="col-md-4 testimonialCol">
                            <div
                                className="callout top-left"
                                data-aos="flip-right"
                            >
                                <p>
                                    We have dealt with several people at SSW
                                    from a network tech helping us with a domain
                                    issue, to a couple of graphic designers and
                                    several programmers and they have ALL been
                                    first rate.{' '}
                                </p>
                            </div>
                            <StaticImage src="../../images/consulting/peter-dimaridis.jpg" />
                            <div className="tName"> Peter Dimaridis</div>
                            <div className="tCompany">AuctionsPlus</div>
                        </div>

                        <div className="col-md-4 testimonialCol">
                            <div
                                className="callout top-left"
                                data-aos="flip-right"
                            >
                                <p>
                                    ... out of all the developers I have used in
                                    the past [SSW] provide the most complete
                                    solutions and best outcomes.
                                </p>
                                <p>
                                    Thanks for your attention to detail once
                                    again.
                                </p>
                            </div>
                            <StaticImage src="../../images/consulting/peter-m.jpg" />
                            <div className="tName"> Peter McCurdy</div>
                            <div className="tCompany">PDS</div>
                        </div>

                        <button
                            type="button"
                            className="button raised hoverable"
                            data-toggle="modal"
                            data-target="#myModal"
                            data-aos="fade-up"
                        >
                            <div className="anim"></div>
                            Book a FREE Initial Meeting
                        </button>
                        <h2>or call us on +61 2 9953 3000</h2>
                    </div>
                </div>

                <div className="about-section">
                    <div className="container">
                        <h1>
                            Why should you choose{' '}
                            <span className="red">SSW</span>?
                        </h1>
                        <div className="col-md-6">
                            <div
                                className="video-player"
                                data-id="Jveq6VFjWTA"
                                data-youkuid=""
                            ></div>
                            {/* TODO: */}
                            {/* <%--<iframe width="540" height="304" src="https://www.youtube.com/embed/eu0qhzevEXQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen data-aos="fade-up"></iframe>--%> */}
                            {/* <%--<div className="video-player" data-id="Jveq6VFjWTA" data-youkuid=""></div>--%> */}
                        </div>
                        <div className="col-md-6">
                            <p data-aos="fade-up">
                                SSW's Consulting Services have delivered best of
                                breed Microsoft solutions for more than 1,000
                                clients in 15 countries. With 40+ consultants in
                                five countries, SSW's developers are some of the
                                best in the business. We have many Microsoft
                                Certifications, three MVPs, and a Microsoft
                                Regional Director.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="clients-section">
                    <div className="container">
                        <h1>Companies we have worked with</h1>
                        <div className="row no-gutters">
                            <div className="col-sm-4">
                                <StaticImage
                                    src="../../images/consulting/clients1.png"
                                    alt="SSW Clients"
                                    className="center-block"
                                />
                            </div>
                            <div className="col-sm-4">
                                <StaticImage
                                    src="../../images/consulting/clients2.png"
                                    alt="SSW Clients"
                                    className="center-block"
                                />
                            </div>
                            <div className="col-sm-4">
                                <StaticImage
                                    src="../../images/consulting/clients3.png"
                                    alt="SSW Clients"
                                    className="center-block"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="technologies-section">
                    <div className="container">
                        <h1>Other technologies</h1>

                        <div className="col-md-6">
                            <div className="greyTBox" data-aos="flip-left">
                                <StaticImage src="../../images/consulting/angular-logo.png" />
                                <p>
                                    Angular is a Google-built and maintained
                                    Javascript framework allows us to develop
                                    fast, responsive, and interaction-rich
                                    applications. It has the abilities to build
                                    apps for any deployment target - web, mobile
                                    web, native mobile and native desktop.{' '}
                                    <a href="Angular.aspx">Read more</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="greyTBox" data-aos="flip-left">
                                <StaticImage src="../../images/consulting/jquery-logo.png" />
                                <p>
                                    JQuery is a new cross-platform front-end DOM
                                    manipulation JavaScript library that helps
                                    developers use JavaScript on websites. It is
                                    designed to make it easier to maintain the
                                    HTML script at client sides. JQuery is one
                                    of the most widely used JavaScript libraries
                                    in the world.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="greyTBox" data-aos="flip-left">
                                <StaticImage src="../../images/consulting/js-logo.png" />
                                <p>
                                    Powered by JavaScript, Node.js works as a
                                    cross-platform run-time environment. It has
                                    an event-driven architecture capable of
                                    asynchronous I/O which helps developers
                                    build effective real-time web applications.
                                    As one of the biggest open-source platforms,
                                    Node.js is light and powerful.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="greyTBox" data-aos="flip-left">
                                <StaticImage src="../../images/consulting/net-logo.png" />
                                <p>
                                    .NET 5 (was .NET Core) is a free,
                                    cross-platform, open source developer
                                    platform for building many different types
                                    of applications. With .NET, you can use
                                    multiple languages, editors, and libraries
                                    to build for web, mobile, desktop, games,
                                    and IoT.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div
                                className="greyTBox MVC_greyBox"
                                data-aos="flip-left"
                            >
                                <StaticImage src="../../images/consulting/react-native-logo.png" />
                                <p>
                                    React Native provides an environment where
                                    developers can build native mobile
                                    applications using JavaScript. Instead of
                                    keeping users waiting for endless
                                    recompiling, React Native can reload
                                    applications instantly, helping developers
                                    to build much faster apps. Meanwhile, React
                                    Native works smoothly with components
                                    written in Java, Objective-C, and Swift.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="solution-section">
                    <div className="container">
                        <h1>
                            Talk to us about your{' '}
                            <span className="red">React project</span> today
                        </h1>

                        <p>
                            Jump on a call with one of our Account Managers to
                            discuss how we can help you.
                        </p>

                        <button
                            type="button"
                            className="button raised hoverable"
                            data-toggle="modal"
                            data-target="#myModal"
                            data-aos="fade-up"
                        >
                            <div className="anim"></div>
                            Book a FREE Initial Meeting
                        </button>
                        <h2>or call us on +61 2 9953 3000</h2>
                    </div>
                </div>
            </>
        </Layout>
    );
};

export default Consulting;
