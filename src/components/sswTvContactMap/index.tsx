import React from 'react';
import TvSSW from './sswTv';
import ContactUsMap from './contactUsMap';


const TvContactMap = () => {
    
    return(

    <section id="index-footer" className="main-container ">
        <div id="video">
            <div className="row">
                <TvSSW video={"https://www.youtube.com/watch?v=2G7z2mF7Onk"} />
                <ContactUsMap />


            </div>
        </div>

    </section>
)};

export default TvContactMap;
