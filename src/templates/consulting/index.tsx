import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';
// import MVC_BACKGROUND from '../../videos/MVC_background.mp4';
import Booking from './components/booking';
import Benefits from './components/benefits';

// TODO: This css file is for reference, delete it later
// import './index.css';

import './index.module.css';

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

                <Booking />

                {/* TODO: Add video background */}
                {/* <div id="videocontainer">
                    <video autoPlay muted loop>
                        <source src={MVC_BACKGROUND} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                </div> */}

                <Benefits />

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
