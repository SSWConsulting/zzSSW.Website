import React from 'react';
import { Accordion } from 'react-bootstrap';

import Layout from '../../components/layout';
import Carousel from '../../components/indexPage/carousel';
import AboutUsAndEvents from '../../components/indexPage/aboutUsAndEvents';
import Footer from '../../components/indexPage/footer';
import OutlineButton from '../../components/outlineButton';

import '../../styles/index.css';
import ConsultingServices from '../../components/consultingServices';
import CoreServices from '../../components/coreServices';

// markup
const IndexPage = () => {
    return (
        <Layout pageTitle="SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics">
            <div className="top-section">
                <Carousel />

                {/* TODO: Extract to consulting component */}
  
                <ConsultingServices />
                {/* TODO: Extract to services component */}
                <CoreServices />

            </div>

            <AboutUsAndEvents />

            {/* TODO: Extract to sswTVAndContact component */}
            <section id="index-footer" className="main-container flex">
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
                                <Accordion.Header>SYDNEY</Accordion.Header>
                                <Accordion.Body>Body</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="Brisbane">
                                <Accordion.Header>BRISBANE</Accordion.Header>
                                <Accordion.Body>Body</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="Melbourne">
                                <Accordion.Header>MELBOURNE</Accordion.Header>
                                <Accordion.Body>Body</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="Newcastle">
                                <Accordion.Header>NEWCASTLE</Accordion.Header>
                                <Accordion.Body>Body</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    {/* TODO: Implement Map */}
                    <div className="col-sm-6 d-sm-block d-none">
                        <h2>Map thing</h2>
                    </div>
                </div>
            </section>

            <Footer />
        </Layout>
    );
};

export default IndexPage;
