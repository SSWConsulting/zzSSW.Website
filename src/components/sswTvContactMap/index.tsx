import React from 'react';
import { Accordion } from 'react-bootstrap';
import VideoBackground from '../videoBackground';
import './index.css';
import TvSSW from './sswTv';


const TvContactMap = () => (

    <section id="index-footer" className="main-container ">
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
                                    <Accordion defaultActiveKey="Sydney" flush>
                                        <Accordion.Item eventKey="Sydney">
                                            <Accordion.Header className='panelHeading'>SYDNEY</Accordion.Header>
                                            <Accordion.Body>
                                                <article>
                                                    <p>
                                                        <a href='https://www.ssw.com.au/ssw/Company/Offices/Sydney/'>SSW Sydney Office</a>
                                                    </p>
                                                    <p itemProp='address' itemType='http://schema.org/PostalAddress'>
                                                        <span itemProp='streetAddress' >Level 1, 81 - 91 Military Road</span><br />
                                                        Neutral Bay, <span itemProp='addressLocality'>Sydney</span>, <span itemProp='addressRegion' >NSW</span>
                                                        <span itemProp='postalCode' >2089</span>, <span itemProp='addressCountry'>Australia</span>
                                                    </p>
                                                    <p>Phone: <strong>+61 2 9953 3000</strong></p>
                                                    <p>Hours: <strong>9am - 6pm AEST <span id="ctl00_Content_OpenTime3_labelOpenTime"><span className='office closed'>Closed</span><br /></span>

                                                        Monday - Friday</strong>
                                                    </p>
                                                </article>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="Brisbane">
                                            <Accordion.Header>BRISBANE</Accordion.Header>
                                            <Accordion.Body>
                                                <article>
                                                    <p><a href='https://www.ssw.com.au/ssw/Company/Offices/Brisbane/'>SSW Brisbane Office</a></p>
                                                    <p itemProp='address' itemType='http://schema.org/PostalAddress'>
                                                        <span itemProp='streetAddress' > Level 1, 471 Adelaide Street</span><br />
                                                        <span itemProp='addressLocality'> Brisbane</span>, <span itemProp='addressRegion' >QLD</span>  
                                                        <span itemProp='postalCode' > 4000</span>, 
                                                        <span itemProp='addressCountry'>Australia</span>
                                                    </p>
                                                    <p>Phone: <strong>+61 7 3077 7081</strong></p>
                                                    <p>Hours: <strong>9am - 6pm AEST <span id="ctl00_Content_OpenTime4_labelOpenTime"><span className='office closed' >Closed</span><br /></span>

                                                        Monday - Friday</strong>
                                                    </p>
                                                </article>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="Melbourne">
                                            <Accordion.Header>MELBOURNE</Accordion.Header>
                                            <Accordion.Body>
                                                <article>
                                                <p><a  href='https://www.ssw.com.au/ssw/Company/Offices/Melbourne/'>SSW Melbourne Office</a></p>
                                                <p itemProp='address' itemType='http://schema.org/PostalAddress'>
                                                   <span  itemProp='streetAddress'> Level 1, 370 Little Bourke Street</span><br />
                                                   <span itemProp='addressLocality'>Melbourne</span>, 
                                                   <span itemProp='addressRegion' >VIC</span> 
                                                   <span itemProp='postalCode' >3000</span>, 
                                                   <span itemProp='addressCountry'>Australia</span>
                                                </p>
                                                <p>Phone: <strong>+ 61 3 9005 2034</strong></p>
                                            
                                                <p>Hours: <strong>9am - 6pm AEST <span id="ctl00_Content_OpenTime5_labelOpenTime"><span className='office open' >Open</span><br/></span>

                                                   Monday - Friday</strong>
                                                </p>
                                                </article>
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="Newcastle">
                                            <Accordion.Header>NEWCASTLE</Accordion.Header>
                                            <Accordion.Body>
                                                <article>
                                                <p><a href='https://www.ssw.com.au/ssw/Company/Offices/Newcastle/'>SSW Newcastle Office</a></p>
                                                <p>432 Hunter St<br />
                                                    Newcastle, NSW 2300, Australia
                                                </p>
                                                <p>Phone: <strong>+ 61 3 9953 3000</strong></p>
                                                <p>Hours: <strong>9am - 6pm AEST <span id="ctl00_Content_OpenTime1_labelOpenTime"><span className='office open'>Open</span><br /></span>

                                                   Monday - Friday</strong>
                                                </p>
                                                </article>
                                            </Accordion.Body>
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
