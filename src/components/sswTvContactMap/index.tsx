import React from 'react';
import { Accordion } from 'react-bootstrap';
import VideoBackground from '../videoBackground';
import TvSSW from './sswTv';
import MapAustralia from './australianMap';
import ContactUsMap from './contactUsMap';


const TvContactMap = () => {
    
    return(

    <section id="index-footer" className="main-container ">
        {/* TODO: Embed video */}
        <div id="video">
            <div className="row">
                <TvSSW video={"https://www.youtube.com/watch?v=2G7z2mF7Onk"} />
                <ContactUsMap />


            </div>
        </div>

    </section>
)};

export default TvContactMap;
