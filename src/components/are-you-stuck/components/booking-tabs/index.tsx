import React, { useState, useEffect } from "react";

import VideoBackground from "../../../videoBackground";
import ToggleButton from "../toggle-button"
// this is fine
import MVC_BACKGROUND from "../../../../assets/videos/MVC_background.mp4"
import * as styles from "./index.module.css";

import TabHeader from "../booking-title"
import BusiBooking from "../busi-booking";
import DevBooking from "../dev-booking";

enum TabSelected {
  LEFT,
  RIGHT
}

const Booking = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const showBookingForm = () => setIsVisible(!isVisible);

  const [currentTab, setCurrentTab] = useState<TabSelected>(TabSelected.LEFT)

  const businessTitle = 'Are your <span class="red"> staff being driven nuts </span> by outdated software or manual processes?'
  const businessSubtitle = 'Need the right software to multiply your teams output?'

  const devTitle = 'Find a way out of your nightmare'
  const devSubtitle = 'Are you stuck on legacy technologies and using sub-optimal practices?'
  
  return (
    <>
      <section className={styles.container}>
        <article className="main-container">
          {currentTab === TabSelected.LEFT ? 
            (<TabHeader title={businessTitle} subTitle={businessSubtitle}/>) : (<TabHeader title={devTitle} subTitle={devSubtitle}/>)}
          {/* <ToggleButton /> */}
          <div className={styles.flexContainer}> 
            <div className={styles.flexChild}>
              {/* TODO: styling */}
              <ToggleButton
                id={TabSelected.LEFT} 
                setCurrentTab={setCurrentTab} 
                display={currentTab === TabSelected.LEFT ? true : false} 
                title={"I'm a Business Person"}
              />
            </div>
            <div className={styles.flexChild}>
              <ToggleButton
                id={TabSelected.RIGHT} 
                setCurrentTab={setCurrentTab} 
                display={currentTab === TabSelected.RIGHT ? true : false} 
                title={"I'm a Developer"}
              />
            </div>
          </div>  
          {/* <TabContent /> */}
          {currentTab === TabSelected.LEFT ? (<BusiBooking />) : (<DevBooking />)}
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
