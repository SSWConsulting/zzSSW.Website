import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import OutlineButton from '../../outlineButton';
import {
    container,
    partner,
    eventsContainer,
    upcomingEvents,
    eventDetails,
    timeDuration,
    daysFromNow,
} from './index.module.css';

dayjs.extend(utc);

const AboutUs = () => (
    <Col md={7} sm={12}>
        <article>
            <h1>Australia's Leading .NET and Azure Consultants</h1>
            <p>
                SSW Consulting has over 25 years of Microsoft software and web
                development experience. We build on top of Angular, React, Vue,
                Azure, Azure DevOps (was TFS), SharePoint, Office 365, Blazor,
                .NET, WebAPI, Dynamics 365, and SQL Server.{' '}
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
                    In 1999, we were first recognized as a Microsoft Gold
                    Partner. Today{' '}
                    {/*  TODO: Update link after implement this page */}
                    <a href="https://www.ssw.com.au/ssw/company/awards/">
                        SSW has competencies in a variety of areas
                    </a>
                    , earning gold in <b>Application Development</b>,{' '}
                    <b>Application Integration</b>, <b>Cloud Platform</b>,{' '}
                    <b>DevOps</b>; and silver in
                    <b>Collaboration and Content</b>, and <b>Data Analytics</b>.
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
                    <a href="https://www.firebootcamp.com" target="_blank">
                        SSW FireBootCamp
                    </a>
                    .
                </p>
                <p>
                    We were chosen from a national field of top Microsoft
                    Partners for delivering market-leading customer solutions
                    built on the Microsoft platform.
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
                China is a booming market and now is the time to take advantage
                of this growing user base. If you have a successful application
                that you would like to bring to the Chinese market, then working
                with {/*  TODO: Update link after implement this page */}
                <a href="https://www.ssw.com.au/ssw/Consulting/Chinafy-App.aspx">
                    SSW can help
                </a>{' '}
                streamline your entry into this market.
            </p>
        </article>
    </Col>
);

// TODO: Add loading events
const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const datetime = dayjs.utc().startOf('day').format();
        // TODO: Add HTTP wrapper
        fetch(
            `https://www.ssw.com.au/ssw/SharePointEventsService.aspx?odataFilter=$filter=Enabled%20ne%20false%20and%20EndDateTime%20gt%20datetime%27${datetime}%27&$top=30&$orderby=StartDateTime%20desc`
        )
            .then((response) => response.json())
            .then((events) => setEvents(events))
            // TODO: Handle HTTP error
            .catch((err) => console.log(err));
    }, []);

    const getTimeDuration = (start, end) => {
        if (!start && !end) return null;

        const dateformat = 'ddd MMM D';
        const startDate = dayjs(start).format(dateformat);

        if (!end) return `${startDate}`;

        const endDate = dayjs(end).format(dateformat);
        return (
            <span className={timeDuration}>
                {startDate} - {endDate}
            </span>
        );
    };

    const getDaysFromNow = (date) => {
        const now = new Date();
        const days = dayjs(date).diff(now, 'd');

        // TODO: Check old website source code logic
        let text;
        if (days === 0) {
            text = 'Today';
        } else if (days === 1) {
            text = 'Tomorrow';
        } else {
            text = `${days} days to go`;
        }

        return <span className={daysFromNow}>{text}</span>;
    };

    const GetEventsList = (events: any[]) =>
        events
            .sort(
                (event1, event2) =>
                    new Date(event1.StartDateTime).getTime() -
                    new Date(event2.StartDateTime).getTime()
            )
            .map(
                ({
                    Id,
                    Url,
                    Thumbnail,
                    StartDateTime,
                    EndDateTime,
                    Title,
                    Presenter,
                }) => {
                    const isInternalLink = Url.Url.includes('ssw.com.au');

                    return (
                        <article
                            key={Id}
                            className={classNames('flex', eventsContainer)}
                        >
                            <figure>
                                <a href={Thumbnail.Url}>
                                    <img
                                        src={Thumbnail.Url}
                                        width={100}
                                        height={100}
                                    ></img>
                                </a>
                            </figure>
                            <div
                                className={classNames(
                                    'flex-column-center',
                                    eventDetails
                                )}
                            >
                                <time>
                                    {getTimeDuration(
                                        StartDateTime,
                                        EndDateTime
                                    )}{' '}
                                    {getDaysFromNow(StartDateTime)}
                                </time>
                                {/* TODO: External link icon */}
                                <h5>
                                    <a
                                        href={Url.Url}
                                        target={
                                            isInternalLink ? '_self' : '_blank'
                                        }
                                    >
                                        {Title}
                                    </a>
                                </h5>
                                {!!Presenter && <address>{Presenter}</address>}
                            </div>
                        </article>
                    );
                }
            );

    return (
        <Col md={5} sm={12}>
            <article className="full flex-column">
                <h1>Upcoming Events</h1>
                <section className={classNames('flex-full', upcomingEvents)}>
                    {GetEventsList(events)}
                </section>
                <div className="flex-end">
                    <OutlineButton href="https://www.ssw.com.au/ssw/Events/?tech=all&type=all">
                        More Events
                    </OutlineButton>
                </div>
            </article>
        </Col>
    );
};

const AboutUsAndEvents = () => {
    return (
        <section className={classNames('main-container', container)}>
            <Row>
                <AboutUs />
                <Events />
            </Row>
        </section>
    );
};

export default AboutUsAndEvents;
