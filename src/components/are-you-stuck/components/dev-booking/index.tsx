import React, { useState } from "react";
import Button from "../../../button";
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const DevBooking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <div>
        {/* rest of content component */}
        <ul className={styles.uList}>
          <li>We can help you adopt best practices</li>
          <li>We can upskill you on the latest technologies</li>
          <li>We can add weight and leverage to the decisions that you already know need to happen</li>
        </ul>
        
        <h5>Share this page with your boss and get 50% OFF on your next SuperPowers ticket!</h5>

        <Button onClick={showBookingForm}>Refer SSW Consulting Services</Button>
        <BookingFormPopup
          isVisible={isVisible}
          showBookingForm={setIsVisible}
        />

        <div>
          <iframe
            src="https://www.youtube.com/embed/esPfjax-G-I"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className={styles.videoContainer}
          />
        </div>

        <h5 className={styles.videoText}>Once your application has been built to run in a container, it can be easily hosted with any provider that supports containers, including Kubernetes and Azure Web Apps.</h5>
      </div>
    </>
  );
};

export default DevBooking;
