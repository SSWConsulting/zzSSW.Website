import React, { useState } from "react";

import VideoBackground from "../../../../../../components/videoBackground";
import InnerHTML from "../../../../../../components/innerHTML";
import Button from "../../../../../../components/button";
// this is fine
import MVC_BACKGROUND from "../../../../../../assets/videos/MVC_background.mp4"
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../../../../components/bookingFormPopup";

const Booking = ({ title, subTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <VideoBackground src={MVC_BACKGROUND} />
      <section className={styles.container}>
        <article className="main-container">
          <InnerHTML tagName="h1" __html={title} />

          <h2 className={styles.subTitle}>{subTitle}</h2>

          <Button onClick={showBookingForm}>Refer SSW Consulting Services</Button>
          <BookingFormPopup
            isVisible={isVisible}
            showBookingForm={setIsVisible}
          />

          <h2 className={styles.contact}>or call us on +61 2 9953 3000</h2>

          <ul>
            <li>We can help you adopt best practices</li>
            <li>We can upskill you on the latest technologies</li>
            <li>We can add weight and leverage to the decisions that you already know need to happen</li>
          </ul>
          
          <h5>Share this page with your boss and get 50% OFF on your next SuperPowers ticket!</h5>
        </article>
      </section>
    </>
  );
};

export default Booking;
