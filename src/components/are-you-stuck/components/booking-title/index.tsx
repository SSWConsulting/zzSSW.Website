import React, { useState } from "react";
import InnerHTML from "../../../innerHTML";
import * as styles from "./index.module.css";


const DevBooking = ({ title, subTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);

  const [state, setState ] = useState(false);
  const bookingToggle = () => setState(!state);

  return (
    <>
      <div>
          {/* title + subtitle component */}
          <InnerHTML tagName="h1" __html={title} />

          <h2 className={styles.subTitle}>{subTitle}</h2>
      </div>

    </>
  );
};

export default DevBooking;
