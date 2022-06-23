import React, { useState } from "react";
import Button from "../bookingButton";
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const DeveloperBooking = ({ isBusinessTab, hasTransitionedIn, isMounted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <section
        className={
          (hasTransitionedIn && isMounted) || (!hasTransitionedIn && !isMounted)
            ? `headerContent  ${hasTransitionedIn && "tn"} ${
                isMounted && "visibleHeader"
              }`
            : `headerContent`
        }
      >
        {/* rest of content component */}
        <h5 className={styles.firstLine}></h5>
        <h5 className={styles.firstLine}> See how SSW can help:</h5>
        <ul className={styles.uList}>
          <li>We can help you adopt best practices</li>
          <li>We can upskill you on the latest technologies</li>
          <li>
            We can add weight and leverage to the decisions that you already
            know need to happen
          </li>
        </ul>

        <h5>
          Share this page with your boss and get 50% OFF on your next
          SuperPowers ticket!
        </h5>

        <Button onClick={showBookingForm}>Refer SSW Consulting Services</Button>
        <BookingFormPopup
          isVisible={isVisible}
          showBookingForm={setIsVisible}
          isShareForm={true}
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

        <h5 className={styles.videoText}>
          Once your application has been built to run in a container, it can be
          easily hosted with any provider that supports containers, including
          Kubernetes and Azure Web Apps.
        </h5>
      </section>
    </>
  );
};

export default DeveloperBooking;
