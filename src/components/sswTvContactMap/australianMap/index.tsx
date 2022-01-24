import React from 'react';
import './index.css';
import PlaceHolder from "../../../assets/images/placeholder.png"



const MapAustralia = ({stateResponse}) => {
    const stateResponseObj = "select-nsw";
    return(
        <article className=' col-sm-6 hidden-xs'>
            <div id='mapWrap'>
                <div className={stateResponseObj} id='locationMap'>
                <img src={PlaceHolder} alt="" width={402} height={350} useMap='#map' id='map-img'/>
                <map id='mapmarkers' name="map">
									    <area itemID='qld' id="qld" shape="poly" coords="247,56,243,160,268,161,268,190,381,195,381,166,366,141,366,128,356,127,347,103,332,94,328,81,327,70,320,58,321,49,311,39,306,41,302,22,295,4,287,8,282,29,281,46,279,58,272,71,266,75" />
									    <area shape="poly" coords="266,191,384,197,376,220,357,247,339,275,337,286,262,244" />
									    <area id="vic" shape="poly" coords="260,285,262,241,338,285,306,297,300,300" href='www.google.com' />
                                    </map>
                </div>
            </div>
        

        
    </article >

    )};





export default MapAustralia;


