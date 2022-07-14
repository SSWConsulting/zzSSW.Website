import React, { useEffect, useState } from "react";
import Button from "../bookingButton";
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const BusinessBooking = ({ hasTransitionedIn, isMounted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <section
        className={
          (hasTransitionedIn && isMounted) || (!hasTransitionedIn && !isMounted)
            ? `${styles.headerContent}  ${
                hasTransitionedIn && `${styles.tn}`
              } ${isMounted && `${styles.visibleHeader}`}`
            : `${styles.headerContent} `
        }
      >
        <h5 className={styles.firstLine}>
          We are enterprise software consultants who solve complex business
          problems and reduce risk, using best practices and the latest
          technologies.
        </h5>
        <h5 className={styles.firstLine}> See how SSW can help:</h5>
        <ul>
          <li className={styles.theList}>Build it right the 1st time</li>
          <li className={styles.theList}>
            Reduce risk through transparency, communication and fast feedback
            loops
          </li>
          <li className={styles.theList}>
            High value, quality &amp; range of expertise
          </li>
          <li className={styles.lastItem}>
            We are Microsoft Gold Certified partner, we have three MVPs and a
            Microsoft Regional Director
          </li>
        </ul>

        <Button onClick={showBookingForm}>Book a Free Initial Meeting</Button>
        <BookingFormPopup
          isVisible={isVisible}
          showBookingForm={setIsVisible}
          isShareForm={false}
        />

        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wiFadV5SOPc"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className={styles.videoContainer}
          />
        </div>
      </section>
    </>
  );
};

export default BusinessBooking;
