import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Row, Col, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { container, partner, events, moreEvents } from './index.module.css';
import OutlineButton from '../../outlineButton';

const AboutUsAndEvents = () => (
    <section className={classNames('main-container', container)}>
        <Row>
            <Col md={7} sm={12}>
                <article>
                    <h1>Australia's Leading .NET and Azure Consultants</h1>
                    <p>
                        SSW Consulting has over 25 years of Microsoft software
                        and web development experience. We build on top of
                        Angular, React, Vue, Azure, Azure DevOps (was TFS),
                        SharePoint, Office 365, Blazor, .NET, WebAPI, Dynamics
                        365, and SQL Server.{' '}
                        {/*  TODO: Update link after implement this page */}
                        <a href="https://www.ssw.com.au/SSW/Company/AboutUs.aspx">
                            Know more
                        </a>
                    </p>
                </article>
                <Row className={partner}>
                    <Col sm={5}>
                        <StaticImage
                            src="../../../assets/images/MicrosoftPartnerLogo-2021.png"
                            alt="Microsoft Partner Logo 2021"
                        />
                    </Col>
                    <Col sm={7}>
                        <h3>
                            We{' '}
                            <FontAwesomeIcon
                                icon={faHeart}
                                color="#cc4141"
                                style={{ fontSize: '1.2rem' }}
                            />{' '}
                            Microsoft
                        </h3>
                        <p>
                            In 1999, we were first recognized as a Microsoft
                            Gold Partner. Today{' '}
                            {/*  TODO: Update link after implement this page */}
                            <a href="https://www.ssw.com.au/ssw/company/awards/">
                                SSW has competencies in a variety of areas
                            </a>
                            , earning gold in <b>Application Development</b>,{' '}
                            <b>Application Integration</b>,{' '}
                            <b>Cloud Platform</b>, <b>DevOps</b>; and silver in
                            <b>Collaboration and Content</b>, and{' '}
                            <b>Data Analytics</b>.
                        </p>
                    </Col>
                    <Col sm={5}>
                        <a href="https://www.firebootcamp.com" target="_blank">
                            <StaticImage
                                src="../../../assets/images/ssw-mapa.jpg"
                                alt="Microsoft Australia Partner Award"
                            />
                        </a>
                    </Col>
                    <Col sm={7}>
                        <p>
                            We are proud to announce we have won the{' '}
                            <b>
                                MAPA - Microsoft Australia Partner Award - for
                                Excellence in Learning
                            </b>{' '}
                            for{' '}
                            <a
                                href="https://www.firebootcamp.com"
                                target="_blank"
                            >
                                SSW FireBootCamp
                            </a>
                            .
                        </p>
                        <p>
                            We were chosen from a national field of top
                            Microsoft Partners for delivering market-leading
                            customer solutions built on the Microsoft platform.
                        </p>
                    </Col>
                </Row>
                <article>
                    <h3 className="vertical-center">
                        Bring your apps to China{' '}
                        <StaticImage
                            src="../../../assets/images/china-flag.svg"
                            alt="china flag"
                            width={28}
                            height={21}
                            style={{ marginLeft: 6 }}
                        />
                    </h3>
                    <p>
                        China is a booming market and now is the time to take
                        advantage of this growing user base. If you have a
                        successful application that you would like to bring to
                        the Chinese market, then working with{' '}
                        {/*  TODO: Update link after implement this page */}
                        <a href="https://www.ssw.com.au/ssw/Consulting/Chinafy-App.aspx">
                            SSW can help
                        </a>{' '}
                        streamline your entry into this market.
                    </p>
                </article>
            </Col>
            {/* TODO: Make an "Upcoming events" component */}
            <Col md={5} sm={12}>
                <article className="full flex-column">
                    <h1>Upcoming Events</h1>
                    <section className={classNames('flex-full', events)}>
                        TODO: Add upcoming events
                    </section>
                    <div className="flex-end">
                        <OutlineButton href="https://www.ssw.com.au/ssw/Events/?tech=all&type=all">
                            More Events
                        </OutlineButton>
                    </div>
                </article>
            </Col>
        </Row>
    </section>
);

export default AboutUsAndEvents;
