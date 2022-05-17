import React, { useState } from "react";
import Button from "../../../button";
import * as styles from "./index.module.css";
import BookingFormPopup from "../../../bookingFormPopup";

const BusiBooking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  return (
    <>
      <section>
        <h5 className={styles.firstLine}>We are enterprise software consultants who solve complex business problems and reduce risk, using best practices and the latest technologies.</h5>
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
      </section>

    </>
  );
};

export default BusiBooking;
