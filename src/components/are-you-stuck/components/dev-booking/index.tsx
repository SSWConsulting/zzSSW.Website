import React, { useState } from "react";

import VideoBackground from "../../../videoBackground";
import InnerHTML from "../../../innerHTML";
import Button from "../../../button";
import ToggleButton from "../toggle-button"
// this is fine
import MVC_BACKGROUND from "../../../../assets/videos/MVC_background.mp4"
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const DevBooking = ({ title, subTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  const [state, setState ] = useState(false);
  const bookingToggle = () => setState(!state);

  return (
    <>
      <VideoBackground src={MVC_BACKGROUND} />
      <section className={styles.container}>
        <article className="main-container">
          {/* title + subtitle component */}
          <InnerHTML tagName="h1" __html={title} />

          <h2 className={styles.subTitle}>{subTitle}</h2>
          {/* button component */}
          <div className={styles.toggleButtons}>
            {/* <ToggleButton onClick={bookingToggle}>I'm a Business Person</ToggleButton>
            <ToggleButton>I'm a Developer</ToggleButton> */}
          </div>

          {/* rest of content component */}
          <ul>
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

        </article>
      </section>
    </>
  );
};

export default DevBooking;