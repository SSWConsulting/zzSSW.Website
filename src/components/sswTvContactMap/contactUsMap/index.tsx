import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import PlaceHolder from "../../../assets/images/placeholder.png";
import {ACTIVE_KEYS} from "../../../consts/constantValues";
import './index.css';



const Map = ({ state, hover }) => {

    return (
        <article className='col-sm-6 hidden-xs'>
            <div id='mapWrap'>
                <div id='locationMap'>

                    <img className={hover ? (state) : ('')} src={PlaceHolder} alt="" width={402} height={350} useMap='#map' id='map-img' />

                </div>
            </div>



        </article >
    )
}
const ContactUs = ({ toggleHover }) => {

    const [activeLocation, setActiveLocation] = useState('');
    const [activeAccordion, setActiveAccordion] = useState('');
    const handleStateClicked = (targetLocation)=>{
        if(targetLocation == activeLocation ){
            setActiveLocation('');

        }
        else if(targetLocation == ACTIVE_KEYS.NewCastleActiveKey){
            setActiveLocation(ACTIVE_KEYS.NewCastleActiveKey);

        }
        else{
            setActiveLocation(targetLocation);

            
        }
        
    }

 
        return (
            <div className="locationAccordian col-sm-6">
                <article className="panelGroup">
                    
                    {/* TODO: Fill out office details, maybe make it's own component */}
                    <Accordion activeKey={activeLocation} flush>
                        <Accordion.Item eventKey={ACTIVE_KEYS.NSWActiveKey}>
                            <Accordion.Header onClick={()=>handleStateClicked(ACTIVE_KEYS.NSWActiveKey)} className='panelHeading'>SYDNEY</Accordion.Header>
                            
                            <Accordion.Body >
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
                            
                            <div className='map-marker  hidden-xs' >
                                <div className='state-sydney'onClick={()=>handleStateClicked(ACTIVE_KEYS.NSWActiveKey)} onMouseEnter={() => toggleHover(true, 'select-nsw')} onMouseLeave={() => toggleHover(false, '')} >
                                    <h6 className={(activeLocation ==ACTIVE_KEYS.NSWActiveKey) ? (ACTIVE_KEYS.ActiveAccordionNSW):('')}>NSW</h6>
                                </div>
                            </div>
                            
                        </Accordion.Item>
                        <Accordion.Item eventKey={ACTIVE_KEYS.QLDActiveKey}>
                            <Accordion.Header onClick={()=>handleStateClicked(ACTIVE_KEYS.QLDActiveKey)}>BRISBANE</Accordion.Header>
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
                                    <p>Hours: <strong>9am - 6pm AEST <span className='office closed' >Closed</span><br />

                                        Monday - Friday</strong>
                                    </p>
                                </article>
                            </Accordion.Body>
                            <div className='map-marker  hidden-xs' >
                                <div className='state-brisbane'onClick={()=>handleStateClicked(ACTIVE_KEYS.QLDActiveKey)} onMouseEnter={() => toggleHover(true, 'select-qld')} onMouseLeave={() => toggleHover(false, '')} >
                                    <h6 className={(activeLocation ==ACTIVE_KEYS.QLDActiveKey) ? (ACTIVE_KEYS.ActiveAccordionQLD):('')}>QLD</h6>
                                </div>
                            </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey={ACTIVE_KEYS.VICActiveKey}>
                            <Accordion.Header onClick={()=>handleStateClicked(ACTIVE_KEYS.VICActiveKey)}>MELBOURNE</Accordion.Header>
                            
                                <Accordion.Body>
                                    <article>
                                        <p><a href='https://www.ssw.com.au/ssw/Company/Offices/Melbourne/'>SSW Melbourne Office</a></p>
                                        <p itemProp='address' itemType='http://schema.org/PostalAddress'>
                                            <span itemProp='streetAddress'> Level 1, 370 Little Bourke Street</span><br />
                                            <span itemProp='addressLocality'>Melbourne</span>,
                                            <span itemProp='addressRegion' >VIC</span>
                                            <span itemProp='postalCode' >3000</span>,
                                            <span itemProp='addressCountry'>Australia</span>
                                        </p>
                                        <p>Phone: <strong>+ 61 3 9005 2034</strong></p>

                                        <p>Hours: <strong>9am - 6pm AEST <span className='office open' >Open</span><br />

                                            Monday - Friday</strong>
                                        </p>
                                    </article>

                                </Accordion.Body>
                           
                            <div className='map-marker  hidden-xs' >
                                <div className='state-melbourne'onClick={()=>handleStateClicked(ACTIVE_KEYS.VICActiveKey)} onMouseEnter={() => toggleHover(true, 'select-vic')} onMouseLeave={() => toggleHover(false, '')} >
                                    <h6 className={(activeLocation ==ACTIVE_KEYS.VICActiveKey) ? (ACTIVE_KEYS.ActiveAccordionVIC):('')}>VIC</h6>
                                </div>
                            </div>
                        </Accordion.Item>
                        <Accordion.Item eventKey={ACTIVE_KEYS.NewCastleActiveKey}>
                            <Accordion.Header  onClick={()=>handleStateClicked(ACTIVE_KEYS.NewCastleActiveKey)}>NEWCASTLE</Accordion.Header>
                            <Accordion.Body>
                                <article>
                                    <p><a href='https://www.ssw.com.au/ssw/Company/Offices/Newcastle/'>SSW Newcastle Office</a></p>
                                    <p>432 Hunter St<br />
                                        Newcastle, NSW 2300, Australia
                                    </p>
                                    <p>Phone: <strong>+ 61 3 9953 3000</strong></p>
                                    <p>Hours: <strong>9am - 6pm AEST <span className='office open'>Open</span><br />

                                        Monday - Friday</strong>
                                    </p>
                                </article>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </article>
            </div>
        )
    }

    const ContactUsAndMap = () => {

        const [hover, setHoverState] = useState(false);
        const [state, setState] = useState('');


        const toggleHover = (hover, state) => {
            setHoverState(hover);
            setState(state);
        }



        return (

            <div className="col-md-8 col-sm-12">
                <div id='location'>
                    <h2>Contact Us</h2>
                    <div className='row'>
                        <ContactUs toggleHover={toggleHover} />
                        {/* TODO: Implement Map */}
                        <Map state={state} hover={hover} />


                    </div>
                </div>
            </div>


        )
    };

    export default ContactUsAndMap;


