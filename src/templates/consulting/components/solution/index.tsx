import React, { useState } from "react";
import BookingFormPopup from "../../../../components/bookingFormPopup";

import Button from "../../../../components/button";
import { container } from "./index.module.css";

const Solution = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const showBookingForm = () => setIsVisible(!isVisible);
  return (
    <>
      <section className={container}>
        <article className="main-container">
          <h1>
            Talk to us about your <span className="red">{project}</span> project
          </h1>

          <p>
            Jump on a call with one of our Account Managers to discuss how we
            can help you.
          </p>

          <Button onClick={showBookingForm} data-aos="fade-up">
            Book a FREE Initial Meeting
          </Button>
          <BookingFormPopup
            isVisible={isVisible}
            showBookingForm={setIsVisible}
            isShareForm={false}
          />

          <h2>or call us on +61 2 9953 3000</h2>
        </article>
      </section>
    </>
  );
};

export default Solution;
