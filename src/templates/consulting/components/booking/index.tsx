import React, { useState } from "react";

import VideoBackground from "../../../../components/videoBackground";
import InnerHTML from "../../../../components/innerHTML";
import Button from "../../../../components/button";

import MVC_BACKGROUND from "../../../../assets/videos/MVC_background.mp4";
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../../components/bookingFormPopup";

const Booking = ({ title, subTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <section className={styles.container}>
        <article className="main-container">
          <InnerHTML tagName="h1" __html={title} />

          <h2 className={styles.subTitle}>{subTitle}</h2>

          <Button onClick={showBookingForm}>Book a FREE Initial Meeting</Button>
          <BookingFormPopup
            isVisible={isVisible}
            showBookingForm={setIsVisible}
            isShareForm="false"
          />

          <h2 className={styles.contact}>or call us on +61 2 9953 3000</h2>

          <div className={`${styles.arrowScroll} ${styles.bounce}`}>
            <a
              className={`${styles.fa} ${styles.faChevronDown}`}
              href="#more"
            ></a>
          </div>
        </article>
        <VideoBackground src={MVC_BACKGROUND} />
      </section>
    </>
  );
};

export default Booking;
