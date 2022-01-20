import React from 'react';
import { Accordion } from 'react-bootstrap';
import VideoBackground from '../videoBackground';
import './index.css';
import TvSSW from './sswTv';


const TvContactMap = () => (

    <section  id="index-footer" className="main-container ">
        {/* TODO: Embed video */}
        <div id="video">
            <div className="row">
                <TvSSW video={"https://www.youtube.com/watch?v=2G7z2mF7Onk"} />
                <article className="col-md-8 col-sm-12">
                    <div className='location'>
                        <h2>Contact Us</h2>
                        <div className='row'>
                            <div className="locationAccordian col-sm-6">
                                <div className="panelGroup">

                                    {/* TODO: Fill out office details, maybe make it's own component */}
                                    <Accordion  defaultActiveKey="Sydney" flush>
                                        <Accordion.Item eventKey="Sydney">
                                            <Accordion.Header className='panelHeading'>SYDNEY</Accordion.Header>
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
                            </div>
                            {/* TODO: Implement Map */}
                            <div className="col-sm-4 ">
                                <h2>Map thing</h2>
                            </div>
                        </div>
                    </div>
                </article>


            </div>
        </div>

    </section>
);

export default TvContactMap;
