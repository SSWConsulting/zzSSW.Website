import React from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import BookingFormFormik from "../bookingFormFormik";
import "./index.css";

const BookingFormPopup = ({ isVisible, showBookingForm, isShareForm }) => {
  return (
    <div>
      <Modal
        open={isVisible}
        onClose={showBookingForm}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "600px",
            background: "rgba(0,0,0,0)",
          },
        }}
        showCloseIcon={false}
        classNames={{
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={500}
      >
        <BookingFormFormik isShareForm={isShareForm} />
      </Modal>
    </div>
  );
};

export default BookingFormPopup;
