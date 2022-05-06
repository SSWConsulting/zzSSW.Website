import React, { useState } from "react";

import VideoBackground from "../../../videoBackground";
import InnerHTML from "../../../innerHTML";
import Button from "../../../button";
import ToggleButton from "../toggle-button"
// this is fine
import MVC_BACKGROUND from "../../../../assets/videos/MVC_background.mp4"
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const BusiBooking = ({ title, subTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  const [busiBooking, devBooking] = useState(true);
  const bookingToggle = () => devBooking(!busiBooking);

  return (
    <>
      <VideoBackground src={MVC_BACKGROUND} />
      <section className={styles.container}>
        <article className="main-container">
          <InnerHTML tagName="h1" __html={title} />

          <h2 className={styles.subTitle}>{subTitle}</h2>
          {/* make copy of Button from the above directory to use here */}
          <div>
            <Button onClick={""}>I'm a Business Person</Button>
            <Button onClick={""}>I'm a Developer</Button>
          </div>

          <h5>We are enterprise software consultants who solve complex business problems and reduce risk, using best practices and the latest technologies.</h5>
          <h5>See how SSW can help:</h5>

          <ul>
            <li>Build it right the 1st time</li>
            <li>Reduce risk through transparency, communication and fast feedback loops</li>
            <li>High value, quality &amp; range of expertise</li>
            <li>We are Microsoft Gold Certified partner, we have three MVPs and a Microsoft Regional Director</li>
          </ul>
          
          <Button onClick={showBookingForm}>Book a Free Initial Meeting</Button>
          <BookingFormPopup
            isVisible={isVisible}
            showBookingForm={setIsVisible}
          />

          <div>
            <iframe
              width="560" height="315"
              src="https://www.youtube.com/embed/wiFadV5SOPc"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              className="videoContainer"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default BusiBooking;
