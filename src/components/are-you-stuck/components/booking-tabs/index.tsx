import React, { useState, useEffect } from "react";

import VideoBackground from "../../../videoBackground";
import InnerHTML from "../../../innerHTML";
import Button from "../../../button";
import ToggleButton from "../toggle-button"
// this is fine
import MVC_BACKGROUND from "../../../../assets/videos/MVC_background.mp4"
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";
import { Tab, TabContainer, Tabs } from "react-bootstrap";

import TabHeader from "../booking-title"
import { graphql } from "gatsby";


enum TabSelected {
  LEFT,
  RIGHT
}


const Booking = ({}) => {
  // const [isVisible, setIsVisible] = useState(false);
  // const showBookingForm = () => setIsVisible(!isVisible);

  const [currentTab, setCurrentTab] = useState<TabSelected>(TabSelected.LEFT)

  const businessTitle = 'Are your <span class="red"> staff being driven nuts </span> by outdated software or manual processes?'
  const businessSubtitle = 'Need the right software to multiply your teams output?'

  const devTitle = 'Find a way out of your nightmare'
  const devSubtitle = 'Are you stuck on legacy technologies and using sub-optimal practices?'
  
  return (
    <>
      <VideoBackground src={MVC_BACKGROUND} />
      <section className={styles.container}>
        <article className="main-container">
          {currentTab === TabSelected.LEFT ? 
            (<TabHeader title={businessTitle} subTitle={businessSubtitle}/>) : (<TabHeader title={devTitle} subTitle={devSubtitle}/>)}
          {/* <ToggleButton /> */}
          <div className="flex-container"> 
            <div className="flex-child">
              {/* TODO: styling */}
              <ToggleButton
                id={TabSelected.LEFT} 
                setCurrentTab={setCurrentTab} 
                display={currentTab === TabSelected.LEFT ? true : false} 
                title={"I'm a Business Person"}
              />
            </div>
            <div className="flex-child">
              <ToggleButton
                id={TabSelected.RIGHT} 
                setCurrentTab={setCurrentTab} 
                display={currentTab === TabSelected.RIGHT ? true : false} 
                title={"I'm a Developer"}
              />
            </div>
          </div>  
          {/* <TabContent /> */}
          {currentTab === TabSelected.LEFT ? (<div>Hi</div>) : (<div>Hello</div>)}
          
        </article>
      </section>
    </>
  );
};



// const TabC = ({display, title, setCurrentTab, id}) => {

//   // TODO: Change from hidden to grey (to let the user know that the button isn't selected)
//   return (
//     <div onClick={() => setCurrentTab(id)} hidden={display}>{title}</div>
//   )

// }

export default Booking;
