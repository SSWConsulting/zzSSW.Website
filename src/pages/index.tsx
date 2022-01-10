import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Accordion } from 'react-bootstrap';
import Layout from '../components/layout';
import SSWCarousel from '../components/image-carousel/ssw-carousel';
import '../styles/index.css';

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="SSW Website">
            <div id="container-fluid" className="main-container">
                <div className="row">
                    <SSWCarousel />
                </div>

                {/* TODO: Convert into components using Graphiql Query */}
                <div id="whatwedo" className="block">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="special">Consulting</h2>
                        </div>
                        <div className="col-md-3 col-sm-6 do-angular">
                            <a href="/ssw/Consulting/Web-Applications.aspx">
                                <h2>Web / Angular / React</h2>
                                <p>Ever since SSW developed the very first .NET Website in Australia, we've been known as leaders in Web Development.</p>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 do-cloud">
                            <a href="/ssw/Consulting/Azure.aspx">
                                <h2>DevOps {'&'} Cloud</h2>
                                <p>Making your software ships by using SSW developers' best practices in Azure, DevOps and Docker Containers.</p>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 do-mobile">
                        <a href="/ssw/Consulting/Mobile-Application-Development.aspx">
                            <h2>Mobile/Bots/AI</h2>
                            <p>SSW software developers are experts at building cross platform mobile and chat apps using the power of AI with Machine Learning.</p>
                        </a>
                    </div>

                    <div className="col-md-3 col-sm-6 do-rules">
                        <a href="/ssw/Consulting/Dynamics365.aspx">
                            <h2>Dynamics 365</h2>
                            <p>Dynamics 365/CRM brings new levels of customer intelligence, providing employees the information they need to truly impress.</p>
                        </a>
                    </div>
                    </div>
                </div>
                <div id="services" className="block">

                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="special">Core Services</h2>
                        </div>
                        <div className="col-md-3 col-sm-6 core-training">

                            <a href="/ssw/Events">
                                <h3>Training</h3>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 core-sharepoint">
                            <a href="/ssw/Events">
                                <h3>Office 365/SharePoint</h3>
                            </a>

                        </div>
                        <div className="col-md-3 col-sm-6 core-book">
                            <a href="/ssw/Events">
                                <h3>Book an Expert</h3>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-6 core-crm">
                            <a href="/ssw/Events">
                                <h3>Rules</h3>
                            </a>
                        </div>
                    </div>


                </div>

                <div className="row">
                    <div
                        id="about-us-summary"
                        className="col-md-7 d-sm-block d-none"
                    >
                        <div>
                            <h3>
                                Australia's Leading .NET and Azure Consultants
                            </h3>
                            <p>
                                SSW Consulting has over 25 years of Microsoft
                                software and web development experience. We
                                build on top of Angular, React, Vue, Azure,
                                Azure DevOps (was TFS), SharePoint, Office 365,
                                Blazor, .NET, WebAPI, Dynamics 365, and SQL
                                Server. <a href="/about-us">Know more</a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <StaticImage
                                    src="../assets/images/MicrosoftPartnerLogo-2021.png"
                                    alt="Microsoft Partner Logo 2021"
                                />
                            </div>
                            <div className="col-sm-7">
                                <h3>We 💗 Microsoft</h3>
                                <p>
                                    In 1999, we were first recognized as a
                                    Microsoft Gold Partner. Today{' '}
                                    <a href="/company/awards">
                                        SSW has competencies in a variety of
                                        areas
                                    </a>
                                    , earning gold in{' '}
                                    <b>Application Development</b>,
                                    <b>Application Integration</b>,{' '}
                                    <b>Cloud Platform</b>, <b>DevOps</b>; and
                                    silver in Collaboration and Content, and
                                    Data Analytics.
                                </p>
                            </div>
                            <div className="col-sm-5">
                                <a href="https://www.firebootcamp.com">
                                    <StaticImage
                                        src="../assets/images/ssw-mapa.jpg"
                                        alt="Microsoft Australia Partner Award"
                                    />
                                </a>
                            </div>
                            <div className="col-sm-7">
                                <p>
                                    We are proud to announce we have won the
                                    MAPA - Microsoft Australia Partner Award -
                                    for Excellence in Learning for{' '}
                                    <a href="https://www.firebootcamp.com">
                                        SSW FireBootCamp
                                    </a>
                                    .
                                    <br />
                                    <br />
                                    We were chosen from a national field of top
                                    Microsoft Partners for delivering
                                    market-leading customer solutions built on
                                    the Microsoft platform.
                                </p>
                            </div>
                            <div>
                                <h3>Bring your apps to China</h3>
                                <p>
                                    China is a booming market and now is the
                                    time to take advantage of this growing user
                                    base. If you have a successful application
                                    that you would like to bring to the Chinese
                                    market, then working with SSW can help
                                    streamline your entry into this market.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* TODO: Make an "Upcoming events" component */}
                    <div
                        id="upcoming-events-summary"
                        className="col-md-5 col-sm-12"
                    >
                        <div>
                            <h3>Upcoming Events</h3>
                            Insert upcoming event history here
                        </div>
                    </div>
                    <div id="index-footer" className="row">
                        {/* TODO: Embed video */}
                        <div className="col-sm-4 d-sm-block d-none">
                            <h2>SSW TV</h2>
                        </div>
                        <div className="col-md-8 col-sm-12 row">
                            <div className="col-sm-6">
                                <h2>Contact Us</h2>
                                {/* TODO: Fill out office details, maybe make it's own component */}
                                <Accordion defaultActiveKey="Sydney" flush>
                                    <Accordion.Item eventKey="Sydney">
                                        <Accordion.Header>
                                            SYDNEY
                                        </Accordion.Header>
                                        <Accordion.Body>Body</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="Brisbane">
                                        <Accordion.Header>
                                            BRISBANE
                                        </Accordion.Header>
                                        <Accordion.Body>Body</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="Melbourne">
                                        <Accordion.Header>
                                            MELBOURNE
                                        </Accordion.Header>
                                        <Accordion.Body>Body</Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="Newcastle">
                                        <Accordion.Header>
                                            NEWCASTLE
                                        </Accordion.Header>
                                        <Accordion.Body>Body</Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            {/* TODO: Implement Map */}
                            <div className="col-sm-6 d-sm-block d-none">
                                <h2>Map thing</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
